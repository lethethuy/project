let btnRegister = document.getElementById("btn-register");

btnRegister.onclick = function () {
  window.location = "./register.html?"; 
};

let loginForm = document.getElementById("login-main");
let loginEmail = document.getElementById("email");
let loginPassword = document.getElementById("password");

loginForm.onsubmit = function (e) {
  e.preventDefault();
  let savedUsers = JSON.parse(localStorage.getItem("user")) || [];
  let currentUser = savedUsers.find(function (user) {
    return (
      user.email === loginEmail.value && user.password === loginPassword.value
    );
  });

  if (currentUser) {
    alert("Đăng nhập thành công");
    localStorage.setItem("userLogin", JSON.stringify(currentUser));
    window.location.href = "./home.html";
  } else {
    alert("Thông tin đăng nhập không chính xác");
  }
};
