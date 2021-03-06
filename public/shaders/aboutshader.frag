// Author @patriciogv - 2015
// http://patriciogonzalezvivo.com

#ifdef GL_ES
precision highp float;
#endif

uniform vec2 u_resolution;
uniform vec2 u_mouse;
uniform float u_time;

float random(in vec2 _st){
	return fract(sin(dot(_st.xy,vec2(2.9898,78.233)))*83758.5453123);
}

// Based on Morgan McGuire @morgan3d
// https://www.shadertoy.com/view/4dS3Wd
float noise(in vec2 _st){
	vec2 i=floor(_st);
	vec2 f=fract(_st);
	
	// Four corners in 2D of a tile
	float a=random(i);
	float b=random(i+vec2(1.,0.));
	float c=random(i+vec2(0.,1.));
	float d=random(i+vec2(1.,1.));
	
	vec2 u=f*f*(3.-2.*f);
	
	return mix(a,b,u.x)+(c-a)*u.y*(1.-u.x)+(d-b)*u.x*u.y;
}

#define NUM_OCTAVES 3

float fbm(in vec2 _st){
	float v=.1;
	float a=.5;
	vec2 shift=vec2(100.);
	// Rotate to reduce axial bias
	mat2 rot=mat2(cos(.5)+1.,-sin(.5)-5.,
	sin(.5),cos(.5)+5.);
	for(int i=0;i<NUM_OCTAVES;++i){
		v+=a*noise(_st);
		_st=rot*_st*.1+shift;
		a*=.55;
	}
	return v;
}

void main(){
	vec2 st=gl_FragCoord.xy/u_resolution.xy*3.;
	vec3 color=vec3(1.,1.,1.);
	
	vec2 q=vec2(0.);
	q.x=fbm(st+0.*u_time);
	q.y=fbm(st+vec2(1.));
	
	vec2 r=vec2(0.);
	r.x=fbm(st+3.*q+vec2(1.7,11.2)+.370*u_time);
	r.y=fbm(st+5.*q+vec2(1.3,2.8)+.126*u_time);
	
	float f=fbm(st*u_mouse.x*.001+r*u_mouse.y*-.01);
	
	color=mix(vec3(1.,.0392,.5216),
	vec3(1.,0.,.251),
	clamp((f*f)*4.,0.,1.));
	
	color=mix(color,
		vec3(.7255,.5333,0.),
		clamp(length(q),0.,1.));
		
		color=mix(color,
			vec3(1.,.2941,.5294),
			clamp(length(r.x),0.,1.));
			
			gl_FragColor=vec4((f*f*f+.9*f*f+.6)*color,1.);
		}