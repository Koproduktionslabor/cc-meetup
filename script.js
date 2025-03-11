/**
 * This is a basic example of how to use the p5.asciify library, updating ascii options and font dynamically.
 * It renders a rotating 3D box into an ASCII representation.
 */

function preload() {
    //Optionally load a custom font to use for the ASCII characters.
    //p5asciify.loadFont('path/to/your/font.ttf');
  }
  
  function setup() {
    createCanvas(windowWidth, windowHeight, WEBGL); // WebGL mode is required
    pixelDensity(1);
  }
  
  function setupAsciify() {
    p5asciify.fontSize(8); // Update the font size
    p5asciify.background("#594af7");
    // Update the character set used for the default "brightness" renderer
    p5asciify.renderers().get("accurate").update({
      characters: " .:-=+*#%@",
    });
  }
  
  function draw() {
    /**
      Your creative code goes here to replace the following code, drawing to the graphic buffer.
      Currently, the code draws a Tim Rodenbroeker-esque rotating 3D box to the graphic buffer.
      Check out his courses on creative coding at https://timrodenbroeker.de/ (no affiliation, I just enjoyed his courses)
      **/
  
    //background(0,0,255);
    
    fill(255);
    rotateY(radians(frameCount * 0.5));
    directionalLight(255, 255, 255, 0, 0, -1);
    normalMaterial();
    translate(mouseX-width/2,mouseY-height/2,100)
    for(i=0;i<100;i++){
    translate(sin(frameCount*0.002)*100+i,20*i,5*i)
    rotateX(radians(frameCount * 0.5));
    rotateZ(radians(frameCount*0.2));
    
    box(80, 20, 20);  
    }
   
  }
  
  function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
  }
  