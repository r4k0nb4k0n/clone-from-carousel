let i = 0
let slogan = "Connecting the Dots."
let speed = 100

function typewriter() {
    if (i < slogan.length) {
        if (slogan.charAt(i) != ' ') {
            document.getElementsByClassName("slogan")[0].innerHTML += slogan.charAt(i);
        } else {
            document.getElementsByClassName("slogan")[0].innerHTML += '<br>';
        }
        i++;
        setTimeout(typewriter, speed);
    }
}

//window.onload = typewriter