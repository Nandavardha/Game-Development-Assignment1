let paddle_x, paddle_y, paddle_width, paddle_height, paddle_dx,score=0;
let ball_x, ball_y, ball_diameter, ball_dx, ball_dy;
function setup() {
  createCanvas(400, 400);
  background("black");
  paddle_width = 100;
  paddle_x = (width / 2) - (paddle_width / 2);
  paddle_y = height - 25;
  paddle_height = 15;
  
   Brick_w=100;
   Brick_x=(width / 2) - (paddle_width / 2);
   Brick_y=height-350;
   Brick_h=15;
  
  ball_diameter = 20;
  ball_dx =2;
  ball_dy = 3;
  paddle_dx = 3;
  ball_x = (width / 2) - (ball_diameter / 2);
  ball_y = (height / 2) - (ball_diameter / 2);
  
}

function draw () {
  background("black");
  circle(ball_x, ball_y, ball_diameter);
  rect(paddle_x, paddle_y, paddle_width, paddle_height);
  rect( Brick_x, Brick_y, Brick_w, Brick_h);
  if(ball_x + (ball_diameter / 2) > width) {
    ball_dx = -ball_dx;
  }
  
  if(ball_x - (ball_diameter / 2) < 0) {
    ball_dx = -ball_dx;
  }
  
  if(ball_y + (ball_diameter / 2) > height) {
    ball_dx=0;
    ball_dy=0;
    paddle_dx=0;
    paddle_dy=0;
  }
   if(ball_y - (ball_diameter / 2) < 0) {
    ball_dy = -ball_dy;
  }

  ball_x = ball_x + ball_dx;
  ball_y = ball_y + ball_dy;
  
  if (keyIsDown(LEFT_ARROW)) {
    if(paddle_x>0)paddle_x = paddle_x - paddle_dx;
  }
    if (keyIsDown(RIGHT_ARROW)) {
    if(paddle_x+paddle_width<=width)paddle_x = paddle_x + paddle_dx;
  }
 if((ball_x+ball_dx<paddle_x+paddle_width) && 
    (ball_x+ball_dx>paddle_x) && 
    (ball_y+ball_dy<paddle_y+(paddle_height / 2))  && 
    (ball_y+ball_dy>paddle_y)){
   ball_dy=-ball_dy;
 }
  
  if((ball_x+ball_dx< Brick_x+ Brick_w) && 
    (ball_x+ball_dx> Brick_x) && 
    (ball_y+ball_dy< Brick_y+( Brick_h / 2))  && 
    (ball_y+ball_dy> Brick_y)){
    ball_dy=-ball_dy;
     Brick_h=0;
     Brick_w=0;
    score+=1;
 }
  textSize(20);
  fill("white");
  text("Score "+score,20,20);
  
}
