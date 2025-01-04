precision mediump float;
uniform float iTime;
uniform vec2 uResolution;
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
    // if(xd >=2.5){
    //     return vec3(0.);
    // }
    return bayered;
}


//----------

vec3 rgb2hsb( in vec3 c ){
    vec4 K = vec4(0.0, -1.0 / 3.0, 2.0 / 3.0, -1.0);
    vec4 p = mix(vec4(c.bg, K.wz),
                 vec4(c.gb, K.xy),
                 step(c.b, c.g));
    vec4 q = mix(vec4(p.xyw, c.r),
                 vec4(c.r, p.yzx),
                 step(p.x, c.r));
    float d = q.x - min(q.w, q.y);
    float e = 1.0e-10;
    return vec3(abs(q.z + (q.w - q.y) / (6.0 * d + e)),
                d / (q.x + e),
                q.x);
}

//  Function from Iñigo Quiles
//  https://www.shadertoy.com/view/MsS3Wc
vec3 hsb2rgb( in vec3 c ){
    vec3 rgb = clamp(abs(mod(c.x*6.0+vec3(0.0,4.0,2.0),
                             6.0)-3.0)-1.0,
                     0.0,
                     1.0 );
    rgb = rgb*rgb*(3.0-2.0*rgb);
    return c.z * mix(vec3(1.0), rgb, c.y);
}

float map(float value, float min1, float max1, float min2, float max2) {
  return min2 + (value - min1) * (max2 - min2) / (max1 - min1);
}

float sinTMap(float f,float min, float max){
    return map(sin(iTime*f),-1.,1.,min,max);
}

vec3 testvec() {
    vec2 newUv = vUv;

    // vec2 diff = vec2(5.,5.) - newUv*500.;
    vec2 diff = (vec2(0.5,0.5) - newUv)*800.;
    float vR = length(diff);
    float deg = atan(diff.y,diff.x);
    float vF = sin(max(sinTMap(0.5,-5.,12.5),1.0)*deg + iTime*5.);

    vec3 colorA = vec3(vF,(sin(vR*0.5)+1.0)*0.5,newUv.x*newUv.y - vF*0.75);

    vec3 colorAHSB = rgb2hsb(colorA);

    colorAHSB.g += sin(deg)*1.5;

    vec3 finalColor = hsb2rgb(colorAHSB);
    return finalColor;
}

vec3 testvec2() {
    vec2 newUv = vUv;
    vec3 vStepValue = vec3(map(sin(iTime*1.5),-1.0,1.0,0.0,1.0));
    vec3 color1 = vec3(newUv.yx,1.0);
    vec3 rgbColor1 = hsb2rgb(color1);
    float a = (sin((vStepValue.x+newUv.y) *2.0)+1.0)/2.0;

    float positiveSine = ((sin(iTime*5.0)+1.0)/2.0);
    vec3 finalColor = vec3(mod(rgbColor1.xy,positiveSine*5.0),smoothstep(0.25,0.75,a));
    return finalColor;
}
//---------------------------

void main() {
    // Map the pixel coordinates to a 0.0 - 1.0 range
    vec2 uv = gl_FragCoord.xy / uResolution;

    float j = (sin(iTime*9.3)*0.5 + 0.5) + 0.2;
    float vsml = 0.05*j;
    float AR = uResolution.x / uResolution.y;
    vec2 initpos = vec2(AR*0.8,0.5);
    vec2 a1pos = initpos+vec2(cos(iTime),sin(iTime))*0.025*j;

    float xd = sin(iTime*5.)*0.5 + 0.5;
    float r1 = 0.15 + xd*0.25;
    float r2 = 0.125 + xd*0.25;
    float a1 = smoothCircle(a1pos, r1, vsml);
    float a2 = smoothCircle(a1pos, r2, vsml);

    vec2 b1pos = initpos+vec2(cos(iTime + 0.666*PI),sin(iTime + 0.666*PI))*0.025*j;
    float b1 = smoothCircle(b1pos, r1, vsml);
    float b2 = smoothCircle(b1pos, r2, vsml);

    vec2 c1pos = initpos+vec2(cos(iTime+ 1.333*PI),sin(iTime+ 1.333*PI))*0.025*j;
    float c1 = smoothCircle(c1pos, r1, vsml);
    float c2 = smoothCircle(c1pos, r2, vsml);

    vec3 col = vec3(a1-a2,b1-b2,c1-c2);
    vec3 d = dithering(col);

    gl_FragColor = vec4(d,1.0);
}