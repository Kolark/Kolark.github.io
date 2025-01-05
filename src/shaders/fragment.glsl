precision mediump float;
uniform float iTime;
uniform vec2 uResolution;
uniform float scroll;
uniform float pagetransition;
varying vec2 vUv;
#define PI 3.141516

float bayer4x4(vec2 uv) {
    // 4x4 Bayer matrix values (normalized to [0, 1])
    float matrix[16];
    matrix[0]  = 0.0 / 16.0; matrix[1]  = 8.0 / 16.0; matrix[2]  = 2.0 / 16.0; matrix[3]  = 10.0 / 16.0;
    matrix[4]  = 12.0 / 16.0; matrix[5] = 4.0 / 16.0; matrix[6]  = 14.0 / 16.0; matrix[7]  = 6.0 / 16.0;
    matrix[8]  = 3.0 / 16.0; matrix[9]  = 11.0 / 16.0; matrix[10] = 1.0 / 16.0; matrix[11] = 9.0 / 16.0;
    matrix[12] = 15.0 / 16.0; matrix[13] = 7.0 / 16.0; matrix[14] = 13.0 / 16.0; matrix[15] = 5.0 / 16.0;

    // Get the position in the 4x4 Bayer matrix
    ivec2 pos = ivec2(mod(uv * 4.0, 4.0));
    int index = pos.y * 4 + pos.x;

    return matrix[index];
}


float smoothCircle(vec2 pos, float smc, float sml)
{
    vec2 uv = vUv;
    float AR = uResolution.x / uResolution.y;
    uv.x *= AR;
    return smoothstep(smc+sml,smc-sml , distance(uv, pos));
}

vec3 dithering(vec3 col){
    vec2 uvv = vUv;
    float AR = uResolution.x / uResolution.y;
    uvv.x *= AR;
    vec3 bayered = step(0.5,col + bayer4x4(uvv*64.)*ceil(col));
    float xd = dot(bayered,vec3(1.));
    return bayered;
}

vec3 replaceColor(vec3 inputColor, vec3 replaceBlack, vec3 replaceWhite) {

    float dd = dot(inputColor,vec3(1.0));
    if(dd>2.){
        return mix(inputColor, replaceWhite, (dd-2.5)/.5);
    }
    else if(dd<1.){
        return mix(replaceBlack,inputColor, dd/.5);
    }
    return inputColor;
}


void main() {
    float j = (sin(iTime*9.3)*0.5 + 0.5) + 0.2;
    float vsml = 0.05*j;
    float AR = uResolution.x / uResolution.y;
    vec2 initpos = vec2(AR*(0.8 - min(scroll*1.5,0.3)),0.5);
    float rotOffset = scroll*6.;
    vec2 a1pos = initpos+vec2(cos(iTime + rotOffset*PI),sin(iTime))*0.025*j;


    float xd = sin(iTime*5.)*0.5 + 0.5;
    // float r1 = (1.- min(scroll*5.,1.)) +  xd*0.25*0.;
    float r1 = 0.15+AR*0.75*(1.- pagetransition);
    float r2 = 0.125 + xd*0.25*0.;
    float a1 = smoothCircle(a1pos, r1, vsml);
    float a2 = smoothCircle(a1pos, r2, vsml);

    vec2 b1pos = initpos+vec2(cos(iTime + (rotOffset + 0.666)*PI),sin(iTime + (rotOffset + 0.666)*PI))*0.025*j;
    float b1 = smoothCircle(b1pos, r1, vsml);
    float b2 = smoothCircle(b1pos, r2, vsml);

    vec2 c1pos = initpos+vec2(cos(iTime+ (rotOffset + 1.333)*PI),sin(iTime+ (rotOffset + 1.333)*PI))*0.025*j;
    float c1 = smoothCircle(c1pos, r1, vsml);
    float c2 = smoothCircle(c1pos, r2, vsml);

    vec3 col = vec3(a1-a2,b1-b2,c1-c2);
    vec3 d = mix(col,dithering(col),1.-scroll);
    vec3 test = replaceColor(d, vec3(0.0156, 0.0431, 0.2784),vec3(0.9786, 0.9786, 0.7843));
    gl_FragColor = vec4(test,1.0);
}