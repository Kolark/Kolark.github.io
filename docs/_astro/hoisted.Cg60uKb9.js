import{g as rn}from"./contact.astro_astro_type_script_index_0_lang.9iYLTMbL.js";/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const $o="172",wu=0,ul=1,Cu=2,yc=1,Pu=2,$n=3,vi=0,ln=1,Kn=2,mi=0,pr=1,fl=2,hl=3,dl=4,Du=5,Di=100,Lu=101,Uu=102,Iu=103,Nu=104,Fu=200,Ou=201,Bu=202,zu=203,Za=204,ja=205,Hu=206,ku=207,Gu=208,Vu=209,Wu=210,Xu=211,Yu=212,qu=213,$u=214,Ja=0,Qa=1,eo=2,Mr=3,to=4,no=5,io=6,ro=7,bc=0,Ku=1,Zu=2,_i=0,ju=1,Ju=2,Qu=3,ef=4,tf=5,nf=6,rf=7,Ac=300,Sr=301,Er=302,so=303,ao=304,la=306,oo=1e3,Ui=1001,lo=1002,Nn=1003,sf=1004,ls=1005,Bn=1006,da=1007,Ii=1008,ni=1009,Rc=1010,wc=1011,Qr=1012,Ko=1013,Hi=1014,jn=1015,ns=1016,Zo=1017,jo=1018,Tr=1020,Cc=35902,Pc=1021,Dc=1022,In=1023,Lc=1024,Uc=1025,mr=1026,yr=1027,Ic=1028,Jo=1029,Nc=1030,Qo=1031,el=1033,Gs=33776,Vs=33777,Ws=33778,Xs=33779,co=35840,uo=35841,fo=35842,ho=35843,po=36196,mo=37492,_o=37496,go=37808,vo=37809,xo=37810,Mo=37811,So=37812,Eo=37813,To=37814,yo=37815,bo=37816,Ao=37817,Ro=37818,wo=37819,Co=37820,Po=37821,Ys=36492,Do=36494,Lo=36495,Fc=36283,Uo=36284,Io=36285,No=36286,af=3200,of=3201,lf=0,cf=1,hi="",En="srgb",br="srgb-linear",ea="linear",ft="srgb",qi=7680,pl=519,uf=512,ff=513,hf=514,Oc=515,df=516,pf=517,mf=518,_f=519,ml=35044,_l="300 es",Jn=2e3,ta=2001;class wr{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const r=n.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const Vt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],pa=Math.PI/180,Fo=180/Math.PI;function is(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Vt[i&255]+Vt[i>>8&255]+Vt[i>>16&255]+Vt[i>>24&255]+"-"+Vt[e&255]+Vt[e>>8&255]+"-"+Vt[e>>16&15|64]+Vt[e>>24&255]+"-"+Vt[t&63|128]+Vt[t>>8&255]+"-"+Vt[t>>16&255]+Vt[t>>24&255]+Vt[n&255]+Vt[n>>8&255]+Vt[n>>16&255]+Vt[n>>24&255]).toLowerCase()}function it(i,e,t){return Math.max(e,Math.min(t,i))}function gf(i,e){return(i%e+e)%e}function ma(i,e,t){return(1-t)*i+t*e}function Dr(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function an(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}class dt{constructor(e=0,t=0){dt.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=it(this.x,e.x,t.x),this.y=it(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=it(this.x,e,t),this.y=it(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(it(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(it(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*n-o*r+e.x,this.y=s*r+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ye{constructor(e,t,n,r,s,o,a,l,c){Ye.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,o,a,l,c)}set(e,t,n,r,s,o,a,l,c){const h=this.elements;return h[0]=e,h[1]=r,h[2]=a,h[3]=t,h[4]=s,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],p=n[7],d=n[2],f=n[5],v=n[8],M=r[0],m=r[3],u=r[6],C=r[1],y=r[4],S=r[7],I=r[2],P=r[5],b=r[8];return s[0]=o*M+a*C+l*I,s[3]=o*m+a*y+l*P,s[6]=o*u+a*S+l*b,s[1]=c*M+h*C+p*I,s[4]=c*m+h*y+p*P,s[7]=c*u+h*S+p*b,s[2]=d*M+f*C+v*I,s[5]=d*m+f*y+v*P,s[8]=d*u+f*S+v*b,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8];return t*o*h-t*a*c-n*s*h+n*a*l+r*s*c-r*o*l}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],p=h*o-a*c,d=a*l-h*s,f=c*s-o*l,v=t*p+n*d+r*f;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);const M=1/v;return e[0]=p*M,e[1]=(r*c-h*n)*M,e[2]=(a*n-r*o)*M,e[3]=d*M,e[4]=(h*t-r*l)*M,e[5]=(r*s-a*t)*M,e[6]=f*M,e[7]=(n*l-c*t)*M,e[8]=(o*t-n*s)*M,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(_a.makeScale(e,t)),this}rotate(e){return this.premultiply(_a.makeRotation(-e)),this}translate(e,t){return this.premultiply(_a.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<9;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const _a=new Ye;function Bc(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function na(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function vf(){const i=na("canvas");return i.style.display="block",i}const gl={};function cr(i){i in gl||(gl[i]=!0,console.warn(i))}function xf(i,e,t){return new Promise(function(n,r){function s(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:r();break;case i.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:n()}}setTimeout(s,t)})}function Mf(i){const e=i.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function Sf(i){const e=i.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const vl=new Ye().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),xl=new Ye().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Ef(){const i={enabled:!0,workingColorSpace:br,spaces:{},convert:function(r,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===ft&&(r.r=ei(r.r),r.g=ei(r.g),r.b=ei(r.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===ft&&(r.r=_r(r.r),r.g=_r(r.g),r.b=_r(r.b))),r},fromWorkingColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},toWorkingColorSpace:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===hi?ea:this.spaces[r].transfer},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,o){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[br]:{primaries:e,whitePoint:n,transfer:ea,toXYZ:vl,fromXYZ:xl,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:En},outputColorSpaceConfig:{drawingBufferColorSpace:En}},[En]:{primaries:e,whitePoint:n,transfer:ft,toXYZ:vl,fromXYZ:xl,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:En}}}),i}const ot=Ef();function ei(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function _r(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let $i;class Tf{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{$i===void 0&&($i=na("canvas")),$i.width=e.width,$i.height=e.height;const n=$i.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=$i}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=na("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const r=n.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=ei(s[o]/255)*255;return n.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(ei(t[n]/255)*255):t[n]=ei(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let yf=0;class zc{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:yf++}),this.uuid=is(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(ga(r[o].image)):s.push(ga(r[o]))}else s=ga(r);n.url=s}return t||(e.images[this.uuid]=n),n}}function ga(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Tf.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let bf=0;class cn extends wr{constructor(e=cn.DEFAULT_IMAGE,t=cn.DEFAULT_MAPPING,n=Ui,r=Ui,s=Bn,o=Ii,a=In,l=ni,c=cn.DEFAULT_ANISOTROPY,h=hi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:bf++}),this.uuid=is(),this.name="",this.source=new zc(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new dt(0,0),this.repeat=new dt(1,1),this.center=new dt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ye,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Ac)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case oo:e.x=e.x-Math.floor(e.x);break;case Ui:e.x=e.x<0?0:1;break;case lo:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case oo:e.y=e.y-Math.floor(e.y);break;case Ui:e.y=e.y<0?0:1;break;case lo:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}cn.DEFAULT_IMAGE=null;cn.DEFAULT_MAPPING=Ac;cn.DEFAULT_ANISOTROPY=1;class bt{constructor(e=0,t=0,n=0,r=1){bt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*n+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*n+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*n+o[11]*r+o[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,s;const l=e.elements,c=l[0],h=l[4],p=l[8],d=l[1],f=l[5],v=l[9],M=l[2],m=l[6],u=l[10];if(Math.abs(h-d)<.01&&Math.abs(p-M)<.01&&Math.abs(v-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(p+M)<.1&&Math.abs(v+m)<.1&&Math.abs(c+f+u-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const y=(c+1)/2,S=(f+1)/2,I=(u+1)/2,P=(h+d)/4,b=(p+M)/4,N=(v+m)/4;return y>S&&y>I?y<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(y),r=P/n,s=b/n):S>I?S<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(S),n=P/r,s=N/r):I<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(I),n=b/s,r=N/s),this.set(n,r,s,t),this}let C=Math.sqrt((m-v)*(m-v)+(p-M)*(p-M)+(d-h)*(d-h));return Math.abs(C)<.001&&(C=1),this.x=(m-v)/C,this.y=(p-M)/C,this.z=(d-h)/C,this.w=Math.acos((c+f+u-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=it(this.x,e.x,t.x),this.y=it(this.y,e.y,t.y),this.z=it(this.z,e.z,t.z),this.w=it(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=it(this.x,e,t),this.y=it(this.y,e,t),this.z=it(this.z,e,t),this.w=it(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(it(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Af extends wr{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new bt(0,0,e,t),this.scissorTest=!1,this.viewport=new bt(0,0,e,t);const r={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Bn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const s=new cn(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);s.flipY=!1,s.generateMipmaps=n.generateMipmaps,s.internalFormat=n.internalFormat,this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,r=e.textures.length;n<r;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const t=Object.assign({},e.texture.image);return this.texture.source=new zc(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ki extends Af{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Hc extends cn{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=Nn,this.minFilter=Nn,this.wrapR=Ui,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Rf extends cn{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=Nn,this.minFilter=Nn,this.wrapR=Ui,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class rs{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,s,o,a){let l=n[r+0],c=n[r+1],h=n[r+2],p=n[r+3];const d=s[o+0],f=s[o+1],v=s[o+2],M=s[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=p;return}if(a===1){e[t+0]=d,e[t+1]=f,e[t+2]=v,e[t+3]=M;return}if(p!==M||l!==d||c!==f||h!==v){let m=1-a;const u=l*d+c*f+h*v+p*M,C=u>=0?1:-1,y=1-u*u;if(y>Number.EPSILON){const I=Math.sqrt(y),P=Math.atan2(I,u*C);m=Math.sin(m*P)/I,a=Math.sin(a*P)/I}const S=a*C;if(l=l*m+d*S,c=c*m+f*S,h=h*m+v*S,p=p*m+M*S,m===1-a){const I=1/Math.sqrt(l*l+c*c+h*h+p*p);l*=I,c*=I,h*=I,p*=I}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=p}static multiplyQuaternionsFlat(e,t,n,r,s,o){const a=n[r],l=n[r+1],c=n[r+2],h=n[r+3],p=s[o],d=s[o+1],f=s[o+2],v=s[o+3];return e[t]=a*v+h*p+l*f-c*d,e[t+1]=l*v+h*d+c*p-a*f,e[t+2]=c*v+h*f+a*d-l*p,e[t+3]=h*v-a*p-l*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(r/2),p=a(s/2),d=l(n/2),f=l(r/2),v=l(s/2);switch(o){case"XYZ":this._x=d*h*p+c*f*v,this._y=c*f*p-d*h*v,this._z=c*h*v+d*f*p,this._w=c*h*p-d*f*v;break;case"YXZ":this._x=d*h*p+c*f*v,this._y=c*f*p-d*h*v,this._z=c*h*v-d*f*p,this._w=c*h*p+d*f*v;break;case"ZXY":this._x=d*h*p-c*f*v,this._y=c*f*p+d*h*v,this._z=c*h*v+d*f*p,this._w=c*h*p-d*f*v;break;case"ZYX":this._x=d*h*p-c*f*v,this._y=c*f*p+d*h*v,this._z=c*h*v-d*f*p,this._w=c*h*p+d*f*v;break;case"YZX":this._x=d*h*p+c*f*v,this._y=c*f*p+d*h*v,this._z=c*h*v-d*f*p,this._w=c*h*p-d*f*v;break;case"XZY":this._x=d*h*p-c*f*v,this._y=c*f*p-d*h*v,this._z=c*h*v+d*f*p,this._w=c*h*p+d*f*v;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],r=t[4],s=t[8],o=t[1],a=t[5],l=t[9],c=t[2],h=t[6],p=t[10],d=n+a+p;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-l)*f,this._y=(s-c)*f,this._z=(o-r)*f}else if(n>a&&n>p){const f=2*Math.sqrt(1+n-a-p);this._w=(h-l)/f,this._x=.25*f,this._y=(r+o)/f,this._z=(s+c)/f}else if(a>p){const f=2*Math.sqrt(1+a-n-p);this._w=(s-c)/f,this._x=(r+o)/f,this._y=.25*f,this._z=(l+h)/f}else{const f=2*Math.sqrt(1+p-n-a);this._w=(o-r)/f,this._x=(s+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(it(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,r=e._y,s=e._z,o=e._w,a=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+o*a+r*c-s*l,this._y=r*h+o*l+s*a-n*c,this._z=s*h+o*c+n*l-r*a,this._w=o*h-n*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+n*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const f=1-t;return this._w=f*o+t*this._w,this._x=f*n+t*this._x,this._y=f*r+t*this._y,this._z=f*s+t*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,a),p=Math.sin((1-t)*h)/c,d=Math.sin(t*h)/c;return this._w=o*p+this._w*d,this._x=n*p+this._x*d,this._y=r*p+this._y*d,this._z=s*p+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class W{constructor(e=0,t=0,n=0){W.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Ml.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Ml.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*r,this.y=s[1]*t+s[4]*n+s[7]*r,this.z=s[2]*t+s[5]*n+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*n+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*n+s[10]*r+s[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*r-a*n),h=2*(a*t-s*r),p=2*(s*n-o*t);return this.x=t+l*c+o*p-a*h,this.y=n+l*h+a*c-s*p,this.z=r+l*p+s*h-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*r,this.y=s[1]*t+s[5]*n+s[9]*r,this.z=s[2]*t+s[6]*n+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=it(this.x,e.x,t.x),this.y=it(this.y,e.y,t.y),this.z=it(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=it(this.x,e,t),this.y=it(this.y,e,t),this.z=it(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(it(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,r=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=r*l-s*a,this.y=s*o-n*l,this.z=n*a-r*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return va.copy(this).projectOnVector(e),this.sub(va)}reflect(e){return this.sub(va.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(it(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const va=new W,Ml=new rs;class ss{constructor(e=new W(1/0,1/0,1/0),t=new W(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(wn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(wn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=wn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,wn):wn.fromBufferAttribute(s,o),wn.applyMatrix4(e.matrixWorld),this.expandByPoint(wn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),cs.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),cs.copy(n.boundingBox)),cs.applyMatrix4(e.matrixWorld),this.union(cs)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,wn),wn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Lr),us.subVectors(this.max,Lr),Ki.subVectors(e.a,Lr),Zi.subVectors(e.b,Lr),ji.subVectors(e.c,Lr),si.subVectors(Zi,Ki),ai.subVectors(ji,Zi),Si.subVectors(Ki,ji);let t=[0,-si.z,si.y,0,-ai.z,ai.y,0,-Si.z,Si.y,si.z,0,-si.x,ai.z,0,-ai.x,Si.z,0,-Si.x,-si.y,si.x,0,-ai.y,ai.x,0,-Si.y,Si.x,0];return!xa(t,Ki,Zi,ji,us)||(t=[1,0,0,0,1,0,0,0,1],!xa(t,Ki,Zi,ji,us))?!1:(fs.crossVectors(si,ai),t=[fs.x,fs.y,fs.z],xa(t,Ki,Zi,ji,us))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,wn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(wn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Vn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Vn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Vn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Vn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Vn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Vn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Vn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Vn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Vn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Vn=[new W,new W,new W,new W,new W,new W,new W,new W],wn=new W,cs=new ss,Ki=new W,Zi=new W,ji=new W,si=new W,ai=new W,Si=new W,Lr=new W,us=new W,fs=new W,Ei=new W;function xa(i,e,t,n,r){for(let s=0,o=i.length-3;s<=o;s+=3){Ei.fromArray(i,s);const a=r.x*Math.abs(Ei.x)+r.y*Math.abs(Ei.y)+r.z*Math.abs(Ei.z),l=e.dot(Ei),c=t.dot(Ei),h=n.dot(Ei);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}const wf=new ss,Ur=new W,Ma=new W;class tl{constructor(e=new W,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):wf.setFromPoints(e).getCenter(n);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ur.subVectors(e,this.center);const t=Ur.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),r=(n-this.radius)*.5;this.center.addScaledVector(Ur,r/n),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ma.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ur.copy(e.center).add(Ma)),this.expandByPoint(Ur.copy(e.center).sub(Ma))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Wn=new W,Sa=new W,hs=new W,oi=new W,Ea=new W,ds=new W,Ta=new W;class Cf{constructor(e=new W,t=new W(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Wn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Wn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Wn.copy(this.origin).addScaledVector(this.direction,t),Wn.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){Sa.copy(e).add(t).multiplyScalar(.5),hs.copy(t).sub(e).normalize(),oi.copy(this.origin).sub(Sa);const s=e.distanceTo(t)*.5,o=-this.direction.dot(hs),a=oi.dot(this.direction),l=-oi.dot(hs),c=oi.lengthSq(),h=Math.abs(1-o*o);let p,d,f,v;if(h>0)if(p=o*l-a,d=o*a-l,v=s*h,p>=0)if(d>=-v)if(d<=v){const M=1/h;p*=M,d*=M,f=p*(p+o*d+2*a)+d*(o*p+d+2*l)+c}else d=s,p=Math.max(0,-(o*d+a)),f=-p*p+d*(d+2*l)+c;else d=-s,p=Math.max(0,-(o*d+a)),f=-p*p+d*(d+2*l)+c;else d<=-v?(p=Math.max(0,-(-o*s+a)),d=p>0?-s:Math.min(Math.max(-s,-l),s),f=-p*p+d*(d+2*l)+c):d<=v?(p=0,d=Math.min(Math.max(-s,-l),s),f=d*(d+2*l)+c):(p=Math.max(0,-(o*s+a)),d=p>0?s:Math.min(Math.max(-s,-l),s),f=-p*p+d*(d+2*l)+c);else d=o>0?-s:s,p=Math.max(0,-(o*d+a)),f=-p*p+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,p),r&&r.copy(Sa).addScaledVector(hs,d),f}intersectSphere(e,t){Wn.subVectors(e.center,this.origin);const n=Wn.dot(this.direction),r=Wn.dot(Wn)-n*n,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,s,o,a,l;const c=1/this.direction.x,h=1/this.direction.y,p=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,r=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,r=(e.min.x-d.x)*c),h>=0?(s=(e.min.y-d.y)*h,o=(e.max.y-d.y)*h):(s=(e.max.y-d.y)*h,o=(e.min.y-d.y)*h),n>o||s>r||((s>n||isNaN(n))&&(n=s),(o<r||isNaN(r))&&(r=o),p>=0?(a=(e.min.z-d.z)*p,l=(e.max.z-d.z)*p):(a=(e.max.z-d.z)*p,l=(e.min.z-d.z)*p),n>l||a>r)||((a>n||n!==n)&&(n=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,Wn)!==null}intersectTriangle(e,t,n,r,s){Ea.subVectors(t,e),ds.subVectors(n,e),Ta.crossVectors(Ea,ds);let o=this.direction.dot(Ta),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;oi.subVectors(this.origin,e);const l=a*this.direction.dot(ds.crossVectors(oi,ds));if(l<0)return null;const c=a*this.direction.dot(Ea.cross(oi));if(c<0||l+c>o)return null;const h=-a*oi.dot(Ta);return h<0?null:this.at(h/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Pt{constructor(e,t,n,r,s,o,a,l,c,h,p,d,f,v,M,m){Pt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,o,a,l,c,h,p,d,f,v,M,m)}set(e,t,n,r,s,o,a,l,c,h,p,d,f,v,M,m){const u=this.elements;return u[0]=e,u[4]=t,u[8]=n,u[12]=r,u[1]=s,u[5]=o,u[9]=a,u[13]=l,u[2]=c,u[6]=h,u[10]=p,u[14]=d,u[3]=f,u[7]=v,u[11]=M,u[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Pt().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,r=1/Ji.setFromMatrixColumn(e,0).length(),s=1/Ji.setFromMatrixColumn(e,1).length(),o=1/Ji.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,r=e.y,s=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(r),c=Math.sin(r),h=Math.cos(s),p=Math.sin(s);if(e.order==="XYZ"){const d=o*h,f=o*p,v=a*h,M=a*p;t[0]=l*h,t[4]=-l*p,t[8]=c,t[1]=f+v*c,t[5]=d-M*c,t[9]=-a*l,t[2]=M-d*c,t[6]=v+f*c,t[10]=o*l}else if(e.order==="YXZ"){const d=l*h,f=l*p,v=c*h,M=c*p;t[0]=d+M*a,t[4]=v*a-f,t[8]=o*c,t[1]=o*p,t[5]=o*h,t[9]=-a,t[2]=f*a-v,t[6]=M+d*a,t[10]=o*l}else if(e.order==="ZXY"){const d=l*h,f=l*p,v=c*h,M=c*p;t[0]=d-M*a,t[4]=-o*p,t[8]=v+f*a,t[1]=f+v*a,t[5]=o*h,t[9]=M-d*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const d=o*h,f=o*p,v=a*h,M=a*p;t[0]=l*h,t[4]=v*c-f,t[8]=d*c+M,t[1]=l*p,t[5]=M*c+d,t[9]=f*c-v,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const d=o*l,f=o*c,v=a*l,M=a*c;t[0]=l*h,t[4]=M-d*p,t[8]=v*p+f,t[1]=p,t[5]=o*h,t[9]=-a*h,t[2]=-c*h,t[6]=f*p+v,t[10]=d-M*p}else if(e.order==="XZY"){const d=o*l,f=o*c,v=a*l,M=a*c;t[0]=l*h,t[4]=-p,t[8]=c*h,t[1]=d*p+M,t[5]=o*h,t[9]=f*p-v,t[2]=v*p-f,t[6]=a*h,t[10]=M*p+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Pf,e,Df)}lookAt(e,t,n){const r=this.elements;return hn.subVectors(e,t),hn.lengthSq()===0&&(hn.z=1),hn.normalize(),li.crossVectors(n,hn),li.lengthSq()===0&&(Math.abs(n.z)===1?hn.x+=1e-4:hn.z+=1e-4,hn.normalize(),li.crossVectors(n,hn)),li.normalize(),ps.crossVectors(hn,li),r[0]=li.x,r[4]=ps.x,r[8]=hn.x,r[1]=li.y,r[5]=ps.y,r[9]=hn.y,r[2]=li.z,r[6]=ps.z,r[10]=hn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],p=n[5],d=n[9],f=n[13],v=n[2],M=n[6],m=n[10],u=n[14],C=n[3],y=n[7],S=n[11],I=n[15],P=r[0],b=r[4],N=r[8],T=r[12],_=r[1],D=r[5],B=r[9],G=r[13],X=r[2],Q=r[6],Y=r[10],J=r[14],k=r[3],te=r[7],A=r[11],_e=r[15];return s[0]=o*P+a*_+l*X+c*k,s[4]=o*b+a*D+l*Q+c*te,s[8]=o*N+a*B+l*Y+c*A,s[12]=o*T+a*G+l*J+c*_e,s[1]=h*P+p*_+d*X+f*k,s[5]=h*b+p*D+d*Q+f*te,s[9]=h*N+p*B+d*Y+f*A,s[13]=h*T+p*G+d*J+f*_e,s[2]=v*P+M*_+m*X+u*k,s[6]=v*b+M*D+m*Q+u*te,s[10]=v*N+M*B+m*Y+u*A,s[14]=v*T+M*G+m*J+u*_e,s[3]=C*P+y*_+S*X+I*k,s[7]=C*b+y*D+S*Q+I*te,s[11]=C*N+y*B+S*Y+I*A,s[15]=C*T+y*G+S*J+I*_e,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],h=e[2],p=e[6],d=e[10],f=e[14],v=e[3],M=e[7],m=e[11],u=e[15];return v*(+s*l*p-r*c*p-s*a*d+n*c*d+r*a*f-n*l*f)+M*(+t*l*f-t*c*d+s*o*d-r*o*f+r*c*h-s*l*h)+m*(+t*c*p-t*a*f-s*o*p+n*o*f+s*a*h-n*c*h)+u*(-r*a*h-t*l*p+t*a*d+r*o*p-n*o*d+n*l*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],p=e[9],d=e[10],f=e[11],v=e[12],M=e[13],m=e[14],u=e[15],C=p*m*c-M*d*c+M*l*f-a*m*f-p*l*u+a*d*u,y=v*d*c-h*m*c-v*l*f+o*m*f+h*l*u-o*d*u,S=h*M*c-v*p*c+v*a*f-o*M*f-h*a*u+o*p*u,I=v*p*l-h*M*l-v*a*d+o*M*d+h*a*m-o*p*m,P=t*C+n*y+r*S+s*I;if(P===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const b=1/P;return e[0]=C*b,e[1]=(M*d*s-p*m*s-M*r*f+n*m*f+p*r*u-n*d*u)*b,e[2]=(a*m*s-M*l*s+M*r*c-n*m*c-a*r*u+n*l*u)*b,e[3]=(p*l*s-a*d*s-p*r*c+n*d*c+a*r*f-n*l*f)*b,e[4]=y*b,e[5]=(h*m*s-v*d*s+v*r*f-t*m*f-h*r*u+t*d*u)*b,e[6]=(v*l*s-o*m*s-v*r*c+t*m*c+o*r*u-t*l*u)*b,e[7]=(o*d*s-h*l*s+h*r*c-t*d*c-o*r*f+t*l*f)*b,e[8]=S*b,e[9]=(v*p*s-h*M*s-v*n*f+t*M*f+h*n*u-t*p*u)*b,e[10]=(o*M*s-v*a*s+v*n*c-t*M*c-o*n*u+t*a*u)*b,e[11]=(h*a*s-o*p*s-h*n*c+t*p*c+o*n*f-t*a*f)*b,e[12]=I*b,e[13]=(h*M*r-v*p*r+v*n*d-t*M*d-h*n*m+t*p*m)*b,e[14]=(v*a*r-o*M*r-v*n*l+t*M*l+o*n*m-t*a*m)*b,e[15]=(o*p*r-h*a*r+h*n*l-t*p*l-o*n*d+t*a*d)*b,this}scale(e){const t=this.elements,n=e.x,r=e.y,s=e.z;return t[0]*=n,t[4]*=r,t[8]*=s,t[1]*=n,t[5]*=r,t[9]*=s,t[2]*=n,t[6]*=r,t[10]*=s,t[3]*=n,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),r=Math.sin(t),s=1-n,o=e.x,a=e.y,l=e.z,c=s*o,h=s*a;return this.set(c*o+n,c*a-r*l,c*l+r*a,0,c*a+r*l,h*a+n,h*l-r*o,0,c*l-r*a,h*l+r*o,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,s,o){return this.set(1,n,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){const r=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,c=s+s,h=o+o,p=a+a,d=s*c,f=s*h,v=s*p,M=o*h,m=o*p,u=a*p,C=l*c,y=l*h,S=l*p,I=n.x,P=n.y,b=n.z;return r[0]=(1-(M+u))*I,r[1]=(f+S)*I,r[2]=(v-y)*I,r[3]=0,r[4]=(f-S)*P,r[5]=(1-(d+u))*P,r[6]=(m+C)*P,r[7]=0,r[8]=(v+y)*b,r[9]=(m-C)*b,r[10]=(1-(d+M))*b,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){const r=this.elements;let s=Ji.set(r[0],r[1],r[2]).length();const o=Ji.set(r[4],r[5],r[6]).length(),a=Ji.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Cn.copy(this);const c=1/s,h=1/o,p=1/a;return Cn.elements[0]*=c,Cn.elements[1]*=c,Cn.elements[2]*=c,Cn.elements[4]*=h,Cn.elements[5]*=h,Cn.elements[6]*=h,Cn.elements[8]*=p,Cn.elements[9]*=p,Cn.elements[10]*=p,t.setFromRotationMatrix(Cn),n.x=s,n.y=o,n.z=a,this}makePerspective(e,t,n,r,s,o,a=Jn){const l=this.elements,c=2*s/(t-e),h=2*s/(n-r),p=(t+e)/(t-e),d=(n+r)/(n-r);let f,v;if(a===Jn)f=-(o+s)/(o-s),v=-2*o*s/(o-s);else if(a===ta)f=-o/(o-s),v=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=p,l[12]=0,l[1]=0,l[5]=h,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=f,l[14]=v,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,r,s,o,a=Jn){const l=this.elements,c=1/(t-e),h=1/(n-r),p=1/(o-s),d=(t+e)*c,f=(n+r)*h;let v,M;if(a===Jn)v=(o+s)*p,M=-2*p;else if(a===ta)v=s*p,M=-1*p;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-f,l[2]=0,l[6]=0,l[10]=M,l[14]=-v,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<16;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Ji=new W,Cn=new Pt,Pf=new W(0,0,0),Df=new W(1,1,1),li=new W,ps=new W,hn=new W,Sl=new Pt,El=new rs;class ii{constructor(e=0,t=0,n=0,r=ii.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],h=r[9],p=r[2],d=r[6],f=r[10];switch(t){case"XYZ":this._y=Math.asin(it(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-it(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-p,s),this._z=0);break;case"ZXY":this._x=Math.asin(it(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-p,f),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-it(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(it(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-p,s)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-it(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Sl.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Sl,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return El.setFromEuler(this),this.setFromQuaternion(El,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ii.DEFAULT_ORDER="XYZ";class kc{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Lf=0;const Tl=new W,Qi=new rs,Xn=new Pt,ms=new W,Ir=new W,Uf=new W,If=new rs,yl=new W(1,0,0),bl=new W(0,1,0),Al=new W(0,0,1),Rl={type:"added"},Nf={type:"removed"},er={type:"childadded",child:null},ya={type:"childremoved",child:null};class gn extends wr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Lf++}),this.uuid=is(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=gn.DEFAULT_UP.clone();const e=new W,t=new ii,n=new rs,r=new W(1,1,1);function s(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Pt},normalMatrix:{value:new Ye}}),this.matrix=new Pt,this.matrixWorld=new Pt,this.matrixAutoUpdate=gn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=gn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new kc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Qi.setFromAxisAngle(e,t),this.quaternion.multiply(Qi),this}rotateOnWorldAxis(e,t){return Qi.setFromAxisAngle(e,t),this.quaternion.premultiply(Qi),this}rotateX(e){return this.rotateOnAxis(yl,e)}rotateY(e){return this.rotateOnAxis(bl,e)}rotateZ(e){return this.rotateOnAxis(Al,e)}translateOnAxis(e,t){return Tl.copy(e).applyQuaternion(this.quaternion),this.position.add(Tl.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(yl,e)}translateY(e){return this.translateOnAxis(bl,e)}translateZ(e){return this.translateOnAxis(Al,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Xn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?ms.copy(e):ms.set(e,t,n);const r=this.parent;this.updateWorldMatrix(!0,!1),Ir.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Xn.lookAt(Ir,ms,this.up):Xn.lookAt(ms,Ir,this.up),this.quaternion.setFromRotationMatrix(Xn),r&&(Xn.extractRotation(r.matrixWorld),Qi.setFromRotationMatrix(Xn),this.quaternion.premultiply(Qi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Rl),er.child=e,this.dispatchEvent(er),er.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Nf),ya.child=e,this.dispatchEvent(ya),ya.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Xn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Xn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Xn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Rl),er.child=e,this.dispatchEvent(er),er.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ir,e,Uf),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ir,If,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const p=l[c];s(e.shapes,p)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),h=o(e.images),p=o(e.shapes),d=o(e.skeletons),f=o(e.animations),v=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),p.length>0&&(n.shapes=p),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),v.length>0&&(n.nodes=v)}return n.object=r,n;function o(a){const l=[];for(const c in a){const h=a[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const r=e.children[n];this.add(r.clone())}return this}}gn.DEFAULT_UP=new W(0,1,0);gn.DEFAULT_MATRIX_AUTO_UPDATE=!0;gn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Pn=new W,Yn=new W,ba=new W,qn=new W,tr=new W,nr=new W,wl=new W,Aa=new W,Ra=new W,wa=new W,Ca=new bt,Pa=new bt,Da=new bt;class Un{constructor(e=new W,t=new W,n=new W){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),Pn.subVectors(e,t),r.cross(Pn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,n,r,s){Pn.subVectors(r,t),Yn.subVectors(n,t),ba.subVectors(e,t);const o=Pn.dot(Pn),a=Pn.dot(Yn),l=Pn.dot(ba),c=Yn.dot(Yn),h=Yn.dot(ba),p=o*c-a*a;if(p===0)return s.set(0,0,0),null;const d=1/p,f=(c*l-a*h)*d,v=(o*h-a*l)*d;return s.set(1-f-v,v,f)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,qn)===null?!1:qn.x>=0&&qn.y>=0&&qn.x+qn.y<=1}static getInterpolation(e,t,n,r,s,o,a,l){return this.getBarycoord(e,t,n,r,qn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,qn.x),l.addScaledVector(o,qn.y),l.addScaledVector(a,qn.z),l)}static getInterpolatedAttribute(e,t,n,r,s,o){return Ca.setScalar(0),Pa.setScalar(0),Da.setScalar(0),Ca.fromBufferAttribute(e,t),Pa.fromBufferAttribute(e,n),Da.fromBufferAttribute(e,r),o.setScalar(0),o.addScaledVector(Ca,s.x),o.addScaledVector(Pa,s.y),o.addScaledVector(Da,s.z),o}static isFrontFacing(e,t,n,r){return Pn.subVectors(n,t),Yn.subVectors(e,t),Pn.cross(Yn).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Pn.subVectors(this.c,this.b),Yn.subVectors(this.a,this.b),Pn.cross(Yn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Un.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Un.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,r,s){return Un.getInterpolation(e,this.a,this.b,this.c,t,n,r,s)}containsPoint(e){return Un.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Un.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,r=this.b,s=this.c;let o,a;tr.subVectors(r,n),nr.subVectors(s,n),Aa.subVectors(e,n);const l=tr.dot(Aa),c=nr.dot(Aa);if(l<=0&&c<=0)return t.copy(n);Ra.subVectors(e,r);const h=tr.dot(Ra),p=nr.dot(Ra);if(h>=0&&p<=h)return t.copy(r);const d=l*p-h*c;if(d<=0&&l>=0&&h<=0)return o=l/(l-h),t.copy(n).addScaledVector(tr,o);wa.subVectors(e,s);const f=tr.dot(wa),v=nr.dot(wa);if(v>=0&&f<=v)return t.copy(s);const M=f*c-l*v;if(M<=0&&c>=0&&v<=0)return a=c/(c-v),t.copy(n).addScaledVector(nr,a);const m=h*v-f*p;if(m<=0&&p-h>=0&&f-v>=0)return wl.subVectors(s,r),a=(p-h)/(p-h+(f-v)),t.copy(r).addScaledVector(wl,a);const u=1/(m+M+d);return o=M*u,a=d*u,t.copy(n).addScaledVector(tr,o).addScaledVector(nr,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Gc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ci={h:0,s:0,l:0},_s={h:0,s:0,l:0};function La(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class ht{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=En){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ot.toWorkingColorSpace(this,t),this}setRGB(e,t,n,r=ot.workingColorSpace){return this.r=e,this.g=t,this.b=n,ot.toWorkingColorSpace(this,r),this}setHSL(e,t,n,r=ot.workingColorSpace){if(e=gf(e,1),t=it(t,0,1),n=it(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,o=2*n-s;this.r=La(o,s,e+1/3),this.g=La(o,s,e),this.b=La(o,s,e-1/3)}return ot.toWorkingColorSpace(this,r),this}setStyle(e,t=En){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=En){const n=Gc[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ei(e.r),this.g=ei(e.g),this.b=ei(e.b),this}copyLinearToSRGB(e){return this.r=_r(e.r),this.g=_r(e.g),this.b=_r(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=En){return ot.fromWorkingColorSpace(Wt.copy(this),e),Math.round(it(Wt.r*255,0,255))*65536+Math.round(it(Wt.g*255,0,255))*256+Math.round(it(Wt.b*255,0,255))}getHexString(e=En){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=ot.workingColorSpace){ot.fromWorkingColorSpace(Wt.copy(this),t);const n=Wt.r,r=Wt.g,s=Wt.b,o=Math.max(n,r,s),a=Math.min(n,r,s);let l,c;const h=(a+o)/2;if(a===o)l=0,c=0;else{const p=o-a;switch(c=h<=.5?p/(o+a):p/(2-o-a),o){case n:l=(r-s)/p+(r<s?6:0);break;case r:l=(s-n)/p+2;break;case s:l=(n-r)/p+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=ot.workingColorSpace){return ot.fromWorkingColorSpace(Wt.copy(this),t),e.r=Wt.r,e.g=Wt.g,e.b=Wt.b,e}getStyle(e=En){ot.fromWorkingColorSpace(Wt.copy(this),e);const t=Wt.r,n=Wt.g,r=Wt.b;return e!==En?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(e,t,n){return this.getHSL(ci),this.setHSL(ci.h+e,ci.s+t,ci.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(ci),e.getHSL(_s);const n=ma(ci.h,_s.h,t),r=ma(ci.s,_s.s,t),s=ma(ci.l,_s.l,t);return this.setHSL(n,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*r,this.g=s[1]*t+s[4]*n+s[7]*r,this.b=s[2]*t+s[5]*n+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Wt=new ht;ht.NAMES=Gc;let Ff=0;class ca extends wr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Ff++}),this.uuid=is(),this.name="",this.type="Material",this.blending=pr,this.side=vi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Za,this.blendDst=ja,this.blendEquation=Di,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ht(0,0,0),this.blendAlpha=0,this.depthFunc=Mr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=pl,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=qi,this.stencilZFail=qi,this.stencilZPass=qi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==pr&&(n.blending=this.blending),this.side!==vi&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Za&&(n.blendSrc=this.blendSrc),this.blendDst!==ja&&(n.blendDst=this.blendDst),this.blendEquation!==Di&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Mr&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==pl&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==qi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==qi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==qi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(t){const s=r(e.textures),o=r(e.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const r=t.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Vc extends ca{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ht(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ii,this.combine=bc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const wt=new W,gs=new dt;class kn{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=ml,this.updateRanges=[],this.gpuType=jn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)gs.fromBufferAttribute(this,t),gs.applyMatrix3(e),this.setXY(t,gs.x,gs.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)wt.fromBufferAttribute(this,t),wt.applyMatrix3(e),this.setXYZ(t,wt.x,wt.y,wt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)wt.fromBufferAttribute(this,t),wt.applyMatrix4(e),this.setXYZ(t,wt.x,wt.y,wt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)wt.fromBufferAttribute(this,t),wt.applyNormalMatrix(e),this.setXYZ(t,wt.x,wt.y,wt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)wt.fromBufferAttribute(this,t),wt.transformDirection(e),this.setXYZ(t,wt.x,wt.y,wt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Dr(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=an(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Dr(t,this.array)),t}setX(e,t){return this.normalized&&(t=an(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Dr(t,this.array)),t}setY(e,t){return this.normalized&&(t=an(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Dr(t,this.array)),t}setZ(e,t){return this.normalized&&(t=an(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Dr(t,this.array)),t}setW(e,t){return this.normalized&&(t=an(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=an(t,this.array),n=an(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=an(t,this.array),n=an(n,this.array),r=an(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e*=this.itemSize,this.normalized&&(t=an(t,this.array),n=an(n,this.array),r=an(r,this.array),s=an(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==ml&&(e.usage=this.usage),e}}class Wc extends kn{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Xc extends kn{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Fi extends kn{constructor(e,t,n){super(new Float32Array(e),t,n)}}let Of=0;const Sn=new Pt,Ua=new gn,ir=new W,dn=new ss,Nr=new ss,Bt=new W;class Xi extends wr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Of++}),this.uuid=is(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Bc(e)?Xc:Wc)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new Ye().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Sn.makeRotationFromQuaternion(e),this.applyMatrix4(Sn),this}rotateX(e){return Sn.makeRotationX(e),this.applyMatrix4(Sn),this}rotateY(e){return Sn.makeRotationY(e),this.applyMatrix4(Sn),this}rotateZ(e){return Sn.makeRotationZ(e),this.applyMatrix4(Sn),this}translate(e,t,n){return Sn.makeTranslation(e,t,n),this.applyMatrix4(Sn),this}scale(e,t,n){return Sn.makeScale(e,t,n),this.applyMatrix4(Sn),this}lookAt(e){return Ua.lookAt(e),Ua.updateMatrix(),this.applyMatrix4(Ua.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ir).negate(),this.translate(ir.x,ir.y,ir.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let r=0,s=e.length;r<s;r++){const o=e[r];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Fi(n,3))}else{const n=Math.min(e.length,t.count);for(let r=0;r<n;r++){const s=e[r];t.setXYZ(r,s.x,s.y,s.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ss);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new W(-1/0,-1/0,-1/0),new W(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,r=t.length;n<r;n++){const s=t[n];dn.setFromBufferAttribute(s),this.morphTargetsRelative?(Bt.addVectors(this.boundingBox.min,dn.min),this.boundingBox.expandByPoint(Bt),Bt.addVectors(this.boundingBox.max,dn.max),this.boundingBox.expandByPoint(Bt)):(this.boundingBox.expandByPoint(dn.min),this.boundingBox.expandByPoint(dn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new tl);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new W,1/0);return}if(e){const n=this.boundingSphere.center;if(dn.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];Nr.setFromBufferAttribute(a),this.morphTargetsRelative?(Bt.addVectors(dn.min,Nr.min),dn.expandByPoint(Bt),Bt.addVectors(dn.max,Nr.max),dn.expandByPoint(Bt)):(dn.expandByPoint(Nr.min),dn.expandByPoint(Nr.max))}dn.getCenter(n);let r=0;for(let s=0,o=e.count;s<o;s++)Bt.fromBufferAttribute(e,s),r=Math.max(r,n.distanceToSquared(Bt));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)Bt.fromBufferAttribute(a,c),l&&(ir.fromBufferAttribute(e,c),Bt.add(ir)),r=Math.max(r,n.distanceToSquared(Bt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new kn(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let N=0;N<n.count;N++)a[N]=new W,l[N]=new W;const c=new W,h=new W,p=new W,d=new dt,f=new dt,v=new dt,M=new W,m=new W;function u(N,T,_){c.fromBufferAttribute(n,N),h.fromBufferAttribute(n,T),p.fromBufferAttribute(n,_),d.fromBufferAttribute(s,N),f.fromBufferAttribute(s,T),v.fromBufferAttribute(s,_),h.sub(c),p.sub(c),f.sub(d),v.sub(d);const D=1/(f.x*v.y-v.x*f.y);isFinite(D)&&(M.copy(h).multiplyScalar(v.y).addScaledVector(p,-f.y).multiplyScalar(D),m.copy(p).multiplyScalar(f.x).addScaledVector(h,-v.x).multiplyScalar(D),a[N].add(M),a[T].add(M),a[_].add(M),l[N].add(m),l[T].add(m),l[_].add(m))}let C=this.groups;C.length===0&&(C=[{start:0,count:e.count}]);for(let N=0,T=C.length;N<T;++N){const _=C[N],D=_.start,B=_.count;for(let G=D,X=D+B;G<X;G+=3)u(e.getX(G+0),e.getX(G+1),e.getX(G+2))}const y=new W,S=new W,I=new W,P=new W;function b(N){I.fromBufferAttribute(r,N),P.copy(I);const T=a[N];y.copy(T),y.sub(I.multiplyScalar(I.dot(T))).normalize(),S.crossVectors(P,T);const D=S.dot(l[N])<0?-1:1;o.setXYZW(N,y.x,y.y,y.z,D)}for(let N=0,T=C.length;N<T;++N){const _=C[N],D=_.start,B=_.count;for(let G=D,X=D+B;G<X;G+=3)b(e.getX(G+0)),b(e.getX(G+1)),b(e.getX(G+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new kn(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);const r=new W,s=new W,o=new W,a=new W,l=new W,c=new W,h=new W,p=new W;if(e)for(let d=0,f=e.count;d<f;d+=3){const v=e.getX(d+0),M=e.getX(d+1),m=e.getX(d+2);r.fromBufferAttribute(t,v),s.fromBufferAttribute(t,M),o.fromBufferAttribute(t,m),h.subVectors(o,s),p.subVectors(r,s),h.cross(p),a.fromBufferAttribute(n,v),l.fromBufferAttribute(n,M),c.fromBufferAttribute(n,m),a.add(h),l.add(h),c.add(h),n.setXYZ(v,a.x,a.y,a.z),n.setXYZ(M,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,f=t.count;d<f;d+=3)r.fromBufferAttribute(t,d+0),s.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),h.subVectors(o,s),p.subVectors(r,s),h.cross(p),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Bt.fromBufferAttribute(e,t),Bt.normalize(),e.setXYZ(t,Bt.x,Bt.y,Bt.z)}toNonIndexed(){function e(a,l){const c=a.array,h=a.itemSize,p=a.normalized,d=new c.constructor(l.length*h);let f=0,v=0;for(let M=0,m=l.length;M<m;M++){a.isInterleavedBufferAttribute?f=l[M]*a.data.stride+a.offset:f=l[M]*h;for(let u=0;u<h;u++)d[v++]=c[f++]}return new kn(d,h,p)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Xi,n=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=e(l,n);t.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let h=0,p=c.length;h<p;h++){const d=c[h],f=e(d,n);l.push(f)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let p=0,d=c.length;p<d;p++){const f=c[p];h.push(f.toJSON(e.data))}h.length>0&&(r[l]=h,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const r=e.attributes;for(const c in r){const h=r[c];this.setAttribute(c,h.clone(t))}const s=e.morphAttributes;for(const c in s){const h=[],p=s[c];for(let d=0,f=p.length;d<f;d++)h.push(p[d].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,h=o.length;c<h;c++){const p=o[c];this.addGroup(p.start,p.count,p.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Cl=new Pt,Ti=new Cf,vs=new tl,Pl=new W,xs=new W,Ms=new W,Ss=new W,Ia=new W,Es=new W,Dl=new W,Ts=new W;class zn extends gn{constructor(e=new Xi,t=new Vc){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){Es.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const h=a[l],p=s[l];h!==0&&(Ia.fromBufferAttribute(p,e),o?Es.addScaledVector(Ia,h):Es.addScaledVector(Ia.sub(t),h))}t.add(Es)}return t}raycast(e,t){const n=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),vs.copy(n.boundingSphere),vs.applyMatrix4(s),Ti.copy(e.ray).recast(e.near),!(vs.containsPoint(Ti.origin)===!1&&(Ti.intersectSphere(vs,Pl)===null||Ti.origin.distanceToSquared(Pl)>(e.far-e.near)**2))&&(Cl.copy(s).invert(),Ti.copy(e.ray).applyMatrix4(Cl),!(n.boundingBox!==null&&Ti.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Ti)))}_computeIntersections(e,t,n){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,h=s.attributes.uv1,p=s.attributes.normal,d=s.groups,f=s.drawRange;if(a!==null)if(Array.isArray(o))for(let v=0,M=d.length;v<M;v++){const m=d[v],u=o[m.materialIndex],C=Math.max(m.start,f.start),y=Math.min(a.count,Math.min(m.start+m.count,f.start+f.count));for(let S=C,I=y;S<I;S+=3){const P=a.getX(S),b=a.getX(S+1),N=a.getX(S+2);r=ys(this,u,e,n,c,h,p,P,b,N),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const v=Math.max(0,f.start),M=Math.min(a.count,f.start+f.count);for(let m=v,u=M;m<u;m+=3){const C=a.getX(m),y=a.getX(m+1),S=a.getX(m+2);r=ys(this,o,e,n,c,h,p,C,y,S),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let v=0,M=d.length;v<M;v++){const m=d[v],u=o[m.materialIndex],C=Math.max(m.start,f.start),y=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let S=C,I=y;S<I;S+=3){const P=S,b=S+1,N=S+2;r=ys(this,u,e,n,c,h,p,P,b,N),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const v=Math.max(0,f.start),M=Math.min(l.count,f.start+f.count);for(let m=v,u=M;m<u;m+=3){const C=m,y=m+1,S=m+2;r=ys(this,o,e,n,c,h,p,C,y,S),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}}}function Bf(i,e,t,n,r,s,o,a){let l;if(e.side===ln?l=n.intersectTriangle(o,s,r,!0,a):l=n.intersectTriangle(r,s,o,e.side===vi,a),l===null)return null;Ts.copy(a),Ts.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo(Ts);return c<t.near||c>t.far?null:{distance:c,point:Ts.clone(),object:i}}function ys(i,e,t,n,r,s,o,a,l,c){i.getVertexPosition(a,xs),i.getVertexPosition(l,Ms),i.getVertexPosition(c,Ss);const h=Bf(i,e,t,n,xs,Ms,Ss,Dl);if(h){const p=new W;Un.getBarycoord(Dl,xs,Ms,Ss,p),r&&(h.uv=Un.getInterpolatedAttribute(r,a,l,c,p,new dt)),s&&(h.uv1=Un.getInterpolatedAttribute(s,a,l,c,p,new dt)),o&&(h.normal=Un.getInterpolatedAttribute(o,a,l,c,p,new W),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const d={a,b:l,c,normal:new W,materialIndex:0};Un.getNormal(xs,Ms,Ss,d.normal),h.face=d,h.barycoord=p}return h}class as extends Xi{constructor(e=1,t=1,n=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],h=[],p=[];let d=0,f=0;v("z","y","x",-1,-1,n,t,e,o,s,0),v("z","y","x",1,-1,n,t,-e,o,s,1),v("x","z","y",1,1,e,n,t,r,o,2),v("x","z","y",1,-1,e,n,-t,r,o,3),v("x","y","z",1,-1,e,t,n,r,s,4),v("x","y","z",-1,-1,e,t,-n,r,s,5),this.setIndex(l),this.setAttribute("position",new Fi(c,3)),this.setAttribute("normal",new Fi(h,3)),this.setAttribute("uv",new Fi(p,2));function v(M,m,u,C,y,S,I,P,b,N,T){const _=S/b,D=I/N,B=S/2,G=I/2,X=P/2,Q=b+1,Y=N+1;let J=0,k=0;const te=new W;for(let A=0;A<Y;A++){const _e=A*D-G;for(let He=0;He<Q;He++){const et=He*_-B;te[M]=et*C,te[m]=_e*y,te[u]=X,c.push(te.x,te.y,te.z),te[M]=0,te[m]=0,te[u]=P>0?1:-1,h.push(te.x,te.y,te.z),p.push(He/b),p.push(1-A/N),J+=1}}for(let A=0;A<N;A++)for(let _e=0;_e<b;_e++){const He=d+_e+Q*A,et=d+_e+Q*(A+1),q=d+(_e+1)+Q*(A+1),re=d+(_e+1)+Q*A;l.push(He,et,re),l.push(et,q,re),k+=6}a.addGroup(f,k,T),f+=k,d+=J}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new as(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Ar(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const r=i[t][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=r.clone():Array.isArray(r)?e[t][n]=r.slice():e[t][n]=r}}return e}function jt(i){const e={};for(let t=0;t<i.length;t++){const n=Ar(i[t]);for(const r in n)e[r]=n[r]}return e}function zf(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Yc(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:ot.workingColorSpace}const Hf={clone:Ar,merge:jt};var kf=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Gf=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ri extends ca{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=kf,this.fragmentShader=Gf,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ar(e.uniforms),this.uniformsGroups=zf(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class qc extends gn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Pt,this.projectionMatrix=new Pt,this.projectionMatrixInverse=new Pt,this.coordinateSystem=Jn}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const ui=new W,Ll=new dt,Ul=new dt;class Tn extends qc{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Fo*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(pa*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Fo*2*Math.atan(Math.tan(pa*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){ui.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(ui.x,ui.y).multiplyScalar(-e/ui.z),ui.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ui.x,ui.y).multiplyScalar(-e/ui.z)}getViewSize(e,t){return this.getViewBounds(e,Ll,Ul),t.subVectors(Ul,Ll)}setViewOffset(e,t,n,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(pa*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,t-=o.offsetY*n/c,r*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const rr=-90,sr=1;class Vf extends gn{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Tn(rr,sr,e,t);r.layers=this.layers,this.add(r);const s=new Tn(rr,sr,e,t);s.layers=this.layers,this.add(s);const o=new Tn(rr,sr,e,t);o.layers=this.layers,this.add(o);const a=new Tn(rr,sr,e,t);a.layers=this.layers,this.add(a);const l=new Tn(rr,sr,e,t);l.layers=this.layers,this.add(l);const c=new Tn(rr,sr,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,r,s,o,a,l]=t;for(const c of t)this.remove(c);if(e===Jn)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===ta)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,h]=this.children,p=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),v=e.xr.enabled;e.xr.enabled=!1;const M=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,r),e.render(t,s),e.setRenderTarget(n,1,r),e.render(t,o),e.setRenderTarget(n,2,r),e.render(t,a),e.setRenderTarget(n,3,r),e.render(t,l),e.setRenderTarget(n,4,r),e.render(t,c),n.texture.generateMipmaps=M,e.setRenderTarget(n,5,r),e.render(t,h),e.setRenderTarget(p,d,f),e.xr.enabled=v,n.texture.needsPMREMUpdate=!0}}class $c extends cn{constructor(e,t,n,r,s,o,a,l,c,h){e=e!==void 0?e:[],t=t!==void 0?t:Sr,super(e,t,n,r,s,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Wf extends ki{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new $c(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Bn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new as(5,5,5),s=new ri({name:"CubemapFromEquirect",uniforms:Ar(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:ln,blending:mi});s.uniforms.tEquirect.value=t;const o=new zn(r,s),a=t.minFilter;return t.minFilter===Ii&&(t.minFilter=Bn),new Vf(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,r);e.setRenderTarget(s)}}class Xf extends gn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ii,this.environmentIntensity=1,this.environmentRotation=new ii,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const Na=new W,Yf=new W,qf=new Ye;class Ri{constructor(e=new W(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const r=Na.subVectors(n,t).cross(Yf.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(Na),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||qf.getNormalMatrix(e),r=this.coplanarPoint(Na).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const yi=new tl,bs=new W;class Kc{constructor(e=new Ri,t=new Ri,n=new Ri,r=new Ri,s=new Ri,o=new Ri){this.planes=[e,t,n,r,s,o]}set(e,t,n,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Jn){const n=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],l=r[3],c=r[4],h=r[5],p=r[6],d=r[7],f=r[8],v=r[9],M=r[10],m=r[11],u=r[12],C=r[13],y=r[14],S=r[15];if(n[0].setComponents(l-s,d-c,m-f,S-u).normalize(),n[1].setComponents(l+s,d+c,m+f,S+u).normalize(),n[2].setComponents(l+o,d+h,m+v,S+C).normalize(),n[3].setComponents(l-o,d-h,m-v,S-C).normalize(),n[4].setComponents(l-a,d-p,m-M,S-y).normalize(),t===Jn)n[5].setComponents(l+a,d+p,m+M,S+y).normalize();else if(t===ta)n[5].setComponents(a,p,M,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),yi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),yi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(yi)}intersectsSprite(e){return yi.center.set(0,0,0),yi.radius=.7071067811865476,yi.applyMatrix4(e.matrixWorld),this.intersectsSphere(yi)}intersectsSphere(e){const t=this.planes,n=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const r=t[n];if(bs.x=r.normal.x>0?e.max.x:e.min.x,bs.y=r.normal.y>0?e.max.y:e.min.y,bs.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(bs)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class As extends gn{constructor(){super(),this.isGroup=!0,this.type="Group"}}class Zc extends cn{constructor(e,t,n,r,s,o,a,l,c,h=mr){if(h!==mr&&h!==yr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===mr&&(n=Hi),n===void 0&&h===yr&&(n=Tr),super(null,r,s,o,a,l,h,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:Nn,this.minFilter=l!==void 0?l:Nn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class os extends Xi{constructor(e=1,t=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};const s=e/2,o=t/2,a=Math.floor(n),l=Math.floor(r),c=a+1,h=l+1,p=e/a,d=t/l,f=[],v=[],M=[],m=[];for(let u=0;u<h;u++){const C=u*d-o;for(let y=0;y<c;y++){const S=y*p-s;v.push(S,-C,0),M.push(0,0,1),m.push(y/a),m.push(1-u/l)}}for(let u=0;u<l;u++)for(let C=0;C<a;C++){const y=C+c*u,S=C+c*(u+1),I=C+1+c*(u+1),P=C+1+c*u;f.push(y,S,P),f.push(S,I,P)}this.setIndex(f),this.setAttribute("position",new Fi(v,3)),this.setAttribute("normal",new Fi(M,3)),this.setAttribute("uv",new Fi(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new os(e.width,e.height,e.widthSegments,e.heightSegments)}}class $f extends ca{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=af,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Kf extends ca{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class Zf extends qc{constructor(e=-1,t=1,n=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=n-e,o=n+e,a=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class jf extends Tn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}function Il(i,e,t,n){const r=Jf(n);switch(t){case Pc:return i*e;case Lc:return i*e;case Uc:return i*e*2;case Ic:return i*e/r.components*r.byteLength;case Jo:return i*e/r.components*r.byteLength;case Nc:return i*e*2/r.components*r.byteLength;case Qo:return i*e*2/r.components*r.byteLength;case Dc:return i*e*3/r.components*r.byteLength;case In:return i*e*4/r.components*r.byteLength;case el:return i*e*4/r.components*r.byteLength;case Gs:case Vs:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Ws:case Xs:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case uo:case ho:return Math.max(i,16)*Math.max(e,8)/4;case co:case fo:return Math.max(i,8)*Math.max(e,8)/2;case po:case mo:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case _o:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case go:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case vo:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case xo:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case Mo:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case So:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case Eo:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case To:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case yo:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case bo:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case Ao:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case Ro:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case wo:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case Co:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case Po:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case Ys:case Do:case Lo:return Math.ceil(i/4)*Math.ceil(e/4)*16;case Fc:case Uo:return Math.ceil(i/4)*Math.ceil(e/4)*8;case Io:case No:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Jf(i){switch(i){case ni:case Rc:return{byteLength:1,components:1};case Qr:case wc:case ns:return{byteLength:2,components:1};case Zo:case jo:return{byteLength:2,components:4};case Hi:case Ko:case jn:return{byteLength:4,components:1};case Cc:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:$o}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=$o);/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function jc(){let i=null,e=!1,t=null,n=null;function r(s,o){t(s,o),n=i.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(r),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){i=s}}}function Qf(i){const e=new WeakMap;function t(a,l){const c=a.array,h=a.usage,p=c.byteLength,d=i.createBuffer();i.bindBuffer(l,d),i.bufferData(l,c,h),a.onUploadCallback();let f;if(c instanceof Float32Array)f=i.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=i.SHORT;else if(c instanceof Uint32Array)f=i.UNSIGNED_INT;else if(c instanceof Int32Array)f=i.INT;else if(c instanceof Int8Array)f=i.BYTE;else if(c instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:p}}function n(a,l,c){const h=l.array,p=l.updateRanges;if(i.bindBuffer(c,a),p.length===0)i.bufferSubData(c,0,h);else{p.sort((f,v)=>f.start-v.start);let d=0;for(let f=1;f<p.length;f++){const v=p[d],M=p[f];M.start<=v.start+v.count+1?v.count=Math.max(v.count,M.start+M.count-v.start):(++d,p[d]=M)}p.length=d+1;for(let f=0,v=p.length;f<v;f++){const M=p[f];i.bufferSubData(c,M.start*h.BYTES_PER_ELEMENT,h,M.start,M.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(i.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const h=e.get(a);(!h||h.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:r,remove:s,update:o}}var eh=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,th=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,nh=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,ih=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,rh=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,sh=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,ah=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,oh=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,lh=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,ch=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,uh=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,fh=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,hh=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,dh=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,ph=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,mh=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,_h=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,gh=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,vh=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,xh=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Mh=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Sh=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Eh=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Th=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,yh=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,bh=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Ah=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Rh=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,wh=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Ch=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Ph="gl_FragColor = linearToOutputTexel( gl_FragColor );",Dh=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Lh=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Uh=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Ih=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Nh=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Fh=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Oh=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Bh=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,zh=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Hh=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,kh=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Gh=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Vh=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Wh=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Xh=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Yh=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,qh=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,$h=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Kh=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Zh=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,jh=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Jh=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Qh=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,ed=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,td=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,nd=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,id=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,rd=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,sd=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,ad=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,od=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,ld=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,cd=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ud=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,fd=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,hd=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,dd=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,pd=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,md=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,_d=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,gd=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,vd=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,xd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Md=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Sd=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Ed=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Td=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,yd=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,bd=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Ad=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Rd=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,wd=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Cd=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Pd=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Dd=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Ld=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Ud=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Id=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Nd=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,Fd=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Od=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Bd=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,zd=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Hd=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,kd=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Gd=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Vd=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Wd=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Xd=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Yd=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,qd=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,$d=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Kd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Zd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,jd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Jd=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Qd=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,ep=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,tp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,np=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ip=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,rp=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,sp=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,ap=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,op=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,lp=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,cp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,up=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,fp=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,hp=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,dp=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,pp=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,mp=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,_p=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,gp=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,vp=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,xp=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Mp=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Sp=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Ep=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Tp=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,yp=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,bp=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Ap=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Rp=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,wp=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Cp=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Pp=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Dp=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Lp=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,qe={alphahash_fragment:eh,alphahash_pars_fragment:th,alphamap_fragment:nh,alphamap_pars_fragment:ih,alphatest_fragment:rh,alphatest_pars_fragment:sh,aomap_fragment:ah,aomap_pars_fragment:oh,batching_pars_vertex:lh,batching_vertex:ch,begin_vertex:uh,beginnormal_vertex:fh,bsdfs:hh,iridescence_fragment:dh,bumpmap_pars_fragment:ph,clipping_planes_fragment:mh,clipping_planes_pars_fragment:_h,clipping_planes_pars_vertex:gh,clipping_planes_vertex:vh,color_fragment:xh,color_pars_fragment:Mh,color_pars_vertex:Sh,color_vertex:Eh,common:Th,cube_uv_reflection_fragment:yh,defaultnormal_vertex:bh,displacementmap_pars_vertex:Ah,displacementmap_vertex:Rh,emissivemap_fragment:wh,emissivemap_pars_fragment:Ch,colorspace_fragment:Ph,colorspace_pars_fragment:Dh,envmap_fragment:Lh,envmap_common_pars_fragment:Uh,envmap_pars_fragment:Ih,envmap_pars_vertex:Nh,envmap_physical_pars_fragment:Yh,envmap_vertex:Fh,fog_vertex:Oh,fog_pars_vertex:Bh,fog_fragment:zh,fog_pars_fragment:Hh,gradientmap_pars_fragment:kh,lightmap_pars_fragment:Gh,lights_lambert_fragment:Vh,lights_lambert_pars_fragment:Wh,lights_pars_begin:Xh,lights_toon_fragment:qh,lights_toon_pars_fragment:$h,lights_phong_fragment:Kh,lights_phong_pars_fragment:Zh,lights_physical_fragment:jh,lights_physical_pars_fragment:Jh,lights_fragment_begin:Qh,lights_fragment_maps:ed,lights_fragment_end:td,logdepthbuf_fragment:nd,logdepthbuf_pars_fragment:id,logdepthbuf_pars_vertex:rd,logdepthbuf_vertex:sd,map_fragment:ad,map_pars_fragment:od,map_particle_fragment:ld,map_particle_pars_fragment:cd,metalnessmap_fragment:ud,metalnessmap_pars_fragment:fd,morphinstance_vertex:hd,morphcolor_vertex:dd,morphnormal_vertex:pd,morphtarget_pars_vertex:md,morphtarget_vertex:_d,normal_fragment_begin:gd,normal_fragment_maps:vd,normal_pars_fragment:xd,normal_pars_vertex:Md,normal_vertex:Sd,normalmap_pars_fragment:Ed,clearcoat_normal_fragment_begin:Td,clearcoat_normal_fragment_maps:yd,clearcoat_pars_fragment:bd,iridescence_pars_fragment:Ad,opaque_fragment:Rd,packing:wd,premultiplied_alpha_fragment:Cd,project_vertex:Pd,dithering_fragment:Dd,dithering_pars_fragment:Ld,roughnessmap_fragment:Ud,roughnessmap_pars_fragment:Id,shadowmap_pars_fragment:Nd,shadowmap_pars_vertex:Fd,shadowmap_vertex:Od,shadowmask_pars_fragment:Bd,skinbase_vertex:zd,skinning_pars_vertex:Hd,skinning_vertex:kd,skinnormal_vertex:Gd,specularmap_fragment:Vd,specularmap_pars_fragment:Wd,tonemapping_fragment:Xd,tonemapping_pars_fragment:Yd,transmission_fragment:qd,transmission_pars_fragment:$d,uv_pars_fragment:Kd,uv_pars_vertex:Zd,uv_vertex:jd,worldpos_vertex:Jd,background_vert:Qd,background_frag:ep,backgroundCube_vert:tp,backgroundCube_frag:np,cube_vert:ip,cube_frag:rp,depth_vert:sp,depth_frag:ap,distanceRGBA_vert:op,distanceRGBA_frag:lp,equirect_vert:cp,equirect_frag:up,linedashed_vert:fp,linedashed_frag:hp,meshbasic_vert:dp,meshbasic_frag:pp,meshlambert_vert:mp,meshlambert_frag:_p,meshmatcap_vert:gp,meshmatcap_frag:vp,meshnormal_vert:xp,meshnormal_frag:Mp,meshphong_vert:Sp,meshphong_frag:Ep,meshphysical_vert:Tp,meshphysical_frag:yp,meshtoon_vert:bp,meshtoon_frag:Ap,points_vert:Rp,points_frag:wp,shadow_vert:Cp,shadow_frag:Pp,sprite_vert:Dp,sprite_frag:Lp},me={common:{diffuse:{value:new ht(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ye},alphaMap:{value:null},alphaMapTransform:{value:new Ye},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ye}},envmap:{envMap:{value:null},envMapRotation:{value:new Ye},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ye}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ye}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ye},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ye},normalScale:{value:new dt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ye},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ye}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ye}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ye}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ht(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ht(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ye},alphaTest:{value:0},uvTransform:{value:new Ye}},sprite:{diffuse:{value:new ht(16777215)},opacity:{value:1},center:{value:new dt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ye},alphaMap:{value:null},alphaMapTransform:{value:new Ye},alphaTest:{value:0}}},On={basic:{uniforms:jt([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.fog]),vertexShader:qe.meshbasic_vert,fragmentShader:qe.meshbasic_frag},lambert:{uniforms:jt([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.fog,me.lights,{emissive:{value:new ht(0)}}]),vertexShader:qe.meshlambert_vert,fragmentShader:qe.meshlambert_frag},phong:{uniforms:jt([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.fog,me.lights,{emissive:{value:new ht(0)},specular:{value:new ht(1118481)},shininess:{value:30}}]),vertexShader:qe.meshphong_vert,fragmentShader:qe.meshphong_frag},standard:{uniforms:jt([me.common,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.roughnessmap,me.metalnessmap,me.fog,me.lights,{emissive:{value:new ht(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:qe.meshphysical_vert,fragmentShader:qe.meshphysical_frag},toon:{uniforms:jt([me.common,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.gradientmap,me.fog,me.lights,{emissive:{value:new ht(0)}}]),vertexShader:qe.meshtoon_vert,fragmentShader:qe.meshtoon_frag},matcap:{uniforms:jt([me.common,me.bumpmap,me.normalmap,me.displacementmap,me.fog,{matcap:{value:null}}]),vertexShader:qe.meshmatcap_vert,fragmentShader:qe.meshmatcap_frag},points:{uniforms:jt([me.points,me.fog]),vertexShader:qe.points_vert,fragmentShader:qe.points_frag},dashed:{uniforms:jt([me.common,me.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:qe.linedashed_vert,fragmentShader:qe.linedashed_frag},depth:{uniforms:jt([me.common,me.displacementmap]),vertexShader:qe.depth_vert,fragmentShader:qe.depth_frag},normal:{uniforms:jt([me.common,me.bumpmap,me.normalmap,me.displacementmap,{opacity:{value:1}}]),vertexShader:qe.meshnormal_vert,fragmentShader:qe.meshnormal_frag},sprite:{uniforms:jt([me.sprite,me.fog]),vertexShader:qe.sprite_vert,fragmentShader:qe.sprite_frag},background:{uniforms:{uvTransform:{value:new Ye},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:qe.background_vert,fragmentShader:qe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ye}},vertexShader:qe.backgroundCube_vert,fragmentShader:qe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:qe.cube_vert,fragmentShader:qe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:qe.equirect_vert,fragmentShader:qe.equirect_frag},distanceRGBA:{uniforms:jt([me.common,me.displacementmap,{referencePosition:{value:new W},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:qe.distanceRGBA_vert,fragmentShader:qe.distanceRGBA_frag},shadow:{uniforms:jt([me.lights,me.fog,{color:{value:new ht(0)},opacity:{value:1}}]),vertexShader:qe.shadow_vert,fragmentShader:qe.shadow_frag}};On.physical={uniforms:jt([On.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ye},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ye},clearcoatNormalScale:{value:new dt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ye},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ye},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ye},sheen:{value:0},sheenColor:{value:new ht(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ye},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ye},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ye},transmissionSamplerSize:{value:new dt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ye},attenuationDistance:{value:0},attenuationColor:{value:new ht(0)},specularColor:{value:new ht(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ye},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ye},anisotropyVector:{value:new dt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ye}}]),vertexShader:qe.meshphysical_vert,fragmentShader:qe.meshphysical_frag};const Rs={r:0,b:0,g:0},bi=new ii,Up=new Pt;function Ip(i,e,t,n,r,s,o){const a=new ht(0);let l=s===!0?0:1,c,h,p=null,d=0,f=null;function v(y){let S=y.isScene===!0?y.background:null;return S&&S.isTexture&&(S=(y.backgroundBlurriness>0?t:e).get(S)),S}function M(y){let S=!1;const I=v(y);I===null?u(a,l):I&&I.isColor&&(u(I,1),S=!0);const P=i.xr.getEnvironmentBlendMode();P==="additive"?n.buffers.color.setClear(0,0,0,1,o):P==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||S)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(y,S){const I=v(S);I&&(I.isCubeTexture||I.mapping===la)?(h===void 0&&(h=new zn(new as(1,1,1),new ri({name:"BackgroundCubeMaterial",uniforms:Ar(On.backgroundCube.uniforms),vertexShader:On.backgroundCube.vertexShader,fragmentShader:On.backgroundCube.fragmentShader,side:ln,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(P,b,N){this.matrixWorld.copyPosition(N.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(h)),bi.copy(S.backgroundRotation),bi.x*=-1,bi.y*=-1,bi.z*=-1,I.isCubeTexture&&I.isRenderTargetTexture===!1&&(bi.y*=-1,bi.z*=-1),h.material.uniforms.envMap.value=I,h.material.uniforms.flipEnvMap.value=I.isCubeTexture&&I.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=S.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Up.makeRotationFromEuler(bi)),h.material.toneMapped=ot.getTransfer(I.colorSpace)!==ft,(p!==I||d!==I.version||f!==i.toneMapping)&&(h.material.needsUpdate=!0,p=I,d=I.version,f=i.toneMapping),h.layers.enableAll(),y.unshift(h,h.geometry,h.material,0,0,null)):I&&I.isTexture&&(c===void 0&&(c=new zn(new os(2,2),new ri({name:"BackgroundMaterial",uniforms:Ar(On.background.uniforms),vertexShader:On.background.vertexShader,fragmentShader:On.background.fragmentShader,side:vi,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=I,c.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,c.material.toneMapped=ot.getTransfer(I.colorSpace)!==ft,I.matrixAutoUpdate===!0&&I.updateMatrix(),c.material.uniforms.uvTransform.value.copy(I.matrix),(p!==I||d!==I.version||f!==i.toneMapping)&&(c.material.needsUpdate=!0,p=I,d=I.version,f=i.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null))}function u(y,S){y.getRGB(Rs,Yc(i)),n.buffers.color.setClear(Rs.r,Rs.g,Rs.b,S,o)}function C(){h!==void 0&&(h.geometry.dispose(),h.material.dispose()),c!==void 0&&(c.geometry.dispose(),c.material.dispose())}return{getClearColor:function(){return a},setClearColor:function(y,S=1){a.set(y),l=S,u(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(y){l=y,u(a,l)},render:M,addToRenderList:m,dispose:C}}function Np(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},r=d(null);let s=r,o=!1;function a(_,D,B,G,X){let Q=!1;const Y=p(G,B,D);s!==Y&&(s=Y,c(s.object)),Q=f(_,G,B,X),Q&&v(_,G,B,X),X!==null&&e.update(X,i.ELEMENT_ARRAY_BUFFER),(Q||o)&&(o=!1,S(_,D,B,G),X!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(X).buffer))}function l(){return i.createVertexArray()}function c(_){return i.bindVertexArray(_)}function h(_){return i.deleteVertexArray(_)}function p(_,D,B){const G=B.wireframe===!0;let X=n[_.id];X===void 0&&(X={},n[_.id]=X);let Q=X[D.id];Q===void 0&&(Q={},X[D.id]=Q);let Y=Q[G];return Y===void 0&&(Y=d(l()),Q[G]=Y),Y}function d(_){const D=[],B=[],G=[];for(let X=0;X<t;X++)D[X]=0,B[X]=0,G[X]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:B,attributeDivisors:G,object:_,attributes:{},index:null}}function f(_,D,B,G){const X=s.attributes,Q=D.attributes;let Y=0;const J=B.getAttributes();for(const k in J)if(J[k].location>=0){const A=X[k];let _e=Q[k];if(_e===void 0&&(k==="instanceMatrix"&&_.instanceMatrix&&(_e=_.instanceMatrix),k==="instanceColor"&&_.instanceColor&&(_e=_.instanceColor)),A===void 0||A.attribute!==_e||_e&&A.data!==_e.data)return!0;Y++}return s.attributesNum!==Y||s.index!==G}function v(_,D,B,G){const X={},Q=D.attributes;let Y=0;const J=B.getAttributes();for(const k in J)if(J[k].location>=0){let A=Q[k];A===void 0&&(k==="instanceMatrix"&&_.instanceMatrix&&(A=_.instanceMatrix),k==="instanceColor"&&_.instanceColor&&(A=_.instanceColor));const _e={};_e.attribute=A,A&&A.data&&(_e.data=A.data),X[k]=_e,Y++}s.attributes=X,s.attributesNum=Y,s.index=G}function M(){const _=s.newAttributes;for(let D=0,B=_.length;D<B;D++)_[D]=0}function m(_){u(_,0)}function u(_,D){const B=s.newAttributes,G=s.enabledAttributes,X=s.attributeDivisors;B[_]=1,G[_]===0&&(i.enableVertexAttribArray(_),G[_]=1),X[_]!==D&&(i.vertexAttribDivisor(_,D),X[_]=D)}function C(){const _=s.newAttributes,D=s.enabledAttributes;for(let B=0,G=D.length;B<G;B++)D[B]!==_[B]&&(i.disableVertexAttribArray(B),D[B]=0)}function y(_,D,B,G,X,Q,Y){Y===!0?i.vertexAttribIPointer(_,D,B,X,Q):i.vertexAttribPointer(_,D,B,G,X,Q)}function S(_,D,B,G){M();const X=G.attributes,Q=B.getAttributes(),Y=D.defaultAttributeValues;for(const J in Q){const k=Q[J];if(k.location>=0){let te=X[J];if(te===void 0&&(J==="instanceMatrix"&&_.instanceMatrix&&(te=_.instanceMatrix),J==="instanceColor"&&_.instanceColor&&(te=_.instanceColor)),te!==void 0){const A=te.normalized,_e=te.itemSize,He=e.get(te);if(He===void 0)continue;const et=He.buffer,q=He.type,re=He.bytesPerElement,pe=q===i.INT||q===i.UNSIGNED_INT||te.gpuType===Ko;if(te.isInterleavedBufferAttribute){const ne=te.data,Te=ne.stride,be=te.offset;if(ne.isInstancedInterleavedBuffer){for(let ze=0;ze<k.locationSize;ze++)u(k.location+ze,ne.meshPerAttribute);_.isInstancedMesh!==!0&&G._maxInstanceCount===void 0&&(G._maxInstanceCount=ne.meshPerAttribute*ne.count)}else for(let ze=0;ze<k.locationSize;ze++)m(k.location+ze);i.bindBuffer(i.ARRAY_BUFFER,et);for(let ze=0;ze<k.locationSize;ze++)y(k.location+ze,_e/k.locationSize,q,A,Te*re,(be+_e/k.locationSize*ze)*re,pe)}else{if(te.isInstancedBufferAttribute){for(let ne=0;ne<k.locationSize;ne++)u(k.location+ne,te.meshPerAttribute);_.isInstancedMesh!==!0&&G._maxInstanceCount===void 0&&(G._maxInstanceCount=te.meshPerAttribute*te.count)}else for(let ne=0;ne<k.locationSize;ne++)m(k.location+ne);i.bindBuffer(i.ARRAY_BUFFER,et);for(let ne=0;ne<k.locationSize;ne++)y(k.location+ne,_e/k.locationSize,q,A,_e*re,_e/k.locationSize*ne*re,pe)}}else if(Y!==void 0){const A=Y[J];if(A!==void 0)switch(A.length){case 2:i.vertexAttrib2fv(k.location,A);break;case 3:i.vertexAttrib3fv(k.location,A);break;case 4:i.vertexAttrib4fv(k.location,A);break;default:i.vertexAttrib1fv(k.location,A)}}}}C()}function I(){N();for(const _ in n){const D=n[_];for(const B in D){const G=D[B];for(const X in G)h(G[X].object),delete G[X];delete D[B]}delete n[_]}}function P(_){if(n[_.id]===void 0)return;const D=n[_.id];for(const B in D){const G=D[B];for(const X in G)h(G[X].object),delete G[X];delete D[B]}delete n[_.id]}function b(_){for(const D in n){const B=n[D];if(B[_.id]===void 0)continue;const G=B[_.id];for(const X in G)h(G[X].object),delete G[X];delete B[_.id]}}function N(){T(),o=!0,s!==r&&(s=r,c(s.object))}function T(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:N,resetDefaultState:T,dispose:I,releaseStatesOfGeometry:P,releaseStatesOfProgram:b,initAttributes:M,enableAttribute:m,disableUnusedAttributes:C}}function Fp(i,e,t){let n;function r(c){n=c}function s(c,h){i.drawArrays(n,c,h),t.update(h,n,1)}function o(c,h,p){p!==0&&(i.drawArraysInstanced(n,c,h,p),t.update(h,n,p))}function a(c,h,p){if(p===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,p);let f=0;for(let v=0;v<p;v++)f+=h[v];t.update(f,n,1)}function l(c,h,p,d){if(p===0)return;const f=e.get("WEBGL_multi_draw");if(f===null)for(let v=0;v<c.length;v++)o(c[v],h[v],d[v]);else{f.multiDrawArraysInstancedWEBGL(n,c,0,h,0,d,0,p);let v=0;for(let M=0;M<p;M++)v+=h[M]*d[M];t.update(v,n,1)}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function Op(i,e,t,n){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const b=e.get("EXT_texture_filter_anisotropic");r=i.getParameter(b.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(b){return!(b!==In&&n.convert(b)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(b){const N=b===ns&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(b!==ni&&n.convert(b)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&b!==jn&&!N)}function l(b){if(b==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";b="mediump"}return b==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const p=t.logarithmicDepthBuffer===!0,d=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),v=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),M=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),u=i.getParameter(i.MAX_VERTEX_ATTRIBS),C=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),y=i.getParameter(i.MAX_VARYING_VECTORS),S=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),I=v>0,P=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:p,reverseDepthBuffer:d,maxTextures:f,maxVertexTextures:v,maxTextureSize:M,maxCubemapSize:m,maxAttributes:u,maxVertexUniforms:C,maxVaryings:y,maxFragmentUniforms:S,vertexTextures:I,maxSamples:P}}function Bp(i){const e=this;let t=null,n=0,r=!1,s=!1;const o=new Ri,a=new Ye,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(p,d){const f=p.length!==0||d||n!==0||r;return r=d,n=p.length,f},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(p,d){t=h(p,d,0)},this.setState=function(p,d,f){const v=p.clippingPlanes,M=p.clipIntersection,m=p.clipShadows,u=i.get(p);if(!r||v===null||v.length===0||s&&!m)s?h(null):c();else{const C=s?0:n,y=C*4;let S=u.clippingState||null;l.value=S,S=h(v,d,y,f);for(let I=0;I!==y;++I)S[I]=t[I];u.clippingState=S,this.numIntersection=M?this.numPlanes:0,this.numPlanes+=C}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(p,d,f,v){const M=p!==null?p.length:0;let m=null;if(M!==0){if(m=l.value,v!==!0||m===null){const u=f+M*4,C=d.matrixWorldInverse;a.getNormalMatrix(C),(m===null||m.length<u)&&(m=new Float32Array(u));for(let y=0,S=f;y!==M;++y,S+=4)o.copy(p[y]).applyMatrix4(C,a),o.normal.toArray(m,S),m[S+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=M,e.numIntersection=0,m}}function zp(i){let e=new WeakMap;function t(o,a){return a===so?o.mapping=Sr:a===ao&&(o.mapping=Er),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===so||a===ao)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new Wf(l.height);return c.fromEquirectangularTexture(i,o),e.set(o,c),o.addEventListener("dispose",r),t(c.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}const hr=4,Nl=[.125,.215,.35,.446,.526,.582],Li=20,Fa=new Zf,Fl=new ht;let Oa=null,Ba=0,za=0,Ha=!1;const wi=(1+Math.sqrt(5))/2,ar=1/wi,Ol=[new W(-wi,ar,0),new W(wi,ar,0),new W(-ar,0,wi),new W(ar,0,wi),new W(0,wi,-ar),new W(0,wi,ar),new W(-1,1,-1),new W(1,1,-1),new W(-1,1,1),new W(1,1,1)];class Bl{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,r=100){Oa=this._renderer.getRenderTarget(),Ba=this._renderer.getActiveCubeFace(),za=this._renderer.getActiveMipmapLevel(),Ha=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=kl(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Hl(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Oa,Ba,za),this._renderer.xr.enabled=Ha,e.scissorTest=!1,ws(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Sr||e.mapping===Er?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Oa=this._renderer.getRenderTarget(),Ba=this._renderer.getActiveCubeFace(),za=this._renderer.getActiveMipmapLevel(),Ha=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Bn,minFilter:Bn,generateMipmaps:!1,type:ns,format:In,colorSpace:br,depthBuffer:!1},r=zl(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=zl(e,t,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Hp(s)),this._blurMaterial=kp(s,e,t)}return r}_compileMaterial(e){const t=new zn(this._lodPlanes[0],e);this._renderer.compile(t,Fa)}_sceneToCubeUV(e,t,n,r){const a=new Tn(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,p=h.autoClear,d=h.toneMapping;h.getClearColor(Fl),h.toneMapping=_i,h.autoClear=!1;const f=new Vc({name:"PMREM.Background",side:ln,depthWrite:!1,depthTest:!1}),v=new zn(new as,f);let M=!1;const m=e.background;m?m.isColor&&(f.color.copy(m),e.background=null,M=!0):(f.color.copy(Fl),M=!0);for(let u=0;u<6;u++){const C=u%3;C===0?(a.up.set(0,l[u],0),a.lookAt(c[u],0,0)):C===1?(a.up.set(0,0,l[u]),a.lookAt(0,c[u],0)):(a.up.set(0,l[u],0),a.lookAt(0,0,c[u]));const y=this._cubeSize;ws(r,C*y,u>2?y:0,y,y),h.setRenderTarget(r),M&&h.render(v,a),h.render(e,a)}v.geometry.dispose(),v.material.dispose(),h.toneMapping=d,h.autoClear=p,e.background=m}_textureToCubeUV(e,t){const n=this._renderer,r=e.mapping===Sr||e.mapping===Er;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=kl()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Hl());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new zn(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;ws(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,Fa)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=Ol[(r-s-1)%Ol.length];this._blur(e,s-1,s,o,a)}t.autoClear=n}_blur(e,t,n,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,r,"latitudinal",s),this._halfBlur(o,e,n,n,r,"longitudinal",s)}_halfBlur(e,t,n,r,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,p=new zn(this._lodPlanes[r],c),d=c.uniforms,f=this._sizeLods[n]-1,v=isFinite(s)?Math.PI/(2*f):2*Math.PI/(2*Li-1),M=s/v,m=isFinite(s)?1+Math.floor(h*M):Li;m>Li&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Li}`);const u=[];let C=0;for(let b=0;b<Li;++b){const N=b/M,T=Math.exp(-N*N/2);u.push(T),b===0?C+=T:b<m&&(C+=2*T)}for(let b=0;b<u.length;b++)u[b]=u[b]/C;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=u,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:y}=this;d.dTheta.value=v,d.mipInt.value=y-n;const S=this._sizeLods[r],I=3*S*(r>y-hr?r-y+hr:0),P=4*(this._cubeSize-S);ws(t,I,P,3*S,2*S),l.setRenderTarget(t),l.render(p,Fa)}}function Hp(i){const e=[],t=[],n=[];let r=i;const s=i-hr+1+Nl.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);t.push(a);let l=1/a;o>i-hr?l=Nl[o-i+hr-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),h=-c,p=1+c,d=[h,h,p,h,p,p,h,h,p,p,h,p],f=6,v=6,M=3,m=2,u=1,C=new Float32Array(M*v*f),y=new Float32Array(m*v*f),S=new Float32Array(u*v*f);for(let P=0;P<f;P++){const b=P%3*2/3-1,N=P>2?0:-1,T=[b,N,0,b+2/3,N,0,b+2/3,N+1,0,b,N,0,b+2/3,N+1,0,b,N+1,0];C.set(T,M*v*P),y.set(d,m*v*P);const _=[P,P,P,P,P,P];S.set(_,u*v*P)}const I=new Xi;I.setAttribute("position",new kn(C,M)),I.setAttribute("uv",new kn(y,m)),I.setAttribute("faceIndex",new kn(S,u)),e.push(I),r>hr&&r--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function zl(i,e,t){const n=new ki(i,e,t);return n.texture.mapping=la,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function ws(i,e,t,n,r){i.viewport.set(e,t,n,r),i.scissor.set(e,t,n,r)}function kp(i,e,t){const n=new Float32Array(Li),r=new W(0,1,0);return new ri({name:"SphericalGaussianBlur",defines:{n:Li,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:nl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:mi,depthTest:!1,depthWrite:!1})}function Hl(){return new ri({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:nl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:mi,depthTest:!1,depthWrite:!1})}function kl(){return new ri({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:nl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:mi,depthTest:!1,depthWrite:!1})}function nl(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Gp(i){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===so||l===ao,h=l===Sr||l===Er;if(c||h){let p=e.get(a);const d=p!==void 0?p.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return t===null&&(t=new Bl(i)),p=c?t.fromEquirectangular(a,p):t.fromCubemap(a,p),p.texture.pmremVersion=a.pmremVersion,e.set(a,p),p.texture;if(p!==void 0)return p.texture;{const f=a.image;return c&&f&&f.height>0||h&&f&&r(f)?(t===null&&(t=new Bl(i)),p=c?t.fromEquirectangular(a):t.fromCubemap(a),p.texture.pmremVersion=a.pmremVersion,e.set(a,p),a.addEventListener("dispose",s),p.texture):null}}}return a}function r(a){let l=0;const c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function Vp(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let r;switch(n){case"WEBGL_depth_texture":r=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=i.getExtension(n)}return e[n]=r,r}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const r=t(n);return r===null&&cr("THREE.WebGLRenderer: "+n+" extension not supported."),r}}}function Wp(i,e,t,n){const r={},s=new WeakMap;function o(p){const d=p.target;d.index!==null&&e.remove(d.index);for(const v in d.attributes)e.remove(d.attributes[v]);d.removeEventListener("dispose",o),delete r[d.id];const f=s.get(d);f&&(e.remove(f),s.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function a(p,d){return r[d.id]===!0||(d.addEventListener("dispose",o),r[d.id]=!0,t.memory.geometries++),d}function l(p){const d=p.attributes;for(const f in d)e.update(d[f],i.ARRAY_BUFFER)}function c(p){const d=[],f=p.index,v=p.attributes.position;let M=0;if(f!==null){const C=f.array;M=f.version;for(let y=0,S=C.length;y<S;y+=3){const I=C[y+0],P=C[y+1],b=C[y+2];d.push(I,P,P,b,b,I)}}else if(v!==void 0){const C=v.array;M=v.version;for(let y=0,S=C.length/3-1;y<S;y+=3){const I=y+0,P=y+1,b=y+2;d.push(I,P,P,b,b,I)}}else return;const m=new(Bc(d)?Xc:Wc)(d,1);m.version=M;const u=s.get(p);u&&e.remove(u),s.set(p,m)}function h(p){const d=s.get(p);if(d){const f=p.index;f!==null&&d.version<f.version&&c(p)}else c(p);return s.get(p)}return{get:a,update:l,getWireframeAttribute:h}}function Xp(i,e,t){let n;function r(d){n=d}let s,o;function a(d){s=d.type,o=d.bytesPerElement}function l(d,f){i.drawElements(n,f,s,d*o),t.update(f,n,1)}function c(d,f,v){v!==0&&(i.drawElementsInstanced(n,f,s,d*o,v),t.update(f,n,v))}function h(d,f,v){if(v===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,s,d,0,v);let m=0;for(let u=0;u<v;u++)m+=f[u];t.update(m,n,1)}function p(d,f,v,M){if(v===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let u=0;u<d.length;u++)c(d[u]/o,f[u],M[u]);else{m.multiDrawElementsInstancedWEBGL(n,f,0,s,d,0,M,0,v);let u=0;for(let C=0;C<v;C++)u+=f[C]*M[C];t.update(u,n,1)}}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=p}function Yp(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(t.calls++,o){case i.TRIANGLES:t.triangles+=a*(s/3);break;case i.LINES:t.lines+=a*(s/2);break;case i.LINE_STRIP:t.lines+=a*(s-1);break;case i.LINE_LOOP:t.lines+=a*s;break;case i.POINTS:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:n}}function qp(i,e,t){const n=new WeakMap,r=new bt;function s(o,a,l){const c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,p=h!==void 0?h.length:0;let d=n.get(a);if(d===void 0||d.count!==p){let T=function(){b.dispose(),n.delete(a),a.removeEventListener("dispose",T)};d!==void 0&&d.texture.dispose();const f=a.morphAttributes.position!==void 0,v=a.morphAttributes.normal!==void 0,M=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],u=a.morphAttributes.normal||[],C=a.morphAttributes.color||[];let y=0;f===!0&&(y=1),v===!0&&(y=2),M===!0&&(y=3);let S=a.attributes.position.count*y,I=1;S>e.maxTextureSize&&(I=Math.ceil(S/e.maxTextureSize),S=e.maxTextureSize);const P=new Float32Array(S*I*4*p),b=new Hc(P,S,I,p);b.type=jn,b.needsUpdate=!0;const N=y*4;for(let _=0;_<p;_++){const D=m[_],B=u[_],G=C[_],X=S*I*4*_;for(let Q=0;Q<D.count;Q++){const Y=Q*N;f===!0&&(r.fromBufferAttribute(D,Q),P[X+Y+0]=r.x,P[X+Y+1]=r.y,P[X+Y+2]=r.z,P[X+Y+3]=0),v===!0&&(r.fromBufferAttribute(B,Q),P[X+Y+4]=r.x,P[X+Y+5]=r.y,P[X+Y+6]=r.z,P[X+Y+7]=0),M===!0&&(r.fromBufferAttribute(G,Q),P[X+Y+8]=r.x,P[X+Y+9]=r.y,P[X+Y+10]=r.z,P[X+Y+11]=G.itemSize===4?r.w:1)}}d={count:p,texture:b,size:new dt(S,I)},n.set(a,d),a.addEventListener("dispose",T)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,t);else{let f=0;for(let M=0;M<c.length;M++)f+=c[M];const v=a.morphTargetsRelative?1:1-f;l.getUniforms().setValue(i,"morphTargetBaseInfluence",v),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",d.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:s}}function $p(i,e,t,n){let r=new WeakMap;function s(l){const c=n.render.frame,h=l.geometry,p=e.get(l,h);if(r.get(p)!==c&&(e.update(p),r.set(p,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==c&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;r.get(d)!==c&&(d.update(),r.set(d,c))}return p}function o(){r=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:o}}const Jc=new cn,Gl=new Zc(1,1),Qc=new Hc,eu=new Rf,tu=new $c,Vl=[],Wl=[],Xl=new Float32Array(16),Yl=new Float32Array(9),ql=new Float32Array(4);function Cr(i,e,t){const n=i[0];if(n<=0||n>0)return i;const r=e*t;let s=Vl[r];if(s===void 0&&(s=new Float32Array(r),Vl[r]=s),e!==0){n.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,i[o].toArray(s,a)}return s}function Ft(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Ot(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function ua(i,e){let t=Wl[e];t===void 0&&(t=new Int32Array(e),Wl[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function Kp(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function Zp(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ft(t,e))return;i.uniform2fv(this.addr,e),Ot(t,e)}}function jp(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Ft(t,e))return;i.uniform3fv(this.addr,e),Ot(t,e)}}function Jp(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ft(t,e))return;i.uniform4fv(this.addr,e),Ot(t,e)}}function Qp(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Ft(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Ot(t,e)}else{if(Ft(t,n))return;ql.set(n),i.uniformMatrix2fv(this.addr,!1,ql),Ot(t,n)}}function em(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Ft(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Ot(t,e)}else{if(Ft(t,n))return;Yl.set(n),i.uniformMatrix3fv(this.addr,!1,Yl),Ot(t,n)}}function tm(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Ft(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Ot(t,e)}else{if(Ft(t,n))return;Xl.set(n),i.uniformMatrix4fv(this.addr,!1,Xl),Ot(t,n)}}function nm(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function im(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ft(t,e))return;i.uniform2iv(this.addr,e),Ot(t,e)}}function rm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ft(t,e))return;i.uniform3iv(this.addr,e),Ot(t,e)}}function sm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ft(t,e))return;i.uniform4iv(this.addr,e),Ot(t,e)}}function am(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function om(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ft(t,e))return;i.uniform2uiv(this.addr,e),Ot(t,e)}}function lm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ft(t,e))return;i.uniform3uiv(this.addr,e),Ot(t,e)}}function cm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ft(t,e))return;i.uniform4uiv(this.addr,e),Ot(t,e)}}function um(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);let s;this.type===i.SAMPLER_2D_SHADOW?(Gl.compareFunction=Oc,s=Gl):s=Jc,t.setTexture2D(e||s,r)}function fm(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture3D(e||eu,r)}function hm(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTextureCube(e||tu,r)}function dm(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2DArray(e||Qc,r)}function pm(i){switch(i){case 5126:return Kp;case 35664:return Zp;case 35665:return jp;case 35666:return Jp;case 35674:return Qp;case 35675:return em;case 35676:return tm;case 5124:case 35670:return nm;case 35667:case 35671:return im;case 35668:case 35672:return rm;case 35669:case 35673:return sm;case 5125:return am;case 36294:return om;case 36295:return lm;case 36296:return cm;case 35678:case 36198:case 36298:case 36306:case 35682:return um;case 35679:case 36299:case 36307:return fm;case 35680:case 36300:case 36308:case 36293:return hm;case 36289:case 36303:case 36311:case 36292:return dm}}function mm(i,e){i.uniform1fv(this.addr,e)}function _m(i,e){const t=Cr(e,this.size,2);i.uniform2fv(this.addr,t)}function gm(i,e){const t=Cr(e,this.size,3);i.uniform3fv(this.addr,t)}function vm(i,e){const t=Cr(e,this.size,4);i.uniform4fv(this.addr,t)}function xm(i,e){const t=Cr(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function Mm(i,e){const t=Cr(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function Sm(i,e){const t=Cr(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function Em(i,e){i.uniform1iv(this.addr,e)}function Tm(i,e){i.uniform2iv(this.addr,e)}function ym(i,e){i.uniform3iv(this.addr,e)}function bm(i,e){i.uniform4iv(this.addr,e)}function Am(i,e){i.uniform1uiv(this.addr,e)}function Rm(i,e){i.uniform2uiv(this.addr,e)}function wm(i,e){i.uniform3uiv(this.addr,e)}function Cm(i,e){i.uniform4uiv(this.addr,e)}function Pm(i,e,t){const n=this.cache,r=e.length,s=ua(t,r);Ft(n,s)||(i.uniform1iv(this.addr,s),Ot(n,s));for(let o=0;o!==r;++o)t.setTexture2D(e[o]||Jc,s[o])}function Dm(i,e,t){const n=this.cache,r=e.length,s=ua(t,r);Ft(n,s)||(i.uniform1iv(this.addr,s),Ot(n,s));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||eu,s[o])}function Lm(i,e,t){const n=this.cache,r=e.length,s=ua(t,r);Ft(n,s)||(i.uniform1iv(this.addr,s),Ot(n,s));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||tu,s[o])}function Um(i,e,t){const n=this.cache,r=e.length,s=ua(t,r);Ft(n,s)||(i.uniform1iv(this.addr,s),Ot(n,s));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||Qc,s[o])}function Im(i){switch(i){case 5126:return mm;case 35664:return _m;case 35665:return gm;case 35666:return vm;case 35674:return xm;case 35675:return Mm;case 35676:return Sm;case 5124:case 35670:return Em;case 35667:case 35671:return Tm;case 35668:case 35672:return ym;case 35669:case 35673:return bm;case 5125:return Am;case 36294:return Rm;case 36295:return wm;case 36296:return Cm;case 35678:case 36198:case 36298:case 36306:case 35682:return Pm;case 35679:case 36299:case 36307:return Dm;case 35680:case 36300:case 36308:case 36293:return Lm;case 36289:case 36303:case 36311:case 36292:return Um}}class Nm{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=pm(t.type)}}class Fm{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Im(t.type)}}class Om{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,t[a.id],n)}}}const ka=/(\w+)(\])?(\[|\.)?/g;function $l(i,e){i.seq.push(e),i.map[e.id]=e}function Bm(i,e,t){const n=i.name,r=n.length;for(ka.lastIndex=0;;){const s=ka.exec(n),o=ka.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){$l(t,c===void 0?new Nm(a,i,e):new Fm(a,i,e));break}else{let p=t.map[a];p===void 0&&(p=new Om(a),$l(t,p)),t=p}}}class qs{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){const s=e.getActiveUniform(t,r),o=e.getUniformLocation(t,s.name);Bm(s,o,this)}}setValue(e,t,n,r){const s=this.map[t];s!==void 0&&s.setValue(e,n,r)}setOptional(e,t,n){const r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let s=0,o=t.length;s!==o;++s){const a=t[s],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,t){const n=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in t&&n.push(o)}return n}}function Kl(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const zm=37297;let Hm=0;function km(i,e){const t=i.split(`
`),n=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}const Zl=new Ye;function Gm(i){ot._getMatrix(Zl,ot.workingColorSpace,i);const e=`mat3( ${Zl.elements.map(t=>t.toFixed(4))} )`;switch(ot.getTransfer(i)){case ea:return[e,"LinearTransferOETF"];case ft:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function jl(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),r=i.getShaderInfoLog(e).trim();if(n&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+km(i.getShaderSource(e),o)}else return r}function Vm(i,e){const t=Gm(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function Wm(i,e){let t;switch(e){case ju:t="Linear";break;case Ju:t="Reinhard";break;case Qu:t="Cineon";break;case ef:t="ACESFilmic";break;case nf:t="AgX";break;case rf:t="Neutral";break;case tf:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Cs=new W;function Xm(){ot.getLuminanceCoefficients(Cs);const i=Cs.x.toFixed(4),e=Cs.y.toFixed(4),t=Cs.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Ym(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Br).join(`
`)}function qm(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function $m(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){const s=i.getActiveAttrib(e,r),o=s.name;let a=1;s.type===i.FLOAT_MAT2&&(a=2),s.type===i.FLOAT_MAT3&&(a=3),s.type===i.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:i.getAttribLocation(e,o),locationSize:a}}return t}function Br(i){return i!==""}function Jl(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Ql(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Km=/^[ \t]*#include +<([\w\d./]+)>/gm;function Oo(i){return i.replace(Km,jm)}const Zm=new Map;function jm(i,e){let t=qe[e];if(t===void 0){const n=Zm.get(e);if(n!==void 0)t=qe[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Oo(t)}const Jm=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ec(i){return i.replace(Jm,Qm)}function Qm(i,e,t,n){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function tc(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function e_(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===yc?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===Pu?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===$n&&(e="SHADOWMAP_TYPE_VSM"),e}function t_(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Sr:case Er:e="ENVMAP_TYPE_CUBE";break;case la:e="ENVMAP_TYPE_CUBE_UV";break}return e}function n_(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Er:e="ENVMAP_MODE_REFRACTION";break}return e}function i_(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case bc:e="ENVMAP_BLENDING_MULTIPLY";break;case Ku:e="ENVMAP_BLENDING_MIX";break;case Zu:e="ENVMAP_BLENDING_ADD";break}return e}function r_(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function s_(i,e,t,n){const r=i.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=e_(t),c=t_(t),h=n_(t),p=i_(t),d=r_(t),f=Ym(t),v=qm(s),M=r.createProgram();let m,u,C=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(Br).join(`
`),m.length>0&&(m+=`
`),u=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(Br).join(`
`),u.length>0&&(u+=`
`)):(m=[tc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Br).join(`
`),u=[tc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+p:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==_i?"#define TONE_MAPPING":"",t.toneMapping!==_i?qe.tonemapping_pars_fragment:"",t.toneMapping!==_i?Wm("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",qe.colorspace_pars_fragment,Vm("linearToOutputTexel",t.outputColorSpace),Xm(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Br).join(`
`)),o=Oo(o),o=Jl(o,t),o=Ql(o,t),a=Oo(a),a=Jl(a,t),a=Ql(a,t),o=ec(o),a=ec(a),t.isRawShaderMaterial!==!0&&(C=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,u=["#define varying in",t.glslVersion===_l?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===_l?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+u);const y=C+m+o,S=C+u+a,I=Kl(r,r.VERTEX_SHADER,y),P=Kl(r,r.FRAGMENT_SHADER,S);r.attachShader(M,I),r.attachShader(M,P),t.index0AttributeName!==void 0?r.bindAttribLocation(M,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(M,0,"position"),r.linkProgram(M);function b(D){if(i.debug.checkShaderErrors){const B=r.getProgramInfoLog(M).trim(),G=r.getShaderInfoLog(I).trim(),X=r.getShaderInfoLog(P).trim();let Q=!0,Y=!0;if(r.getProgramParameter(M,r.LINK_STATUS)===!1)if(Q=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,M,I,P);else{const J=jl(r,I,"vertex"),k=jl(r,P,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(M,r.VALIDATE_STATUS)+`

Material Name: `+D.name+`
Material Type: `+D.type+`

Program Info Log: `+B+`
`+J+`
`+k)}else B!==""?console.warn("THREE.WebGLProgram: Program Info Log:",B):(G===""||X==="")&&(Y=!1);Y&&(D.diagnostics={runnable:Q,programLog:B,vertexShader:{log:G,prefix:m},fragmentShader:{log:X,prefix:u}})}r.deleteShader(I),r.deleteShader(P),N=new qs(r,M),T=$m(r,M)}let N;this.getUniforms=function(){return N===void 0&&b(this),N};let T;this.getAttributes=function(){return T===void 0&&b(this),T};let _=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return _===!1&&(_=r.getProgramParameter(M,zm)),_},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(M),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Hm++,this.cacheKey=e,this.usedTimes=1,this.program=M,this.vertexShader=I,this.fragmentShader=P,this}let a_=0;class o_{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new l_(e),t.set(e,n)),n}}class l_{constructor(e){this.id=a_++,this.code=e,this.usedTimes=0}}function c_(i,e,t,n,r,s,o){const a=new kc,l=new o_,c=new Set,h=[],p=r.logarithmicDepthBuffer,d=r.vertexTextures;let f=r.precision;const v={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function M(T){return c.add(T),T===0?"uv":`uv${T}`}function m(T,_,D,B,G){const X=B.fog,Q=G.geometry,Y=T.isMeshStandardMaterial?B.environment:null,J=(T.isMeshStandardMaterial?t:e).get(T.envMap||Y),k=J&&J.mapping===la?J.image.height:null,te=v[T.type];T.precision!==null&&(f=r.getMaxPrecision(T.precision),f!==T.precision&&console.warn("THREE.WebGLProgram.getParameters:",T.precision,"not supported, using",f,"instead."));const A=Q.morphAttributes.position||Q.morphAttributes.normal||Q.morphAttributes.color,_e=A!==void 0?A.length:0;let He=0;Q.morphAttributes.position!==void 0&&(He=1),Q.morphAttributes.normal!==void 0&&(He=2),Q.morphAttributes.color!==void 0&&(He=3);let et,q,re,pe;if(te){const ge=On[te];et=ge.vertexShader,q=ge.fragmentShader}else et=T.vertexShader,q=T.fragmentShader,l.update(T),re=l.getVertexShaderID(T),pe=l.getFragmentShaderID(T);const ne=i.getRenderTarget(),Te=i.state.buffers.depth.getReversed(),be=G.isInstancedMesh===!0,ze=G.isBatchedMesh===!0,$e=!!T.map,ke=!!T.matcap,Pe=!!J,R=!!T.aoMap,pt=!!T.lightMap,Fe=!!T.bumpMap,F=!!T.normalMap,Se=!!T.displacementMap,tt=!!T.emissiveMap,ye=!!T.metalnessMap,E=!!T.roughnessMap,g=T.anisotropy>0,z=T.clearcoat>0,j=T.dispersion>0,Z=T.iridescence>0,$=T.sheen>0,ce=T.transmission>0,ae=g&&!!T.anisotropyMap,fe=z&&!!T.clearcoatMap,Ve=z&&!!T.clearcoatNormalMap,ie=z&&!!T.clearcoatRoughnessMap,se=Z&&!!T.iridescenceMap,De=Z&&!!T.iridescenceThicknessMap,Le=$&&!!T.sheenColorMap,ve=$&&!!T.sheenRoughnessMap,We=!!T.specularMap,Ne=!!T.specularColorMap,rt=!!T.specularIntensityMap,w=ce&&!!T.transmissionMap,le=ce&&!!T.thicknessMap,V=!!T.gradientMap,K=!!T.alphaMap,oe=T.alphaTest>0,ue=!!T.alphaHash,Oe=!!T.extensions;let st=_i;T.toneMapped&&(ne===null||ne.isXRRenderTarget===!0)&&(st=i.toneMapping);const Et={shaderID:te,shaderType:T.type,shaderName:T.name,vertexShader:et,fragmentShader:q,defines:T.defines,customVertexShaderID:re,customFragmentShaderID:pe,isRawShaderMaterial:T.isRawShaderMaterial===!0,glslVersion:T.glslVersion,precision:f,batching:ze,batchingColor:ze&&G._colorsTexture!==null,instancing:be,instancingColor:be&&G.instanceColor!==null,instancingMorph:be&&G.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:ne===null?i.outputColorSpace:ne.isXRRenderTarget===!0?ne.texture.colorSpace:br,alphaToCoverage:!!T.alphaToCoverage,map:$e,matcap:ke,envMap:Pe,envMapMode:Pe&&J.mapping,envMapCubeUVHeight:k,aoMap:R,lightMap:pt,bumpMap:Fe,normalMap:F,displacementMap:d&&Se,emissiveMap:tt,normalMapObjectSpace:F&&T.normalMapType===cf,normalMapTangentSpace:F&&T.normalMapType===lf,metalnessMap:ye,roughnessMap:E,anisotropy:g,anisotropyMap:ae,clearcoat:z,clearcoatMap:fe,clearcoatNormalMap:Ve,clearcoatRoughnessMap:ie,dispersion:j,iridescence:Z,iridescenceMap:se,iridescenceThicknessMap:De,sheen:$,sheenColorMap:Le,sheenRoughnessMap:ve,specularMap:We,specularColorMap:Ne,specularIntensityMap:rt,transmission:ce,transmissionMap:w,thicknessMap:le,gradientMap:V,opaque:T.transparent===!1&&T.blending===pr&&T.alphaToCoverage===!1,alphaMap:K,alphaTest:oe,alphaHash:ue,combine:T.combine,mapUv:$e&&M(T.map.channel),aoMapUv:R&&M(T.aoMap.channel),lightMapUv:pt&&M(T.lightMap.channel),bumpMapUv:Fe&&M(T.bumpMap.channel),normalMapUv:F&&M(T.normalMap.channel),displacementMapUv:Se&&M(T.displacementMap.channel),emissiveMapUv:tt&&M(T.emissiveMap.channel),metalnessMapUv:ye&&M(T.metalnessMap.channel),roughnessMapUv:E&&M(T.roughnessMap.channel),anisotropyMapUv:ae&&M(T.anisotropyMap.channel),clearcoatMapUv:fe&&M(T.clearcoatMap.channel),clearcoatNormalMapUv:Ve&&M(T.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ie&&M(T.clearcoatRoughnessMap.channel),iridescenceMapUv:se&&M(T.iridescenceMap.channel),iridescenceThicknessMapUv:De&&M(T.iridescenceThicknessMap.channel),sheenColorMapUv:Le&&M(T.sheenColorMap.channel),sheenRoughnessMapUv:ve&&M(T.sheenRoughnessMap.channel),specularMapUv:We&&M(T.specularMap.channel),specularColorMapUv:Ne&&M(T.specularColorMap.channel),specularIntensityMapUv:rt&&M(T.specularIntensityMap.channel),transmissionMapUv:w&&M(T.transmissionMap.channel),thicknessMapUv:le&&M(T.thicknessMap.channel),alphaMapUv:K&&M(T.alphaMap.channel),vertexTangents:!!Q.attributes.tangent&&(F||g),vertexColors:T.vertexColors,vertexAlphas:T.vertexColors===!0&&!!Q.attributes.color&&Q.attributes.color.itemSize===4,pointsUvs:G.isPoints===!0&&!!Q.attributes.uv&&($e||K),fog:!!X,useFog:T.fog===!0,fogExp2:!!X&&X.isFogExp2,flatShading:T.flatShading===!0,sizeAttenuation:T.sizeAttenuation===!0,logarithmicDepthBuffer:p,reverseDepthBuffer:Te,skinning:G.isSkinnedMesh===!0,morphTargets:Q.morphAttributes.position!==void 0,morphNormals:Q.morphAttributes.normal!==void 0,morphColors:Q.morphAttributes.color!==void 0,morphTargetsCount:_e,morphTextureStride:He,numDirLights:_.directional.length,numPointLights:_.point.length,numSpotLights:_.spot.length,numSpotLightMaps:_.spotLightMap.length,numRectAreaLights:_.rectArea.length,numHemiLights:_.hemi.length,numDirLightShadows:_.directionalShadowMap.length,numPointLightShadows:_.pointShadowMap.length,numSpotLightShadows:_.spotShadowMap.length,numSpotLightShadowsWithMaps:_.numSpotLightShadowsWithMaps,numLightProbes:_.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:T.dithering,shadowMapEnabled:i.shadowMap.enabled&&D.length>0,shadowMapType:i.shadowMap.type,toneMapping:st,decodeVideoTexture:$e&&T.map.isVideoTexture===!0&&ot.getTransfer(T.map.colorSpace)===ft,decodeVideoTextureEmissive:tt&&T.emissiveMap.isVideoTexture===!0&&ot.getTransfer(T.emissiveMap.colorSpace)===ft,premultipliedAlpha:T.premultipliedAlpha,doubleSided:T.side===Kn,flipSided:T.side===ln,useDepthPacking:T.depthPacking>=0,depthPacking:T.depthPacking||0,index0AttributeName:T.index0AttributeName,extensionClipCullDistance:Oe&&T.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Oe&&T.extensions.multiDraw===!0||ze)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:T.customProgramCacheKey()};return Et.vertexUv1s=c.has(1),Et.vertexUv2s=c.has(2),Et.vertexUv3s=c.has(3),c.clear(),Et}function u(T){const _=[];if(T.shaderID?_.push(T.shaderID):(_.push(T.customVertexShaderID),_.push(T.customFragmentShaderID)),T.defines!==void 0)for(const D in T.defines)_.push(D),_.push(T.defines[D]);return T.isRawShaderMaterial===!1&&(C(_,T),y(_,T),_.push(i.outputColorSpace)),_.push(T.customProgramCacheKey),_.join()}function C(T,_){T.push(_.precision),T.push(_.outputColorSpace),T.push(_.envMapMode),T.push(_.envMapCubeUVHeight),T.push(_.mapUv),T.push(_.alphaMapUv),T.push(_.lightMapUv),T.push(_.aoMapUv),T.push(_.bumpMapUv),T.push(_.normalMapUv),T.push(_.displacementMapUv),T.push(_.emissiveMapUv),T.push(_.metalnessMapUv),T.push(_.roughnessMapUv),T.push(_.anisotropyMapUv),T.push(_.clearcoatMapUv),T.push(_.clearcoatNormalMapUv),T.push(_.clearcoatRoughnessMapUv),T.push(_.iridescenceMapUv),T.push(_.iridescenceThicknessMapUv),T.push(_.sheenColorMapUv),T.push(_.sheenRoughnessMapUv),T.push(_.specularMapUv),T.push(_.specularColorMapUv),T.push(_.specularIntensityMapUv),T.push(_.transmissionMapUv),T.push(_.thicknessMapUv),T.push(_.combine),T.push(_.fogExp2),T.push(_.sizeAttenuation),T.push(_.morphTargetsCount),T.push(_.morphAttributeCount),T.push(_.numDirLights),T.push(_.numPointLights),T.push(_.numSpotLights),T.push(_.numSpotLightMaps),T.push(_.numHemiLights),T.push(_.numRectAreaLights),T.push(_.numDirLightShadows),T.push(_.numPointLightShadows),T.push(_.numSpotLightShadows),T.push(_.numSpotLightShadowsWithMaps),T.push(_.numLightProbes),T.push(_.shadowMapType),T.push(_.toneMapping),T.push(_.numClippingPlanes),T.push(_.numClipIntersection),T.push(_.depthPacking)}function y(T,_){a.disableAll(),_.supportsVertexTextures&&a.enable(0),_.instancing&&a.enable(1),_.instancingColor&&a.enable(2),_.instancingMorph&&a.enable(3),_.matcap&&a.enable(4),_.envMap&&a.enable(5),_.normalMapObjectSpace&&a.enable(6),_.normalMapTangentSpace&&a.enable(7),_.clearcoat&&a.enable(8),_.iridescence&&a.enable(9),_.alphaTest&&a.enable(10),_.vertexColors&&a.enable(11),_.vertexAlphas&&a.enable(12),_.vertexUv1s&&a.enable(13),_.vertexUv2s&&a.enable(14),_.vertexUv3s&&a.enable(15),_.vertexTangents&&a.enable(16),_.anisotropy&&a.enable(17),_.alphaHash&&a.enable(18),_.batching&&a.enable(19),_.dispersion&&a.enable(20),_.batchingColor&&a.enable(21),T.push(a.mask),a.disableAll(),_.fog&&a.enable(0),_.useFog&&a.enable(1),_.flatShading&&a.enable(2),_.logarithmicDepthBuffer&&a.enable(3),_.reverseDepthBuffer&&a.enable(4),_.skinning&&a.enable(5),_.morphTargets&&a.enable(6),_.morphNormals&&a.enable(7),_.morphColors&&a.enable(8),_.premultipliedAlpha&&a.enable(9),_.shadowMapEnabled&&a.enable(10),_.doubleSided&&a.enable(11),_.flipSided&&a.enable(12),_.useDepthPacking&&a.enable(13),_.dithering&&a.enable(14),_.transmission&&a.enable(15),_.sheen&&a.enable(16),_.opaque&&a.enable(17),_.pointsUvs&&a.enable(18),_.decodeVideoTexture&&a.enable(19),_.decodeVideoTextureEmissive&&a.enable(20),_.alphaToCoverage&&a.enable(21),T.push(a.mask)}function S(T){const _=v[T.type];let D;if(_){const B=On[_];D=Hf.clone(B.uniforms)}else D=T.uniforms;return D}function I(T,_){let D;for(let B=0,G=h.length;B<G;B++){const X=h[B];if(X.cacheKey===_){D=X,++D.usedTimes;break}}return D===void 0&&(D=new s_(i,_,T,s),h.push(D)),D}function P(T){if(--T.usedTimes===0){const _=h.indexOf(T);h[_]=h[h.length-1],h.pop(),T.destroy()}}function b(T){l.remove(T)}function N(){l.dispose()}return{getParameters:m,getProgramCacheKey:u,getUniforms:S,acquireProgram:I,releaseProgram:P,releaseShaderCache:b,programs:h,dispose:N}}function u_(){let i=new WeakMap;function e(o){return i.has(o)}function t(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function r(o,a,l){i.get(o)[a]=l}function s(){i=new WeakMap}return{has:e,get:t,remove:n,update:r,dispose:s}}function f_(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function nc(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function ic(){const i=[];let e=0;const t=[],n=[],r=[];function s(){e=0,t.length=0,n.length=0,r.length=0}function o(p,d,f,v,M,m){let u=i[e];return u===void 0?(u={id:p.id,object:p,geometry:d,material:f,groupOrder:v,renderOrder:p.renderOrder,z:M,group:m},i[e]=u):(u.id=p.id,u.object=p,u.geometry=d,u.material=f,u.groupOrder=v,u.renderOrder=p.renderOrder,u.z=M,u.group=m),e++,u}function a(p,d,f,v,M,m){const u=o(p,d,f,v,M,m);f.transmission>0?n.push(u):f.transparent===!0?r.push(u):t.push(u)}function l(p,d,f,v,M,m){const u=o(p,d,f,v,M,m);f.transmission>0?n.unshift(u):f.transparent===!0?r.unshift(u):t.unshift(u)}function c(p,d){t.length>1&&t.sort(p||f_),n.length>1&&n.sort(d||nc),r.length>1&&r.sort(d||nc)}function h(){for(let p=e,d=i.length;p<d;p++){const f=i[p];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:n,transparent:r,init:s,push:a,unshift:l,finish:h,sort:c}}function h_(){let i=new WeakMap;function e(n,r){const s=i.get(n);let o;return s===void 0?(o=new ic,i.set(n,[o])):r>=s.length?(o=new ic,s.push(o)):o=s[r],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function d_(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new W,color:new ht};break;case"SpotLight":t={position:new W,direction:new W,color:new ht,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new W,color:new ht,distance:0,decay:0};break;case"HemisphereLight":t={direction:new W,skyColor:new ht,groundColor:new ht};break;case"RectAreaLight":t={color:new ht,position:new W,halfWidth:new W,halfHeight:new W};break}return i[e.id]=t,t}}}function p_(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new dt};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new dt};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new dt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let m_=0;function __(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function g_(i){const e=new d_,t=p_(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new W);const r=new W,s=new Pt,o=new Pt;function a(c){let h=0,p=0,d=0;for(let T=0;T<9;T++)n.probe[T].set(0,0,0);let f=0,v=0,M=0,m=0,u=0,C=0,y=0,S=0,I=0,P=0,b=0;c.sort(__);for(let T=0,_=c.length;T<_;T++){const D=c[T],B=D.color,G=D.intensity,X=D.distance,Q=D.shadow&&D.shadow.map?D.shadow.map.texture:null;if(D.isAmbientLight)h+=B.r*G,p+=B.g*G,d+=B.b*G;else if(D.isLightProbe){for(let Y=0;Y<9;Y++)n.probe[Y].addScaledVector(D.sh.coefficients[Y],G);b++}else if(D.isDirectionalLight){const Y=e.get(D);if(Y.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){const J=D.shadow,k=t.get(D);k.shadowIntensity=J.intensity,k.shadowBias=J.bias,k.shadowNormalBias=J.normalBias,k.shadowRadius=J.radius,k.shadowMapSize=J.mapSize,n.directionalShadow[f]=k,n.directionalShadowMap[f]=Q,n.directionalShadowMatrix[f]=D.shadow.matrix,C++}n.directional[f]=Y,f++}else if(D.isSpotLight){const Y=e.get(D);Y.position.setFromMatrixPosition(D.matrixWorld),Y.color.copy(B).multiplyScalar(G),Y.distance=X,Y.coneCos=Math.cos(D.angle),Y.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),Y.decay=D.decay,n.spot[M]=Y;const J=D.shadow;if(D.map&&(n.spotLightMap[I]=D.map,I++,J.updateMatrices(D),D.castShadow&&P++),n.spotLightMatrix[M]=J.matrix,D.castShadow){const k=t.get(D);k.shadowIntensity=J.intensity,k.shadowBias=J.bias,k.shadowNormalBias=J.normalBias,k.shadowRadius=J.radius,k.shadowMapSize=J.mapSize,n.spotShadow[M]=k,n.spotShadowMap[M]=Q,S++}M++}else if(D.isRectAreaLight){const Y=e.get(D);Y.color.copy(B).multiplyScalar(G),Y.halfWidth.set(D.width*.5,0,0),Y.halfHeight.set(0,D.height*.5,0),n.rectArea[m]=Y,m++}else if(D.isPointLight){const Y=e.get(D);if(Y.color.copy(D.color).multiplyScalar(D.intensity),Y.distance=D.distance,Y.decay=D.decay,D.castShadow){const J=D.shadow,k=t.get(D);k.shadowIntensity=J.intensity,k.shadowBias=J.bias,k.shadowNormalBias=J.normalBias,k.shadowRadius=J.radius,k.shadowMapSize=J.mapSize,k.shadowCameraNear=J.camera.near,k.shadowCameraFar=J.camera.far,n.pointShadow[v]=k,n.pointShadowMap[v]=Q,n.pointShadowMatrix[v]=D.shadow.matrix,y++}n.point[v]=Y,v++}else if(D.isHemisphereLight){const Y=e.get(D);Y.skyColor.copy(D.color).multiplyScalar(G),Y.groundColor.copy(D.groundColor).multiplyScalar(G),n.hemi[u]=Y,u++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=me.LTC_FLOAT_1,n.rectAreaLTC2=me.LTC_FLOAT_2):(n.rectAreaLTC1=me.LTC_HALF_1,n.rectAreaLTC2=me.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=p,n.ambient[2]=d;const N=n.hash;(N.directionalLength!==f||N.pointLength!==v||N.spotLength!==M||N.rectAreaLength!==m||N.hemiLength!==u||N.numDirectionalShadows!==C||N.numPointShadows!==y||N.numSpotShadows!==S||N.numSpotMaps!==I||N.numLightProbes!==b)&&(n.directional.length=f,n.spot.length=M,n.rectArea.length=m,n.point.length=v,n.hemi.length=u,n.directionalShadow.length=C,n.directionalShadowMap.length=C,n.pointShadow.length=y,n.pointShadowMap.length=y,n.spotShadow.length=S,n.spotShadowMap.length=S,n.directionalShadowMatrix.length=C,n.pointShadowMatrix.length=y,n.spotLightMatrix.length=S+I-P,n.spotLightMap.length=I,n.numSpotLightShadowsWithMaps=P,n.numLightProbes=b,N.directionalLength=f,N.pointLength=v,N.spotLength=M,N.rectAreaLength=m,N.hemiLength=u,N.numDirectionalShadows=C,N.numPointShadows=y,N.numSpotShadows=S,N.numSpotMaps=I,N.numLightProbes=b,n.version=m_++)}function l(c,h){let p=0,d=0,f=0,v=0,M=0;const m=h.matrixWorldInverse;for(let u=0,C=c.length;u<C;u++){const y=c[u];if(y.isDirectionalLight){const S=n.directional[p];S.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(m),p++}else if(y.isSpotLight){const S=n.spot[f];S.position.setFromMatrixPosition(y.matrixWorld),S.position.applyMatrix4(m),S.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(m),f++}else if(y.isRectAreaLight){const S=n.rectArea[v];S.position.setFromMatrixPosition(y.matrixWorld),S.position.applyMatrix4(m),o.identity(),s.copy(y.matrixWorld),s.premultiply(m),o.extractRotation(s),S.halfWidth.set(y.width*.5,0,0),S.halfHeight.set(0,y.height*.5,0),S.halfWidth.applyMatrix4(o),S.halfHeight.applyMatrix4(o),v++}else if(y.isPointLight){const S=n.point[d];S.position.setFromMatrixPosition(y.matrixWorld),S.position.applyMatrix4(m),d++}else if(y.isHemisphereLight){const S=n.hemi[M];S.direction.setFromMatrixPosition(y.matrixWorld),S.direction.transformDirection(m),M++}}}return{setup:a,setupView:l,state:n}}function rc(i){const e=new g_(i),t=[],n=[];function r(h){c.camera=h,t.length=0,n.length=0}function s(h){t.push(h)}function o(h){n.push(h)}function a(){e.setup(t)}function l(h){e.setupView(t,h)}const c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function v_(i){let e=new WeakMap;function t(r,s=0){const o=e.get(r);let a;return o===void 0?(a=new rc(i),e.set(r,[a])):s>=o.length?(a=new rc(i),o.push(a)):a=o[s],a}function n(){e=new WeakMap}return{get:t,dispose:n}}const x_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,M_=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function S_(i,e,t){let n=new Kc;const r=new dt,s=new dt,o=new bt,a=new $f({depthPacking:of}),l=new Kf,c={},h=t.maxTextureSize,p={[vi]:ln,[ln]:vi,[Kn]:Kn},d=new ri({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new dt},radius:{value:4}},vertexShader:x_,fragmentShader:M_}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const v=new Xi;v.setAttribute("position",new kn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const M=new zn(v,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=yc;let u=this.type;this.render=function(P,b,N){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||P.length===0)return;const T=i.getRenderTarget(),_=i.getActiveCubeFace(),D=i.getActiveMipmapLevel(),B=i.state;B.setBlending(mi),B.buffers.color.setClear(1,1,1,1),B.buffers.depth.setTest(!0),B.setScissorTest(!1);const G=u!==$n&&this.type===$n,X=u===$n&&this.type!==$n;for(let Q=0,Y=P.length;Q<Y;Q++){const J=P[Q],k=J.shadow;if(k===void 0){console.warn("THREE.WebGLShadowMap:",J,"has no shadow.");continue}if(k.autoUpdate===!1&&k.needsUpdate===!1)continue;r.copy(k.mapSize);const te=k.getFrameExtents();if(r.multiply(te),s.copy(k.mapSize),(r.x>h||r.y>h)&&(r.x>h&&(s.x=Math.floor(h/te.x),r.x=s.x*te.x,k.mapSize.x=s.x),r.y>h&&(s.y=Math.floor(h/te.y),r.y=s.y*te.y,k.mapSize.y=s.y)),k.map===null||G===!0||X===!0){const _e=this.type!==$n?{minFilter:Nn,magFilter:Nn}:{};k.map!==null&&k.map.dispose(),k.map=new ki(r.x,r.y,_e),k.map.texture.name=J.name+".shadowMap",k.camera.updateProjectionMatrix()}i.setRenderTarget(k.map),i.clear();const A=k.getViewportCount();for(let _e=0;_e<A;_e++){const He=k.getViewport(_e);o.set(s.x*He.x,s.y*He.y,s.x*He.z,s.y*He.w),B.viewport(o),k.updateMatrices(J,_e),n=k.getFrustum(),S(b,N,k.camera,J,this.type)}k.isPointLightShadow!==!0&&this.type===$n&&C(k,N),k.needsUpdate=!1}u=this.type,m.needsUpdate=!1,i.setRenderTarget(T,_,D)};function C(P,b){const N=e.update(M);d.defines.VSM_SAMPLES!==P.blurSamples&&(d.defines.VSM_SAMPLES=P.blurSamples,f.defines.VSM_SAMPLES=P.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),P.mapPass===null&&(P.mapPass=new ki(r.x,r.y)),d.uniforms.shadow_pass.value=P.map.texture,d.uniforms.resolution.value=P.mapSize,d.uniforms.radius.value=P.radius,i.setRenderTarget(P.mapPass),i.clear(),i.renderBufferDirect(b,null,N,d,M,null),f.uniforms.shadow_pass.value=P.mapPass.texture,f.uniforms.resolution.value=P.mapSize,f.uniforms.radius.value=P.radius,i.setRenderTarget(P.map),i.clear(),i.renderBufferDirect(b,null,N,f,M,null)}function y(P,b,N,T){let _=null;const D=N.isPointLight===!0?P.customDistanceMaterial:P.customDepthMaterial;if(D!==void 0)_=D;else if(_=N.isPointLight===!0?l:a,i.localClippingEnabled&&b.clipShadows===!0&&Array.isArray(b.clippingPlanes)&&b.clippingPlanes.length!==0||b.displacementMap&&b.displacementScale!==0||b.alphaMap&&b.alphaTest>0||b.map&&b.alphaTest>0){const B=_.uuid,G=b.uuid;let X=c[B];X===void 0&&(X={},c[B]=X);let Q=X[G];Q===void 0&&(Q=_.clone(),X[G]=Q,b.addEventListener("dispose",I)),_=Q}if(_.visible=b.visible,_.wireframe=b.wireframe,T===$n?_.side=b.shadowSide!==null?b.shadowSide:b.side:_.side=b.shadowSide!==null?b.shadowSide:p[b.side],_.alphaMap=b.alphaMap,_.alphaTest=b.alphaTest,_.map=b.map,_.clipShadows=b.clipShadows,_.clippingPlanes=b.clippingPlanes,_.clipIntersection=b.clipIntersection,_.displacementMap=b.displacementMap,_.displacementScale=b.displacementScale,_.displacementBias=b.displacementBias,_.wireframeLinewidth=b.wireframeLinewidth,_.linewidth=b.linewidth,N.isPointLight===!0&&_.isMeshDistanceMaterial===!0){const B=i.properties.get(_);B.light=N}return _}function S(P,b,N,T,_){if(P.visible===!1)return;if(P.layers.test(b.layers)&&(P.isMesh||P.isLine||P.isPoints)&&(P.castShadow||P.receiveShadow&&_===$n)&&(!P.frustumCulled||n.intersectsObject(P))){P.modelViewMatrix.multiplyMatrices(N.matrixWorldInverse,P.matrixWorld);const G=e.update(P),X=P.material;if(Array.isArray(X)){const Q=G.groups;for(let Y=0,J=Q.length;Y<J;Y++){const k=Q[Y],te=X[k.materialIndex];if(te&&te.visible){const A=y(P,te,T,_);P.onBeforeShadow(i,P,b,N,G,A,k),i.renderBufferDirect(N,null,G,A,P,k),P.onAfterShadow(i,P,b,N,G,A,k)}}}else if(X.visible){const Q=y(P,X,T,_);P.onBeforeShadow(i,P,b,N,G,Q,null),i.renderBufferDirect(N,null,G,Q,P,null),P.onAfterShadow(i,P,b,N,G,Q,null)}}const B=P.children;for(let G=0,X=B.length;G<X;G++)S(B[G],b,N,T,_)}function I(P){P.target.removeEventListener("dispose",I);for(const N in c){const T=c[N],_=P.target.uuid;_ in T&&(T[_].dispose(),delete T[_])}}}const E_={[Ja]:Qa,[eo]:io,[to]:ro,[Mr]:no,[Qa]:Ja,[io]:eo,[ro]:to,[no]:Mr};function T_(i,e){function t(){let w=!1;const le=new bt;let V=null;const K=new bt(0,0,0,0);return{setMask:function(oe){V!==oe&&!w&&(i.colorMask(oe,oe,oe,oe),V=oe)},setLocked:function(oe){w=oe},setClear:function(oe,ue,Oe,st,Et){Et===!0&&(oe*=st,ue*=st,Oe*=st),le.set(oe,ue,Oe,st),K.equals(le)===!1&&(i.clearColor(oe,ue,Oe,st),K.copy(le))},reset:function(){w=!1,V=null,K.set(-1,0,0,0)}}}function n(){let w=!1,le=!1,V=null,K=null,oe=null;return{setReversed:function(ue){if(le!==ue){const Oe=e.get("EXT_clip_control");le?Oe.clipControlEXT(Oe.LOWER_LEFT_EXT,Oe.ZERO_TO_ONE_EXT):Oe.clipControlEXT(Oe.LOWER_LEFT_EXT,Oe.NEGATIVE_ONE_TO_ONE_EXT);const st=oe;oe=null,this.setClear(st)}le=ue},getReversed:function(){return le},setTest:function(ue){ue?ne(i.DEPTH_TEST):Te(i.DEPTH_TEST)},setMask:function(ue){V!==ue&&!w&&(i.depthMask(ue),V=ue)},setFunc:function(ue){if(le&&(ue=E_[ue]),K!==ue){switch(ue){case Ja:i.depthFunc(i.NEVER);break;case Qa:i.depthFunc(i.ALWAYS);break;case eo:i.depthFunc(i.LESS);break;case Mr:i.depthFunc(i.LEQUAL);break;case to:i.depthFunc(i.EQUAL);break;case no:i.depthFunc(i.GEQUAL);break;case io:i.depthFunc(i.GREATER);break;case ro:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}K=ue}},setLocked:function(ue){w=ue},setClear:function(ue){oe!==ue&&(le&&(ue=1-ue),i.clearDepth(ue),oe=ue)},reset:function(){w=!1,V=null,K=null,oe=null,le=!1}}}function r(){let w=!1,le=null,V=null,K=null,oe=null,ue=null,Oe=null,st=null,Et=null;return{setTest:function(ge){w||(ge?ne(i.STENCIL_TEST):Te(i.STENCIL_TEST))},setMask:function(ge){le!==ge&&!w&&(i.stencilMask(ge),le=ge)},setFunc:function(ge,Ae,Xe){(V!==ge||K!==Ae||oe!==Xe)&&(i.stencilFunc(ge,Ae,Xe),V=ge,K=Ae,oe=Xe)},setOp:function(ge,Ae,Xe){(ue!==ge||Oe!==Ae||st!==Xe)&&(i.stencilOp(ge,Ae,Xe),ue=ge,Oe=Ae,st=Xe)},setLocked:function(ge){w=ge},setClear:function(ge){Et!==ge&&(i.clearStencil(ge),Et=ge)},reset:function(){w=!1,le=null,V=null,K=null,oe=null,ue=null,Oe=null,st=null,Et=null}}}const s=new t,o=new n,a=new r,l=new WeakMap,c=new WeakMap;let h={},p={},d=new WeakMap,f=[],v=null,M=!1,m=null,u=null,C=null,y=null,S=null,I=null,P=null,b=new ht(0,0,0),N=0,T=!1,_=null,D=null,B=null,G=null,X=null;const Q=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let Y=!1,J=0;const k=i.getParameter(i.VERSION);k.indexOf("WebGL")!==-1?(J=parseFloat(/^WebGL (\d)/.exec(k)[1]),Y=J>=1):k.indexOf("OpenGL ES")!==-1&&(J=parseFloat(/^OpenGL ES (\d)/.exec(k)[1]),Y=J>=2);let te=null,A={};const _e=i.getParameter(i.SCISSOR_BOX),He=i.getParameter(i.VIEWPORT),et=new bt().fromArray(_e),q=new bt().fromArray(He);function re(w,le,V,K){const oe=new Uint8Array(4),ue=i.createTexture();i.bindTexture(w,ue),i.texParameteri(w,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(w,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Oe=0;Oe<V;Oe++)w===i.TEXTURE_3D||w===i.TEXTURE_2D_ARRAY?i.texImage3D(le,0,i.RGBA,1,1,K,0,i.RGBA,i.UNSIGNED_BYTE,oe):i.texImage2D(le+Oe,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,oe);return ue}const pe={};pe[i.TEXTURE_2D]=re(i.TEXTURE_2D,i.TEXTURE_2D,1),pe[i.TEXTURE_CUBE_MAP]=re(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),pe[i.TEXTURE_2D_ARRAY]=re(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),pe[i.TEXTURE_3D]=re(i.TEXTURE_3D,i.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),ne(i.DEPTH_TEST),o.setFunc(Mr),Fe(!1),F(ul),ne(i.CULL_FACE),R(mi);function ne(w){h[w]!==!0&&(i.enable(w),h[w]=!0)}function Te(w){h[w]!==!1&&(i.disable(w),h[w]=!1)}function be(w,le){return p[w]!==le?(i.bindFramebuffer(w,le),p[w]=le,w===i.DRAW_FRAMEBUFFER&&(p[i.FRAMEBUFFER]=le),w===i.FRAMEBUFFER&&(p[i.DRAW_FRAMEBUFFER]=le),!0):!1}function ze(w,le){let V=f,K=!1;if(w){V=d.get(le),V===void 0&&(V=[],d.set(le,V));const oe=w.textures;if(V.length!==oe.length||V[0]!==i.COLOR_ATTACHMENT0){for(let ue=0,Oe=oe.length;ue<Oe;ue++)V[ue]=i.COLOR_ATTACHMENT0+ue;V.length=oe.length,K=!0}}else V[0]!==i.BACK&&(V[0]=i.BACK,K=!0);K&&i.drawBuffers(V)}function $e(w){return v!==w?(i.useProgram(w),v=w,!0):!1}const ke={[Di]:i.FUNC_ADD,[Lu]:i.FUNC_SUBTRACT,[Uu]:i.FUNC_REVERSE_SUBTRACT};ke[Iu]=i.MIN,ke[Nu]=i.MAX;const Pe={[Fu]:i.ZERO,[Ou]:i.ONE,[Bu]:i.SRC_COLOR,[Za]:i.SRC_ALPHA,[Wu]:i.SRC_ALPHA_SATURATE,[Gu]:i.DST_COLOR,[Hu]:i.DST_ALPHA,[zu]:i.ONE_MINUS_SRC_COLOR,[ja]:i.ONE_MINUS_SRC_ALPHA,[Vu]:i.ONE_MINUS_DST_COLOR,[ku]:i.ONE_MINUS_DST_ALPHA,[Xu]:i.CONSTANT_COLOR,[Yu]:i.ONE_MINUS_CONSTANT_COLOR,[qu]:i.CONSTANT_ALPHA,[$u]:i.ONE_MINUS_CONSTANT_ALPHA};function R(w,le,V,K,oe,ue,Oe,st,Et,ge){if(w===mi){M===!0&&(Te(i.BLEND),M=!1);return}if(M===!1&&(ne(i.BLEND),M=!0),w!==Du){if(w!==m||ge!==T){if((u!==Di||S!==Di)&&(i.blendEquation(i.FUNC_ADD),u=Di,S=Di),ge)switch(w){case pr:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case fl:i.blendFunc(i.ONE,i.ONE);break;case hl:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case dl:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",w);break}else switch(w){case pr:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case fl:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case hl:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case dl:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",w);break}C=null,y=null,I=null,P=null,b.set(0,0,0),N=0,m=w,T=ge}return}oe=oe||le,ue=ue||V,Oe=Oe||K,(le!==u||oe!==S)&&(i.blendEquationSeparate(ke[le],ke[oe]),u=le,S=oe),(V!==C||K!==y||ue!==I||Oe!==P)&&(i.blendFuncSeparate(Pe[V],Pe[K],Pe[ue],Pe[Oe]),C=V,y=K,I=ue,P=Oe),(st.equals(b)===!1||Et!==N)&&(i.blendColor(st.r,st.g,st.b,Et),b.copy(st),N=Et),m=w,T=!1}function pt(w,le){w.side===Kn?Te(i.CULL_FACE):ne(i.CULL_FACE);let V=w.side===ln;le&&(V=!V),Fe(V),w.blending===pr&&w.transparent===!1?R(mi):R(w.blending,w.blendEquation,w.blendSrc,w.blendDst,w.blendEquationAlpha,w.blendSrcAlpha,w.blendDstAlpha,w.blendColor,w.blendAlpha,w.premultipliedAlpha),o.setFunc(w.depthFunc),o.setTest(w.depthTest),o.setMask(w.depthWrite),s.setMask(w.colorWrite);const K=w.stencilWrite;a.setTest(K),K&&(a.setMask(w.stencilWriteMask),a.setFunc(w.stencilFunc,w.stencilRef,w.stencilFuncMask),a.setOp(w.stencilFail,w.stencilZFail,w.stencilZPass)),tt(w.polygonOffset,w.polygonOffsetFactor,w.polygonOffsetUnits),w.alphaToCoverage===!0?ne(i.SAMPLE_ALPHA_TO_COVERAGE):Te(i.SAMPLE_ALPHA_TO_COVERAGE)}function Fe(w){_!==w&&(w?i.frontFace(i.CW):i.frontFace(i.CCW),_=w)}function F(w){w!==wu?(ne(i.CULL_FACE),w!==D&&(w===ul?i.cullFace(i.BACK):w===Cu?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Te(i.CULL_FACE),D=w}function Se(w){w!==B&&(Y&&i.lineWidth(w),B=w)}function tt(w,le,V){w?(ne(i.POLYGON_OFFSET_FILL),(G!==le||X!==V)&&(i.polygonOffset(le,V),G=le,X=V)):Te(i.POLYGON_OFFSET_FILL)}function ye(w){w?ne(i.SCISSOR_TEST):Te(i.SCISSOR_TEST)}function E(w){w===void 0&&(w=i.TEXTURE0+Q-1),te!==w&&(i.activeTexture(w),te=w)}function g(w,le,V){V===void 0&&(te===null?V=i.TEXTURE0+Q-1:V=te);let K=A[V];K===void 0&&(K={type:void 0,texture:void 0},A[V]=K),(K.type!==w||K.texture!==le)&&(te!==V&&(i.activeTexture(V),te=V),i.bindTexture(w,le||pe[w]),K.type=w,K.texture=le)}function z(){const w=A[te];w!==void 0&&w.type!==void 0&&(i.bindTexture(w.type,null),w.type=void 0,w.texture=void 0)}function j(){try{i.compressedTexImage2D.apply(i,arguments)}catch(w){console.error("THREE.WebGLState:",w)}}function Z(){try{i.compressedTexImage3D.apply(i,arguments)}catch(w){console.error("THREE.WebGLState:",w)}}function $(){try{i.texSubImage2D.apply(i,arguments)}catch(w){console.error("THREE.WebGLState:",w)}}function ce(){try{i.texSubImage3D.apply(i,arguments)}catch(w){console.error("THREE.WebGLState:",w)}}function ae(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(w){console.error("THREE.WebGLState:",w)}}function fe(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(w){console.error("THREE.WebGLState:",w)}}function Ve(){try{i.texStorage2D.apply(i,arguments)}catch(w){console.error("THREE.WebGLState:",w)}}function ie(){try{i.texStorage3D.apply(i,arguments)}catch(w){console.error("THREE.WebGLState:",w)}}function se(){try{i.texImage2D.apply(i,arguments)}catch(w){console.error("THREE.WebGLState:",w)}}function De(){try{i.texImage3D.apply(i,arguments)}catch(w){console.error("THREE.WebGLState:",w)}}function Le(w){et.equals(w)===!1&&(i.scissor(w.x,w.y,w.z,w.w),et.copy(w))}function ve(w){q.equals(w)===!1&&(i.viewport(w.x,w.y,w.z,w.w),q.copy(w))}function We(w,le){let V=c.get(le);V===void 0&&(V=new WeakMap,c.set(le,V));let K=V.get(w);K===void 0&&(K=i.getUniformBlockIndex(le,w.name),V.set(w,K))}function Ne(w,le){const K=c.get(le).get(w);l.get(le)!==K&&(i.uniformBlockBinding(le,K,w.__bindingPointIndex),l.set(le,K))}function rt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},te=null,A={},p={},d=new WeakMap,f=[],v=null,M=!1,m=null,u=null,C=null,y=null,S=null,I=null,P=null,b=new ht(0,0,0),N=0,T=!1,_=null,D=null,B=null,G=null,X=null,et.set(0,0,i.canvas.width,i.canvas.height),q.set(0,0,i.canvas.width,i.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:ne,disable:Te,bindFramebuffer:be,drawBuffers:ze,useProgram:$e,setBlending:R,setMaterial:pt,setFlipSided:Fe,setCullFace:F,setLineWidth:Se,setPolygonOffset:tt,setScissorTest:ye,activeTexture:E,bindTexture:g,unbindTexture:z,compressedTexImage2D:j,compressedTexImage3D:Z,texImage2D:se,texImage3D:De,updateUBOMapping:We,uniformBlockBinding:Ne,texStorage2D:Ve,texStorage3D:ie,texSubImage2D:$,texSubImage3D:ce,compressedTexSubImage2D:ae,compressedTexSubImage3D:fe,scissor:Le,viewport:ve,reset:rt}}function y_(i,e,t,n,r,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new dt,h=new WeakMap;let p;const d=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(E,g){return f?new OffscreenCanvas(E,g):na("canvas")}function M(E,g,z){let j=1;const Z=ye(E);if((Z.width>z||Z.height>z)&&(j=z/Math.max(Z.width,Z.height)),j<1)if(typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&E instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&E instanceof ImageBitmap||typeof VideoFrame<"u"&&E instanceof VideoFrame){const $=Math.floor(j*Z.width),ce=Math.floor(j*Z.height);p===void 0&&(p=v($,ce));const ae=g?v($,ce):p;return ae.width=$,ae.height=ce,ae.getContext("2d").drawImage(E,0,0,$,ce),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Z.width+"x"+Z.height+") to ("+$+"x"+ce+")."),ae}else return"data"in E&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Z.width+"x"+Z.height+")."),E;return E}function m(E){return E.generateMipmaps}function u(E){i.generateMipmap(E)}function C(E){return E.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:E.isWebGL3DRenderTarget?i.TEXTURE_3D:E.isWebGLArrayRenderTarget||E.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function y(E,g,z,j,Z=!1){if(E!==null){if(i[E]!==void 0)return i[E];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+E+"'")}let $=g;if(g===i.RED&&(z===i.FLOAT&&($=i.R32F),z===i.HALF_FLOAT&&($=i.R16F),z===i.UNSIGNED_BYTE&&($=i.R8)),g===i.RED_INTEGER&&(z===i.UNSIGNED_BYTE&&($=i.R8UI),z===i.UNSIGNED_SHORT&&($=i.R16UI),z===i.UNSIGNED_INT&&($=i.R32UI),z===i.BYTE&&($=i.R8I),z===i.SHORT&&($=i.R16I),z===i.INT&&($=i.R32I)),g===i.RG&&(z===i.FLOAT&&($=i.RG32F),z===i.HALF_FLOAT&&($=i.RG16F),z===i.UNSIGNED_BYTE&&($=i.RG8)),g===i.RG_INTEGER&&(z===i.UNSIGNED_BYTE&&($=i.RG8UI),z===i.UNSIGNED_SHORT&&($=i.RG16UI),z===i.UNSIGNED_INT&&($=i.RG32UI),z===i.BYTE&&($=i.RG8I),z===i.SHORT&&($=i.RG16I),z===i.INT&&($=i.RG32I)),g===i.RGB_INTEGER&&(z===i.UNSIGNED_BYTE&&($=i.RGB8UI),z===i.UNSIGNED_SHORT&&($=i.RGB16UI),z===i.UNSIGNED_INT&&($=i.RGB32UI),z===i.BYTE&&($=i.RGB8I),z===i.SHORT&&($=i.RGB16I),z===i.INT&&($=i.RGB32I)),g===i.RGBA_INTEGER&&(z===i.UNSIGNED_BYTE&&($=i.RGBA8UI),z===i.UNSIGNED_SHORT&&($=i.RGBA16UI),z===i.UNSIGNED_INT&&($=i.RGBA32UI),z===i.BYTE&&($=i.RGBA8I),z===i.SHORT&&($=i.RGBA16I),z===i.INT&&($=i.RGBA32I)),g===i.RGB&&z===i.UNSIGNED_INT_5_9_9_9_REV&&($=i.RGB9_E5),g===i.RGBA){const ce=Z?ea:ot.getTransfer(j);z===i.FLOAT&&($=i.RGBA32F),z===i.HALF_FLOAT&&($=i.RGBA16F),z===i.UNSIGNED_BYTE&&($=ce===ft?i.SRGB8_ALPHA8:i.RGBA8),z===i.UNSIGNED_SHORT_4_4_4_4&&($=i.RGBA4),z===i.UNSIGNED_SHORT_5_5_5_1&&($=i.RGB5_A1)}return($===i.R16F||$===i.R32F||$===i.RG16F||$===i.RG32F||$===i.RGBA16F||$===i.RGBA32F)&&e.get("EXT_color_buffer_float"),$}function S(E,g){let z;return E?g===null||g===Hi||g===Tr?z=i.DEPTH24_STENCIL8:g===jn?z=i.DEPTH32F_STENCIL8:g===Qr&&(z=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):g===null||g===Hi||g===Tr?z=i.DEPTH_COMPONENT24:g===jn?z=i.DEPTH_COMPONENT32F:g===Qr&&(z=i.DEPTH_COMPONENT16),z}function I(E,g){return m(E)===!0||E.isFramebufferTexture&&E.minFilter!==Nn&&E.minFilter!==Bn?Math.log2(Math.max(g.width,g.height))+1:E.mipmaps!==void 0&&E.mipmaps.length>0?E.mipmaps.length:E.isCompressedTexture&&Array.isArray(E.image)?g.mipmaps.length:1}function P(E){const g=E.target;g.removeEventListener("dispose",P),N(g),g.isVideoTexture&&h.delete(g)}function b(E){const g=E.target;g.removeEventListener("dispose",b),_(g)}function N(E){const g=n.get(E);if(g.__webglInit===void 0)return;const z=E.source,j=d.get(z);if(j){const Z=j[g.__cacheKey];Z.usedTimes--,Z.usedTimes===0&&T(E),Object.keys(j).length===0&&d.delete(z)}n.remove(E)}function T(E){const g=n.get(E);i.deleteTexture(g.__webglTexture);const z=E.source,j=d.get(z);delete j[g.__cacheKey],o.memory.textures--}function _(E){const g=n.get(E);if(E.depthTexture&&(E.depthTexture.dispose(),n.remove(E.depthTexture)),E.isWebGLCubeRenderTarget)for(let j=0;j<6;j++){if(Array.isArray(g.__webglFramebuffer[j]))for(let Z=0;Z<g.__webglFramebuffer[j].length;Z++)i.deleteFramebuffer(g.__webglFramebuffer[j][Z]);else i.deleteFramebuffer(g.__webglFramebuffer[j]);g.__webglDepthbuffer&&i.deleteRenderbuffer(g.__webglDepthbuffer[j])}else{if(Array.isArray(g.__webglFramebuffer))for(let j=0;j<g.__webglFramebuffer.length;j++)i.deleteFramebuffer(g.__webglFramebuffer[j]);else i.deleteFramebuffer(g.__webglFramebuffer);if(g.__webglDepthbuffer&&i.deleteRenderbuffer(g.__webglDepthbuffer),g.__webglMultisampledFramebuffer&&i.deleteFramebuffer(g.__webglMultisampledFramebuffer),g.__webglColorRenderbuffer)for(let j=0;j<g.__webglColorRenderbuffer.length;j++)g.__webglColorRenderbuffer[j]&&i.deleteRenderbuffer(g.__webglColorRenderbuffer[j]);g.__webglDepthRenderbuffer&&i.deleteRenderbuffer(g.__webglDepthRenderbuffer)}const z=E.textures;for(let j=0,Z=z.length;j<Z;j++){const $=n.get(z[j]);$.__webglTexture&&(i.deleteTexture($.__webglTexture),o.memory.textures--),n.remove(z[j])}n.remove(E)}let D=0;function B(){D=0}function G(){const E=D;return E>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+E+" texture units while this GPU supports only "+r.maxTextures),D+=1,E}function X(E){const g=[];return g.push(E.wrapS),g.push(E.wrapT),g.push(E.wrapR||0),g.push(E.magFilter),g.push(E.minFilter),g.push(E.anisotropy),g.push(E.internalFormat),g.push(E.format),g.push(E.type),g.push(E.generateMipmaps),g.push(E.premultiplyAlpha),g.push(E.flipY),g.push(E.unpackAlignment),g.push(E.colorSpace),g.join()}function Q(E,g){const z=n.get(E);if(E.isVideoTexture&&Se(E),E.isRenderTargetTexture===!1&&E.version>0&&z.__version!==E.version){const j=E.image;if(j===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(j.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{q(z,E,g);return}}t.bindTexture(i.TEXTURE_2D,z.__webglTexture,i.TEXTURE0+g)}function Y(E,g){const z=n.get(E);if(E.version>0&&z.__version!==E.version){q(z,E,g);return}t.bindTexture(i.TEXTURE_2D_ARRAY,z.__webglTexture,i.TEXTURE0+g)}function J(E,g){const z=n.get(E);if(E.version>0&&z.__version!==E.version){q(z,E,g);return}t.bindTexture(i.TEXTURE_3D,z.__webglTexture,i.TEXTURE0+g)}function k(E,g){const z=n.get(E);if(E.version>0&&z.__version!==E.version){re(z,E,g);return}t.bindTexture(i.TEXTURE_CUBE_MAP,z.__webglTexture,i.TEXTURE0+g)}const te={[oo]:i.REPEAT,[Ui]:i.CLAMP_TO_EDGE,[lo]:i.MIRRORED_REPEAT},A={[Nn]:i.NEAREST,[sf]:i.NEAREST_MIPMAP_NEAREST,[ls]:i.NEAREST_MIPMAP_LINEAR,[Bn]:i.LINEAR,[da]:i.LINEAR_MIPMAP_NEAREST,[Ii]:i.LINEAR_MIPMAP_LINEAR},_e={[uf]:i.NEVER,[_f]:i.ALWAYS,[ff]:i.LESS,[Oc]:i.LEQUAL,[hf]:i.EQUAL,[mf]:i.GEQUAL,[df]:i.GREATER,[pf]:i.NOTEQUAL};function He(E,g){if(g.type===jn&&e.has("OES_texture_float_linear")===!1&&(g.magFilter===Bn||g.magFilter===da||g.magFilter===ls||g.magFilter===Ii||g.minFilter===Bn||g.minFilter===da||g.minFilter===ls||g.minFilter===Ii)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(E,i.TEXTURE_WRAP_S,te[g.wrapS]),i.texParameteri(E,i.TEXTURE_WRAP_T,te[g.wrapT]),(E===i.TEXTURE_3D||E===i.TEXTURE_2D_ARRAY)&&i.texParameteri(E,i.TEXTURE_WRAP_R,te[g.wrapR]),i.texParameteri(E,i.TEXTURE_MAG_FILTER,A[g.magFilter]),i.texParameteri(E,i.TEXTURE_MIN_FILTER,A[g.minFilter]),g.compareFunction&&(i.texParameteri(E,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(E,i.TEXTURE_COMPARE_FUNC,_e[g.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(g.magFilter===Nn||g.minFilter!==ls&&g.minFilter!==Ii||g.type===jn&&e.has("OES_texture_float_linear")===!1)return;if(g.anisotropy>1||n.get(g).__currentAnisotropy){const z=e.get("EXT_texture_filter_anisotropic");i.texParameterf(E,z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(g.anisotropy,r.getMaxAnisotropy())),n.get(g).__currentAnisotropy=g.anisotropy}}}function et(E,g){let z=!1;E.__webglInit===void 0&&(E.__webglInit=!0,g.addEventListener("dispose",P));const j=g.source;let Z=d.get(j);Z===void 0&&(Z={},d.set(j,Z));const $=X(g);if($!==E.__cacheKey){Z[$]===void 0&&(Z[$]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,z=!0),Z[$].usedTimes++;const ce=Z[E.__cacheKey];ce!==void 0&&(Z[E.__cacheKey].usedTimes--,ce.usedTimes===0&&T(g)),E.__cacheKey=$,E.__webglTexture=Z[$].texture}return z}function q(E,g,z){let j=i.TEXTURE_2D;(g.isDataArrayTexture||g.isCompressedArrayTexture)&&(j=i.TEXTURE_2D_ARRAY),g.isData3DTexture&&(j=i.TEXTURE_3D);const Z=et(E,g),$=g.source;t.bindTexture(j,E.__webglTexture,i.TEXTURE0+z);const ce=n.get($);if($.version!==ce.__version||Z===!0){t.activeTexture(i.TEXTURE0+z);const ae=ot.getPrimaries(ot.workingColorSpace),fe=g.colorSpace===hi?null:ot.getPrimaries(g.colorSpace),Ve=g.colorSpace===hi||ae===fe?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,g.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,g.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ve);let ie=M(g.image,!1,r.maxTextureSize);ie=tt(g,ie);const se=s.convert(g.format,g.colorSpace),De=s.convert(g.type);let Le=y(g.internalFormat,se,De,g.colorSpace,g.isVideoTexture);He(j,g);let ve;const We=g.mipmaps,Ne=g.isVideoTexture!==!0,rt=ce.__version===void 0||Z===!0,w=$.dataReady,le=I(g,ie);if(g.isDepthTexture)Le=S(g.format===yr,g.type),rt&&(Ne?t.texStorage2D(i.TEXTURE_2D,1,Le,ie.width,ie.height):t.texImage2D(i.TEXTURE_2D,0,Le,ie.width,ie.height,0,se,De,null));else if(g.isDataTexture)if(We.length>0){Ne&&rt&&t.texStorage2D(i.TEXTURE_2D,le,Le,We[0].width,We[0].height);for(let V=0,K=We.length;V<K;V++)ve=We[V],Ne?w&&t.texSubImage2D(i.TEXTURE_2D,V,0,0,ve.width,ve.height,se,De,ve.data):t.texImage2D(i.TEXTURE_2D,V,Le,ve.width,ve.height,0,se,De,ve.data);g.generateMipmaps=!1}else Ne?(rt&&t.texStorage2D(i.TEXTURE_2D,le,Le,ie.width,ie.height),w&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,ie.width,ie.height,se,De,ie.data)):t.texImage2D(i.TEXTURE_2D,0,Le,ie.width,ie.height,0,se,De,ie.data);else if(g.isCompressedTexture)if(g.isCompressedArrayTexture){Ne&&rt&&t.texStorage3D(i.TEXTURE_2D_ARRAY,le,Le,We[0].width,We[0].height,ie.depth);for(let V=0,K=We.length;V<K;V++)if(ve=We[V],g.format!==In)if(se!==null)if(Ne){if(w)if(g.layerUpdates.size>0){const oe=Il(ve.width,ve.height,g.format,g.type);for(const ue of g.layerUpdates){const Oe=ve.data.subarray(ue*oe/ve.data.BYTES_PER_ELEMENT,(ue+1)*oe/ve.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,V,0,0,ue,ve.width,ve.height,1,se,Oe)}g.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,V,0,0,0,ve.width,ve.height,ie.depth,se,ve.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,V,Le,ve.width,ve.height,ie.depth,0,ve.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ne?w&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,V,0,0,0,ve.width,ve.height,ie.depth,se,De,ve.data):t.texImage3D(i.TEXTURE_2D_ARRAY,V,Le,ve.width,ve.height,ie.depth,0,se,De,ve.data)}else{Ne&&rt&&t.texStorage2D(i.TEXTURE_2D,le,Le,We[0].width,We[0].height);for(let V=0,K=We.length;V<K;V++)ve=We[V],g.format!==In?se!==null?Ne?w&&t.compressedTexSubImage2D(i.TEXTURE_2D,V,0,0,ve.width,ve.height,se,ve.data):t.compressedTexImage2D(i.TEXTURE_2D,V,Le,ve.width,ve.height,0,ve.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ne?w&&t.texSubImage2D(i.TEXTURE_2D,V,0,0,ve.width,ve.height,se,De,ve.data):t.texImage2D(i.TEXTURE_2D,V,Le,ve.width,ve.height,0,se,De,ve.data)}else if(g.isDataArrayTexture)if(Ne){if(rt&&t.texStorage3D(i.TEXTURE_2D_ARRAY,le,Le,ie.width,ie.height,ie.depth),w)if(g.layerUpdates.size>0){const V=Il(ie.width,ie.height,g.format,g.type);for(const K of g.layerUpdates){const oe=ie.data.subarray(K*V/ie.data.BYTES_PER_ELEMENT,(K+1)*V/ie.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,K,ie.width,ie.height,1,se,De,oe)}g.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ie.width,ie.height,ie.depth,se,De,ie.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,Le,ie.width,ie.height,ie.depth,0,se,De,ie.data);else if(g.isData3DTexture)Ne?(rt&&t.texStorage3D(i.TEXTURE_3D,le,Le,ie.width,ie.height,ie.depth),w&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ie.width,ie.height,ie.depth,se,De,ie.data)):t.texImage3D(i.TEXTURE_3D,0,Le,ie.width,ie.height,ie.depth,0,se,De,ie.data);else if(g.isFramebufferTexture){if(rt)if(Ne)t.texStorage2D(i.TEXTURE_2D,le,Le,ie.width,ie.height);else{let V=ie.width,K=ie.height;for(let oe=0;oe<le;oe++)t.texImage2D(i.TEXTURE_2D,oe,Le,V,K,0,se,De,null),V>>=1,K>>=1}}else if(We.length>0){if(Ne&&rt){const V=ye(We[0]);t.texStorage2D(i.TEXTURE_2D,le,Le,V.width,V.height)}for(let V=0,K=We.length;V<K;V++)ve=We[V],Ne?w&&t.texSubImage2D(i.TEXTURE_2D,V,0,0,se,De,ve):t.texImage2D(i.TEXTURE_2D,V,Le,se,De,ve);g.generateMipmaps=!1}else if(Ne){if(rt){const V=ye(ie);t.texStorage2D(i.TEXTURE_2D,le,Le,V.width,V.height)}w&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,se,De,ie)}else t.texImage2D(i.TEXTURE_2D,0,Le,se,De,ie);m(g)&&u(j),ce.__version=$.version,g.onUpdate&&g.onUpdate(g)}E.__version=g.version}function re(E,g,z){if(g.image.length!==6)return;const j=et(E,g),Z=g.source;t.bindTexture(i.TEXTURE_CUBE_MAP,E.__webglTexture,i.TEXTURE0+z);const $=n.get(Z);if(Z.version!==$.__version||j===!0){t.activeTexture(i.TEXTURE0+z);const ce=ot.getPrimaries(ot.workingColorSpace),ae=g.colorSpace===hi?null:ot.getPrimaries(g.colorSpace),fe=g.colorSpace===hi||ce===ae?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,g.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,g.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,fe);const Ve=g.isCompressedTexture||g.image[0].isCompressedTexture,ie=g.image[0]&&g.image[0].isDataTexture,se=[];for(let K=0;K<6;K++)!Ve&&!ie?se[K]=M(g.image[K],!0,r.maxCubemapSize):se[K]=ie?g.image[K].image:g.image[K],se[K]=tt(g,se[K]);const De=se[0],Le=s.convert(g.format,g.colorSpace),ve=s.convert(g.type),We=y(g.internalFormat,Le,ve,g.colorSpace),Ne=g.isVideoTexture!==!0,rt=$.__version===void 0||j===!0,w=Z.dataReady;let le=I(g,De);He(i.TEXTURE_CUBE_MAP,g);let V;if(Ve){Ne&&rt&&t.texStorage2D(i.TEXTURE_CUBE_MAP,le,We,De.width,De.height);for(let K=0;K<6;K++){V=se[K].mipmaps;for(let oe=0;oe<V.length;oe++){const ue=V[oe];g.format!==In?Le!==null?Ne?w&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,oe,0,0,ue.width,ue.height,Le,ue.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,oe,We,ue.width,ue.height,0,ue.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ne?w&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,oe,0,0,ue.width,ue.height,Le,ve,ue.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,oe,We,ue.width,ue.height,0,Le,ve,ue.data)}}}else{if(V=g.mipmaps,Ne&&rt){V.length>0&&le++;const K=ye(se[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,le,We,K.width,K.height)}for(let K=0;K<6;K++)if(ie){Ne?w&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,se[K].width,se[K].height,Le,ve,se[K].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,We,se[K].width,se[K].height,0,Le,ve,se[K].data);for(let oe=0;oe<V.length;oe++){const Oe=V[oe].image[K].image;Ne?w&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,oe+1,0,0,Oe.width,Oe.height,Le,ve,Oe.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,oe+1,We,Oe.width,Oe.height,0,Le,ve,Oe.data)}}else{Ne?w&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,Le,ve,se[K]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,We,Le,ve,se[K]);for(let oe=0;oe<V.length;oe++){const ue=V[oe];Ne?w&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,oe+1,0,0,Le,ve,ue.image[K]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,oe+1,We,Le,ve,ue.image[K])}}}m(g)&&u(i.TEXTURE_CUBE_MAP),$.__version=Z.version,g.onUpdate&&g.onUpdate(g)}E.__version=g.version}function pe(E,g,z,j,Z,$){const ce=s.convert(z.format,z.colorSpace),ae=s.convert(z.type),fe=y(z.internalFormat,ce,ae,z.colorSpace),Ve=n.get(g),ie=n.get(z);if(ie.__renderTarget=g,!Ve.__hasExternalTextures){const se=Math.max(1,g.width>>$),De=Math.max(1,g.height>>$);Z===i.TEXTURE_3D||Z===i.TEXTURE_2D_ARRAY?t.texImage3D(Z,$,fe,se,De,g.depth,0,ce,ae,null):t.texImage2D(Z,$,fe,se,De,0,ce,ae,null)}t.bindFramebuffer(i.FRAMEBUFFER,E),F(g)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,j,Z,ie.__webglTexture,0,Fe(g)):(Z===i.TEXTURE_2D||Z>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&Z<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,j,Z,ie.__webglTexture,$),t.bindFramebuffer(i.FRAMEBUFFER,null)}function ne(E,g,z){if(i.bindRenderbuffer(i.RENDERBUFFER,E),g.depthBuffer){const j=g.depthTexture,Z=j&&j.isDepthTexture?j.type:null,$=S(g.stencilBuffer,Z),ce=g.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ae=Fe(g);F(g)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ae,$,g.width,g.height):z?i.renderbufferStorageMultisample(i.RENDERBUFFER,ae,$,g.width,g.height):i.renderbufferStorage(i.RENDERBUFFER,$,g.width,g.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,ce,i.RENDERBUFFER,E)}else{const j=g.textures;for(let Z=0;Z<j.length;Z++){const $=j[Z],ce=s.convert($.format,$.colorSpace),ae=s.convert($.type),fe=y($.internalFormat,ce,ae,$.colorSpace),Ve=Fe(g);z&&F(g)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Ve,fe,g.width,g.height):F(g)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Ve,fe,g.width,g.height):i.renderbufferStorage(i.RENDERBUFFER,fe,g.width,g.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Te(E,g){if(g&&g.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,E),!(g.depthTexture&&g.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const j=n.get(g.depthTexture);j.__renderTarget=g,(!j.__webglTexture||g.depthTexture.image.width!==g.width||g.depthTexture.image.height!==g.height)&&(g.depthTexture.image.width=g.width,g.depthTexture.image.height=g.height,g.depthTexture.needsUpdate=!0),Q(g.depthTexture,0);const Z=j.__webglTexture,$=Fe(g);if(g.depthTexture.format===mr)F(g)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,Z,0,$):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,Z,0);else if(g.depthTexture.format===yr)F(g)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,Z,0,$):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,Z,0);else throw new Error("Unknown depthTexture format")}function be(E){const g=n.get(E),z=E.isWebGLCubeRenderTarget===!0;if(g.__boundDepthTexture!==E.depthTexture){const j=E.depthTexture;if(g.__depthDisposeCallback&&g.__depthDisposeCallback(),j){const Z=()=>{delete g.__boundDepthTexture,delete g.__depthDisposeCallback,j.removeEventListener("dispose",Z)};j.addEventListener("dispose",Z),g.__depthDisposeCallback=Z}g.__boundDepthTexture=j}if(E.depthTexture&&!g.__autoAllocateDepthBuffer){if(z)throw new Error("target.depthTexture not supported in Cube render targets");Te(g.__webglFramebuffer,E)}else if(z){g.__webglDepthbuffer=[];for(let j=0;j<6;j++)if(t.bindFramebuffer(i.FRAMEBUFFER,g.__webglFramebuffer[j]),g.__webglDepthbuffer[j]===void 0)g.__webglDepthbuffer[j]=i.createRenderbuffer(),ne(g.__webglDepthbuffer[j],E,!1);else{const Z=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,$=g.__webglDepthbuffer[j];i.bindRenderbuffer(i.RENDERBUFFER,$),i.framebufferRenderbuffer(i.FRAMEBUFFER,Z,i.RENDERBUFFER,$)}}else if(t.bindFramebuffer(i.FRAMEBUFFER,g.__webglFramebuffer),g.__webglDepthbuffer===void 0)g.__webglDepthbuffer=i.createRenderbuffer(),ne(g.__webglDepthbuffer,E,!1);else{const j=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Z=g.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,Z),i.framebufferRenderbuffer(i.FRAMEBUFFER,j,i.RENDERBUFFER,Z)}t.bindFramebuffer(i.FRAMEBUFFER,null)}function ze(E,g,z){const j=n.get(E);g!==void 0&&pe(j.__webglFramebuffer,E,E.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),z!==void 0&&be(E)}function $e(E){const g=E.texture,z=n.get(E),j=n.get(g);E.addEventListener("dispose",b);const Z=E.textures,$=E.isWebGLCubeRenderTarget===!0,ce=Z.length>1;if(ce||(j.__webglTexture===void 0&&(j.__webglTexture=i.createTexture()),j.__version=g.version,o.memory.textures++),$){z.__webglFramebuffer=[];for(let ae=0;ae<6;ae++)if(g.mipmaps&&g.mipmaps.length>0){z.__webglFramebuffer[ae]=[];for(let fe=0;fe<g.mipmaps.length;fe++)z.__webglFramebuffer[ae][fe]=i.createFramebuffer()}else z.__webglFramebuffer[ae]=i.createFramebuffer()}else{if(g.mipmaps&&g.mipmaps.length>0){z.__webglFramebuffer=[];for(let ae=0;ae<g.mipmaps.length;ae++)z.__webglFramebuffer[ae]=i.createFramebuffer()}else z.__webglFramebuffer=i.createFramebuffer();if(ce)for(let ae=0,fe=Z.length;ae<fe;ae++){const Ve=n.get(Z[ae]);Ve.__webglTexture===void 0&&(Ve.__webglTexture=i.createTexture(),o.memory.textures++)}if(E.samples>0&&F(E)===!1){z.__webglMultisampledFramebuffer=i.createFramebuffer(),z.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,z.__webglMultisampledFramebuffer);for(let ae=0;ae<Z.length;ae++){const fe=Z[ae];z.__webglColorRenderbuffer[ae]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,z.__webglColorRenderbuffer[ae]);const Ve=s.convert(fe.format,fe.colorSpace),ie=s.convert(fe.type),se=y(fe.internalFormat,Ve,ie,fe.colorSpace,E.isXRRenderTarget===!0),De=Fe(E);i.renderbufferStorageMultisample(i.RENDERBUFFER,De,se,E.width,E.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ae,i.RENDERBUFFER,z.__webglColorRenderbuffer[ae])}i.bindRenderbuffer(i.RENDERBUFFER,null),E.depthBuffer&&(z.__webglDepthRenderbuffer=i.createRenderbuffer(),ne(z.__webglDepthRenderbuffer,E,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if($){t.bindTexture(i.TEXTURE_CUBE_MAP,j.__webglTexture),He(i.TEXTURE_CUBE_MAP,g);for(let ae=0;ae<6;ae++)if(g.mipmaps&&g.mipmaps.length>0)for(let fe=0;fe<g.mipmaps.length;fe++)pe(z.__webglFramebuffer[ae][fe],E,g,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,fe);else pe(z.__webglFramebuffer[ae],E,g,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0);m(g)&&u(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ce){for(let ae=0,fe=Z.length;ae<fe;ae++){const Ve=Z[ae],ie=n.get(Ve);t.bindTexture(i.TEXTURE_2D,ie.__webglTexture),He(i.TEXTURE_2D,Ve),pe(z.__webglFramebuffer,E,Ve,i.COLOR_ATTACHMENT0+ae,i.TEXTURE_2D,0),m(Ve)&&u(i.TEXTURE_2D)}t.unbindTexture()}else{let ae=i.TEXTURE_2D;if((E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(ae=E.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(ae,j.__webglTexture),He(ae,g),g.mipmaps&&g.mipmaps.length>0)for(let fe=0;fe<g.mipmaps.length;fe++)pe(z.__webglFramebuffer[fe],E,g,i.COLOR_ATTACHMENT0,ae,fe);else pe(z.__webglFramebuffer,E,g,i.COLOR_ATTACHMENT0,ae,0);m(g)&&u(ae),t.unbindTexture()}E.depthBuffer&&be(E)}function ke(E){const g=E.textures;for(let z=0,j=g.length;z<j;z++){const Z=g[z];if(m(Z)){const $=C(E),ce=n.get(Z).__webglTexture;t.bindTexture($,ce),u($),t.unbindTexture()}}}const Pe=[],R=[];function pt(E){if(E.samples>0){if(F(E)===!1){const g=E.textures,z=E.width,j=E.height;let Z=i.COLOR_BUFFER_BIT;const $=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ce=n.get(E),ae=g.length>1;if(ae)for(let fe=0;fe<g.length;fe++)t.bindFramebuffer(i.FRAMEBUFFER,ce.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+fe,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,ce.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+fe,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,ce.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ce.__webglFramebuffer);for(let fe=0;fe<g.length;fe++){if(E.resolveDepthBuffer&&(E.depthBuffer&&(Z|=i.DEPTH_BUFFER_BIT),E.stencilBuffer&&E.resolveStencilBuffer&&(Z|=i.STENCIL_BUFFER_BIT)),ae){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,ce.__webglColorRenderbuffer[fe]);const Ve=n.get(g[fe]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Ve,0)}i.blitFramebuffer(0,0,z,j,0,0,z,j,Z,i.NEAREST),l===!0&&(Pe.length=0,R.length=0,Pe.push(i.COLOR_ATTACHMENT0+fe),E.depthBuffer&&E.resolveDepthBuffer===!1&&(Pe.push($),R.push($),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,R)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Pe))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ae)for(let fe=0;fe<g.length;fe++){t.bindFramebuffer(i.FRAMEBUFFER,ce.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+fe,i.RENDERBUFFER,ce.__webglColorRenderbuffer[fe]);const Ve=n.get(g[fe]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,ce.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+fe,i.TEXTURE_2D,Ve,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ce.__webglMultisampledFramebuffer)}else if(E.depthBuffer&&E.resolveDepthBuffer===!1&&l){const g=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[g])}}}function Fe(E){return Math.min(r.maxSamples,E.samples)}function F(E){const g=n.get(E);return E.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&g.__useRenderToTexture!==!1}function Se(E){const g=o.render.frame;h.get(E)!==g&&(h.set(E,g),E.update())}function tt(E,g){const z=E.colorSpace,j=E.format,Z=E.type;return E.isCompressedTexture===!0||E.isVideoTexture===!0||z!==br&&z!==hi&&(ot.getTransfer(z)===ft?(j!==In||Z!==ni)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",z)),g}function ye(E){return typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement?(c.width=E.naturalWidth||E.width,c.height=E.naturalHeight||E.height):typeof VideoFrame<"u"&&E instanceof VideoFrame?(c.width=E.displayWidth,c.height=E.displayHeight):(c.width=E.width,c.height=E.height),c}this.allocateTextureUnit=G,this.resetTextureUnits=B,this.setTexture2D=Q,this.setTexture2DArray=Y,this.setTexture3D=J,this.setTextureCube=k,this.rebindTextures=ze,this.setupRenderTarget=$e,this.updateRenderTargetMipmap=ke,this.updateMultisampleRenderTarget=pt,this.setupDepthRenderbuffer=be,this.setupFrameBufferTexture=pe,this.useMultisampledRTT=F}function b_(i,e){function t(n,r=hi){let s;const o=ot.getTransfer(r);if(n===ni)return i.UNSIGNED_BYTE;if(n===Zo)return i.UNSIGNED_SHORT_4_4_4_4;if(n===jo)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Cc)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Rc)return i.BYTE;if(n===wc)return i.SHORT;if(n===Qr)return i.UNSIGNED_SHORT;if(n===Ko)return i.INT;if(n===Hi)return i.UNSIGNED_INT;if(n===jn)return i.FLOAT;if(n===ns)return i.HALF_FLOAT;if(n===Pc)return i.ALPHA;if(n===Dc)return i.RGB;if(n===In)return i.RGBA;if(n===Lc)return i.LUMINANCE;if(n===Uc)return i.LUMINANCE_ALPHA;if(n===mr)return i.DEPTH_COMPONENT;if(n===yr)return i.DEPTH_STENCIL;if(n===Ic)return i.RED;if(n===Jo)return i.RED_INTEGER;if(n===Nc)return i.RG;if(n===Qo)return i.RG_INTEGER;if(n===el)return i.RGBA_INTEGER;if(n===Gs||n===Vs||n===Ws||n===Xs)if(o===ft)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===Gs)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Vs)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Ws)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Xs)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===Gs)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Vs)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Ws)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Xs)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===co||n===uo||n===fo||n===ho)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===co)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===uo)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===fo)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===ho)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===po||n===mo||n===_o)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(n===po||n===mo)return o===ft?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===_o)return o===ft?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===go||n===vo||n===xo||n===Mo||n===So||n===Eo||n===To||n===yo||n===bo||n===Ao||n===Ro||n===wo||n===Co||n===Po)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(n===go)return o===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===vo)return o===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===xo)return o===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Mo)return o===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===So)return o===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Eo)return o===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===To)return o===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===yo)return o===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===bo)return o===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Ao)return o===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Ro)return o===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===wo)return o===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Co)return o===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Po)return o===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Ys||n===Do||n===Lo)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(n===Ys)return o===ft?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Do)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Lo)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Fc||n===Uo||n===Io||n===No)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(n===Ys)return s.COMPRESSED_RED_RGTC1_EXT;if(n===Uo)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Io)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===No)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Tr?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}const A_={type:"move"};class Ga{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new As,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new As,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new W,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new W),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new As,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new W,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new W),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const M of e.hand.values()){const m=t.getJointPose(M,n),u=this._getHandJoint(c,M);m!==null&&(u.matrix.fromArray(m.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,u.jointRadius=m.radius),u.visible=m!==null}const h=c.joints["index-finger-tip"],p=c.joints["thumb-tip"],d=h.position.distanceTo(p.position),f=.02,v=.005;c.inputState.pinching&&d>f+v?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=f-v&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(A_)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new As;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const R_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,w_=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class C_{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){const r=new cn,s=e.properties.get(r);s.__webglTexture=t.texture,(t.depthNear!==n.depthNear||t.depthFar!==n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new ri({vertexShader:R_,fragmentShader:w_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new zn(new os(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class P_ extends wr{constructor(e,t){super();const n=this;let r=null,s=1,o=null,a="local-floor",l=1,c=null,h=null,p=null,d=null,f=null,v=null;const M=new C_,m=t.getContextAttributes();let u=null,C=null;const y=[],S=[],I=new dt;let P=null;const b=new Tn;b.viewport=new bt;const N=new Tn;N.viewport=new bt;const T=[b,N],_=new jf;let D=null,B=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let re=y[q];return re===void 0&&(re=new Ga,y[q]=re),re.getTargetRaySpace()},this.getControllerGrip=function(q){let re=y[q];return re===void 0&&(re=new Ga,y[q]=re),re.getGripSpace()},this.getHand=function(q){let re=y[q];return re===void 0&&(re=new Ga,y[q]=re),re.getHandSpace()};function G(q){const re=S.indexOf(q.inputSource);if(re===-1)return;const pe=y[re];pe!==void 0&&(pe.update(q.inputSource,q.frame,c||o),pe.dispatchEvent({type:q.type,data:q.inputSource}))}function X(){r.removeEventListener("select",G),r.removeEventListener("selectstart",G),r.removeEventListener("selectend",G),r.removeEventListener("squeeze",G),r.removeEventListener("squeezestart",G),r.removeEventListener("squeezeend",G),r.removeEventListener("end",X),r.removeEventListener("inputsourceschange",Q);for(let q=0;q<y.length;q++){const re=S[q];re!==null&&(S[q]=null,y[q].disconnect(re))}D=null,B=null,M.reset(),e.setRenderTarget(u),f=null,d=null,p=null,r=null,C=null,et.stop(),n.isPresenting=!1,e.setPixelRatio(P),e.setSize(I.width,I.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){s=q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){a=q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(q){c=q},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return p},this.getFrame=function(){return v},this.getSession=function(){return r},this.setSession=async function(q){if(r=q,r!==null){if(u=e.getRenderTarget(),r.addEventListener("select",G),r.addEventListener("selectstart",G),r.addEventListener("selectend",G),r.addEventListener("squeeze",G),r.addEventListener("squeezestart",G),r.addEventListener("squeezeend",G),r.addEventListener("end",X),r.addEventListener("inputsourceschange",Q),m.xrCompatible!==!0&&await t.makeXRCompatible(),P=e.getPixelRatio(),e.getSize(I),r.enabledFeatures!==void 0&&r.enabledFeatures.includes("layers")){let pe=null,ne=null,Te=null;m.depth&&(Te=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,pe=m.stencil?yr:mr,ne=m.stencil?Tr:Hi);const be={colorFormat:t.RGBA8,depthFormat:Te,scaleFactor:s};p=new XRWebGLBinding(r,t),d=p.createProjectionLayer(be),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),C=new ki(d.textureWidth,d.textureHeight,{format:In,type:ni,depthTexture:new Zc(d.textureWidth,d.textureHeight,ne,void 0,void 0,void 0,void 0,void 0,void 0,pe),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}else{const pe={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};f=new XRWebGLLayer(r,t,pe),r.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),C=new ki(f.framebufferWidth,f.framebufferHeight,{format:In,type:ni,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}C.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),et.setContext(r),et.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return M.getDepthTexture()};function Q(q){for(let re=0;re<q.removed.length;re++){const pe=q.removed[re],ne=S.indexOf(pe);ne>=0&&(S[ne]=null,y[ne].disconnect(pe))}for(let re=0;re<q.added.length;re++){const pe=q.added[re];let ne=S.indexOf(pe);if(ne===-1){for(let be=0;be<y.length;be++)if(be>=S.length){S.push(pe),ne=be;break}else if(S[be]===null){S[be]=pe,ne=be;break}if(ne===-1)break}const Te=y[ne];Te&&Te.connect(pe)}}const Y=new W,J=new W;function k(q,re,pe){Y.setFromMatrixPosition(re.matrixWorld),J.setFromMatrixPosition(pe.matrixWorld);const ne=Y.distanceTo(J),Te=re.projectionMatrix.elements,be=pe.projectionMatrix.elements,ze=Te[14]/(Te[10]-1),$e=Te[14]/(Te[10]+1),ke=(Te[9]+1)/Te[5],Pe=(Te[9]-1)/Te[5],R=(Te[8]-1)/Te[0],pt=(be[8]+1)/be[0],Fe=ze*R,F=ze*pt,Se=ne/(-R+pt),tt=Se*-R;if(re.matrixWorld.decompose(q.position,q.quaternion,q.scale),q.translateX(tt),q.translateZ(Se),q.matrixWorld.compose(q.position,q.quaternion,q.scale),q.matrixWorldInverse.copy(q.matrixWorld).invert(),Te[10]===-1)q.projectionMatrix.copy(re.projectionMatrix),q.projectionMatrixInverse.copy(re.projectionMatrixInverse);else{const ye=ze+Se,E=$e+Se,g=Fe-tt,z=F+(ne-tt),j=ke*$e/E*ye,Z=Pe*$e/E*ye;q.projectionMatrix.makePerspective(g,z,j,Z,ye,E),q.projectionMatrixInverse.copy(q.projectionMatrix).invert()}}function te(q,re){re===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(re.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(r===null)return;let re=q.near,pe=q.far;M.texture!==null&&(M.depthNear>0&&(re=M.depthNear),M.depthFar>0&&(pe=M.depthFar)),_.near=N.near=b.near=re,_.far=N.far=b.far=pe,(D!==_.near||B!==_.far)&&(r.updateRenderState({depthNear:_.near,depthFar:_.far}),D=_.near,B=_.far),b.layers.mask=q.layers.mask|2,N.layers.mask=q.layers.mask|4,_.layers.mask=b.layers.mask|N.layers.mask;const ne=q.parent,Te=_.cameras;te(_,ne);for(let be=0;be<Te.length;be++)te(Te[be],ne);Te.length===2?k(_,b,N):_.projectionMatrix.copy(b.projectionMatrix),A(q,_,ne)};function A(q,re,pe){pe===null?q.matrix.copy(re.matrixWorld):(q.matrix.copy(pe.matrixWorld),q.matrix.invert(),q.matrix.multiply(re.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(re.projectionMatrix),q.projectionMatrixInverse.copy(re.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=Fo*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return _},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(q){l=q,d!==null&&(d.fixedFoveation=q),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=q)},this.hasDepthSensing=function(){return M.texture!==null},this.getDepthSensingMesh=function(){return M.getMesh(_)};let _e=null;function He(q,re){if(h=re.getViewerPose(c||o),v=re,h!==null){const pe=h.views;f!==null&&(e.setRenderTargetFramebuffer(C,f.framebuffer),e.setRenderTarget(C));let ne=!1;pe.length!==_.cameras.length&&(_.cameras.length=0,ne=!0);for(let be=0;be<pe.length;be++){const ze=pe[be];let $e=null;if(f!==null)$e=f.getViewport(ze);else{const Pe=p.getViewSubImage(d,ze);$e=Pe.viewport,be===0&&(e.setRenderTargetTextures(C,Pe.colorTexture,d.ignoreDepthValues?void 0:Pe.depthStencilTexture),e.setRenderTarget(C))}let ke=T[be];ke===void 0&&(ke=new Tn,ke.layers.enable(be),ke.viewport=new bt,T[be]=ke),ke.matrix.fromArray(ze.transform.matrix),ke.matrix.decompose(ke.position,ke.quaternion,ke.scale),ke.projectionMatrix.fromArray(ze.projectionMatrix),ke.projectionMatrixInverse.copy(ke.projectionMatrix).invert(),ke.viewport.set($e.x,$e.y,$e.width,$e.height),be===0&&(_.matrix.copy(ke.matrix),_.matrix.decompose(_.position,_.quaternion,_.scale)),ne===!0&&_.cameras.push(ke)}const Te=r.enabledFeatures;if(Te&&Te.includes("depth-sensing")){const be=p.getDepthInformation(pe[0]);be&&be.isValid&&be.texture&&M.init(e,be,r.renderState)}}for(let pe=0;pe<y.length;pe++){const ne=S[pe],Te=y[pe];ne!==null&&Te!==void 0&&Te.update(ne,re,c||o)}_e&&_e(q,re),re.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:re}),v=null}const et=new jc;et.setAnimationLoop(He),this.setAnimationLoop=function(q){_e=q},this.dispose=function(){}}}const Ai=new ii,D_=new Pt;function L_(i,e){function t(m,u){m.matrixAutoUpdate===!0&&m.updateMatrix(),u.value.copy(m.matrix)}function n(m,u){u.color.getRGB(m.fogColor.value,Yc(i)),u.isFog?(m.fogNear.value=u.near,m.fogFar.value=u.far):u.isFogExp2&&(m.fogDensity.value=u.density)}function r(m,u,C,y,S){u.isMeshBasicMaterial||u.isMeshLambertMaterial?s(m,u):u.isMeshToonMaterial?(s(m,u),p(m,u)):u.isMeshPhongMaterial?(s(m,u),h(m,u)):u.isMeshStandardMaterial?(s(m,u),d(m,u),u.isMeshPhysicalMaterial&&f(m,u,S)):u.isMeshMatcapMaterial?(s(m,u),v(m,u)):u.isMeshDepthMaterial?s(m,u):u.isMeshDistanceMaterial?(s(m,u),M(m,u)):u.isMeshNormalMaterial?s(m,u):u.isLineBasicMaterial?(o(m,u),u.isLineDashedMaterial&&a(m,u)):u.isPointsMaterial?l(m,u,C,y):u.isSpriteMaterial?c(m,u):u.isShadowMaterial?(m.color.value.copy(u.color),m.opacity.value=u.opacity):u.isShaderMaterial&&(u.uniformsNeedUpdate=!1)}function s(m,u){m.opacity.value=u.opacity,u.color&&m.diffuse.value.copy(u.color),u.emissive&&m.emissive.value.copy(u.emissive).multiplyScalar(u.emissiveIntensity),u.map&&(m.map.value=u.map,t(u.map,m.mapTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,t(u.alphaMap,m.alphaMapTransform)),u.bumpMap&&(m.bumpMap.value=u.bumpMap,t(u.bumpMap,m.bumpMapTransform),m.bumpScale.value=u.bumpScale,u.side===ln&&(m.bumpScale.value*=-1)),u.normalMap&&(m.normalMap.value=u.normalMap,t(u.normalMap,m.normalMapTransform),m.normalScale.value.copy(u.normalScale),u.side===ln&&m.normalScale.value.negate()),u.displacementMap&&(m.displacementMap.value=u.displacementMap,t(u.displacementMap,m.displacementMapTransform),m.displacementScale.value=u.displacementScale,m.displacementBias.value=u.displacementBias),u.emissiveMap&&(m.emissiveMap.value=u.emissiveMap,t(u.emissiveMap,m.emissiveMapTransform)),u.specularMap&&(m.specularMap.value=u.specularMap,t(u.specularMap,m.specularMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest);const C=e.get(u),y=C.envMap,S=C.envMapRotation;y&&(m.envMap.value=y,Ai.copy(S),Ai.x*=-1,Ai.y*=-1,Ai.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(Ai.y*=-1,Ai.z*=-1),m.envMapRotation.value.setFromMatrix4(D_.makeRotationFromEuler(Ai)),m.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=u.reflectivity,m.ior.value=u.ior,m.refractionRatio.value=u.refractionRatio),u.lightMap&&(m.lightMap.value=u.lightMap,m.lightMapIntensity.value=u.lightMapIntensity,t(u.lightMap,m.lightMapTransform)),u.aoMap&&(m.aoMap.value=u.aoMap,m.aoMapIntensity.value=u.aoMapIntensity,t(u.aoMap,m.aoMapTransform))}function o(m,u){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,u.map&&(m.map.value=u.map,t(u.map,m.mapTransform))}function a(m,u){m.dashSize.value=u.dashSize,m.totalSize.value=u.dashSize+u.gapSize,m.scale.value=u.scale}function l(m,u,C,y){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,m.size.value=u.size*C,m.scale.value=y*.5,u.map&&(m.map.value=u.map,t(u.map,m.uvTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,t(u.alphaMap,m.alphaMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest)}function c(m,u){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,m.rotation.value=u.rotation,u.map&&(m.map.value=u.map,t(u.map,m.mapTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,t(u.alphaMap,m.alphaMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest)}function h(m,u){m.specular.value.copy(u.specular),m.shininess.value=Math.max(u.shininess,1e-4)}function p(m,u){u.gradientMap&&(m.gradientMap.value=u.gradientMap)}function d(m,u){m.metalness.value=u.metalness,u.metalnessMap&&(m.metalnessMap.value=u.metalnessMap,t(u.metalnessMap,m.metalnessMapTransform)),m.roughness.value=u.roughness,u.roughnessMap&&(m.roughnessMap.value=u.roughnessMap,t(u.roughnessMap,m.roughnessMapTransform)),u.envMap&&(m.envMapIntensity.value=u.envMapIntensity)}function f(m,u,C){m.ior.value=u.ior,u.sheen>0&&(m.sheenColor.value.copy(u.sheenColor).multiplyScalar(u.sheen),m.sheenRoughness.value=u.sheenRoughness,u.sheenColorMap&&(m.sheenColorMap.value=u.sheenColorMap,t(u.sheenColorMap,m.sheenColorMapTransform)),u.sheenRoughnessMap&&(m.sheenRoughnessMap.value=u.sheenRoughnessMap,t(u.sheenRoughnessMap,m.sheenRoughnessMapTransform))),u.clearcoat>0&&(m.clearcoat.value=u.clearcoat,m.clearcoatRoughness.value=u.clearcoatRoughness,u.clearcoatMap&&(m.clearcoatMap.value=u.clearcoatMap,t(u.clearcoatMap,m.clearcoatMapTransform)),u.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=u.clearcoatRoughnessMap,t(u.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),u.clearcoatNormalMap&&(m.clearcoatNormalMap.value=u.clearcoatNormalMap,t(u.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(u.clearcoatNormalScale),u.side===ln&&m.clearcoatNormalScale.value.negate())),u.dispersion>0&&(m.dispersion.value=u.dispersion),u.iridescence>0&&(m.iridescence.value=u.iridescence,m.iridescenceIOR.value=u.iridescenceIOR,m.iridescenceThicknessMinimum.value=u.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=u.iridescenceThicknessRange[1],u.iridescenceMap&&(m.iridescenceMap.value=u.iridescenceMap,t(u.iridescenceMap,m.iridescenceMapTransform)),u.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=u.iridescenceThicknessMap,t(u.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),u.transmission>0&&(m.transmission.value=u.transmission,m.transmissionSamplerMap.value=C.texture,m.transmissionSamplerSize.value.set(C.width,C.height),u.transmissionMap&&(m.transmissionMap.value=u.transmissionMap,t(u.transmissionMap,m.transmissionMapTransform)),m.thickness.value=u.thickness,u.thicknessMap&&(m.thicknessMap.value=u.thicknessMap,t(u.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=u.attenuationDistance,m.attenuationColor.value.copy(u.attenuationColor)),u.anisotropy>0&&(m.anisotropyVector.value.set(u.anisotropy*Math.cos(u.anisotropyRotation),u.anisotropy*Math.sin(u.anisotropyRotation)),u.anisotropyMap&&(m.anisotropyMap.value=u.anisotropyMap,t(u.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=u.specularIntensity,m.specularColor.value.copy(u.specularColor),u.specularColorMap&&(m.specularColorMap.value=u.specularColorMap,t(u.specularColorMap,m.specularColorMapTransform)),u.specularIntensityMap&&(m.specularIntensityMap.value=u.specularIntensityMap,t(u.specularIntensityMap,m.specularIntensityMapTransform))}function v(m,u){u.matcap&&(m.matcap.value=u.matcap)}function M(m,u){const C=e.get(u).light;m.referencePosition.value.setFromMatrixPosition(C.matrixWorld),m.nearDistance.value=C.shadow.camera.near,m.farDistance.value=C.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function U_(i,e,t,n){let r={},s={},o=[];const a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(C,y){const S=y.program;n.uniformBlockBinding(C,S)}function c(C,y){let S=r[C.id];S===void 0&&(v(C),S=h(C),r[C.id]=S,C.addEventListener("dispose",m));const I=y.program;n.updateUBOMapping(C,I);const P=e.render.frame;s[C.id]!==P&&(d(C),s[C.id]=P)}function h(C){const y=p();C.__bindingPointIndex=y;const S=i.createBuffer(),I=C.__size,P=C.usage;return i.bindBuffer(i.UNIFORM_BUFFER,S),i.bufferData(i.UNIFORM_BUFFER,I,P),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,y,S),S}function p(){for(let C=0;C<a;C++)if(o.indexOf(C)===-1)return o.push(C),C;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(C){const y=r[C.id],S=C.uniforms,I=C.__cache;i.bindBuffer(i.UNIFORM_BUFFER,y);for(let P=0,b=S.length;P<b;P++){const N=Array.isArray(S[P])?S[P]:[S[P]];for(let T=0,_=N.length;T<_;T++){const D=N[T];if(f(D,P,T,I)===!0){const B=D.__offset,G=Array.isArray(D.value)?D.value:[D.value];let X=0;for(let Q=0;Q<G.length;Q++){const Y=G[Q],J=M(Y);typeof Y=="number"||typeof Y=="boolean"?(D.__data[0]=Y,i.bufferSubData(i.UNIFORM_BUFFER,B+X,D.__data)):Y.isMatrix3?(D.__data[0]=Y.elements[0],D.__data[1]=Y.elements[1],D.__data[2]=Y.elements[2],D.__data[3]=0,D.__data[4]=Y.elements[3],D.__data[5]=Y.elements[4],D.__data[6]=Y.elements[5],D.__data[7]=0,D.__data[8]=Y.elements[6],D.__data[9]=Y.elements[7],D.__data[10]=Y.elements[8],D.__data[11]=0):(Y.toArray(D.__data,X),X+=J.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,B,D.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(C,y,S,I){const P=C.value,b=y+"_"+S;if(I[b]===void 0)return typeof P=="number"||typeof P=="boolean"?I[b]=P:I[b]=P.clone(),!0;{const N=I[b];if(typeof P=="number"||typeof P=="boolean"){if(N!==P)return I[b]=P,!0}else if(N.equals(P)===!1)return N.copy(P),!0}return!1}function v(C){const y=C.uniforms;let S=0;const I=16;for(let b=0,N=y.length;b<N;b++){const T=Array.isArray(y[b])?y[b]:[y[b]];for(let _=0,D=T.length;_<D;_++){const B=T[_],G=Array.isArray(B.value)?B.value:[B.value];for(let X=0,Q=G.length;X<Q;X++){const Y=G[X],J=M(Y),k=S%I,te=k%J.boundary,A=k+te;S+=te,A!==0&&I-A<J.storage&&(S+=I-A),B.__data=new Float32Array(J.storage/Float32Array.BYTES_PER_ELEMENT),B.__offset=S,S+=J.storage}}}const P=S%I;return P>0&&(S+=I-P),C.__size=S,C.__cache={},this}function M(C){const y={boundary:0,storage:0};return typeof C=="number"||typeof C=="boolean"?(y.boundary=4,y.storage=4):C.isVector2?(y.boundary=8,y.storage=8):C.isVector3||C.isColor?(y.boundary=16,y.storage=12):C.isVector4?(y.boundary=16,y.storage=16):C.isMatrix3?(y.boundary=48,y.storage=48):C.isMatrix4?(y.boundary=64,y.storage=64):C.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",C),y}function m(C){const y=C.target;y.removeEventListener("dispose",m);const S=o.indexOf(y.__bindingPointIndex);o.splice(S,1),i.deleteBuffer(r[y.id]),delete r[y.id],delete s[y.id]}function u(){for(const C in r)i.deleteBuffer(r[C]);o=[],r={},s={}}return{bind:l,update:c,dispose:u}}class I_{constructor(e={}){const{canvas:t=vf(),context:n=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:p=!1,reverseDepthBuffer:d=!1}=e;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=o;const v=new Uint32Array(4),M=new Int32Array(4);let m=null,u=null;const C=[],y=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=En,this.toneMapping=_i,this.toneMappingExposure=1;const S=this;let I=!1,P=0,b=0,N=null,T=-1,_=null;const D=new bt,B=new bt;let G=null;const X=new ht(0);let Q=0,Y=t.width,J=t.height,k=1,te=null,A=null;const _e=new bt(0,0,Y,J),He=new bt(0,0,Y,J);let et=!1;const q=new Kc;let re=!1,pe=!1;this.transmissionResolutionScale=1;const ne=new Pt,Te=new Pt,be=new W,ze=new bt,$e={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ke=!1;function Pe(){return N===null?k:1}let R=n;function pt(x,U){return t.getContext(x,U)}try{const x={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:p};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${$o}`),t.addEventListener("webglcontextlost",K,!1),t.addEventListener("webglcontextrestored",oe,!1),t.addEventListener("webglcontextcreationerror",ue,!1),R===null){const U="webgl2";if(R=pt(U,x),R===null)throw pt(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(x){throw console.error("THREE.WebGLRenderer: "+x.message),x}let Fe,F,Se,tt,ye,E,g,z,j,Z,$,ce,ae,fe,Ve,ie,se,De,Le,ve,We,Ne,rt,w;function le(){Fe=new Vp(R),Fe.init(),Ne=new b_(R,Fe),F=new Op(R,Fe,e,Ne),Se=new T_(R,Fe),F.reverseDepthBuffer&&d&&Se.buffers.depth.setReversed(!0),tt=new Yp(R),ye=new u_,E=new y_(R,Fe,Se,ye,F,Ne,tt),g=new zp(S),z=new Gp(S),j=new Qf(R),rt=new Np(R,j),Z=new Wp(R,j,tt,rt),$=new $p(R,Z,j,tt),Le=new qp(R,F,E),ie=new Bp(ye),ce=new c_(S,g,z,Fe,F,rt,ie),ae=new L_(S,ye),fe=new h_,Ve=new v_(Fe),De=new Ip(S,g,z,Se,$,f,l),se=new S_(S,$,F),w=new U_(R,tt,F,Se),ve=new Fp(R,Fe,tt),We=new Xp(R,Fe,tt),tt.programs=ce.programs,S.capabilities=F,S.extensions=Fe,S.properties=ye,S.renderLists=fe,S.shadowMap=se,S.state=Se,S.info=tt}le();const V=new P_(S,R);this.xr=V,this.getContext=function(){return R},this.getContextAttributes=function(){return R.getContextAttributes()},this.forceContextLoss=function(){const x=Fe.get("WEBGL_lose_context");x&&x.loseContext()},this.forceContextRestore=function(){const x=Fe.get("WEBGL_lose_context");x&&x.restoreContext()},this.getPixelRatio=function(){return k},this.setPixelRatio=function(x){x!==void 0&&(k=x,this.setSize(Y,J,!1))},this.getSize=function(x){return x.set(Y,J)},this.setSize=function(x,U,H=!0){if(V.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}Y=x,J=U,t.width=Math.floor(x*k),t.height=Math.floor(U*k),H===!0&&(t.style.width=x+"px",t.style.height=U+"px"),this.setViewport(0,0,x,U)},this.getDrawingBufferSize=function(x){return x.set(Y*k,J*k).floor()},this.setDrawingBufferSize=function(x,U,H){Y=x,J=U,k=H,t.width=Math.floor(x*H),t.height=Math.floor(U*H),this.setViewport(0,0,x,U)},this.getCurrentViewport=function(x){return x.copy(D)},this.getViewport=function(x){return x.copy(_e)},this.setViewport=function(x,U,H,O){x.isVector4?_e.set(x.x,x.y,x.z,x.w):_e.set(x,U,H,O),Se.viewport(D.copy(_e).multiplyScalar(k).round())},this.getScissor=function(x){return x.copy(He)},this.setScissor=function(x,U,H,O){x.isVector4?He.set(x.x,x.y,x.z,x.w):He.set(x,U,H,O),Se.scissor(B.copy(He).multiplyScalar(k).round())},this.getScissorTest=function(){return et},this.setScissorTest=function(x){Se.setScissorTest(et=x)},this.setOpaqueSort=function(x){te=x},this.setTransparentSort=function(x){A=x},this.getClearColor=function(x){return x.copy(De.getClearColor())},this.setClearColor=function(){De.setClearColor.apply(De,arguments)},this.getClearAlpha=function(){return De.getClearAlpha()},this.setClearAlpha=function(){De.setClearAlpha.apply(De,arguments)},this.clear=function(x=!0,U=!0,H=!0){let O=0;if(x){let L=!1;if(N!==null){const ee=N.texture.format;L=ee===el||ee===Qo||ee===Jo}if(L){const ee=N.texture.type,de=ee===ni||ee===Hi||ee===Qr||ee===Tr||ee===Zo||ee===jo,Me=De.getClearColor(),xe=De.getClearAlpha(),Ce=Me.r,Ie=Me.g,we=Me.b;de?(v[0]=Ce,v[1]=Ie,v[2]=we,v[3]=xe,R.clearBufferuiv(R.COLOR,0,v)):(M[0]=Ce,M[1]=Ie,M[2]=we,M[3]=xe,R.clearBufferiv(R.COLOR,0,M))}else O|=R.COLOR_BUFFER_BIT}U&&(O|=R.DEPTH_BUFFER_BIT),H&&(O|=R.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),R.clear(O)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",K,!1),t.removeEventListener("webglcontextrestored",oe,!1),t.removeEventListener("webglcontextcreationerror",ue,!1),De.dispose(),fe.dispose(),Ve.dispose(),ye.dispose(),g.dispose(),z.dispose(),$.dispose(),rt.dispose(),w.dispose(),ce.dispose(),V.dispose(),V.removeEventListener("sessionstart",he),V.removeEventListener("sessionend",Ge),Re.stop()};function K(x){x.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),I=!0}function oe(){console.log("THREE.WebGLRenderer: Context Restored."),I=!1;const x=tt.autoReset,U=se.enabled,H=se.autoUpdate,O=se.needsUpdate,L=se.type;le(),tt.autoReset=x,se.enabled=U,se.autoUpdate=H,se.needsUpdate=O,se.type=L}function ue(x){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",x.statusMessage)}function Oe(x){const U=x.target;U.removeEventListener("dispose",Oe),st(U)}function st(x){Et(x),ye.remove(x)}function Et(x){const U=ye.get(x).programs;U!==void 0&&(U.forEach(function(H){ce.releaseProgram(H)}),x.isShaderMaterial&&ce.releaseShaderCache(x))}this.renderBufferDirect=function(x,U,H,O,L,ee){U===null&&(U=$e);const de=L.isMesh&&L.matrixWorld.determinant()<0,Me=un(x,U,H,O,L);Se.setMaterial(O,de);let xe=H.index,Ce=1;if(O.wireframe===!0){if(xe=Z.getWireframeAttribute(H),xe===void 0)return;Ce=2}const Ie=H.drawRange,we=H.attributes.position;let Ke=Ie.start*Ce,ct=(Ie.start+Ie.count)*Ce;ee!==null&&(Ke=Math.max(Ke,ee.start*Ce),ct=Math.min(ct,(ee.start+ee.count)*Ce)),xe!==null?(Ke=Math.max(Ke,0),ct=Math.min(ct,xe.count)):we!=null&&(Ke=Math.max(Ke,0),ct=Math.min(ct,we.count));const Rt=ct-Ke;if(Rt<0||Rt===1/0)return;rt.setup(L,O,Me,H,xe);let Tt,at=ve;if(xe!==null&&(Tt=j.get(xe),at=We,at.setIndex(Tt)),L.isMesh)O.wireframe===!0?(Se.setLineWidth(O.wireframeLinewidth*Pe()),at.setMode(R.LINES)):at.setMode(R.TRIANGLES);else if(L.isLine){let Ue=O.linewidth;Ue===void 0&&(Ue=1),Se.setLineWidth(Ue*Pe()),L.isLineSegments?at.setMode(R.LINES):L.isLineLoop?at.setMode(R.LINE_LOOP):at.setMode(R.LINE_STRIP)}else L.isPoints?at.setMode(R.POINTS):L.isSprite&&at.setMode(R.TRIANGLES);if(L.isBatchedMesh)if(L._multiDrawInstances!==null)at.renderMultiDrawInstances(L._multiDrawStarts,L._multiDrawCounts,L._multiDrawCount,L._multiDrawInstances);else if(Fe.get("WEBGL_multi_draw"))at.renderMultiDraw(L._multiDrawStarts,L._multiDrawCounts,L._multiDrawCount);else{const Ue=L._multiDrawStarts,kt=L._multiDrawCounts,ut=L._multiDrawCount,Rn=xe?j.get(xe).bytesPerElement:1,Yi=ye.get(O).currentProgram.getUniforms();for(let fn=0;fn<ut;fn++)Yi.setValue(R,"_gl_DrawID",fn),at.render(Ue[fn]/Rn,kt[fn])}else if(L.isInstancedMesh)at.renderInstances(Ke,Rt,L.count);else if(H.isInstancedBufferGeometry){const Ue=H._maxInstanceCount!==void 0?H._maxInstanceCount:1/0,kt=Math.min(H.instanceCount,Ue);at.renderInstances(Ke,Rt,kt)}else at.render(Ke,Rt)};function ge(x,U,H){x.transparent===!0&&x.side===Kn&&x.forceSinglePass===!1?(x.side=ln,x.needsUpdate=!0,mt(x,U,H),x.side=vi,x.needsUpdate=!0,mt(x,U,H),x.side=Kn):mt(x,U,H)}this.compile=function(x,U,H=null){H===null&&(H=x),u=Ve.get(H),u.init(U),y.push(u),H.traverseVisible(function(L){L.isLight&&L.layers.test(U.layers)&&(u.pushLight(L),L.castShadow&&u.pushShadow(L))}),x!==H&&x.traverseVisible(function(L){L.isLight&&L.layers.test(U.layers)&&(u.pushLight(L),L.castShadow&&u.pushShadow(L))}),u.setupLights();const O=new Set;return x.traverse(function(L){if(!(L.isMesh||L.isPoints||L.isLine||L.isSprite))return;const ee=L.material;if(ee)if(Array.isArray(ee))for(let de=0;de<ee.length;de++){const Me=ee[de];ge(Me,H,L),O.add(Me)}else ge(ee,H,L),O.add(ee)}),y.pop(),u=null,O},this.compileAsync=function(x,U,H=null){const O=this.compile(x,U,H);return new Promise(L=>{function ee(){if(O.forEach(function(de){ye.get(de).currentProgram.isReady()&&O.delete(de)}),O.size===0){L(x);return}setTimeout(ee,10)}Fe.get("KHR_parallel_shader_compile")!==null?ee():setTimeout(ee,10)})};let Ae=null;function Xe(x){Ae&&Ae(x)}function he(){Re.stop()}function Ge(){Re.start()}const Re=new jc;Re.setAnimationLoop(Xe),typeof self<"u"&&Re.setContext(self),this.setAnimationLoop=function(x){Ae=x,V.setAnimationLoop(x),x===null?Re.stop():Re.start()},V.addEventListener("sessionstart",he),V.addEventListener("sessionend",Ge),this.render=function(x,U){if(U!==void 0&&U.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(I===!0)return;if(x.matrixWorldAutoUpdate===!0&&x.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),V.enabled===!0&&V.isPresenting===!0&&(V.cameraAutoUpdate===!0&&V.updateCamera(U),U=V.getCamera()),x.isScene===!0&&x.onBeforeRender(S,x,U,N),u=Ve.get(x,y.length),u.init(U),y.push(u),Te.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),q.setFromProjectionMatrix(Te),pe=this.localClippingEnabled,re=ie.init(this.clippingPlanes,pe),m=fe.get(x,C.length),m.init(),C.push(m),V.enabled===!0&&V.isPresenting===!0){const ee=S.xr.getDepthSensingMesh();ee!==null&&Be(ee,U,-1/0,S.sortObjects)}Be(x,U,0,S.sortObjects),m.finish(),S.sortObjects===!0&&m.sort(te,A),ke=V.enabled===!1||V.isPresenting===!1||V.hasDepthSensing()===!1,ke&&De.addToRenderList(m,x),this.info.render.frame++,re===!0&&ie.beginShadows();const H=u.state.shadowsArray;se.render(H,x,U),re===!0&&ie.endShadows(),this.info.autoReset===!0&&this.info.reset();const O=m.opaque,L=m.transmissive;if(u.setupLights(),U.isArrayCamera){const ee=U.cameras;if(L.length>0)for(let de=0,Me=ee.length;de<Me;de++){const xe=ee[de];Ze(O,L,x,xe)}ke&&De.render(x);for(let de=0,Me=ee.length;de<Me;de++){const xe=ee[de];yt(m,x,xe,xe.viewport)}}else L.length>0&&Ze(O,L,x,U),ke&&De.render(x),yt(m,x,U);N!==null&&b===0&&(E.updateMultisampleRenderTarget(N),E.updateRenderTargetMipmap(N)),x.isScene===!0&&x.onAfterRender(S,x,U),rt.resetDefaultState(),T=-1,_=null,y.pop(),y.length>0?(u=y[y.length-1],re===!0&&ie.setGlobalState(S.clippingPlanes,u.state.camera)):u=null,C.pop(),C.length>0?m=C[C.length-1]:m=null};function Be(x,U,H,O){if(x.visible===!1)return;if(x.layers.test(U.layers)){if(x.isGroup)H=x.renderOrder;else if(x.isLOD)x.autoUpdate===!0&&x.update(U);else if(x.isLight)u.pushLight(x),x.castShadow&&u.pushShadow(x);else if(x.isSprite){if(!x.frustumCulled||q.intersectsSprite(x)){O&&ze.setFromMatrixPosition(x.matrixWorld).applyMatrix4(Te);const de=$.update(x),Me=x.material;Me.visible&&m.push(x,de,Me,H,ze.z,null)}}else if((x.isMesh||x.isLine||x.isPoints)&&(!x.frustumCulled||q.intersectsObject(x))){const de=$.update(x),Me=x.material;if(O&&(x.boundingSphere!==void 0?(x.boundingSphere===null&&x.computeBoundingSphere(),ze.copy(x.boundingSphere.center)):(de.boundingSphere===null&&de.computeBoundingSphere(),ze.copy(de.boundingSphere.center)),ze.applyMatrix4(x.matrixWorld).applyMatrix4(Te)),Array.isArray(Me)){const xe=de.groups;for(let Ce=0,Ie=xe.length;Ce<Ie;Ce++){const we=xe[Ce],Ke=Me[we.materialIndex];Ke&&Ke.visible&&m.push(x,de,Ke,H,ze.z,we)}}else Me.visible&&m.push(x,de,Me,H,ze.z,null)}}const ee=x.children;for(let de=0,Me=ee.length;de<Me;de++)Be(ee[de],U,H,O)}function yt(x,U,H,O){const L=x.opaque,ee=x.transmissive,de=x.transparent;u.setupLightsView(H),re===!0&&ie.setGlobalState(S.clippingPlanes,H),O&&Se.viewport(D.copy(O)),L.length>0&&gt(L,U,H),ee.length>0&&gt(ee,U,H),de.length>0&&gt(de,U,H),Se.buffers.depth.setTest(!0),Se.buffers.depth.setMask(!0),Se.buffers.color.setMask(!0),Se.setPolygonOffset(!1)}function Ze(x,U,H,O){if((H.isScene===!0?H.overrideMaterial:null)!==null)return;u.state.transmissionRenderTarget[O.id]===void 0&&(u.state.transmissionRenderTarget[O.id]=new ki(1,1,{generateMipmaps:!0,type:Fe.has("EXT_color_buffer_half_float")||Fe.has("EXT_color_buffer_float")?ns:ni,minFilter:Ii,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ot.workingColorSpace}));const ee=u.state.transmissionRenderTarget[O.id],de=O.viewport||D;ee.setSize(de.z*S.transmissionResolutionScale,de.w*S.transmissionResolutionScale);const Me=S.getRenderTarget();S.setRenderTarget(ee),S.getClearColor(X),Q=S.getClearAlpha(),Q<1&&S.setClearColor(16777215,.5),S.clear(),ke&&De.render(H);const xe=S.toneMapping;S.toneMapping=_i;const Ce=O.viewport;if(O.viewport!==void 0&&(O.viewport=void 0),u.setupLightsView(O),re===!0&&ie.setGlobalState(S.clippingPlanes,O),gt(x,H,O),E.updateMultisampleRenderTarget(ee),E.updateRenderTargetMipmap(ee),Fe.has("WEBGL_multisampled_render_to_texture")===!1){let Ie=!1;for(let we=0,Ke=U.length;we<Ke;we++){const ct=U[we],Rt=ct.object,Tt=ct.geometry,at=ct.material,Ue=ct.group;if(at.side===Kn&&Rt.layers.test(O.layers)){const kt=at.side;at.side=ln,at.needsUpdate=!0,Dt(Rt,H,O,Tt,at,Ue),at.side=kt,at.needsUpdate=!0,Ie=!0}}Ie===!0&&(E.updateMultisampleRenderTarget(ee),E.updateRenderTargetMipmap(ee))}S.setRenderTarget(Me),S.setClearColor(X,Q),Ce!==void 0&&(O.viewport=Ce),S.toneMapping=xe}function gt(x,U,H){const O=U.isScene===!0?U.overrideMaterial:null;for(let L=0,ee=x.length;L<ee;L++){const de=x[L],Me=de.object,xe=de.geometry,Ce=O===null?de.material:O,Ie=de.group;Me.layers.test(H.layers)&&Dt(Me,U,H,xe,Ce,Ie)}}function Dt(x,U,H,O,L,ee){x.onBeforeRender(S,U,H,O,L,ee),x.modelViewMatrix.multiplyMatrices(H.matrixWorldInverse,x.matrixWorld),x.normalMatrix.getNormalMatrix(x.modelViewMatrix),L.onBeforeRender(S,U,H,O,x,ee),L.transparent===!0&&L.side===Kn&&L.forceSinglePass===!1?(L.side=ln,L.needsUpdate=!0,S.renderBufferDirect(H,U,O,L,x,ee),L.side=vi,L.needsUpdate=!0,S.renderBufferDirect(H,U,O,L,x,ee),L.side=Kn):S.renderBufferDirect(H,U,O,L,x,ee),x.onAfterRender(S,U,H,O,L,ee)}function mt(x,U,H){U.isScene!==!0&&(U=$e);const O=ye.get(x),L=u.state.lights,ee=u.state.shadowsArray,de=L.state.version,Me=ce.getParameters(x,L.state,ee,U,H),xe=ce.getProgramCacheKey(Me);let Ce=O.programs;O.environment=x.isMeshStandardMaterial?U.environment:null,O.fog=U.fog,O.envMap=(x.isMeshStandardMaterial?z:g).get(x.envMap||O.environment),O.envMapRotation=O.environment!==null&&x.envMap===null?U.environmentRotation:x.envMapRotation,Ce===void 0&&(x.addEventListener("dispose",Oe),Ce=new Map,O.programs=Ce);let Ie=Ce.get(xe);if(Ie!==void 0){if(O.currentProgram===Ie&&O.lightsStateVersion===de)return lt(x,Me),Ie}else Me.uniforms=ce.getUniforms(x),x.onBeforeCompile(Me,S),Ie=ce.acquireProgram(Me,xe),Ce.set(xe,Ie),O.uniforms=Me.uniforms;const we=O.uniforms;return(!x.isShaderMaterial&&!x.isRawShaderMaterial||x.clipping===!0)&&(we.clippingPlanes=ie.uniform),lt(x,Me),O.needsLights=qt(x),O.lightsStateVersion=de,O.needsLights&&(we.ambientLightColor.value=L.state.ambient,we.lightProbe.value=L.state.probe,we.directionalLights.value=L.state.directional,we.directionalLightShadows.value=L.state.directionalShadow,we.spotLights.value=L.state.spot,we.spotLightShadows.value=L.state.spotShadow,we.rectAreaLights.value=L.state.rectArea,we.ltc_1.value=L.state.rectAreaLTC1,we.ltc_2.value=L.state.rectAreaLTC2,we.pointLights.value=L.state.point,we.pointLightShadows.value=L.state.pointShadow,we.hemisphereLights.value=L.state.hemi,we.directionalShadowMap.value=L.state.directionalShadowMap,we.directionalShadowMatrix.value=L.state.directionalShadowMatrix,we.spotShadowMap.value=L.state.spotShadowMap,we.spotLightMatrix.value=L.state.spotLightMatrix,we.spotLightMap.value=L.state.spotLightMap,we.pointShadowMap.value=L.state.pointShadowMap,we.pointShadowMatrix.value=L.state.pointShadowMatrix),O.currentProgram=Ie,O.uniformsList=null,Ie}function _t(x){if(x.uniformsList===null){const U=x.currentProgram.getUniforms();x.uniformsList=qs.seqWithValue(U.seq,x.uniforms)}return x.uniformsList}function lt(x,U){const H=ye.get(x);H.outputColorSpace=U.outputColorSpace,H.batching=U.batching,H.batchingColor=U.batchingColor,H.instancing=U.instancing,H.instancingColor=U.instancingColor,H.instancingMorph=U.instancingMorph,H.skinning=U.skinning,H.morphTargets=U.morphTargets,H.morphNormals=U.morphNormals,H.morphColors=U.morphColors,H.morphTargetsCount=U.morphTargetsCount,H.numClippingPlanes=U.numClippingPlanes,H.numIntersection=U.numClipIntersection,H.vertexAlphas=U.vertexAlphas,H.vertexTangents=U.vertexTangents,H.toneMapping=U.toneMapping}function un(x,U,H,O,L){U.isScene!==!0&&(U=$e),E.resetTextureUnits();const ee=U.fog,de=O.isMeshStandardMaterial?U.environment:null,Me=N===null?S.outputColorSpace:N.isXRRenderTarget===!0?N.texture.colorSpace:br,xe=(O.isMeshStandardMaterial?z:g).get(O.envMap||de),Ce=O.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,Ie=!!H.attributes.tangent&&(!!O.normalMap||O.anisotropy>0),we=!!H.morphAttributes.position,Ke=!!H.morphAttributes.normal,ct=!!H.morphAttributes.color;let Rt=_i;O.toneMapped&&(N===null||N.isXRRenderTarget===!0)&&(Rt=S.toneMapping);const Tt=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,at=Tt!==void 0?Tt.length:0,Ue=ye.get(O),kt=u.state.lights;if(re===!0&&(pe===!0||x!==_)){const $t=x===_&&O.id===T;ie.setState(O,x,$t)}let ut=!1;O.version===Ue.__version?(Ue.needsLights&&Ue.lightsStateVersion!==kt.state.version||Ue.outputColorSpace!==Me||L.isBatchedMesh&&Ue.batching===!1||!L.isBatchedMesh&&Ue.batching===!0||L.isBatchedMesh&&Ue.batchingColor===!0&&L.colorTexture===null||L.isBatchedMesh&&Ue.batchingColor===!1&&L.colorTexture!==null||L.isInstancedMesh&&Ue.instancing===!1||!L.isInstancedMesh&&Ue.instancing===!0||L.isSkinnedMesh&&Ue.skinning===!1||!L.isSkinnedMesh&&Ue.skinning===!0||L.isInstancedMesh&&Ue.instancingColor===!0&&L.instanceColor===null||L.isInstancedMesh&&Ue.instancingColor===!1&&L.instanceColor!==null||L.isInstancedMesh&&Ue.instancingMorph===!0&&L.morphTexture===null||L.isInstancedMesh&&Ue.instancingMorph===!1&&L.morphTexture!==null||Ue.envMap!==xe||O.fog===!0&&Ue.fog!==ee||Ue.numClippingPlanes!==void 0&&(Ue.numClippingPlanes!==ie.numPlanes||Ue.numIntersection!==ie.numIntersection)||Ue.vertexAlphas!==Ce||Ue.vertexTangents!==Ie||Ue.morphTargets!==we||Ue.morphNormals!==Ke||Ue.morphColors!==ct||Ue.toneMapping!==Rt||Ue.morphTargetsCount!==at)&&(ut=!0):(ut=!0,Ue.__version=O.version);let Rn=Ue.currentProgram;ut===!0&&(Rn=mt(O,U,L));let Yi=!1,fn=!1,Pr=!1;const Mt=Rn.getUniforms(),xn=Ue.uniforms;if(Se.useProgram(Rn.program)&&(Yi=!0,fn=!0,Pr=!0),O.id!==T&&(T=O.id,fn=!0),Yi||_!==x){Se.buffers.depth.getReversed()?(ne.copy(x.projectionMatrix),Mf(ne),Sf(ne),Mt.setValue(R,"projectionMatrix",ne)):Mt.setValue(R,"projectionMatrix",x.projectionMatrix),Mt.setValue(R,"viewMatrix",x.matrixWorldInverse);const sn=Mt.map.cameraPosition;sn!==void 0&&sn.setValue(R,be.setFromMatrixPosition(x.matrixWorld)),F.logarithmicDepthBuffer&&Mt.setValue(R,"logDepthBufFC",2/(Math.log(x.far+1)/Math.LN2)),(O.isMeshPhongMaterial||O.isMeshToonMaterial||O.isMeshLambertMaterial||O.isMeshBasicMaterial||O.isMeshStandardMaterial||O.isShaderMaterial)&&Mt.setValue(R,"isOrthographic",x.isOrthographicCamera===!0),_!==x&&(_=x,fn=!0,Pr=!0)}if(L.isSkinnedMesh){Mt.setOptional(R,L,"bindMatrix"),Mt.setOptional(R,L,"bindMatrixInverse");const $t=L.skeleton;$t&&($t.boneTexture===null&&$t.computeBoneTexture(),Mt.setValue(R,"boneTexture",$t.boneTexture,E))}L.isBatchedMesh&&(Mt.setOptional(R,L,"batchingTexture"),Mt.setValue(R,"batchingTexture",L._matricesTexture,E),Mt.setOptional(R,L,"batchingIdTexture"),Mt.setValue(R,"batchingIdTexture",L._indirectTexture,E),Mt.setOptional(R,L,"batchingColorTexture"),L._colorsTexture!==null&&Mt.setValue(R,"batchingColorTexture",L._colorsTexture,E));const Mn=H.morphAttributes;if((Mn.position!==void 0||Mn.normal!==void 0||Mn.color!==void 0)&&Le.update(L,H,Rn),(fn||Ue.receiveShadow!==L.receiveShadow)&&(Ue.receiveShadow=L.receiveShadow,Mt.setValue(R,"receiveShadow",L.receiveShadow)),O.isMeshGouraudMaterial&&O.envMap!==null&&(xn.envMap.value=xe,xn.flipEnvMap.value=xe.isCubeTexture&&xe.isRenderTargetTexture===!1?-1:1),O.isMeshStandardMaterial&&O.envMap===null&&U.environment!==null&&(xn.envMapIntensity.value=U.environmentIntensity),fn&&(Mt.setValue(R,"toneMappingExposure",S.toneMappingExposure),Ue.needsLights&&vt(xn,Pr),ee&&O.fog===!0&&ae.refreshFogUniforms(xn,ee),ae.refreshMaterialUniforms(xn,O,k,J,u.state.transmissionRenderTarget[x.id]),qs.upload(R,_t(Ue),xn,E)),O.isShaderMaterial&&O.uniformsNeedUpdate===!0&&(qs.upload(R,_t(Ue),xn,E),O.uniformsNeedUpdate=!1),O.isSpriteMaterial&&Mt.setValue(R,"center",L.center),Mt.setValue(R,"modelViewMatrix",L.modelViewMatrix),Mt.setValue(R,"normalMatrix",L.normalMatrix),Mt.setValue(R,"modelMatrix",L.matrixWorld),O.isShaderMaterial||O.isRawShaderMaterial){const $t=O.uniformsGroups;for(let sn=0,ha=$t.length;sn<ha;sn++){const Mi=$t[sn];w.update(Mi,Rn),w.bind(Mi,Rn)}}return Rn}function vt(x,U){x.ambientLightColor.needsUpdate=U,x.lightProbe.needsUpdate=U,x.directionalLights.needsUpdate=U,x.directionalLightShadows.needsUpdate=U,x.pointLights.needsUpdate=U,x.pointLightShadows.needsUpdate=U,x.spotLights.needsUpdate=U,x.spotLightShadows.needsUpdate=U,x.rectAreaLights.needsUpdate=U,x.hemisphereLights.needsUpdate=U}function qt(x){return x.isMeshLambertMaterial||x.isMeshToonMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isShadowMaterial||x.isShaderMaterial&&x.lights===!0}this.getActiveCubeFace=function(){return P},this.getActiveMipmapLevel=function(){return b},this.getRenderTarget=function(){return N},this.setRenderTargetTextures=function(x,U,H){ye.get(x.texture).__webglTexture=U,ye.get(x.depthTexture).__webglTexture=H;const O=ye.get(x);O.__hasExternalTextures=!0,O.__autoAllocateDepthBuffer=H===void 0,O.__autoAllocateDepthBuffer||Fe.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),O.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(x,U){const H=ye.get(x);H.__webglFramebuffer=U,H.__useDefaultFramebuffer=U===void 0};const vn=R.createFramebuffer();this.setRenderTarget=function(x,U=0,H=0){N=x,P=U,b=H;let O=!0,L=null,ee=!1,de=!1;if(x){const xe=ye.get(x);if(xe.__useDefaultFramebuffer!==void 0)Se.bindFramebuffer(R.FRAMEBUFFER,null),O=!1;else if(xe.__webglFramebuffer===void 0)E.setupRenderTarget(x);else if(xe.__hasExternalTextures)E.rebindTextures(x,ye.get(x.texture).__webglTexture,ye.get(x.depthTexture).__webglTexture);else if(x.depthBuffer){const we=x.depthTexture;if(xe.__boundDepthTexture!==we){if(we!==null&&ye.has(we)&&(x.width!==we.image.width||x.height!==we.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");E.setupDepthRenderbuffer(x)}}const Ce=x.texture;(Ce.isData3DTexture||Ce.isDataArrayTexture||Ce.isCompressedArrayTexture)&&(de=!0);const Ie=ye.get(x).__webglFramebuffer;x.isWebGLCubeRenderTarget?(Array.isArray(Ie[U])?L=Ie[U][H]:L=Ie[U],ee=!0):x.samples>0&&E.useMultisampledRTT(x)===!1?L=ye.get(x).__webglMultisampledFramebuffer:Array.isArray(Ie)?L=Ie[H]:L=Ie,D.copy(x.viewport),B.copy(x.scissor),G=x.scissorTest}else D.copy(_e).multiplyScalar(k).floor(),B.copy(He).multiplyScalar(k).floor(),G=et;if(H!==0&&(L=vn),Se.bindFramebuffer(R.FRAMEBUFFER,L)&&O&&Se.drawBuffers(x,L),Se.viewport(D),Se.scissor(B),Se.setScissorTest(G),ee){const xe=ye.get(x.texture);R.framebufferTexture2D(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_CUBE_MAP_POSITIVE_X+U,xe.__webglTexture,H)}else if(de){const xe=ye.get(x.texture),Ce=U;R.framebufferTextureLayer(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0,xe.__webglTexture,H,Ce)}else if(x!==null&&H!==0){const xe=ye.get(x.texture);R.framebufferTexture2D(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_2D,xe.__webglTexture,H)}T=-1},this.readRenderTargetPixels=function(x,U,H,O,L,ee,de){if(!(x&&x.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Me=ye.get(x).__webglFramebuffer;if(x.isWebGLCubeRenderTarget&&de!==void 0&&(Me=Me[de]),Me){Se.bindFramebuffer(R.FRAMEBUFFER,Me);try{const xe=x.texture,Ce=xe.format,Ie=xe.type;if(!F.textureFormatReadable(Ce)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!F.textureTypeReadable(Ie)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=x.width-O&&H>=0&&H<=x.height-L&&R.readPixels(U,H,O,L,Ne.convert(Ce),Ne.convert(Ie),ee)}finally{const xe=N!==null?ye.get(N).__webglFramebuffer:null;Se.bindFramebuffer(R.FRAMEBUFFER,xe)}}},this.readRenderTargetPixelsAsync=async function(x,U,H,O,L,ee,de){if(!(x&&x.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Me=ye.get(x).__webglFramebuffer;if(x.isWebGLCubeRenderTarget&&de!==void 0&&(Me=Me[de]),Me){const xe=x.texture,Ce=xe.format,Ie=xe.type;if(!F.textureFormatReadable(Ce))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!F.textureTypeReadable(Ie))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(U>=0&&U<=x.width-O&&H>=0&&H<=x.height-L){Se.bindFramebuffer(R.FRAMEBUFFER,Me);const we=R.createBuffer();R.bindBuffer(R.PIXEL_PACK_BUFFER,we),R.bufferData(R.PIXEL_PACK_BUFFER,ee.byteLength,R.STREAM_READ),R.readPixels(U,H,O,L,Ne.convert(Ce),Ne.convert(Ie),0);const Ke=N!==null?ye.get(N).__webglFramebuffer:null;Se.bindFramebuffer(R.FRAMEBUFFER,Ke);const ct=R.fenceSync(R.SYNC_GPU_COMMANDS_COMPLETE,0);return R.flush(),await xf(R,ct,4),R.bindBuffer(R.PIXEL_PACK_BUFFER,we),R.getBufferSubData(R.PIXEL_PACK_BUFFER,0,ee),R.deleteBuffer(we),R.deleteSync(ct),ee}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(x,U=null,H=0){x.isTexture!==!0&&(cr("WebGLRenderer: copyFramebufferToTexture function signature has changed."),U=arguments[0]||null,x=arguments[1]);const O=Math.pow(2,-H),L=Math.floor(x.image.width*O),ee=Math.floor(x.image.height*O),de=U!==null?U.x:0,Me=U!==null?U.y:0;E.setTexture2D(x,0),R.copyTexSubImage2D(R.TEXTURE_2D,H,0,0,de,Me,L,ee),Se.unbindTexture()};const Lt=R.createFramebuffer(),Ut=R.createFramebuffer();this.copyTextureToTexture=function(x,U,H=null,O=null,L=0,ee=null){x.isTexture!==!0&&(cr("WebGLRenderer: copyTextureToTexture function signature has changed."),O=arguments[0]||null,x=arguments[1],U=arguments[2],ee=arguments[3]||0,H=null),ee===null&&(L!==0?(cr("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),ee=L,L=0):ee=0);let de,Me,xe,Ce,Ie,we,Ke,ct,Rt;const Tt=x.isCompressedTexture?x.mipmaps[ee]:x.image;if(H!==null)de=H.max.x-H.min.x,Me=H.max.y-H.min.y,xe=H.isBox3?H.max.z-H.min.z:1,Ce=H.min.x,Ie=H.min.y,we=H.isBox3?H.min.z:0;else{const Mn=Math.pow(2,-L);de=Math.floor(Tt.width*Mn),Me=Math.floor(Tt.height*Mn),x.isDataArrayTexture?xe=Tt.depth:x.isData3DTexture?xe=Math.floor(Tt.depth*Mn):xe=1,Ce=0,Ie=0,we=0}O!==null?(Ke=O.x,ct=O.y,Rt=O.z):(Ke=0,ct=0,Rt=0);const at=Ne.convert(U.format),Ue=Ne.convert(U.type);let kt;U.isData3DTexture?(E.setTexture3D(U,0),kt=R.TEXTURE_3D):U.isDataArrayTexture||U.isCompressedArrayTexture?(E.setTexture2DArray(U,0),kt=R.TEXTURE_2D_ARRAY):(E.setTexture2D(U,0),kt=R.TEXTURE_2D),R.pixelStorei(R.UNPACK_FLIP_Y_WEBGL,U.flipY),R.pixelStorei(R.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),R.pixelStorei(R.UNPACK_ALIGNMENT,U.unpackAlignment);const ut=R.getParameter(R.UNPACK_ROW_LENGTH),Rn=R.getParameter(R.UNPACK_IMAGE_HEIGHT),Yi=R.getParameter(R.UNPACK_SKIP_PIXELS),fn=R.getParameter(R.UNPACK_SKIP_ROWS),Pr=R.getParameter(R.UNPACK_SKIP_IMAGES);R.pixelStorei(R.UNPACK_ROW_LENGTH,Tt.width),R.pixelStorei(R.UNPACK_IMAGE_HEIGHT,Tt.height),R.pixelStorei(R.UNPACK_SKIP_PIXELS,Ce),R.pixelStorei(R.UNPACK_SKIP_ROWS,Ie),R.pixelStorei(R.UNPACK_SKIP_IMAGES,we);const Mt=x.isDataArrayTexture||x.isData3DTexture,xn=U.isDataArrayTexture||U.isData3DTexture;if(x.isDepthTexture){const Mn=ye.get(x),$t=ye.get(U),sn=ye.get(Mn.__renderTarget),ha=ye.get($t.__renderTarget);Se.bindFramebuffer(R.READ_FRAMEBUFFER,sn.__webglFramebuffer),Se.bindFramebuffer(R.DRAW_FRAMEBUFFER,ha.__webglFramebuffer);for(let Mi=0;Mi<xe;Mi++)Mt&&(R.framebufferTextureLayer(R.READ_FRAMEBUFFER,R.COLOR_ATTACHMENT0,ye.get(x).__webglTexture,L,we+Mi),R.framebufferTextureLayer(R.DRAW_FRAMEBUFFER,R.COLOR_ATTACHMENT0,ye.get(U).__webglTexture,ee,Rt+Mi)),R.blitFramebuffer(Ce,Ie,de,Me,Ke,ct,de,Me,R.DEPTH_BUFFER_BIT,R.NEAREST);Se.bindFramebuffer(R.READ_FRAMEBUFFER,null),Se.bindFramebuffer(R.DRAW_FRAMEBUFFER,null)}else if(L!==0||x.isRenderTargetTexture||ye.has(x)){const Mn=ye.get(x),$t=ye.get(U);Se.bindFramebuffer(R.READ_FRAMEBUFFER,Lt),Se.bindFramebuffer(R.DRAW_FRAMEBUFFER,Ut);for(let sn=0;sn<xe;sn++)Mt?R.framebufferTextureLayer(R.READ_FRAMEBUFFER,R.COLOR_ATTACHMENT0,Mn.__webglTexture,L,we+sn):R.framebufferTexture2D(R.READ_FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_2D,Mn.__webglTexture,L),xn?R.framebufferTextureLayer(R.DRAW_FRAMEBUFFER,R.COLOR_ATTACHMENT0,$t.__webglTexture,ee,Rt+sn):R.framebufferTexture2D(R.DRAW_FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_2D,$t.__webglTexture,ee),L!==0?R.blitFramebuffer(Ce,Ie,de,Me,Ke,ct,de,Me,R.COLOR_BUFFER_BIT,R.NEAREST):xn?R.copyTexSubImage3D(kt,ee,Ke,ct,Rt+sn,Ce,Ie,de,Me):R.copyTexSubImage2D(kt,ee,Ke,ct,Ce,Ie,de,Me);Se.bindFramebuffer(R.READ_FRAMEBUFFER,null),Se.bindFramebuffer(R.DRAW_FRAMEBUFFER,null)}else xn?x.isDataTexture||x.isData3DTexture?R.texSubImage3D(kt,ee,Ke,ct,Rt,de,Me,xe,at,Ue,Tt.data):U.isCompressedArrayTexture?R.compressedTexSubImage3D(kt,ee,Ke,ct,Rt,de,Me,xe,at,Tt.data):R.texSubImage3D(kt,ee,Ke,ct,Rt,de,Me,xe,at,Ue,Tt):x.isDataTexture?R.texSubImage2D(R.TEXTURE_2D,ee,Ke,ct,de,Me,at,Ue,Tt.data):x.isCompressedTexture?R.compressedTexSubImage2D(R.TEXTURE_2D,ee,Ke,ct,Tt.width,Tt.height,at,Tt.data):R.texSubImage2D(R.TEXTURE_2D,ee,Ke,ct,de,Me,at,Ue,Tt);R.pixelStorei(R.UNPACK_ROW_LENGTH,ut),R.pixelStorei(R.UNPACK_IMAGE_HEIGHT,Rn),R.pixelStorei(R.UNPACK_SKIP_PIXELS,Yi),R.pixelStorei(R.UNPACK_SKIP_ROWS,fn),R.pixelStorei(R.UNPACK_SKIP_IMAGES,Pr),ee===0&&U.generateMipmaps&&R.generateMipmap(kt),Se.unbindTexture()},this.copyTextureToTexture3D=function(x,U,H=null,O=null,L=0){return x.isTexture!==!0&&(cr("WebGLRenderer: copyTextureToTexture3D function signature has changed."),H=arguments[0]||null,O=arguments[1]||null,x=arguments[2],U=arguments[3],L=arguments[4]||0),cr('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(x,U,H,O,L)},this.initRenderTarget=function(x){ye.get(x).__webglFramebuffer===void 0&&E.setupRenderTarget(x)},this.initTexture=function(x){x.isCubeTexture?E.setTextureCube(x,0):x.isData3DTexture?E.setTexture3D(x,0):x.isDataArrayTexture||x.isCompressedArrayTexture?E.setTexture2DArray(x,0):E.setTexture2D(x,0),Se.unbindTexture()},this.resetState=function(){P=0,b=0,N=null,Se.reset(),rt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Jn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorspace=ot._getDrawingBufferColorSpace(e),t.unpackColorSpace=ot._getUnpackColorSpace()}}var N_=`precision mediump float;\r
uniform float iTime;\r
uniform vec2 uResolution;\r
uniform float scroll;\r
uniform float pagetransition;\r
varying vec2 vUv;\r
#define PI 3.141516

float bayer4x4(vec2 uv) {\r
    
    float matrix[16];\r
    matrix[0]  = 0.0 / 16.0; matrix[1]  = 8.0 / 16.0; matrix[2]  = 2.0 / 16.0; matrix[3]  = 10.0 / 16.0;\r
    matrix[4]  = 12.0 / 16.0; matrix[5] = 4.0 / 16.0; matrix[6]  = 14.0 / 16.0; matrix[7]  = 6.0 / 16.0;\r
    matrix[8]  = 3.0 / 16.0; matrix[9]  = 11.0 / 16.0; matrix[10] = 1.0 / 16.0; matrix[11] = 9.0 / 16.0;\r
    matrix[12] = 15.0 / 16.0; matrix[13] = 7.0 / 16.0; matrix[14] = 13.0 / 16.0; matrix[15] = 5.0 / 16.0;

    
    ivec2 pos = ivec2(mod(uv * 4.0, 4.0));\r
    int index = pos.y * 4 + pos.x;

    return matrix[index];\r
}\r

float smoothCircle(vec2 pos, float smc, float sml)\r
{\r
    vec2 uv = vUv;\r
    float AR = uResolution.x / uResolution.y;\r
    uv.x *= AR;\r
    return smoothstep(smc+sml,smc-sml , distance(uv, pos));\r
}

vec3 dithering(vec3 col){\r
    vec2 uvv = vUv;\r
    float AR = uResolution.x / uResolution.y;\r
    uvv.x *= AR;\r
    vec3 bayered = step(0.5,col + bayer4x4(uvv*64.)*ceil(col));\r
    float xd = dot(bayered,vec3(1.));\r
    return bayered;\r
}

vec3 replaceColor(vec3 inputColor, vec3 replaceBlack, vec3 replaceWhite) {

    float dd = dot(inputColor,vec3(1.0));\r
    if(dd>2.){\r
        return mix(inputColor, replaceWhite, (dd-2.5)/.5);\r
    }\r
    else if(dd<1.){\r
        return mix(replaceBlack,inputColor, dd/.5);\r
    }\r
    return inputColor;\r
}\r

void main() {\r
    float j = (sin(iTime*9.3)*0.5 + 0.5) + 0.2;\r
    float vsml = 0.05*j;\r
    float AR = uResolution.x / uResolution.y;\r
    vec2 initpos = vec2(AR*(0.8 - min(scroll*1.5,0.3)),0.5);\r
    float rotOffset = scroll*6.;\r
    vec2 a1pos = initpos+vec2(cos(iTime + rotOffset*PI),sin(iTime))*0.025*j;\r

    float xd = sin(iTime*5.)*0.5 + 0.5;\r
    
    float r1 = 0.15+AR*0.75*(1.- pagetransition);\r
    float r2 = 0.125 + xd*0.25*0.;\r
    float a1 = smoothCircle(a1pos, r1, vsml);\r
    float a2 = smoothCircle(a1pos, r2, vsml);

    vec2 b1pos = initpos+vec2(cos(iTime + (rotOffset + 0.666)*PI),sin(iTime + (rotOffset + 0.666)*PI))*0.025*j;\r
    float b1 = smoothCircle(b1pos, r1, vsml);\r
    float b2 = smoothCircle(b1pos, r2, vsml);

    vec2 c1pos = initpos+vec2(cos(iTime+ (rotOffset + 1.333)*PI),sin(iTime+ (rotOffset + 1.333)*PI))*0.025*j;\r
    float c1 = smoothCircle(c1pos, r1, vsml);\r
    float c2 = smoothCircle(c1pos, r2, vsml);

    vec3 col = vec3(a1-a2,b1-b2,c1-c2);\r
    vec3 d = mix(col,dithering(col),1.-scroll);\r
    vec3 test = replaceColor(d, vec3(0.0156, 0.0431, 0.2784),vec3(0.9786, 0.9786, 0.7843));\r
    gl_FragColor = vec4(test,1.0);\r
}`,F_=`varying vec2 vUv;

void main() {\r
    vUv = uv;\r
    gl_Position = vec4(position, 1.0);\r
}`;class O_{constructor(e){this.time=0,this.container=e.dom,this.width=this.container.offsetWidth,this.height=this.container.offsetHeight,this.scene=new Xf,this.camera=new Tn(75,window.innerWidth/window.innerHeight,.1,1e3),this.renderer=new I_,this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.renderer.setSize(this.width,this.height),this.container.appendChild(this.renderer.domElement),this.material=new ri({vertexShader:F_,fragmentShader:N_,uniforms:{iTime:{value:0},scroll:{value:0},pagetransition:{value:0},uResolution:{value:new dt(this.width,this.height)}},wireframe:!1}),this.geometry=new os(2,2,2,2),this.mesh=new zn(this.geometry,this.material),this.scene.add(this.mesh),this.camera.position.z=1,this.setupResize(),this.setupScroll(),this.render()}setupResize(){window.addEventListener("resize",this.resize.bind(this))}resize(){this.width=this.container.offsetWidth,this.height=this.container.offsetHeight,this.renderer.setSize(this.width,this.height)}setupScroll(){window.addEventListener("scroll",()=>{const e=window.scrollY||document.documentElement.scrollTop,t=document.documentElement.scrollHeight-document.documentElement.clientHeight,n=e/t;this.material.uniforms.scroll.value=n})}render(){this.time+=.001,this.material.uniforms.iTime.value=this.time,this.renderer.render(this.scene,this.camera),window.requestAnimationFrame(this.render.bind(this))}}function B_(i,e){for(var t=0;t<e.length;t++){var n=e[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(i,n.key,n)}}function z_(i,e,t){return B_(i.prototype,e),i}/*!
 * Observer 3.12.5
 * https://gsap.com
 *
 * @license Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var Gt,$s,_n,di,pi,gr,nu,Ci,Wr,iu,Qn,Dn,ru,su=function(){return Gt||typeof window<"u"&&(Gt=window.gsap)&&Gt.registerPlugin&&Gt},au=1,dr=[],Qe=[],Gn=[],Xr=Date.now,Bo=function(e,t){return t},H_=function(){var e=Wr.core,t=e.bridge||{},n=e._scrollers,r=e._proxies;n.push.apply(n,Qe),r.push.apply(r,Gn),Qe=n,Gn=r,Bo=function(o,a){return t[o](a)}},gi=function(e,t){return~Gn.indexOf(e)&&Gn[Gn.indexOf(e)+1][t]},Yr=function(e){return!!~iu.indexOf(e)},Zt=function(e,t,n,r,s){return e.addEventListener(t,n,{passive:r!==!1,capture:!!s})},Kt=function(e,t,n,r){return e.removeEventListener(t,n,!!r)},Ps="scrollLeft",Ds="scrollTop",zo=function(){return Qn&&Qn.isPressed||Qe.cache++},ia=function(e,t){var n=function r(s){if(s||s===0){au&&(_n.history.scrollRestoration="manual");var o=Qn&&Qn.isPressed;s=r.v=Math.round(s)||(Qn&&Qn.iOS?1:0),e(s),r.cacheID=Qe.cache,o&&Bo("ss",s)}else(t||Qe.cache!==r.cacheID||Bo("ref"))&&(r.cacheID=Qe.cache,r.v=e());return r.v+r.offset};return n.offset=0,e&&n},tn={s:Ps,p:"left",p2:"Left",os:"right",os2:"Right",d:"width",d2:"Width",a:"x",sc:ia(function(i){return arguments.length?_n.scrollTo(i,Nt.sc()):_n.pageXOffset||di[Ps]||pi[Ps]||gr[Ps]||0})},Nt={s:Ds,p:"top",p2:"Top",os:"bottom",os2:"Bottom",d:"height",d2:"Height",a:"y",op:tn,sc:ia(function(i){return arguments.length?_n.scrollTo(tn.sc(),i):_n.pageYOffset||di[Ds]||pi[Ds]||gr[Ds]||0})},on=function(e,t){return(t&&t._ctx&&t._ctx.selector||Gt.utils.toArray)(e)[0]||(typeof e=="string"&&Gt.config().nullTargetWarn!==!1?console.warn("Element not found:",e):null)},xi=function(e,t){var n=t.s,r=t.sc;Yr(e)&&(e=di.scrollingElement||pi);var s=Qe.indexOf(e),o=r===Nt.sc?1:2;!~s&&(s=Qe.push(e)-1),Qe[s+o]||Zt(e,"scroll",zo);var a=Qe[s+o],l=a||(Qe[s+o]=ia(gi(e,n),!0)||(Yr(e)?r:ia(function(c){return arguments.length?e[n]=c:e[n]})));return l.target=e,a||(l.smooth=Gt.getProperty(e,"scrollBehavior")==="smooth"),l},Ho=function(e,t,n){var r=e,s=e,o=Xr(),a=o,l=t||50,c=Math.max(500,l*3),h=function(v,M){var m=Xr();M||m-o>l?(s=r,r=v,a=o,o=m):n?r+=v:r=s+(v-s)/(m-a)*(o-a)},p=function(){s=r=n?0:r,a=o=0},d=function(v){var M=a,m=s,u=Xr();return(v||v===0)&&v!==r&&h(v),o===a||u-a>c?0:(r+(n?m:-m))/((n?u:o)-M)*1e3};return{update:h,reset:p,getVelocity:d}},Fr=function(e,t){return t&&!e._gsapAllow&&e.preventDefault(),e.changedTouches?e.changedTouches[0]:e},sc=function(e){var t=Math.max.apply(Math,e),n=Math.min.apply(Math,e);return Math.abs(t)>=Math.abs(n)?t:n},ou=function(){Wr=Gt.core.globals().ScrollTrigger,Wr&&Wr.core&&H_()},lu=function(e){return Gt=e||su(),!$s&&Gt&&typeof document<"u"&&document.body&&(_n=window,di=document,pi=di.documentElement,gr=di.body,iu=[_n,di,pi,gr],Gt.utils.clamp,ru=Gt.core.context||function(){},Ci="onpointerenter"in gr?"pointer":"mouse",nu=At.isTouch=_n.matchMedia&&_n.matchMedia("(hover: none), (pointer: coarse)").matches?1:"ontouchstart"in _n||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0?2:0,Dn=At.eventTypes=("ontouchstart"in pi?"touchstart,touchmove,touchcancel,touchend":"onpointerdown"in pi?"pointerdown,pointermove,pointercancel,pointerup":"mousedown,mousemove,mouseup,mouseup").split(","),setTimeout(function(){return au=0},500),ou(),$s=1),$s};tn.op=Nt;Qe.cache=0;var At=function(){function i(t){this.init(t)}var e=i.prototype;return e.init=function(n){$s||lu(Gt)||console.warn("Please gsap.registerPlugin(Observer)"),Wr||ou();var r=n.tolerance,s=n.dragMinimum,o=n.type,a=n.target,l=n.lineHeight,c=n.debounce,h=n.preventDefault,p=n.onStop,d=n.onStopDelay,f=n.ignore,v=n.wheelSpeed,M=n.event,m=n.onDragStart,u=n.onDragEnd,C=n.onDrag,y=n.onPress,S=n.onRelease,I=n.onRight,P=n.onLeft,b=n.onUp,N=n.onDown,T=n.onChangeX,_=n.onChangeY,D=n.onChange,B=n.onToggleX,G=n.onToggleY,X=n.onHover,Q=n.onHoverEnd,Y=n.onMove,J=n.ignoreCheck,k=n.isNormalizer,te=n.onGestureStart,A=n.onGestureEnd,_e=n.onWheel,He=n.onEnable,et=n.onDisable,q=n.onClick,re=n.scrollSpeed,pe=n.capture,ne=n.allowClicks,Te=n.lockAxis,be=n.onLockAxis;this.target=a=on(a)||pi,this.vars=n,f&&(f=Gt.utils.toArray(f)),r=r||1e-9,s=s||0,v=v||1,re=re||1,o=o||"wheel,touch,pointer",c=c!==!1,l||(l=parseFloat(_n.getComputedStyle(gr).lineHeight)||22);var ze,$e,ke,Pe,R,pt,Fe,F=this,Se=0,tt=0,ye=n.passive||!h,E=xi(a,tn),g=xi(a,Nt),z=E(),j=g(),Z=~o.indexOf("touch")&&!~o.indexOf("pointer")&&Dn[0]==="pointerdown",$=Yr(a),ce=a.ownerDocument||di,ae=[0,0,0],fe=[0,0,0],Ve=0,ie=function(){return Ve=Xr()},se=function(Ae,Xe){return(F.event=Ae)&&f&&~f.indexOf(Ae.target)||Xe&&Z&&Ae.pointerType!=="touch"||J&&J(Ae,Xe)},De=function(){F._vx.reset(),F._vy.reset(),$e.pause(),p&&p(F)},Le=function(){var Ae=F.deltaX=sc(ae),Xe=F.deltaY=sc(fe),he=Math.abs(Ae)>=r,Ge=Math.abs(Xe)>=r;D&&(he||Ge)&&D(F,Ae,Xe,ae,fe),he&&(I&&F.deltaX>0&&I(F),P&&F.deltaX<0&&P(F),T&&T(F),B&&F.deltaX<0!=Se<0&&B(F),Se=F.deltaX,ae[0]=ae[1]=ae[2]=0),Ge&&(N&&F.deltaY>0&&N(F),b&&F.deltaY<0&&b(F),_&&_(F),G&&F.deltaY<0!=tt<0&&G(F),tt=F.deltaY,fe[0]=fe[1]=fe[2]=0),(Pe||ke)&&(Y&&Y(F),ke&&(C(F),ke=!1),Pe=!1),pt&&!(pt=!1)&&be&&be(F),R&&(_e(F),R=!1),ze=0},ve=function(Ae,Xe,he){ae[he]+=Ae,fe[he]+=Xe,F._vx.update(Ae),F._vy.update(Xe),c?ze||(ze=requestAnimationFrame(Le)):Le()},We=function(Ae,Xe){Te&&!Fe&&(F.axis=Fe=Math.abs(Ae)>Math.abs(Xe)?"x":"y",pt=!0),Fe!=="y"&&(ae[2]+=Ae,F._vx.update(Ae,!0)),Fe!=="x"&&(fe[2]+=Xe,F._vy.update(Xe,!0)),c?ze||(ze=requestAnimationFrame(Le)):Le()},Ne=function(Ae){if(!se(Ae,1)){Ae=Fr(Ae,h);var Xe=Ae.clientX,he=Ae.clientY,Ge=Xe-F.x,Re=he-F.y,Be=F.isDragging;F.x=Xe,F.y=he,(Be||Math.abs(F.startX-Xe)>=s||Math.abs(F.startY-he)>=s)&&(C&&(ke=!0),Be||(F.isDragging=!0),We(Ge,Re),Be||m&&m(F))}},rt=F.onPress=function(ge){se(ge,1)||ge&&ge.button||(F.axis=Fe=null,$e.pause(),F.isPressed=!0,ge=Fr(ge),Se=tt=0,F.startX=F.x=ge.clientX,F.startY=F.y=ge.clientY,F._vx.reset(),F._vy.reset(),Zt(k?a:ce,Dn[1],Ne,ye,!0),F.deltaX=F.deltaY=0,y&&y(F))},w=F.onRelease=function(ge){if(!se(ge,1)){Kt(k?a:ce,Dn[1],Ne,!0);var Ae=!isNaN(F.y-F.startY),Xe=F.isDragging,he=Xe&&(Math.abs(F.x-F.startX)>3||Math.abs(F.y-F.startY)>3),Ge=Fr(ge);!he&&Ae&&(F._vx.reset(),F._vy.reset(),h&&ne&&Gt.delayedCall(.08,function(){if(Xr()-Ve>300&&!ge.defaultPrevented){if(ge.target.click)ge.target.click();else if(ce.createEvent){var Re=ce.createEvent("MouseEvents");Re.initMouseEvent("click",!0,!0,_n,1,Ge.screenX,Ge.screenY,Ge.clientX,Ge.clientY,!1,!1,!1,!1,0,null),ge.target.dispatchEvent(Re)}}})),F.isDragging=F.isGesturing=F.isPressed=!1,p&&Xe&&!k&&$e.restart(!0),u&&Xe&&u(F),S&&S(F,he)}},le=function(Ae){return Ae.touches&&Ae.touches.length>1&&(F.isGesturing=!0)&&te(Ae,F.isDragging)},V=function(){return(F.isGesturing=!1)||A(F)},K=function(Ae){if(!se(Ae)){var Xe=E(),he=g();ve((Xe-z)*re,(he-j)*re,1),z=Xe,j=he,p&&$e.restart(!0)}},oe=function(Ae){if(!se(Ae)){Ae=Fr(Ae,h),_e&&(R=!0);var Xe=(Ae.deltaMode===1?l:Ae.deltaMode===2?_n.innerHeight:1)*v;ve(Ae.deltaX*Xe,Ae.deltaY*Xe,0),p&&!k&&$e.restart(!0)}},ue=function(Ae){if(!se(Ae)){var Xe=Ae.clientX,he=Ae.clientY,Ge=Xe-F.x,Re=he-F.y;F.x=Xe,F.y=he,Pe=!0,p&&$e.restart(!0),(Ge||Re)&&We(Ge,Re)}},Oe=function(Ae){F.event=Ae,X(F)},st=function(Ae){F.event=Ae,Q(F)},Et=function(Ae){return se(Ae)||Fr(Ae,h)&&q(F)};$e=F._dc=Gt.delayedCall(d||.25,De).pause(),F.deltaX=F.deltaY=0,F._vx=Ho(0,50,!0),F._vy=Ho(0,50,!0),F.scrollX=E,F.scrollY=g,F.isDragging=F.isGesturing=F.isPressed=!1,ru(this),F.enable=function(ge){return F.isEnabled||(Zt($?ce:a,"scroll",zo),o.indexOf("scroll")>=0&&Zt($?ce:a,"scroll",K,ye,pe),o.indexOf("wheel")>=0&&Zt(a,"wheel",oe,ye,pe),(o.indexOf("touch")>=0&&nu||o.indexOf("pointer")>=0)&&(Zt(a,Dn[0],rt,ye,pe),Zt(ce,Dn[2],w),Zt(ce,Dn[3],w),ne&&Zt(a,"click",ie,!0,!0),q&&Zt(a,"click",Et),te&&Zt(ce,"gesturestart",le),A&&Zt(ce,"gestureend",V),X&&Zt(a,Ci+"enter",Oe),Q&&Zt(a,Ci+"leave",st),Y&&Zt(a,Ci+"move",ue)),F.isEnabled=!0,ge&&ge.type&&rt(ge),He&&He(F)),F},F.disable=function(){F.isEnabled&&(dr.filter(function(ge){return ge!==F&&Yr(ge.target)}).length||Kt($?ce:a,"scroll",zo),F.isPressed&&(F._vx.reset(),F._vy.reset(),Kt(k?a:ce,Dn[1],Ne,!0)),Kt($?ce:a,"scroll",K,pe),Kt(a,"wheel",oe,pe),Kt(a,Dn[0],rt,pe),Kt(ce,Dn[2],w),Kt(ce,Dn[3],w),Kt(a,"click",ie,!0),Kt(a,"click",Et),Kt(ce,"gesturestart",le),Kt(ce,"gestureend",V),Kt(a,Ci+"enter",Oe),Kt(a,Ci+"leave",st),Kt(a,Ci+"move",ue),F.isEnabled=F.isPressed=F.isDragging=!1,et&&et(F))},F.kill=F.revert=function(){F.disable();var ge=dr.indexOf(F);ge>=0&&dr.splice(ge,1),Qn===F&&(Qn=0)},dr.push(F),k&&Yr(a)&&(Qn=F),F.enable(M)},z_(i,[{key:"velocityX",get:function(){return this._vx.getVelocity()}},{key:"velocityY",get:function(){return this._vy.getVelocity()}}]),i}();At.version="3.12.5";At.create=function(i){return new At(i)};At.register=lu;At.getAll=function(){return dr.slice()};At.getById=function(i){return dr.filter(function(e){return e.vars.id===i})[0]};su()&&Gt.registerPlugin(At);/*!
 * ScrollTrigger 3.12.5
 * https://gsap.com
 *
 * @license Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var Ee,ur,nt,St,Ln,xt,cu,ra,es,qr,zr,Ls,Xt,fa,ko,Qt,ac,oc,fr,uu,Va,fu,Jt,Go,hu,du,fi,Vo,il,vr,rl,sa,Wo,Wa,Us=1,Yt=Date.now,Xa=Yt(),An=0,Hr=0,lc=function(e,t,n){var r=mn(e)&&(e.substr(0,6)==="clamp("||e.indexOf("max")>-1);return n["_"+t+"Clamp"]=r,r?e.substr(6,e.length-7):e},cc=function(e,t){return t&&(!mn(e)||e.substr(0,6)!=="clamp(")?"clamp("+e+")":e},k_=function i(){return Hr&&requestAnimationFrame(i)},uc=function(){return fa=1},fc=function(){return fa=0},Fn=function(e){return e},kr=function(e){return Math.round(e*1e5)/1e5||0},pu=function(){return typeof window<"u"},mu=function(){return Ee||pu()&&(Ee=window.gsap)&&Ee.registerPlugin&&Ee},Gi=function(e){return!!~cu.indexOf(e)},_u=function(e){return(e==="Height"?rl:nt["inner"+e])||Ln["client"+e]||xt["client"+e]},gu=function(e){return gi(e,"getBoundingClientRect")||(Gi(e)?function(){return Qs.width=nt.innerWidth,Qs.height=rl,Qs}:function(){return Zn(e)})},G_=function(e,t,n){var r=n.d,s=n.d2,o=n.a;return(o=gi(e,"getBoundingClientRect"))?function(){return o()[r]}:function(){return(t?_u(s):e["client"+s])||0}},V_=function(e,t){return!t||~Gn.indexOf(e)?gu(e):function(){return Qs}},Hn=function(e,t){var n=t.s,r=t.d2,s=t.d,o=t.a;return Math.max(0,(n="scroll"+r)&&(o=gi(e,n))?o()-gu(e)()[s]:Gi(e)?(Ln[n]||xt[n])-_u(r):e[n]-e["offset"+r])},Is=function(e,t){for(var n=0;n<fr.length;n+=3)(!t||~t.indexOf(fr[n+1]))&&e(fr[n],fr[n+1],fr[n+2])},mn=function(e){return typeof e=="string"},nn=function(e){return typeof e=="function"},Gr=function(e){return typeof e=="number"},Pi=function(e){return typeof e=="object"},Or=function(e,t,n){return e&&e.progress(t?0:1)&&n&&e.pause()},Ya=function(e,t){if(e.enabled){var n=e._ctx?e._ctx.add(function(){return t(e)}):t(e);n&&n.totalTime&&(e.callbackAnimation=n)}},or=Math.abs,vu="left",xu="top",sl="right",al="bottom",Oi="width",Bi="height",$r="Right",Kr="Left",Zr="Top",jr="Bottom",Ct="padding",yn="margin",Rr="Width",ol="Height",It="px",bn=function(e){return nt.getComputedStyle(e)},W_=function(e){var t=bn(e).position;e.style.position=t==="absolute"||t==="fixed"?t:"relative"},hc=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},Zn=function(e,t){var n=t&&bn(e)[ko]!=="matrix(1, 0, 0, 1, 0, 0)"&&Ee.to(e,{x:0,y:0,xPercent:0,yPercent:0,rotation:0,rotationX:0,rotationY:0,scale:1,skewX:0,skewY:0}).progress(1),r=e.getBoundingClientRect();return n&&n.progress(0).kill(),r},aa=function(e,t){var n=t.d2;return e["offset"+n]||e["client"+n]||0},Mu=function(e){var t=[],n=e.labels,r=e.duration(),s;for(s in n)t.push(n[s]/r);return t},X_=function(e){return function(t){return Ee.utils.snap(Mu(e),t)}},ll=function(e){var t=Ee.utils.snap(e),n=Array.isArray(e)&&e.slice(0).sort(function(r,s){return r-s});return n?function(r,s,o){o===void 0&&(o=.001);var a;if(!s)return t(r);if(s>0){for(r-=o,a=0;a<n.length;a++)if(n[a]>=r)return n[a];return n[a-1]}else for(a=n.length,r+=o;a--;)if(n[a]<=r)return n[a];return n[0]}:function(r,s,o){o===void 0&&(o=.001);var a=t(r);return!s||Math.abs(a-r)<o||a-r<0==s<0?a:t(s<0?r-e:r+e)}},Y_=function(e){return function(t,n){return ll(Mu(e))(t,n.direction)}},Ns=function(e,t,n,r){return n.split(",").forEach(function(s){return e(t,s,r)})},Ht=function(e,t,n,r,s){return e.addEventListener(t,n,{passive:!r,capture:!!s})},zt=function(e,t,n,r){return e.removeEventListener(t,n,!!r)},Fs=function(e,t,n){n=n&&n.wheelHandler,n&&(e(t,"wheel",n),e(t,"touchmove",n))},dc={startColor:"green",endColor:"red",indent:0,fontSize:"16px",fontWeight:"normal"},Os={toggleActions:"play",anticipatePin:0},oa={top:0,left:0,center:.5,bottom:1,right:1},Ks=function(e,t){if(mn(e)){var n=e.indexOf("="),r=~n?+(e.charAt(n-1)+1)*parseFloat(e.substr(n+1)):0;~n&&(e.indexOf("%")>n&&(r*=t/100),e=e.substr(0,n-1)),e=r+(e in oa?oa[e]*t:~e.indexOf("%")?parseFloat(e)*t/100:parseFloat(e)||0)}return e},Bs=function(e,t,n,r,s,o,a,l){var c=s.startColor,h=s.endColor,p=s.fontSize,d=s.indent,f=s.fontWeight,v=St.createElement("div"),M=Gi(n)||gi(n,"pinType")==="fixed",m=e.indexOf("scroller")!==-1,u=M?xt:n,C=e.indexOf("start")!==-1,y=C?c:h,S="border-color:"+y+";font-size:"+p+";color:"+y+";font-weight:"+f+";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";return S+="position:"+((m||l)&&M?"fixed;":"absolute;"),(m||l||!M)&&(S+=(r===Nt?sl:al)+":"+(o+parseFloat(d))+"px;"),a&&(S+="box-sizing:border-box;text-align:left;width:"+a.offsetWidth+"px;"),v._isStart=C,v.setAttribute("class","gsap-marker-"+e+(t?" marker-"+t:"")),v.style.cssText=S,v.innerText=t||t===0?e+"-"+t:e,u.children[0]?u.insertBefore(v,u.children[0]):u.appendChild(v),v._offset=v["offset"+r.op.d2],Zs(v,0,r,C),v},Zs=function(e,t,n,r){var s={display:"block"},o=n[r?"os2":"p2"],a=n[r?"p2":"os2"];e._isFlipped=r,s[n.a+"Percent"]=r?-100:0,s[n.a]=r?"1px":0,s["border"+o+Rr]=1,s["border"+a+Rr]=0,s[n.p]=t+"px",Ee.set(e,s)},je=[],Xo={},ts,pc=function(){return Yt()-An>34&&(ts||(ts=requestAnimationFrame(ti)))},lr=function(){(!Jt||!Jt.isPressed||Jt.startX>xt.clientWidth)&&(Qe.cache++,Jt?ts||(ts=requestAnimationFrame(ti)):ti(),An||Wi("scrollStart"),An=Yt())},qa=function(){du=nt.innerWidth,hu=nt.innerHeight},Vr=function(){Qe.cache++,!Xt&&!fu&&!St.fullscreenElement&&!St.webkitFullscreenElement&&(!Go||du!==nt.innerWidth||Math.abs(nt.innerHeight-hu)>nt.innerHeight*.25)&&ra.restart(!0)},Vi={},q_=[],Su=function i(){return zt(Je,"scrollEnd",i)||Ni(!0)},Wi=function(e){return Vi[e]&&Vi[e].map(function(t){return t()})||q_},pn=[],Eu=function(e){for(var t=0;t<pn.length;t+=5)(!e||pn[t+4]&&pn[t+4].query===e)&&(pn[t].style.cssText=pn[t+1],pn[t].getBBox&&pn[t].setAttribute("transform",pn[t+2]||""),pn[t+3].uncache=1)},cl=function(e,t){var n;for(Qt=0;Qt<je.length;Qt++)n=je[Qt],n&&(!t||n._ctx===t)&&(e?n.kill(1):n.revert(!0,!0));sa=!0,t&&Eu(t),t||Wi("revert")},Tu=function(e,t){Qe.cache++,(t||!en)&&Qe.forEach(function(n){return nn(n)&&n.cacheID++&&(n.rec=0)}),mn(e)&&(nt.history.scrollRestoration=il=e)},en,zi=0,mc,$_=function(){if(mc!==zi){var e=mc=zi;requestAnimationFrame(function(){return e===zi&&Ni(!0)})}},yu=function(){xt.appendChild(vr),rl=!Jt&&vr.offsetHeight||nt.innerHeight,xt.removeChild(vr)},_c=function(e){return es(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end").forEach(function(t){return t.style.display=e?"none":"block"})},Ni=function(e,t){if(An&&!e&&!sa){Ht(Je,"scrollEnd",Su);return}yu(),en=Je.isRefreshing=!0,Qe.forEach(function(r){return nn(r)&&++r.cacheID&&(r.rec=r())});var n=Wi("refreshInit");uu&&Je.sort(),t||cl(),Qe.forEach(function(r){nn(r)&&(r.smooth&&(r.target.style.scrollBehavior="auto"),r(0))}),je.slice(0).forEach(function(r){return r.refresh()}),sa=!1,je.forEach(function(r){if(r._subPinOffset&&r.pin){var s=r.vars.horizontal?"offsetWidth":"offsetHeight",o=r.pin[s];r.revert(!0,1),r.adjustPinSpacing(r.pin[s]-o),r.refresh()}}),Wo=1,_c(!0),je.forEach(function(r){var s=Hn(r.scroller,r._dir),o=r.vars.end==="max"||r._endClamp&&r.end>s,a=r._startClamp&&r.start>=s;(o||a)&&r.setPositions(a?s-1:r.start,o?Math.max(a?s:r.start+1,s):r.end,!0)}),_c(!1),Wo=0,n.forEach(function(r){return r&&r.render&&r.render(-1)}),Qe.forEach(function(r){nn(r)&&(r.smooth&&requestAnimationFrame(function(){return r.target.style.scrollBehavior="smooth"}),r.rec&&r(r.rec))}),Tu(il,1),ra.pause(),zi++,en=2,ti(2),je.forEach(function(r){return nn(r.vars.onRefresh)&&r.vars.onRefresh(r)}),en=Je.isRefreshing=!1,Wi("refresh")},Yo=0,js=1,Jr,ti=function(e){if(e===2||!en&&!sa){Je.isUpdating=!0,Jr&&Jr.update(0);var t=je.length,n=Yt(),r=n-Xa>=50,s=t&&je[0].scroll();if(js=Yo>s?-1:1,en||(Yo=s),r&&(An&&!fa&&n-An>200&&(An=0,Wi("scrollEnd")),zr=Xa,Xa=n),js<0){for(Qt=t;Qt-- >0;)je[Qt]&&je[Qt].update(0,r);js=1}else for(Qt=0;Qt<t;Qt++)je[Qt]&&je[Qt].update(0,r);Je.isUpdating=!1}ts=0},qo=[vu,xu,al,sl,yn+jr,yn+$r,yn+Zr,yn+Kr,"display","flexShrink","float","zIndex","gridColumnStart","gridColumnEnd","gridRowStart","gridRowEnd","gridArea","justifySelf","alignSelf","placeSelf","order"],Js=qo.concat([Oi,Bi,"boxSizing","max"+Rr,"max"+ol,"position",yn,Ct,Ct+Zr,Ct+$r,Ct+jr,Ct+Kr]),K_=function(e,t,n){xr(n);var r=e._gsap;if(r.spacerIsNative)xr(r.spacerState);else if(e._gsap.swappedIn){var s=t.parentNode;s&&(s.insertBefore(e,t),s.removeChild(t))}e._gsap.swappedIn=!1},$a=function(e,t,n,r){if(!e._gsap.swappedIn){for(var s=qo.length,o=t.style,a=e.style,l;s--;)l=qo[s],o[l]=n[l];o.position=n.position==="absolute"?"absolute":"relative",n.display==="inline"&&(o.display="inline-block"),a[al]=a[sl]="auto",o.flexBasis=n.flexBasis||"auto",o.overflow="visible",o.boxSizing="border-box",o[Oi]=aa(e,tn)+It,o[Bi]=aa(e,Nt)+It,o[Ct]=a[yn]=a[xu]=a[vu]="0",xr(r),a[Oi]=a["max"+Rr]=n[Oi],a[Bi]=a["max"+ol]=n[Bi],a[Ct]=n[Ct],e.parentNode!==t&&(e.parentNode.insertBefore(t,e),t.appendChild(e)),e._gsap.swappedIn=!0}},Z_=/([A-Z])/g,xr=function(e){if(e){var t=e.t.style,n=e.length,r=0,s,o;for((e.t._gsap||Ee.core.getCache(e.t)).uncache=1;r<n;r+=2)o=e[r+1],s=e[r],o?t[s]=o:t[s]&&t.removeProperty(s.replace(Z_,"-$1").toLowerCase())}},zs=function(e){for(var t=Js.length,n=e.style,r=[],s=0;s<t;s++)r.push(Js[s],n[Js[s]]);return r.t=e,r},j_=function(e,t,n){for(var r=[],s=e.length,o=n?8:0,a;o<s;o+=2)a=e[o],r.push(a,a in t?t[a]:e[o+1]);return r.t=e.t,r},Qs={left:0,top:0},gc=function(e,t,n,r,s,o,a,l,c,h,p,d,f,v){nn(e)&&(e=e(l)),mn(e)&&e.substr(0,3)==="max"&&(e=d+(e.charAt(4)==="="?Ks("0"+e.substr(3),n):0));var M=f?f.time():0,m,u,C;if(f&&f.seek(0),isNaN(e)||(e=+e),Gr(e))f&&(e=Ee.utils.mapRange(f.scrollTrigger.start,f.scrollTrigger.end,0,d,e)),a&&Zs(a,n,r,!0);else{nn(t)&&(t=t(l));var y=(e||"0").split(" "),S,I,P,b;C=on(t,l)||xt,S=Zn(C)||{},(!S||!S.left&&!S.top)&&bn(C).display==="none"&&(b=C.style.display,C.style.display="block",S=Zn(C),b?C.style.display=b:C.style.removeProperty("display")),I=Ks(y[0],S[r.d]),P=Ks(y[1]||"0",n),e=S[r.p]-c[r.p]-h+I+s-P,a&&Zs(a,P,r,n-P<20||a._isStart&&P>20),n-=n-P}if(v&&(l[v]=e||-.001,e<0&&(e=0)),o){var N=e+n,T=o._isStart;m="scroll"+r.d2,Zs(o,N,r,T&&N>20||!T&&(p?Math.max(xt[m],Ln[m]):o.parentNode[m])<=N+1),p&&(c=Zn(a),p&&(o.style[r.op.p]=c[r.op.p]-r.op.m-o._offset+It))}return f&&C&&(m=Zn(C),f.seek(d),u=Zn(C),f._caScrollDist=m[r.p]-u[r.p],e=e/f._caScrollDist*d),f&&f.seek(M),f?e:Math.round(e)},J_=/(webkit|moz|length|cssText|inset)/i,vc=function(e,t,n,r){if(e.parentNode!==t){var s=e.style,o,a;if(t===xt){e._stOrig=s.cssText,a=bn(e);for(o in a)!+o&&!J_.test(o)&&a[o]&&typeof s[o]=="string"&&o!=="0"&&(s[o]=a[o]);s.top=n,s.left=r}else s.cssText=e._stOrig;Ee.core.getCache(e).uncache=1,t.appendChild(e)}},bu=function(e,t,n){var r=t,s=r;return function(o){var a=Math.round(e());return a!==r&&a!==s&&Math.abs(a-r)>3&&Math.abs(a-s)>3&&(o=a,n&&n()),s=r,r=o,o}},Hs=function(e,t,n){var r={};r[t.p]="+="+n,Ee.set(e,r)},xc=function(e,t){var n=xi(e,t),r="_scroll"+t.p2,s=function o(a,l,c,h,p){var d=o.tween,f=l.onComplete,v={};c=c||n();var M=bu(n,c,function(){d.kill(),o.tween=0});return p=h&&p||0,h=h||a-c,d&&d.kill(),l[r]=a,l.inherit=!1,l.modifiers=v,v[r]=function(){return M(c+h*d.ratio+p*d.ratio*d.ratio)},l.onUpdate=function(){Qe.cache++,o.tween&&ti()},l.onComplete=function(){o.tween=0,f&&f.call(d)},d=o.tween=Ee.to(e,l),d};return e[r]=n,n.wheelHandler=function(){return s.tween&&s.tween.kill()&&(s.tween=0)},Ht(e,"wheel",n.wheelHandler),Je.isTouch&&Ht(e,"touchmove",n.wheelHandler),s},Je=function(){function i(t,n){ur||i.register(Ee)||console.warn("Please gsap.registerPlugin(ScrollTrigger)"),Vo(this),this.init(t,n)}var e=i.prototype;return e.init=function(n,r){if(this.progress=this.start=0,this.vars&&this.kill(!0,!0),!Hr){this.update=this.refresh=this.kill=Fn;return}n=hc(mn(n)||Gr(n)||n.nodeType?{trigger:n}:n,Os);var s=n,o=s.onUpdate,a=s.toggleClass,l=s.id,c=s.onToggle,h=s.onRefresh,p=s.scrub,d=s.trigger,f=s.pin,v=s.pinSpacing,M=s.invalidateOnRefresh,m=s.anticipatePin,u=s.onScrubComplete,C=s.onSnapComplete,y=s.once,S=s.snap,I=s.pinReparent,P=s.pinSpacer,b=s.containerAnimation,N=s.fastScrollEnd,T=s.preventOverlaps,_=n.horizontal||n.containerAnimation&&n.horizontal!==!1?tn:Nt,D=!p&&p!==0,B=on(n.scroller||nt),G=Ee.core.getCache(B),X=Gi(B),Q=("pinType"in n?n.pinType:gi(B,"pinType")||X&&"fixed")==="fixed",Y=[n.onEnter,n.onLeave,n.onEnterBack,n.onLeaveBack],J=D&&n.toggleActions.split(" "),k="markers"in n?n.markers:Os.markers,te=X?0:parseFloat(bn(B)["border"+_.p2+Rr])||0,A=this,_e=n.onRefreshInit&&function(){return n.onRefreshInit(A)},He=G_(B,X,_),et=V_(B,X),q=0,re=0,pe=0,ne=xi(B,_),Te,be,ze,$e,ke,Pe,R,pt,Fe,F,Se,tt,ye,E,g,z,j,Z,$,ce,ae,fe,Ve,ie,se,De,Le,ve,We,Ne,rt,w,le,V,K,oe,ue,Oe,st;if(A._startClamp=A._endClamp=!1,A._dir=_,m*=45,A.scroller=B,A.scroll=b?b.time.bind(b):ne,$e=ne(),A.vars=n,r=r||n.animation,"refreshPriority"in n&&(uu=1,n.refreshPriority===-9999&&(Jr=A)),G.tweenScroll=G.tweenScroll||{top:xc(B,Nt),left:xc(B,tn)},A.tweenTo=Te=G.tweenScroll[_.p],A.scrubDuration=function(he){le=Gr(he)&&he,le?w?w.duration(he):w=Ee.to(r,{ease:"expo",totalProgress:"+=0",inherit:!1,duration:le,paused:!0,onComplete:function(){return u&&u(A)}}):(w&&w.progress(1).kill(),w=0)},r&&(r.vars.lazy=!1,r._initted&&!A.isReverted||r.vars.immediateRender!==!1&&n.immediateRender!==!1&&r.duration()&&r.render(0,!0,!0),A.animation=r.pause(),r.scrollTrigger=A,A.scrubDuration(p),Ne=0,l||(l=r.vars.id)),S&&((!Pi(S)||S.push)&&(S={snapTo:S}),"scrollBehavior"in xt.style&&Ee.set(X?[xt,Ln]:B,{scrollBehavior:"auto"}),Qe.forEach(function(he){return nn(he)&&he.target===(X?St.scrollingElement||Ln:B)&&(he.smooth=!1)}),ze=nn(S.snapTo)?S.snapTo:S.snapTo==="labels"?X_(r):S.snapTo==="labelsDirectional"?Y_(r):S.directional!==!1?function(he,Ge){return ll(S.snapTo)(he,Yt()-re<500?0:Ge.direction)}:Ee.utils.snap(S.snapTo),V=S.duration||{min:.1,max:2},V=Pi(V)?qr(V.min,V.max):qr(V,V),K=Ee.delayedCall(S.delay||le/2||.1,function(){var he=ne(),Ge=Yt()-re<500,Re=Te.tween;if((Ge||Math.abs(A.getVelocity())<10)&&!Re&&!fa&&q!==he){var Be=(he-Pe)/E,yt=r&&!D?r.totalProgress():Be,Ze=Ge?0:(yt-rt)/(Yt()-zr)*1e3||0,gt=Ee.utils.clamp(-Be,1-Be,or(Ze/2)*Ze/.185),Dt=Be+(S.inertia===!1?0:gt),mt,_t,lt=S,un=lt.onStart,vt=lt.onInterrupt,qt=lt.onComplete;if(mt=ze(Dt,A),Gr(mt)||(mt=Dt),_t=Math.round(Pe+mt*E),he<=R&&he>=Pe&&_t!==he){if(Re&&!Re._initted&&Re.data<=or(_t-he))return;S.inertia===!1&&(gt=mt-Be),Te(_t,{duration:V(or(Math.max(or(Dt-yt),or(mt-yt))*.185/Ze/.05||0)),ease:S.ease||"power3",data:or(_t-he),onInterrupt:function(){return K.restart(!0)&&vt&&vt(A)},onComplete:function(){A.update(),q=ne(),r&&(w?w.resetTo("totalProgress",mt,r._tTime/r._tDur):r.progress(mt)),Ne=rt=r&&!D?r.totalProgress():A.progress,C&&C(A),qt&&qt(A)}},he,gt*E,_t-he-gt*E),un&&un(A,Te.tween)}}else A.isActive&&q!==he&&K.restart(!0)}).pause()),l&&(Xo[l]=A),d=A.trigger=on(d||f!==!0&&f),st=d&&d._gsap&&d._gsap.stRevert,st&&(st=st(A)),f=f===!0?d:on(f),mn(a)&&(a={targets:d,className:a}),f&&(v===!1||v===yn||(v=!v&&f.parentNode&&f.parentNode.style&&bn(f.parentNode).display==="flex"?!1:Ct),A.pin=f,be=Ee.core.getCache(f),be.spacer?g=be.pinState:(P&&(P=on(P),P&&!P.nodeType&&(P=P.current||P.nativeElement),be.spacerIsNative=!!P,P&&(be.spacerState=zs(P))),be.spacer=Z=P||St.createElement("div"),Z.classList.add("pin-spacer"),l&&Z.classList.add("pin-spacer-"+l),be.pinState=g=zs(f)),n.force3D!==!1&&Ee.set(f,{force3D:!0}),A.spacer=Z=be.spacer,We=bn(f),ie=We[v+_.os2],ce=Ee.getProperty(f),ae=Ee.quickSetter(f,_.a,It),$a(f,Z,We),j=zs(f)),k){tt=Pi(k)?hc(k,dc):dc,F=Bs("scroller-start",l,B,_,tt,0),Se=Bs("scroller-end",l,B,_,tt,0,F),$=F["offset"+_.op.d2];var Et=on(gi(B,"content")||B);pt=this.markerStart=Bs("start",l,Et,_,tt,$,0,b),Fe=this.markerEnd=Bs("end",l,Et,_,tt,$,0,b),b&&(Oe=Ee.quickSetter([pt,Fe],_.a,It)),!Q&&!(Gn.length&&gi(B,"fixedMarkers")===!0)&&(W_(X?xt:B),Ee.set([F,Se],{force3D:!0}),De=Ee.quickSetter(F,_.a,It),ve=Ee.quickSetter(Se,_.a,It))}if(b){var ge=b.vars.onUpdate,Ae=b.vars.onUpdateParams;b.eventCallback("onUpdate",function(){A.update(0,0,1),ge&&ge.apply(b,Ae||[])})}if(A.previous=function(){return je[je.indexOf(A)-1]},A.next=function(){return je[je.indexOf(A)+1]},A.revert=function(he,Ge){if(!Ge)return A.kill(!0);var Re=he!==!1||!A.enabled,Be=Xt;Re!==A.isReverted&&(Re&&(oe=Math.max(ne(),A.scroll.rec||0),pe=A.progress,ue=r&&r.progress()),pt&&[pt,Fe,F,Se].forEach(function(yt){return yt.style.display=Re?"none":"block"}),Re&&(Xt=A,A.update(Re)),f&&(!I||!A.isActive)&&(Re?K_(f,Z,g):$a(f,Z,bn(f),se)),Re||A.update(Re),Xt=Be,A.isReverted=Re)},A.refresh=function(he,Ge,Re,Be){if(!((Xt||!A.enabled)&&!Ge)){if(f&&he&&An){Ht(i,"scrollEnd",Su);return}!en&&_e&&_e(A),Xt=A,Te.tween&&!Re&&(Te.tween.kill(),Te.tween=0),w&&w.pause(),M&&r&&r.revert({kill:!1}).invalidate(),A.isReverted||A.revert(!0,!0),A._subPinOffset=!1;var yt=He(),Ze=et(),gt=b?b.duration():Hn(B,_),Dt=E<=.01,mt=0,_t=Be||0,lt=Pi(Re)?Re.end:n.end,un=n.endTrigger||d,vt=Pi(Re)?Re.start:n.start||(n.start===0||!d?0:f?"0 0":"0 100%"),qt=A.pinnedContainer=n.pinnedContainer&&on(n.pinnedContainer,A),vn=d&&Math.max(0,je.indexOf(A))||0,Lt=vn,Ut,x,U,H,O,L,ee,de,Me,xe,Ce,Ie,we;for(k&&Pi(Re)&&(Ie=Ee.getProperty(F,_.p),we=Ee.getProperty(Se,_.p));Lt--;)L=je[Lt],L.end||L.refresh(0,1)||(Xt=A),ee=L.pin,ee&&(ee===d||ee===f||ee===qt)&&!L.isReverted&&(xe||(xe=[]),xe.unshift(L),L.revert(!0,!0)),L!==je[Lt]&&(vn--,Lt--);for(nn(vt)&&(vt=vt(A)),vt=lc(vt,"start",A),Pe=gc(vt,d,yt,_,ne(),pt,F,A,Ze,te,Q,gt,b,A._startClamp&&"_startClamp")||(f?-.001:0),nn(lt)&&(lt=lt(A)),mn(lt)&&!lt.indexOf("+=")&&(~lt.indexOf(" ")?lt=(mn(vt)?vt.split(" ")[0]:"")+lt:(mt=Ks(lt.substr(2),yt),lt=mn(vt)?vt:(b?Ee.utils.mapRange(0,b.duration(),b.scrollTrigger.start,b.scrollTrigger.end,Pe):Pe)+mt,un=d)),lt=lc(lt,"end",A),R=Math.max(Pe,gc(lt||(un?"100% 0":gt),un,yt,_,ne()+mt,Fe,Se,A,Ze,te,Q,gt,b,A._endClamp&&"_endClamp"))||-.001,mt=0,Lt=vn;Lt--;)L=je[Lt],ee=L.pin,ee&&L.start-L._pinPush<=Pe&&!b&&L.end>0&&(Ut=L.end-(A._startClamp?Math.max(0,L.start):L.start),(ee===d&&L.start-L._pinPush<Pe||ee===qt)&&isNaN(vt)&&(mt+=Ut*(1-L.progress)),ee===f&&(_t+=Ut));if(Pe+=mt,R+=mt,A._startClamp&&(A._startClamp+=mt),A._endClamp&&!en&&(A._endClamp=R||-.001,R=Math.min(R,Hn(B,_))),E=R-Pe||(Pe-=.01)&&.001,Dt&&(pe=Ee.utils.clamp(0,1,Ee.utils.normalize(Pe,R,oe))),A._pinPush=_t,pt&&mt&&(Ut={},Ut[_.a]="+="+mt,qt&&(Ut[_.p]="-="+ne()),Ee.set([pt,Fe],Ut)),f&&!(Wo&&A.end>=Hn(B,_)))Ut=bn(f),H=_===Nt,U=ne(),fe=parseFloat(ce(_.a))+_t,!gt&&R>1&&(Ce=(X?St.scrollingElement||Ln:B).style,Ce={style:Ce,value:Ce["overflow"+_.a.toUpperCase()]},X&&bn(xt)["overflow"+_.a.toUpperCase()]!=="scroll"&&(Ce.style["overflow"+_.a.toUpperCase()]="scroll")),$a(f,Z,Ut),j=zs(f),x=Zn(f,!0),de=Q&&xi(B,H?tn:Nt)(),v?(se=[v+_.os2,E+_t+It],se.t=Z,Lt=v===Ct?aa(f,_)+E+_t:0,Lt&&(se.push(_.d,Lt+It),Z.style.flexBasis!=="auto"&&(Z.style.flexBasis=Lt+It)),xr(se),qt&&je.forEach(function(Ke){Ke.pin===qt&&Ke.vars.pinSpacing!==!1&&(Ke._subPinOffset=!0)}),Q&&ne(oe)):(Lt=aa(f,_),Lt&&Z.style.flexBasis!=="auto"&&(Z.style.flexBasis=Lt+It)),Q&&(O={top:x.top+(H?U-Pe:de)+It,left:x.left+(H?de:U-Pe)+It,boxSizing:"border-box",position:"fixed"},O[Oi]=O["max"+Rr]=Math.ceil(x.width)+It,O[Bi]=O["max"+ol]=Math.ceil(x.height)+It,O[yn]=O[yn+Zr]=O[yn+$r]=O[yn+jr]=O[yn+Kr]="0",O[Ct]=Ut[Ct],O[Ct+Zr]=Ut[Ct+Zr],O[Ct+$r]=Ut[Ct+$r],O[Ct+jr]=Ut[Ct+jr],O[Ct+Kr]=Ut[Ct+Kr],z=j_(g,O,I),en&&ne(0)),r?(Me=r._initted,Va(1),r.render(r.duration(),!0,!0),Ve=ce(_.a)-fe+E+_t,Le=Math.abs(E-Ve)>1,Q&&Le&&z.splice(z.length-2,2),r.render(0,!0,!0),Me||r.invalidate(!0),r.parent||r.totalTime(r.totalTime()),Va(0)):Ve=E,Ce&&(Ce.value?Ce.style["overflow"+_.a.toUpperCase()]=Ce.value:Ce.style.removeProperty("overflow-"+_.a));else if(d&&ne()&&!b)for(x=d.parentNode;x&&x!==xt;)x._pinOffset&&(Pe-=x._pinOffset,R-=x._pinOffset),x=x.parentNode;xe&&xe.forEach(function(Ke){return Ke.revert(!1,!0)}),A.start=Pe,A.end=R,$e=ke=en?oe:ne(),!b&&!en&&($e<oe&&ne(oe),A.scroll.rec=0),A.revert(!1,!0),re=Yt(),K&&(q=-1,K.restart(!0)),Xt=0,r&&D&&(r._initted||ue)&&r.progress()!==ue&&r.progress(ue||0,!0).render(r.time(),!0,!0),(Dt||pe!==A.progress||b||M)&&(r&&!D&&r.totalProgress(b&&Pe<-.001&&!pe?Ee.utils.normalize(Pe,R,0):pe,!0),A.progress=Dt||($e-Pe)/E===pe?0:pe),f&&v&&(Z._pinOffset=Math.round(A.progress*Ve)),w&&w.invalidate(),isNaN(Ie)||(Ie-=Ee.getProperty(F,_.p),we-=Ee.getProperty(Se,_.p),Hs(F,_,Ie),Hs(pt,_,Ie-(Be||0)),Hs(Se,_,we),Hs(Fe,_,we-(Be||0))),Dt&&!en&&A.update(),h&&!en&&!ye&&(ye=!0,h(A),ye=!1)}},A.getVelocity=function(){return(ne()-ke)/(Yt()-zr)*1e3||0},A.endAnimation=function(){Or(A.callbackAnimation),r&&(w?w.progress(1):r.paused()?D||Or(r,A.direction<0,1):Or(r,r.reversed()))},A.labelToScroll=function(he){return r&&r.labels&&(Pe||A.refresh()||Pe)+r.labels[he]/r.duration()*E||0},A.getTrailing=function(he){var Ge=je.indexOf(A),Re=A.direction>0?je.slice(0,Ge).reverse():je.slice(Ge+1);return(mn(he)?Re.filter(function(Be){return Be.vars.preventOverlaps===he}):Re).filter(function(Be){return A.direction>0?Be.end<=Pe:Be.start>=R})},A.update=function(he,Ge,Re){if(!(b&&!Re&&!he)){var Be=en===!0?oe:A.scroll(),yt=he?0:(Be-Pe)/E,Ze=yt<0?0:yt>1?1:yt||0,gt=A.progress,Dt,mt,_t,lt,un,vt,qt,vn;if(Ge&&(ke=$e,$e=b?ne():Be,S&&(rt=Ne,Ne=r&&!D?r.totalProgress():Ze)),m&&f&&!Xt&&!Us&&An&&(!Ze&&Pe<Be+(Be-ke)/(Yt()-zr)*m?Ze=1e-4:Ze===1&&R>Be+(Be-ke)/(Yt()-zr)*m&&(Ze=.9999)),Ze!==gt&&A.enabled){if(Dt=A.isActive=!!Ze&&Ze<1,mt=!!gt&&gt<1,vt=Dt!==mt,un=vt||!!Ze!=!!gt,A.direction=Ze>gt?1:-1,A.progress=Ze,un&&!Xt&&(_t=Ze&&!gt?0:Ze===1?1:gt===1?2:3,D&&(lt=!vt&&J[_t+1]!=="none"&&J[_t+1]||J[_t],vn=r&&(lt==="complete"||lt==="reset"||lt in r))),T&&(vt||vn)&&(vn||p||!r)&&(nn(T)?T(A):A.getTrailing(T).forEach(function(U){return U.endAnimation()})),D||(w&&!Xt&&!Us?(w._dp._time-w._start!==w._time&&w.render(w._dp._time-w._start),w.resetTo?w.resetTo("totalProgress",Ze,r._tTime/r._tDur):(w.vars.totalProgress=Ze,w.invalidate().restart())):r&&r.totalProgress(Ze,!!(Xt&&(re||he)))),f){if(he&&v&&(Z.style[v+_.os2]=ie),!Q)ae(kr(fe+Ve*Ze));else if(un){if(qt=!he&&Ze>gt&&R+1>Be&&Be+1>=Hn(B,_),I)if(!he&&(Dt||qt)){var Lt=Zn(f,!0),Ut=Be-Pe;vc(f,xt,Lt.top+(_===Nt?Ut:0)+It,Lt.left+(_===Nt?0:Ut)+It)}else vc(f,Z);xr(Dt||qt?z:j),Le&&Ze<1&&Dt||ae(fe+(Ze===1&&!qt?Ve:0))}}S&&!Te.tween&&!Xt&&!Us&&K.restart(!0),a&&(vt||y&&Ze&&(Ze<1||!Wa))&&es(a.targets).forEach(function(U){return U.classList[Dt||y?"add":"remove"](a.className)}),o&&!D&&!he&&o(A),un&&!Xt?(D&&(vn&&(lt==="complete"?r.pause().totalProgress(1):lt==="reset"?r.restart(!0).pause():lt==="restart"?r.restart(!0):r[lt]()),o&&o(A)),(vt||!Wa)&&(c&&vt&&Ya(A,c),Y[_t]&&Ya(A,Y[_t]),y&&(Ze===1?A.kill(!1,1):Y[_t]=0),vt||(_t=Ze===1?1:3,Y[_t]&&Ya(A,Y[_t]))),N&&!Dt&&Math.abs(A.getVelocity())>(Gr(N)?N:2500)&&(Or(A.callbackAnimation),w?w.progress(1):Or(r,lt==="reverse"?1:!Ze,1))):D&&o&&!Xt&&o(A)}if(ve){var x=b?Be/b.duration()*(b._caScrollDist||0):Be;De(x+(F._isFlipped?1:0)),ve(x)}Oe&&Oe(-Be/b.duration()*(b._caScrollDist||0))}},A.enable=function(he,Ge){A.enabled||(A.enabled=!0,Ht(B,"resize",Vr),X||Ht(B,"scroll",lr),_e&&Ht(i,"refreshInit",_e),he!==!1&&(A.progress=pe=0,$e=ke=q=ne()),Ge!==!1&&A.refresh())},A.getTween=function(he){return he&&Te?Te.tween:w},A.setPositions=function(he,Ge,Re,Be){if(b){var yt=b.scrollTrigger,Ze=b.duration(),gt=yt.end-yt.start;he=yt.start+gt*he/Ze,Ge=yt.start+gt*Ge/Ze}A.refresh(!1,!1,{start:cc(he,Re&&!!A._startClamp),end:cc(Ge,Re&&!!A._endClamp)},Be),A.update()},A.adjustPinSpacing=function(he){if(se&&he){var Ge=se.indexOf(_.d)+1;se[Ge]=parseFloat(se[Ge])+he+It,se[1]=parseFloat(se[1])+he+It,xr(se)}},A.disable=function(he,Ge){if(A.enabled&&(he!==!1&&A.revert(!0,!0),A.enabled=A.isActive=!1,Ge||w&&w.pause(),oe=0,be&&(be.uncache=1),_e&&zt(i,"refreshInit",_e),K&&(K.pause(),Te.tween&&Te.tween.kill()&&(Te.tween=0)),!X)){for(var Re=je.length;Re--;)if(je[Re].scroller===B&&je[Re]!==A)return;zt(B,"resize",Vr),X||zt(B,"scroll",lr)}},A.kill=function(he,Ge){A.disable(he,Ge),w&&!Ge&&w.kill(),l&&delete Xo[l];var Re=je.indexOf(A);Re>=0&&je.splice(Re,1),Re===Qt&&js>0&&Qt--,Re=0,je.forEach(function(Be){return Be.scroller===A.scroller&&(Re=1)}),Re||en||(A.scroll.rec=0),r&&(r.scrollTrigger=null,he&&r.revert({kill:!1}),Ge||r.kill()),pt&&[pt,Fe,F,Se].forEach(function(Be){return Be.parentNode&&Be.parentNode.removeChild(Be)}),Jr===A&&(Jr=0),f&&(be&&(be.uncache=1),Re=0,je.forEach(function(Be){return Be.pin===f&&Re++}),Re||(be.spacer=0)),n.onKill&&n.onKill(A)},je.push(A),A.enable(!1,!1),st&&st(A),r&&r.add&&!E){var Xe=A.update;A.update=function(){A.update=Xe,Pe||R||A.refresh()},Ee.delayedCall(.01,A.update),E=.01,Pe=R=0}else A.refresh();f&&$_()},i.register=function(n){return ur||(Ee=n||mu(),pu()&&window.document&&i.enable(),ur=Hr),ur},i.defaults=function(n){if(n)for(var r in n)Os[r]=n[r];return Os},i.disable=function(n,r){Hr=0,je.forEach(function(o){return o[r?"kill":"disable"](n)}),zt(nt,"wheel",lr),zt(St,"scroll",lr),clearInterval(Ls),zt(St,"touchcancel",Fn),zt(xt,"touchstart",Fn),Ns(zt,St,"pointerdown,touchstart,mousedown",uc),Ns(zt,St,"pointerup,touchend,mouseup",fc),ra.kill(),Is(zt);for(var s=0;s<Qe.length;s+=3)Fs(zt,Qe[s],Qe[s+1]),Fs(zt,Qe[s],Qe[s+2])},i.enable=function(){if(nt=window,St=document,Ln=St.documentElement,xt=St.body,Ee&&(es=Ee.utils.toArray,qr=Ee.utils.clamp,Vo=Ee.core.context||Fn,Va=Ee.core.suppressOverwrites||Fn,il=nt.history.scrollRestoration||"auto",Yo=nt.pageYOffset,Ee.core.globals("ScrollTrigger",i),xt)){Hr=1,vr=document.createElement("div"),vr.style.height="100vh",vr.style.position="absolute",yu(),k_(),At.register(Ee),i.isTouch=At.isTouch,fi=At.isTouch&&/(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent),Go=At.isTouch===1,Ht(nt,"wheel",lr),cu=[nt,St,Ln,xt],Ee.matchMedia?(i.matchMedia=function(l){var c=Ee.matchMedia(),h;for(h in l)c.add(h,l[h]);return c},Ee.addEventListener("matchMediaInit",function(){return cl()}),Ee.addEventListener("matchMediaRevert",function(){return Eu()}),Ee.addEventListener("matchMedia",function(){Ni(0,1),Wi("matchMedia")}),Ee.matchMedia("(orientation: portrait)",function(){return qa(),qa})):console.warn("Requires GSAP 3.11.0 or later"),qa(),Ht(St,"scroll",lr);var n=xt.style,r=n.borderTopStyle,s=Ee.core.Animation.prototype,o,a;for(s.revert||Object.defineProperty(s,"revert",{value:function(){return this.time(-.01,!0)}}),n.borderTopStyle="solid",o=Zn(xt),Nt.m=Math.round(o.top+Nt.sc())||0,tn.m=Math.round(o.left+tn.sc())||0,r?n.borderTopStyle=r:n.removeProperty("border-top-style"),Ls=setInterval(pc,250),Ee.delayedCall(.5,function(){return Us=0}),Ht(St,"touchcancel",Fn),Ht(xt,"touchstart",Fn),Ns(Ht,St,"pointerdown,touchstart,mousedown",uc),Ns(Ht,St,"pointerup,touchend,mouseup",fc),ko=Ee.utils.checkPrefix("transform"),Js.push(ko),ur=Yt(),ra=Ee.delayedCall(.2,Ni).pause(),fr=[St,"visibilitychange",function(){var l=nt.innerWidth,c=nt.innerHeight;St.hidden?(ac=l,oc=c):(ac!==l||oc!==c)&&Vr()},St,"DOMContentLoaded",Ni,nt,"load",Ni,nt,"resize",Vr],Is(Ht),je.forEach(function(l){return l.enable(0,1)}),a=0;a<Qe.length;a+=3)Fs(zt,Qe[a],Qe[a+1]),Fs(zt,Qe[a],Qe[a+2])}},i.config=function(n){"limitCallbacks"in n&&(Wa=!!n.limitCallbacks);var r=n.syncInterval;r&&clearInterval(Ls)||(Ls=r)&&setInterval(pc,r),"ignoreMobileResize"in n&&(Go=i.isTouch===1&&n.ignoreMobileResize),"autoRefreshEvents"in n&&(Is(zt)||Is(Ht,n.autoRefreshEvents||"none"),fu=(n.autoRefreshEvents+"").indexOf("resize")===-1)},i.scrollerProxy=function(n,r){var s=on(n),o=Qe.indexOf(s),a=Gi(s);~o&&Qe.splice(o,a?6:2),r&&(a?Gn.unshift(nt,r,xt,r,Ln,r):Gn.unshift(s,r))},i.clearMatchMedia=function(n){je.forEach(function(r){return r._ctx&&r._ctx.query===n&&r._ctx.kill(!0,!0)})},i.isInViewport=function(n,r,s){var o=(mn(n)?on(n):n).getBoundingClientRect(),a=o[s?Oi:Bi]*r||0;return s?o.right-a>0&&o.left+a<nt.innerWidth:o.bottom-a>0&&o.top+a<nt.innerHeight},i.positionInViewport=function(n,r,s){mn(n)&&(n=on(n));var o=n.getBoundingClientRect(),a=o[s?Oi:Bi],l=r==null?a/2:r in oa?oa[r]*a:~r.indexOf("%")?parseFloat(r)*a/100:parseFloat(r)||0;return s?(o.left+l)/nt.innerWidth:(o.top+l)/nt.innerHeight},i.killAll=function(n){if(je.slice(0).forEach(function(s){return s.vars.id!=="ScrollSmoother"&&s.kill()}),n!==!0){var r=Vi.killAll||[];Vi={},r.forEach(function(s){return s()})}},i}();Je.version="3.12.5";Je.saveStyles=function(i){return i?es(i).forEach(function(e){if(e&&e.style){var t=pn.indexOf(e);t>=0&&pn.splice(t,5),pn.push(e,e.style.cssText,e.getBBox&&e.getAttribute("transform"),Ee.core.getCache(e),Vo())}}):pn};Je.revert=function(i,e){return cl(!i,e)};Je.create=function(i,e){return new Je(i,e)};Je.refresh=function(i){return i?Vr():(ur||Je.register())&&Ni(!0)};Je.update=function(i){return++Qe.cache&&ti(i===!0?2:0)};Je.clearScrollMemory=Tu;Je.maxScroll=function(i,e){return Hn(i,e?tn:Nt)};Je.getScrollFunc=function(i,e){return xi(on(i),e?tn:Nt)};Je.getById=function(i){return Xo[i]};Je.getAll=function(){return je.filter(function(i){return i.vars.id!=="ScrollSmoother"})};Je.isScrolling=function(){return!!An};Je.snapDirectional=ll;Je.addEventListener=function(i,e){var t=Vi[i]||(Vi[i]=[]);~t.indexOf(e)||t.push(e)};Je.removeEventListener=function(i,e){var t=Vi[i],n=t&&t.indexOf(e);n>=0&&t.splice(n,1)};Je.batch=function(i,e){var t=[],n={},r=e.interval||.016,s=e.batchMax||1e9,o=function(c,h){var p=[],d=[],f=Ee.delayedCall(r,function(){h(p,d),p=[],d=[]}).pause();return function(v){p.length||f.restart(!0),p.push(v.trigger),d.push(v),s<=p.length&&f.progress(1)}},a;for(a in e)n[a]=a.substr(0,2)==="on"&&nn(e[a])&&a!=="onRefreshInit"?o(a,e[a]):e[a];return nn(s)&&(s=s(),Ht(Je,"refresh",function(){return s=e.batchMax()})),es(i).forEach(function(l){var c={};for(a in n)c[a]=n[a];c.trigger=l,t.push(Je.create(c))}),t};var Mc=function(e,t,n,r){return t>r?e(r):t<0&&e(0),n>r?(r-t)/(n-t):n<0?t/(t-n):1},Ka=function i(e,t){t===!0?e.style.removeProperty("touch-action"):e.style.touchAction=t===!0?"auto":t?"pan-"+t+(At.isTouch?" pinch-zoom":""):"none",e===Ln&&i(xt,t)},ks={auto:1,scroll:1},Q_=function(e){var t=e.event,n=e.target,r=e.axis,s=(t.changedTouches?t.changedTouches[0]:t).target,o=s._gsap||Ee.core.getCache(s),a=Yt(),l;if(!o._isScrollT||a-o._isScrollT>2e3){for(;s&&s!==xt&&(s.scrollHeight<=s.clientHeight&&s.scrollWidth<=s.clientWidth||!(ks[(l=bn(s)).overflowY]||ks[l.overflowX]));)s=s.parentNode;o._isScroll=s&&s!==n&&!Gi(s)&&(ks[(l=bn(s)).overflowY]||ks[l.overflowX]),o._isScrollT=a}(o._isScroll||r==="x")&&(t.stopPropagation(),t._gsapAllow=!0)},Au=function(e,t,n,r){return At.create({target:e,capture:!0,debounce:!1,lockAxis:!0,type:t,onWheel:r=r&&Q_,onPress:r,onDrag:r,onScroll:r,onEnable:function(){return n&&Ht(St,At.eventTypes[0],Ec,!1,!0)},onDisable:function(){return zt(St,At.eventTypes[0],Ec,!0)}})},eg=/(input|label|select|textarea)/i,Sc,Ec=function(e){var t=eg.test(e.target.tagName);(t||Sc)&&(e._gsapAllow=!0,Sc=t)},tg=function(e){Pi(e)||(e={}),e.preventDefault=e.isNormalizer=e.allowClicks=!0,e.type||(e.type="wheel,touch"),e.debounce=!!e.debounce,e.id=e.id||"normalizer";var t=e,n=t.normalizeScrollX,r=t.momentum,s=t.allowNestedScroll,o=t.onRelease,a,l,c=on(e.target)||Ln,h=Ee.core.globals().ScrollSmoother,p=h&&h.get(),d=fi&&(e.content&&on(e.content)||p&&e.content!==!1&&!p.smooth()&&p.content()),f=xi(c,Nt),v=xi(c,tn),M=1,m=(At.isTouch&&nt.visualViewport?nt.visualViewport.scale*nt.visualViewport.width:nt.outerWidth)/nt.innerWidth,u=0,C=nn(r)?function(){return r(a)}:function(){return r||2.8},y,S,I=Au(c,e.type,!0,s),P=function(){return S=!1},b=Fn,N=Fn,T=function(){l=Hn(c,Nt),N=qr(fi?1:0,l),n&&(b=qr(0,Hn(c,tn))),y=zi},_=function(){d._gsap.y=kr(parseFloat(d._gsap.y)+f.offset)+"px",d.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+parseFloat(d._gsap.y)+", 0, 1)",f.offset=f.cacheID=0},D=function(){if(S){requestAnimationFrame(P);var k=kr(a.deltaY/2),te=N(f.v-k);if(d&&te!==f.v+f.offset){f.offset=te-f.v;var A=kr((parseFloat(d&&d._gsap.y)||0)-f.offset);d.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+A+", 0, 1)",d._gsap.y=A+"px",f.cacheID=Qe.cache,ti()}return!0}f.offset&&_(),S=!0},B,G,X,Q,Y=function(){T(),B.isActive()&&B.vars.scrollY>l&&(f()>l?B.progress(1)&&f(l):B.resetTo("scrollY",l))};return d&&Ee.set(d,{y:"+=0"}),e.ignoreCheck=function(J){return fi&&J.type==="touchmove"&&D()||M>1.05&&J.type!=="touchstart"||a.isGesturing||J.touches&&J.touches.length>1},e.onPress=function(){S=!1;var J=M;M=kr((nt.visualViewport&&nt.visualViewport.scale||1)/m),B.pause(),J!==M&&Ka(c,M>1.01?!0:n?!1:"x"),G=v(),X=f(),T(),y=zi},e.onRelease=e.onGestureStart=function(J,k){if(f.offset&&_(),!k)Q.restart(!0);else{Qe.cache++;var te=C(),A,_e;n&&(A=v(),_e=A+te*.05*-J.velocityX/.227,te*=Mc(v,A,_e,Hn(c,tn)),B.vars.scrollX=b(_e)),A=f(),_e=A+te*.05*-J.velocityY/.227,te*=Mc(f,A,_e,Hn(c,Nt)),B.vars.scrollY=N(_e),B.invalidate().duration(te).play(.01),(fi&&B.vars.scrollY>=l||A>=l-1)&&Ee.to({},{onUpdate:Y,duration:te})}o&&o(J)},e.onWheel=function(){B._ts&&B.pause(),Yt()-u>1e3&&(y=0,u=Yt())},e.onChange=function(J,k,te,A,_e){if(zi!==y&&T(),k&&n&&v(b(A[2]===k?G+(J.startX-J.x):v()+k-A[1])),te){f.offset&&_();var He=_e[2]===te,et=He?X+J.startY-J.y:f()+te-_e[1],q=N(et);He&&et!==q&&(X+=q-et),f(q)}(te||k)&&ti()},e.onEnable=function(){Ka(c,n?!1:"x"),Je.addEventListener("refresh",Y),Ht(nt,"resize",Y),f.smooth&&(f.target.style.scrollBehavior="auto",f.smooth=v.smooth=!1),I.enable()},e.onDisable=function(){Ka(c,!0),zt(nt,"resize",Y),Je.removeEventListener("refresh",Y),I.kill()},e.lockAxis=e.lockAxis!==!1,a=new At(e),a.iOS=fi,fi&&!f()&&f(1),fi&&Ee.ticker.add(Fn),Q=a._dc,B=Ee.to(a,{ease:"power4",paused:!0,inherit:!1,scrollX:n?"+=0.1":"+=0",scrollY:"+=0.1",modifiers:{scrollY:bu(f,f(),function(){return B.pause()})},onUpdate:ti,onComplete:Q.vars.onComplete}),a};Je.sort=function(i){return je.sort(i||function(e,t){return(e.vars.refreshPriority||0)*-1e6+e.start-(t.start+(t.vars.refreshPriority||0)*-1e6)})};Je.observe=function(i){return new At(i)};Je.normalizeScroll=function(i){if(typeof i>"u")return Jt;if(i===!0&&Jt)return Jt.enable();if(i===!1){Jt&&Jt.kill(),Jt=i;return}var e=i instanceof At?i:tg(i);return Jt&&Jt.target===e.target&&Jt.kill(),Gi(e.target)&&(Jt=e),e};Je.core={_getVelocityProp:Ho,_inputObserver:Au,_scrollers:Qe,_proxies:Gn,bridge:{ss:function(){An||Wi("scrollStart"),An=Yt()},ref:function(){return Xt}}};mu()&&Ee.registerPlugin(Je);rn.registerPlugin(Je);for(let i of document.querySelectorAll("a")){let e=rn.timeline({paused:!0}).fromTo(i,{"--line-progress":"0%"},{"--line-progress":"100%",ease:"none",duration:.6});i.onmouseenter=()=>{e.tweenTo(e.duration(),{ease:"expo.out"})},i.onmouseleave=()=>{e.tweenTo(0,{ease:"expo.out"})}}function ng(){const i=/Mobi|Android|iPhone/i.test(navigator.userAgent),e=window.innerWidth<=768;return i||e}if(!ng()){const i=new O_({dom:document.getElementById("about__container")});let e={progress:0};Je.create({trigger:".skills__title",start:"top 45%",end:"top 65%",onEnter:()=>{rn.to(e,{progress:1,duration:1,ease:"power2.out",onUpdate:()=>{i.material.uniforms.pagetransition.value=e.progress}})},onEnterBack:()=>{rn.to(e,{progress:0,duration:1,ease:"power2.in",onUpdate:()=>{i.material.uniforms.pagetransition.value=e.progress}})},markers:!1})}rn.registerPlugin(Je);rn.fromTo(".title_anim",{opacity:0},{opacity:1,scrollTrigger:{trigger:".projects__title",start:"top 75%",end:"top 25%"},stagger:.5});rn.utils.toArray(".project_card").forEach((i,e)=>{rn.fromTo(i,{opacity:0,clipPath:"inset(0% 100% 0% 0%)"},{opacity:1,duration:1.5,ease:"power2.out",clipPath:"inset(0% 0% 0% 0%)",scrollTrigger:{trigger:i,start:"top 100%",end:"top 100%"}})});rn.fromTo(".anim1",{opacity:0,y:"100%",clipPath:"inset(0% 0% 100% 0%)"},{opacity:1,y:"0%",clipPath:"inset(0% 0% 0% 0%)",duration:.75,stagger:.1,ease:"power2.out"});rn.utils.toArray(".about__scroll").forEach((i,e)=>{rn.fromTo(i,{y:"-100%",opacity:1-e/3},{y:"100%",opacity:0,duration:1,delay:e*.1,ease:"power1.inOut",repeat:-1,repeatDelay:2})});const ig=document.getElementById("movingText"),Tc=ig.offsetWidth;rn.to(".skills_list-text",{duration:5,ease:"none",x:`+=-${Tc}`,modifiers:{x:rn.utils.unitize(i=>parseFloat(i)%Tc)},repeat:-1});const Ru=rn.timeline({scrollTrigger:{trigger:".interests__container",start:"top 75%",end:"top 25%",toggleActions:"play none reverse none"}});Ru.fromTo(".interests__container",{clipPath:"inset(0% 0% 100% 0%)"},{clipPath:"inset(0% 0% 0% 0%)"});Ru.fromTo(".interest",{opacity:0},{opacity:1,stagger:.25});rn.fromTo(".skills_elm",{opacity:0},{opacity:1,duration:1,scrollTrigger:{trigger:".skills__title",start:"top 50%",end:"top 50%",toggleActions:"play none reverse none",markers:!1}});
