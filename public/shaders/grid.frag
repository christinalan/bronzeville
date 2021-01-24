#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 iResolution;
uniform vec2 iMouse;
uniform sampler2D iImg;

void main(){
    vec2 mouse=iMouse/iResolution;
    vec2 p=gl_FragCoord.xy/iResolution;
    vec2 q=vec2(p.x,1.-p.y);
    vec3 color=texture2D(iImg,vec2(q.x,q.y)).rgb;
    float l=length(q-mouse);
    l=pow(l,.1);
    q-=mouse;
    float a=2.*atan(q.y,q.x);
    vec2 r=l*vec2(q.x*cos(a)+q.y*sin(a),q.x*sin(a)-q.y*cos(a));
    r+=mouse;
    color=1.*texture2D(iImg,r).rgb+.1*(1.-l)*vec3(texture2D(iImg,r).r,0.,0.);
    gl_FragColor=vec4(color,.5);
}

// #ifdef GL_ES
// precision mediump float;
// #endif

// // lets grab texcoords just for fun
// varying vec2 vTexCoord;

// // our texture coming from p5
// uniform sampler2D tex0;
// uniform float time;
// uniform float frequency;
// uniform float amplitude;

// void main(){
    
    //     vec2 uv=vTexCoord;
    //     // the texture is loaded upside down and backwards by default so lets flip it
    //     uv=1.-uv;
    
    //     // lets create a sine wave to distort our texture coords
    //     // we will use the built in sin() function in glsl
    //     // sin() returns the sine of an angle in radians
    //     // first will multiply our uv * frequency -- frequency will control how many hills and valleys will be in the wave
    //     // then we add some time to our sine, this will make it move
    //     // lastly multiply the whole thing by amplitude -- amplitude controls how tall the hills and valleys are, in this case it will be how much to distort the image
    //     // *try changing uv.y to uv.x and see what happens
    //     float sineWave=-sin(uv.x*frequency+time)*amplitude;
    //     // float sineWave2=sin(uv.y*frequency+time)*amplitude;
    
    //     // create a vec2 with our sine
    //     // what happens if you put sineWave in the y slot? in Both slots?
    //     vec2 distort=vec2(sineWave,0.);
    
    //     // add the distortion to our texture coordinates
    //     vec4 tex=texture2D(tex0,uv+distort);
    
    //     gl_FragColor=tex;
// }