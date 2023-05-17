score = 0;
cross = true;

audiogo = new Audio("mixkit-arcade-space-shooter-dead-notification-272.wav")
audio = new Audio("One Piece ! Theme ! Bgm ! Remix.mp3")

setTimeout(() => {
    audio.play()
}, 500);
 
document.onkeydown = function(e){
    console.log("key code is:", e.keyCode)
    if(e.keyCode==32){
        luffy = document.querySelector('.luffy');
        luffy.classList.add('animateLuffy')
        setTimeout(() => {
            luffy.classList.remove('animateLuffy')
        }, 700);
    }
    if(e.keyCode==39){
        luffy = document.querySelector(".luffy")
        luffyX = parseInt(window.getComputedStyle(luffy, null).getPropertyValue('left'))
        luffy.style.left = luffyX + 112 + "px"
    }
    if(e.keyCode==37){
        luffy = document.querySelector(".luffy")
        luffyX = parseInt(window.getComputedStyle(luffy, null).getPropertyValue('left'))
        luffy.style.left = luffyX - 112 + "px"
    }
}

setInterval(() => {
    luffy = document.querySelector('.luffy')
    gameOver = document.querySelector('.gameOver')
    obstacle = document.querySelector('.obstacle')

     lx = parseInt(window.getComputedStyle(luffy, null).getPropertyValue('left'))
     ly = parseInt(window.getComputedStyle(luffy, null).getPropertyValue('top'))

     ox = parseInt(window.getComputedStyle(obstacle, null).getPropertyValue('left'))
     oy = parseInt(window.getComputedStyle(obstacle, null).getPropertyValue('top'))

     offsetX = Math.abs(lx-ox)
     offsetY = Math.abs(ly-oy)
    //  console.log(offsetX, offsetY)
    if(offsetX< 53 && offsetY<60){
        gameOver.style.visibility = 'visible'
        obstacle.classList.remove('obstacleAni')
        audiogo.play()
        setTimeout(() => {
            audiogo.pause();
            audio.pause();
        }, 1000);
        setTimeout(() => {
            audio.pause();
        }, 500);
    }
    else if(offsetX< 80 && cross){
        score+=1;
        updateScore(score);
        cross = false
        setTimeout(() => {
            cross = true
        },  1000 ) ;
       setTimeout(() => {
        aniDur = parseFloat(window.getComputedStyle(obstacle, null).getPropertyValue('animation-duration'))
        newDur = aniDur - 0.1;
        obstacle.style.animationDuration = newDur + 's' ;
       }, 500);
    }

}, 10); 

function updateScore(score){
    scoreCont.innerHTML = "Your Score: " + score
}