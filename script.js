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
     console.log(offsetX, offsetY)
    if(offsetX< 53 && offsetY<32){
        gameOver.style.visibility = 'visible'
        obstacle.classList.remove('obstacleAni')
    }
}, 100);