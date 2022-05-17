function user_login() {
    user_name = document.getElementById("user_name").value;
    localStorage.setItem("username", user_name);
    window.location = "kwiterroom.html";
}

