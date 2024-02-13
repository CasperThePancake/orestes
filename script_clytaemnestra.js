var audio = new Audio('chase.mp3');
audio.volume = 0.2
var hurt1 = new Audio('snd_laz.wav')
var hurt2 = new Audio('snd_laz.wav')
var hurt3 = new Audio('snd_laz.wav')
var die = new Audio('snd_hurt1.wav')
hurt1.volume = 0.5
hurt2.volume = 0.5
hurt3.volume = 0.5
var music

document.addEventListener('DOMContentLoaded', function() {
    var box = document.getElementById('box');
    var posX = 5775;
    var posY = 6620;
    var speed = 5; // Adjust the speed as needed
    var keysPressed = {};
    var clytaemnestradead
    var broken1
    var broken2
    var broken3
    var broken4
    var broken5
    var broken6
    var broken7
    var hit1 = 0
    var hit2 = 0
    var hit3 = 0
    var hit4 = 0
    var hit5 = 0
    var hit6 = 0
    var hit7 = 0
  
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
        if (Math.sqrt((posY-4425)**2+(posX-5965)**2) < 200) {
            clytaemnestradead = true;
            killher()
        }
    })

    //destroy walls
    document.addEventListener('click', function() {
        if (clytaemnestradead) return
        if (posY > 6600 && !broken1) {
            hit1 += 1
            document.getElementById("hint").style.opacity = 0;
            let breaksound = new Audio('snd_break1.wav')
            breaksound.play()
            if (hit1 == 5) {
                broken1 = true
                let breaksound = new Audio('snd_break2.wav')
                breaksound.play()
                document.getElementsByClassName('wall1')[0].classList.remove('wall')
                document.getElementById("maze_img").src = "maze1.png"
                document.getElementById("text1").style.opacity = 1;
            }
        }
        if (posY < 6500 && broken1 && !broken2) {
            hit2 += 1
            let breaksound = new Audio('snd_break1.wav')
            breaksound.play()
            if (hit2 == 10) {
                broken2 = true
                let breaksound = new Audio('snd_break2.wav')
                breaksound.play()
                document.getElementsByClassName('wall2')[0].classList.remove('wall')
                document.getElementById("maze_img").src = "maze2.png"
                document.getElementById("text2").style.opacity = 1;
            }
        }
        if (posY < 6150 && broken2 && !broken3) {
            hit3 += 1
            let breaksound = new Audio('snd_break1.wav')
            breaksound.play()
            if (hit3 == 15) {
                broken3 = true
                let breaksound = new Audio('snd_break2.wav')
                breaksound.play()
                document.getElementsByClassName('wall3')[0].classList.remove('wall')
                document.getElementById("maze_img").src = "maze3.png"
                document.getElementById("text3").style.opacity = 1;
            }
        }
        if (posY < 5860 && broken3 && !broken4) {
            hit4 += 1
            let breaksound = new Audio('snd_break1.wav')
            breaksound.play()
            if (hit4 == 20) {
                broken4 = true
                let breaksound = new Audio('snd_break2.wav')
                document.getElementById('body').style.animation = "shake2 0.5s infinite"
                breaksound.play()
                document.getElementsByClassName('wall4')[0].classList.remove('wall')
                document.getElementById("maze_img").src = "maze4.png"
                document.getElementById("text4").style.opacity = 1;
            }
        }
        if (posY < 5500 && broken4 && !broken5) {
            hit5 += 1
            let breaksound = new Audio('snd_break1.wav')
            breaksound.play()
            if (hit5 == 25) {
                broken5 = true
                let breaksound = new Audio('snd_break2.wav')
                breaksound.play()
                document.getElementsByClassName('wall5')[0].classList.remove('wall')
                document.getElementById("maze_img").src = "maze5.png"
                document.getElementById("text5").style.opacity = 1;
            }
        }
        if (posY < 5200 && broken5 && !broken6) {
            hit6 += 1
            let breaksound = new Audio('snd_break1.wav')
            breaksound.play()
            if (hit6 == 30) {
                broken6 = true
                let breaksound = new Audio('snd_break2.wav')
                breaksound.play()
                document.getElementById('body').style.animation = "shake3 0.5s infinite"
                document.getElementsByClassName('wall6')[0].classList.remove('wall')
                document.getElementById("maze_img").src = "maze6.png"
                document.getElementById("text6").style.opacity = 1;
            }
        }
        if (posY < 4800 && broken6 && !broken7) {
            hit7 += 1
            let breaksound = new Audio('snd_break1.wav')
            breaksound.play()
            if (hit7 == 50) {
                broken7 = true
                let breaksound = new Audio('snd_break2.wav')
                breaksound.play()
                document.getElementsByClassName('wall7')[0].classList.remove('wall')
                document.getElementById("maze_img").src = "maze7.png"
            }
        }
    })

    function killher() {  
        document.getElementById("box").style.visibility = "hidden"
        document.getElementById("popup").style.visibility = "hidden"
        document.getElementById("text6").style.visibility = "hidden"
        document.getElementById('body').style.animation = "epic 0.5s infinite"
        audio.pause()
        posX = 5965
        posY = 4425
        moveBox()
        scrollScreen()
        setTimeout(function() {
            document.getElementById("body").style.background = "black"
            document.getElementById("bg").style.visibility = "hidden"
            document.getElementById('body').style.animation = "epic 0.5s infinite"
            setTimeout(function() {
                document.getElementById("pulse").style.transition = "background-color 500ms linear"
                document.getElementById("pulse").style.backgroundColor = "rgba(255, 0, 0, 1)"
                document.getElementById('body').style.animation = "epic 0.5s infinite"
                hurt1.play()
                setTimeout(function() {
                    document.getElementById("pulse").style.transition = "background-color 200ms linear"
                    document.getElementById("pulse").style.backgroundColor = "rgba(255, 0, 0, 0)"
                    document.getElementById('body').style.animation = "epic 0.5s infinite"
                    setTimeout(function() {
                        document.getElementById("pulse").style.transition = "background-color 250ms linear"
                        document.getElementById("pulse").style.backgroundColor = "rgba(255, 0, 0, 1)"
                        document.getElementById('body').style.animation = "epic 0.5s infinite"
                        hurt2.play()
                        setTimeout(function() {
                            document.getElementById("pulse").style.transition = "background-color 100ms linear"
                            document.getElementById("pulse").style.backgroundColor = "rgba(255, 0, 0, 0)"
                            document.getElementById("maze_img").src = "maze_dead.png"
                            setTimeout(function() {
                                document.getElementById("pulse").style.transition = "background-color 100ms linear"
                                document.getElementById("pulse").style.backgroundColor = "rgba(255, 0, 0, 1)"
                                hurt3.play()
                                setTimeout(function() {
                                    document.getElementById("pulse").style.transition = "background-color 50ms linear"
                                    document.getElementById("pulse").style.backgroundColor = "rgba(255, 0, 0, 0)"
                                    setTimeout(function() {
                                        document.getElementById("maze_img").style.transition = "opacity 1000ms linear"
                                        document.getElementById("maze_img").style.opacity = "0"
                                        die.play()
                                        setTimeout(function() {
                                            window.location.href = "text_3.html";
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


createWall(5220,4000,1500,10,"concrete")
createWall(5220,4000,10,2900,"concrete")
createWall(5220,6700,1500,10,"concrete")
createWall(6700,4000,10,2900,"concrete")

createWall(5230,6555,1500,50,"wall1")
createWall(5230,6310,1500,50,"wall2")
createWall(5230,6005,1500,70,"wall3")
createWall(5230,5700,1500,65,"wall4")
createWall(5230,5385,1500,80,"wall5")
createWall(5230,5000,1500,135,"wall6")
createWall(5230,4555,1500,170,"wall7")

// Array to store wall objects
var walls = [];
var wallElements = document.querySelectorAll('.wall');
wallElements.forEach(function(wallElement) {
    walls.push(wallElement);
});

// Function to move the box based on keys pressed
function handleMovement() {
    if (clytaemnestradead) return;
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
    if (Math.sqrt((posY-4425)**2+(posX-5965)**2) < 200) {
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
  