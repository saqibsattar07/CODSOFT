let resumeBtn = document.getElementById("resumeBtn");
let submit = document.getElementById("submit");
let bar = document.getElementById("bar");

resumeBtn.addEventListener("click", function(){
    alert("Download Successfully")
})


submit.addEventListener("click", function(){
    let email = document.getElementById("email");
    let password = document.getElementById("password")

    if (email.value == "" && password.value == "") {
        alert("Fill Details")
    } else {
        alert("Logged in")
    }
})




let ul = document.querySelector("ul");
bar.addEventListener("click", function(){
    ul.classList.toggle("showData");

    if (ul.className == "showData") {
        bar.className="fa-solid fa-xmark"
    } else {
        bar.className="fa-solid fa-bars"
    }
})
