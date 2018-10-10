function w3_open() {
    document.getElementById("mySidebar").style.width = "25%";
    document.getElementById("mySidebar").style.display = "block";
    document.getElementById("openNav").style.display = "none";
}
function w3_close() {
    document.getElementById("mySidebar").style.display = "none";
    document.getElementById("openNav").style.display = "block";
}

let user = getSession('USER')
let div = document.getElementById('loginDiv')
if (user) {
    div.innerHTML = '<a href="#" class="login w3-button w3-right w3-hover-light-gray">' + user.firstName + '</a>'
} else {
    div.innerHTML = '<a href="/login" class="login w3-button w3-right w3-hover-light-gray">Login</a>'
}