var audio = new Audio('music.mp3');
audio.volume = 0.2
var hurt1 = new Audio('snd_laz.wav')
var hurt2 = new Audio('snd_laz.wav')
var hurt3 = new Audio('snd_laz.wav')
var die = new Audio('snd_hurt1.wav')
hurt1.volume = 0.5
hurt2.volume = 0.5
hurt3.volume = 0.5
var music
var bell1 = new Audio('snd_bell.wav')
var bell2 = new Audio('snd_bell.wav')
bell1.volume = 0.5
bell2.volume = 0.5

document.addEventListener('DOMContentLoaded', function() {
    var box = document.getElementById('box');
    var posX = 5775;
    var posY = 6560;
    var speed = 5; // Adjust the speed as needed
    var keysPressed = {};
    var greenkey
    var redkey
    var agamemnondead

  
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
        if (Math.sqrt((posY-5450)**2+(posX-5585)**2) < 100 && redkey && greenkey) {
            agamemnondead = true;
            killhim()
        }
    })

    function killhim() {
        audio.pause()
        document.getElementById("box").style.visibility = "hidden"
        document.getElementById("popup").style.visibility = "hidden"
        posX = 5535
        posY = 5385
        moveBox()
        scrollScreen()
        setTimeout(function() {
            document.getElementById("body").style.backgroundImage = ""
            document.getElementById("body").style.background = "black"
            document.getElementById("house_img").src = "house_dead.png"
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
                            document.getElementById("house_img").src = "house_deader.png"
                            setTimeout(function() {
                                document.getElementById("pulse").style.transition = "background-color 100ms linear"
                                document.getElementById("pulse").style.backgroundColor = "rgba(255, 0, 0, 1)"
                                hurt3.play()
                                setTimeout(function() {
                                    document.getElementById("pulse").style.transition = "background-color 50ms linear"
                                    document.getElementById("pulse").style.backgroundColor = "rgba(255, 0, 0, 0)"
                                    setTimeout(function() {
                                        document.getElementById("house_img").style.transition = "opacity 1000ms linear"
                                        document.getElementById("house_img").style.opacity = "0"
                                        die.play()
                                        setTimeout(function() {
                                            window.location.href = "text_2.html";
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

createWall(5430,5825,300,175,"concrete")
createWall(5487,5560,255,60,"concrete")
createWall(5400,5315,1135,25,"concrete")
createWall(5400,5315,25,1245,"concrete")
createWall(5400,6530,355,30,"concrete")
createWall(5900,6530,640,30,"concrete")
createWall(5540,6275,218,28,"concrete")
createWall(5730,6305,28,250,"concrete")
createWall(5427,6000,495,28,"concrete")
createWall(6510,5340,28,1200,"concrete")
createWall(6020,5665,70,70,"concrete")
createWall(6030,5800,70,70,"concrete")
createWall(6025,5925,70,70,"concrete")
createWall(6355,5665,70,70,"concrete")
createWall(6360,5795,70,70,"concrete")
createWall(6355,5935,70,70,"concrete")
createWall(6115,5640,220,400,"concrete")
createWall(5895,5725,28,300,"concrete")
createWall(5400,5530,620,28,"concrete")
createWall(5995,5342,28,60,"concrete")
createWall(5895,5560,28,15,"concrete")
createWall(6420,6305,100,250,"concrete")
createWall(6105,6230,100,220,"concrete")
createWall(6077,6135,28,400,"concrete")
createWall(6077,6135,290,28,"concrete")
createWall(5430,5340,300,113,"concrete")
createWall(5995,5400,28,120,"red")
createWall(5895,5575,28,120,"green")
createWall(5220,4900,1500,10,"concrete")
createWall(5220,4900,10,2000,"concrete")
createWall(5220,6700,1500,10,"concrete")
createWall(6700,4900,10,2000,"concrete")


// Array to store wall objects
var walls = [];
var wallElements = document.querySelectorAll('.wall');
wallElements.forEach(function(wallElement) {
    walls.push(wallElement);
});

// Function to move the box based on keys pressed
function handleMovement() {
    if (agamemnondead) return;
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


    //greenkey
    if (Math.sqrt((posY-6380)**2+(posX-5600)**2) < 70 && !greenkey) {
        bell1.play()
        greenkey = true;
        document.getElementById("greenkey").style.visibility = "hidden"
        document.getElementById("house_img").src = "house_green.png"
        document.getElementsByClassName("green")[0].classList.remove('wall')
    }
    //redkey
    if (Math.sqrt((posY-5860)**2+(posX-5800)**2) < 70 && !redkey) {
        bell2.play()
        redkey = true;
        document.getElementById("redkey").style.visibility = "hidden"
        document.getElementById("house_img").src = "house_red.png"
        document.getElementsByClassName("red")[0].classList.remove('wall')
    }
    //agamemnon
    if (Math.sqrt((posY-5450)**2+(posX-5585)**2) < 100 && redkey && greenkey) {
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
  