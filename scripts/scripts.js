var active = false;

function menuOpen() {
    if (active === false) {
        document.getElementById('mob-nav').classList = 'mob-nav show';
        document.getElementById('hamburger').src = "./images/close_24dp_FILL0_wght400_GRAD0_opsz24.svg"
        active = true;
    } else {
        document.getElementById('mob-nav').classList = 'mob-nav hide';
        document.getElementById('hamburger').src = "./images/menu_24dp_FILL0_wght400_GRAD0_opsz24.svg"
        active = false;
    }
}

function getRandomColor() {
    const randomColors =["#A64E5E","#9BA64B","#569FA5","#CC7714","#D93D04"];
    let chosenColor = randomColors[Math.floor(Math.random() * 5)];
    return chosenColor;
}

function setRandomColor() {
    let newColor = getRandomColor();
    document.getElementById("a-what-button").style.backgroundColor = newColor;
}

function resetColor() {
    document.getElementById("a-what-button").style.backgroundColor = "#1e1e1e";
};