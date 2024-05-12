   
    var ground, invisibleGround, groundImage;
    var dog
    var bg_img 
    var dog_running
    var score = 0;
    var rFoodGroup
    var wFoodGroup

function preload() {
    groundImage = loadImage("gg.png")
    bg_img = loadImage("backgroundImg.png")
    dog_running = loadAnimation("dog1.png","dog2.png","dog3.png","dog4.png")
}

function setup() {
createCanvas(windowWidth, windowHeight);


//create a dog sprite
dog = createSprite(150,height-70,20,50);
dog.addAnimation("running", dog_running);
dog.scale = 0.8;

//create a ground sprite
   /* ground = createSprite(200,180,400,20);
    ground.addImage("ground",groundImage);
    ground.x = ground.width /2;
    ground.velocityX = -4;*/

    ground = createSprite(width/2,height-6,200,700); 
    ground.addImage("ground",groundImage);
    ground.scale= 2.7;
      ground.velocityX = -4;
    

    //invsGround = createSprite(200,190,400,10);
    invsGround = createSprite(width/2,height-7,width,125);  
    invsGround.visible = false;
}

function draw() {
background(bg_img);

//jump when the space button is pressed
    if (keyDown("space") && dog.y>=100) {
    dog.velocityY = -20;
    }

    dog.velocityY = dog.velocityY + 0.8
    if (ground.x < 0) {
    ground.x = ground.width / 4;
    }


    dog.collide(invsGround);
    
    drawSprites();
    }

