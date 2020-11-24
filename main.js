canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
P1_width=120;
P1_height=70;
P1_image="car white.png";
P1x=10;
P1y=10;
P2_width=120;
P2_height=70;
P2_image="car green.png";
P2x=10;
P2y=100;
background="race.gif";
function add(){
    background_img_tag=new Image();
    background_img_tag.onload=uploadBackground;
    background_img_tag.src=background;
    P1_img_tag=new Image();
    P1_img_tag.onload=uploadP1;
    P1_img_tag.src=P1_image;
    P2_img_tag=new Image();
    P2_img_tag.onload=uploadP2;
    P2_img_tag.src=P2_image;
}
function uploadBackground(){
    ctx.drawImage(background_img_tag,0,0,canvas.width,canvas.height);
}
function uploadP1(){
    ctx.drawImage(P1_img_tag,P1x,P1y,P1_width,P1_height);
}
function uploadP2(){
    ctx.drawImage(P2_img_tag,P2x,P2y,P2_width,P2_height);
}
window.addEventListener("keydown",my_keydown)
function my_keydown(e){
    keypressed=e.keyCode;
    console.log(keypressed)
    if (keypressed=="38"){
        white_up();
        console.log("P1 up");
        if (P1x>700){
            console.log("P1 won")
            document.getElementById("status").innerHTML="P1 won!"
        }
    }
    if (keypressed=="40"){
        white_down();
        console.log("P1 down");
        if (P1x>700){
            console.log("P1 won")
            document.getElementById("status").innerHTML="P1 won!"
        }
    }
    if (keypressed=="37"){
        white_left();
        console.log("P1 left");
        if (P1x>700){
            console.log("P1 won")
            document.getElementById("status").innerHTML="P1 won!"
        }
    }
    if (keypressed=="39"){
        white_right();
        console.log("P1 right");
        if (P1x>700){
            console.log("P1 won")
            document.getElementById("status").innerHTML="P1 won!"
        }
    }
    if (keypressed=="87"){
        green_up();
        console.log("P2 up");
        if (P2x>700){
            console.log("P2 won")
            document.getElementById("status").innerHTML="P2 won!"
        }
    }
    if (keypressed=="83"){
        green_down();
        console.log("P2 down");
        if (P2x>700){
            console.log("P2 won")
            document.getElementById("status").innerHTML="P2 won!"
        }
    }
    if (keypressed=="65"){
        green_left();
        console.log("P2 left");
        if (P2x>700){
            console.log("P2 won")
            document.getElementById("status").innerHTML="P2 won!"
        }
    }
    if (keypressed=="68"){
        green_right();
        console.log("P2 right");
        if (P2x>700){
            console.log("P2 won")
            document.getElementById("status").innerHTML="P2 won!"
        }
    }
}
function white_up(){
    if(P1y>=0){
        P1y=P1y-10;
        console.log("When up arrow key pressed, white x="+P1x+"white y="+P1y);
        uploadBackground();
        uploadP1();
        uploadP2();
    }
}
function white_down(){
    if(P1y<=500){
        P1y=P1y+10;
        console.log("When down arrow key pressed, white x="+P1x+"white y="+P1y);
        uploadBackground();
        uploadP1();
        uploadP2();
    }
}
function white_left(){
    if(P1x>=0){
        P1x=P1x-10;
        console.log("When left arrow key pressed, white x="+P1x+"white y="+P1y);
        uploadBackground();
        uploadP1();
        uploadP2();
    }
}
function white_right(){
    if(P1x<=700){
        P1x=P1x+10;
        console.log("When right arrow key pressed, white x="+P1x+"white y="+P1y);
        uploadBackground();
        uploadP1();
        uploadP2();
    }
}
function green_up(){
    if(P2y>=0){
        P2y=P2y-10;
        console.log("When up arrow key pressed, green x="+P2x+"white y="+P2y);
        uploadBackground();
        uploadP1();
        uploadP2();
    }
}
function green_down(){
    if(P2x<=500){
        P2x=P2x+10;
        console.log("When down arrow key pressed, green x="+P2x+"white y="+P2y);
        uploadBackground();
        uploadP1();
        uploadP2();
    }
}
function green_left(){
    if(P2x>=0){
        P2x=P2x-10;
        console.log("When left arrow key pressed, green x="+P2x+"white y="+P2y);
        uploadBackground();
        uploadP1();
        uploadP2();
    }
}
function green_right(){
    if(P2x<=700){
        P2x=P2x+10;
        console.log("When right arrow key pressed, white x="+P2x+"white y="+P2y);
        uploadBackground();
        uploadP1();
        uploadP2();
    }
}