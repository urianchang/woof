//: Add 'responsive' class to nav links
function showMenu() {
    var x = document.getElementById("nav");
    // console.log(x.className);
    if (x.className === "navLinks") {
        x.className += " responsive";
    } else {
        x.className = "navLinks";
    }
}
