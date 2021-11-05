function setup(){
  const canvas = document.querySelector("#draw");
  // Initialize the GL context
  const gl = canvas.getContext("webgl");

  // Only continue if WebGL is available and working
  if (gl === null) {
    document.writeln("Your browser doesn't like WebGL!");
    return;
  }

  // Set clear color to black, fully opaque
  gl.clearColor(0.0, 0.0, 0.0, 1.0);
  // Clear the color buffer with specified clear color
  gl.clear(gl.COLOR_BUFFER_BIT);
}

window.onload = setup
