var canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
rover_x=100;
rover_y=100;
rover_width=80;
rover_height=80;
rover_image="rover.png";
nasa_array=["nasa_image-1.jpg","nasa_image-2.jpg","nasa_image-3.jpg","nasa.jpg","nasa_image-5.jpg","mars.jpg"];
random_number=Math.floor(Math.random()*6);
console.log(random_number);
background_image=nasa_array[random_number];
console.log(background_image);
function add(){
    bg_img=new Image();
    bg_img.onload=uploadbg;
    bg_img.src=background_image;
    rover_img=new Image();
    rover_img.onload=uploadrover;
    rover_img.src=rover_image;
}
function uploadbg(){
    ctx.drawImage(bg_img,0,0,canvas.width,canvas.height);
}
function uploadrover(){
    ctx.drawImage(rover_img,rover_x,rover_y,rover_width,rover_height);
}
window.addEventListener("keydown",my_keydown);
function my_keydown(e){
keypressed=e.keyCode;
console.log(keypressed);
if (keypressed=='37'){
    left();
    console.log("leftkey");
}
if (keypressed=='38'){
    up();
    console.log("upkey");
}
if (keypressed=='39'){
    right();
    console.log("rightkey");
}
if (keypressed=='40'){
    down();
    console.log("downkey");
}
}
function up(){
    if(rover_y>=0){
        rover_y=rover_y-10;
        console.log("x="+rover_x+"y="+rover_y);
        uploadbg();
        uploadrover();
    }
}
function down(){
if(rover_y<=500){
    rover_y=rover_y+10;
    console.log("x="+rover_x+"y="+rover_y);
    uploadbg();
    uploadrover();
}
}
function left(){
    if(rover_x>=0){
        rover_x=rover_x-10;
        console.log("y="+rover_y+"x="+rover_x);
        uploadbg();
        uploadrover();
    }
}
function right(){
    if(rover_x<=700){
        rover_x=rover_x+10;
        console.log("y="+rover_y+"x="+rover_x);
        uploadbg();
        uploadrover();
    }
}




