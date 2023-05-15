document.onkeydown = function(e){
    console.log("key code is:", e.keyCode)
    if(e.keyCode==32){
        luffy = document.querySelector('.luffy');
        luffy.classList.add('animateLuffy')
        setTimeout(() => {
            luffy.classList.remove('animateLuffy')
        }, 700);
    }
}

setInterval(() => {
    luffy = document.querySelector('.luffy')
    gameOver = document.querySelector('.gameOver')
    obstacle = document.querySelector('.obstacle')

     lx = window.getComputedStyle(luffy, null).getPropertyValue('left')
     ly = window.getComputedStyle(luffy, null).getPropertyValue('top')

     ox = window.getComputedStyle(obstacle, null).getPropertyValue('left')
     oy = window.getComputedStyle(obstacle, null).getPropertyValue('top')

     offsetX = Math.abs(dx-ox)
     offsetY = Math.abs(dy-oy)
    if(offsetX< 93 && offsetY<52){
        gameOver.style.visibility = 'visible'
        
    }
}, 100);