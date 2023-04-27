let iconsildebar = document.getElementById("icon");
let left = document.querySelector(".list-menu-container");
let btnLogin = document.getElementById("btn-login");
console.log(btnLogin);
let btnLogintest = document.getElementById("btnlogin");
console.log(btnLogintest);
console.log(left);
let carouselinner = document.getElementById("carousel-inner");
iconsildebar.onclick = function () {
  console.log("aaaaa");
  left.classList.add("show");
  console.log(left.classList);
};

let iconclose = document.getElementById("btn-close");
// console.log("aaa");
iconclose.onclick = function () {
  left.classList.remove("show");
};

btnLogin.onclick = function () {
  console.log("aaaa");
  window.location = "http://127.0.0.1:5500/login.html";
};
carouselinner.onclick = function () {
  console.log("aaaa");
  window.location = "http://127.0.0.1:5500/buy.html";
};


let islogin = JSON.parse(localStorage.getItem("userLogin"));
console.log(islogin);
if (islogin) {
  let loginbtn = document.querySelector(".btn-log");
  console.log(loginbtn);
  loginbtn.style.display = "none";
  let logoutbtn = document.getElementById("btnlogout");
  logoutbtn.style.display = "block";
  let myNameacount = document.getElementById("myNameacount"); 
  myNameacount.innerText = islogin.fname;
  myNameacount.value = myNameacount.innerHTM;
  console.log(myNameacount);
  myNameacount.style.display = "block";
}
