// our vertex data
attribute vec3 aPosition;
attribute vec2 aTexCoord;

// lets get texcoords just for fun!
varying vec2 vTexCoord;

void main(){
    // copy the texcoords
    vTexCoord=aTexCoord;
    
    // copy the position data into a vec4, using 1.0 as the w component
    vec4 positionVec4=vec4(aPosition,1.);
    positionVec4.xy=positionVec4.xy*3.-1.;
    
    // send the vertex information on to the fragment shader
    gl_Position=positionVec4;
}

// #ifdef GL_ES
// precision highp float;
// #endif

// #extension GL_OES_standard_derivatives:enable
// // attributes, in
// attribute vec3 aPosition;
// attribute vec3 aNormal;
// attribute vec2 aTexCoord;
// attribute vec4 aVertexColor;

// // attributes, out
// varying vec3 var_vertPos;
// varying vec4 var_vertCol;
// varying vec3 var_vertNormal;
// varying vec2 var_vertTexCoord;

// varying vec2 vTexCoord;

// // matrices
// uniform mat4 uModelViewMatrix;
// uniform mat4 uProjectionMatrix;
// uniform mat3 uNormalMatrix;

// void main(){
    
    //     vTexCoord=aTexCoord;
    //     gl_Position=uProjectionMatrix*uModelViewMatrix*vec4(aPosition,1.);
    
    //     // just passing things through
    //     var_vertPos=aPosition;
    //     var_vertCol=aVertexColor;
    //     var_vertNormal=aNormal;
    //     var_vertTexCoord=aTexCoord;
// }
