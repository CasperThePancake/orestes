var audio = new Audio('music.mp3');
audio.volume = 0.2
var hurt1 = new Audio('snd_laz.wav')
var hurt2 = new Audio('snd_laz.wav')
var hurt3 = new Audio('snd_laz.wav')
var die = new Audio('snd_hurt1.wav')
hurt1.volume = 0.5
hurt2.volume = 0.5
hurt3.volume = 0.5

document.addEventListener('DOMContentLoaded', function() {
    var box = document.getElementById('box');
    var wall1 = document.getElementById('wall1');
    var wall2 = document.getElementById('wall2');
    var wall3 = document.getElementById('wall3');
    var posX = 5775;
    var posY = 6160;
    var speed = 5; // Adjust the speed as needed
    var keysPressed = {};
    var altarvisit
    var iphigeneiaDead
    var music
  
    function moveBox() {
      box.style.left = posX + 'px';
      box.style.top = posY + 'px';
    }

    function scrollScreen() {
        // Calculate the center coordinates of the viewport
        let centerX = window.innerWidth / 2;
        let centerY = window.innerHeight / 2;
        
        // Calculate the position to center the player
        let playerX = box.offsetLeft + box.offsetWidth / 2;
        let playerY = box.offsetTop + box.offsetHeight / 2;
        
        // Calculate the scroll offsets
        let scrollX = playerX - centerX;
        let scrollY = playerY - centerY;
        
        // Scroll the page to keep the player centered
        window.scrollTo(scrollX, scrollY);
    }
  
    // Move the box initially
    moveBox();
  
    // Event listener for keydown event
    document.addEventListener('keydown', function(event) {
      keysPressed[event.key] = true;
    });
  
    // Event listener for keyup event
    document.addEventListener('keyup', function(event) {
      keysPressed[event.key] = false;
    });

    document.addEventListener('click', function() {
        if (Math.sqrt((posY+box.offsetHeight/2-5830)**2+(posX+box.offsetWidth/2-5775)**2) < 175 && altarvisit) {
            killher()
        }
    })

    function killher() {
        audio.pause()
        iphigeneiaDead = true
        document.getElementById("box").style.visibility = "hidden"
        document.getElementById("popup").style.visibility = "hidden"
        posX = 5775
        posY = 5830
        moveBox()
        scrollScreen()
        setTimeout(function() {
            document.getElementById("body").style.backgroundImage = ""
            document.getElementById("body").style.background = "black"
            document.getElementById("temple_img").src = "temple_dead.png"
            setTimeout(function() {
                document.getElementById("pulse").style.transition = "background-color 500ms linear"
                document.getElementById("pulse").style.backgroundColor = "rgba(255, 0, 0, 1)"
                hurt1.play()
                setTimeout(function() {
                    document.getElementById("pulse").style.transition = "background-color 200ms linear"
                    document.getElementById("pulse").style.backgroundColor = "rgba(255, 0, 0, 0)"
                    setTimeout(function() {
                        document.getElementById("pulse").style.transition = "background-color 250ms linear"
                        document.getElementById("pulse").style.backgroundColor = "rgba(255, 0, 0, 1)"
                        hurt2.play()
                        setTimeout(function() {
                            document.getElementById("pulse").style.transition = "background-color 100ms linear"
                            document.getElementById("pulse").style.backgroundColor = "rgba(255, 0, 0, 0)"
                            document.getElementById("temple_img").src = "temple_deader.png"
                            setTimeout(function() {
                                document.getElementById("pulse").style.transition = "background-color 100ms linear"
                                document.getElementById("pulse").style.backgroundColor = "rgba(255, 0, 0, 1)"
                                hurt3.play()
                                setTimeout(function() {
                                    document.getElementById("pulse").style.transition = "background-color 50ms linear"
                                    document.getElementById("pulse").style.backgroundColor = "rgba(255, 0, 0, 0)"
                                    setTimeout(function() {
                                        document.getElementById("temple_img").style.transition = "opacity 1000ms linear"
                                        document.getElementById("temple_img").style.opacity = "0"
                                        die.play()
                                        setTimeout(function() {
                                            window.location.href = "text_1.html";
                                          }, 1500);
                                      }, 1000);
                                  }, 100);
                              }, 100);
                          }, 250);
                      }, 200);
                  }, 500);
              }, 3000);
          }, 2500);
    }
  
//Create walls
function createWall(x,y,width,height,type) {
    let el = document.createElement('div')
    el.classList.add("wall")
    el.style.left = x + "px"
    el.style.top = y + "px"
    el.style.width = width + "px"
    el.style.height = height + "px"
    el.classList.add(type)
    document.getElementById("body").appendChild(el)
}

createWall(5431,5262,45,45,"concrete")
createWall(5431,5480,45,45,"concrete")
createWall(5431,5810,45,45,"concrete")
createWall(5431,6090,45,45,"concrete")
createWall(6141,6090,45,45,"concrete")
createWall(6141,5480,45,45,"concrete")
createWall(6141,5810,45,45,"concrete")
createWall(6141,5262,45,45,"concrete")
createWall(5640,5400,340,90,"concrete")
createWall(5750,5740,120,240,"concrete")
createWall(5220,4900,1500,10,"concrete")
createWall(5220,4900,10,2000,"concrete")
createWall(5220,6500,1500,10,"concrete")
createWall(6600,4900,10,2000,"concrete")

// Array to store wall objects
var walls = [];
var wallElements = document.querySelectorAll('.wall');
wallElements.forEach(function(wallElement) {
    walls.push(wallElement);
});

// Function to move the box based on keys pressed
function handleMovement() {
    if (iphigeneiaDead) return;
    // Define the potential new position
    var newX = posX;
    var newY = posY;

    //Rotato
    if (keysPressed['ArrowUp']) {document.getElementById("box").style.transform = "rotate(0deg)"}
    if (keysPressed['ArrowRight']) {document.getElementById("box").style.transform = "rotate(90deg)"}
    if (keysPressed['ArrowDown']) {document.getElementById("box").style.transform = "rotate(180deg)"}
    if (keysPressed['ArrowLeft']) {document.getElementById("box").style.transform = "rotate(270deg)"}

    if (keysPressed['ArrowUp'] && keysPressed['ArrowRight']) {document.getElementById("box").style.transform = "rotate(45deg)"}
    if (keysPressed['ArrowDown'] && keysPressed['ArrowRight']) {document.getElementById("box").style.transform = "rotate(135deg)"}
    if (keysPressed['ArrowDown'] && keysPressed['ArrowLeft']) {document.getElementById("box").style.transform = "rotate(225deg)"}
    if (keysPressed['ArrowUp'] && keysPressed['ArrowLeft']) {document.getElementById("box").style.transform = "rotate(315deg)"}

    // Check for key presses and adjust the potential new position accordingly
    if (keysPressed['ArrowUp']) {
        if (!music) {
            audio.play();
            music = true
        }
        newY -= speed;
        // Check for collision with each wall
        for (var i = 0; i < walls.length; i++) {
            var currentWall = walls[i];
            if (newY < currentWall.offsetTop + currentWall.offsetHeight && 
                newY + box.offsetHeight > currentWall.offsetTop && 
                posX + box.offsetWidth > currentWall.offsetLeft && 
                posX < currentWall.offsetLeft + currentWall.offsetWidth) {
                newY = currentWall.offsetTop + currentWall.offsetHeight;
            }
        }
    }
    if (keysPressed['ArrowDown']) {
        if (!music) {
            audio.play();
            music = true
        }
        newY += speed;
        // Check for collision with each wall
        for (var i = 0; i < walls.length; i++) {
            var currentWall = walls[i];
            if (newY + box.offsetHeight > currentWall.offsetTop && 
                newY < currentWall.offsetTop + currentWall.offsetHeight && 
                posX + box.offsetWidth > currentWall.offsetLeft && 
                posX < currentWall.offsetLeft + currentWall.offsetWidth) {
                newY = currentWall.offsetTop - box.offsetHeight;
            }
        }
    }
    if (keysPressed['ArrowLeft']) {
        if (!music) {
            audio.play();
            music = true
        }
        newX -= speed;
        // Check for collision with each wall
        for (var i = 0; i < walls.length; i++) {
            var currentWall = walls[i];
            if (newX < currentWall.offsetLeft + currentWall.offsetWidth && 
                newX + box.offsetWidth > currentWall.offsetLeft && 
                posY + box.offsetHeight > currentWall.offsetTop && 
                posY < currentWall.offsetTop + currentWall.offsetHeight) {
                newX = currentWall.offsetLeft + currentWall.offsetWidth;
            }
        }
    }
    if (keysPressed['ArrowRight']) {
        if (!music) {
            audio.play();
            music = true
        }
        newX += speed;
        // Check for collision with each wall
        for (var i = 0; i < walls.length; i++) {
            var currentWall = walls[i];
            if (newX + box.offsetWidth > currentWall.offsetLeft && 
                newX < currentWall.offsetLeft + currentWall.offsetWidth && 
                posY + box.offsetHeight > currentWall.offsetTop && 
                posY < currentWall.offsetTop + currentWall.offsetHeight) {
                newX = currentWall.offsetLeft - box.offsetWidth;
            }
        }
    }

    // Update the position
    posX = newX;
    posY = newY;

    //stats
    document.getElementById("xpos").innerHTML = "x = "+posX
    document.getElementById("ypos").innerHTML = "y = "+posY


    //altar
    if (Math.sqrt((posY+box.offsetHeight/2-5500)**2+(posX+box.offsetWidth/2-5800)**2) < 200) {
        altarvisit = true;
    }

    //ephigeneia
    if (Math.sqrt((posY+box.offsetHeight/2-5830)**2+(posX+box.offsetWidth/2-5775)**2) < 175 && altarvisit) {
        document.getElementById("popup").style.visibility = "visible"
    } else {
        document.getElementById("popup").style.visibility = "hidden"
    }

    // Update the box position
    moveBox();

    // Update scroll
    scrollScreen();
}

  
    // Continuously handle movement
    setInterval(handleMovement, 1000 / 60); // 60 frames per second
  });
  