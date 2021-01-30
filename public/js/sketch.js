let sh, gl;

function preload() {
  sh = loadShader("shaders/shader.vert", "shaders/newshader.frag");
}

function setup() {
  createCanvas(displayWidth, displayHeight, WEBGL);
  noStroke();

  // gl = this.canvas.getContext("webgl");
  // gl.disable(gl.DEPTH_TEST);
}

function draw() {
  //shader() sets the active shader w/ our shader
  shader(sh);

  //send  resolution of sketch into shader
  sh.setUniform("u_resolution", [2 * width, height]);
  sh.setUniform("u_time", millis() / 1000.0);
  sh.setUniform("u_mouse", [
    map(mouseX, 0, width, width, 0),
    map(mouseY, 0, height, height / 4, height),
  ]);

  //rect gives geometry on the screen
  rect(0, 0, width, height);
  // rect(500, 500, 10000, 10000);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
