let img = document.querySelector(".img img");
let icons = document.querySelector(".icons");
icons.onclick = function(e) {
    img.src = e.target.src
}


function color (color){
    document.body.style.background = color
}
