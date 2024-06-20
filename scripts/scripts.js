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
};

let colours = ["pink","green","blue","orange","dark-orange"];
function getRandomColour() {
    return colours[Math.floor(Math.random() * colours.length)];
};
$(document).ready(function() {
    $(".button").on("mouseover" , function() {
                $(this).addClass(getRandomColour());
            }).on("mouseout", function() {
                $(this).removeClass("pink green blue orange dark-orange");
            })
});