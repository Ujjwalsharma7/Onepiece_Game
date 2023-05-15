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