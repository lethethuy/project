let form = document.getElementById("main-form");

form.onsubmit = function (e) {
  e.preventDefault();

  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;
  let fname = document.getElementById("name").value;
  let adrees1 = document.getElementById("adrees1").value;
  let adrees2 = document.getElementById("adrees2").value;
  let password2 = document.getElementById("password2").value;

  if (
    email === "" ||
    fname === "" ||
    password === "" ||
    adrees1 === "" ||
    adrees2 === "" ||
    password2 === ""
  ) {
    alert("Xin hãy nhập đủ thông tin");
  } else if (password !== password2) {
    alert("Mật khẩu nhập lại không khớp");
  } else {
    let saveinfor = JSON.parse(localStorage.getItem("user")) || [];// JSON.parse de chuyen dang chuoi sang dang mang oject
    let id = saveinfor.length + 1;
    let obj = {
      email: email,
      password: password,
      fname: fname,
      adrees1: adrees1,
      adrees2: adrees2,
      password2: password2,
      id: id,
    };
    saveinfor.push(obj);
    localStorage.setItem("user", JSON.stringify(saveinfor));
    alert("Chúc mừng bạn đã đăng ký thành công!");
    window.location.href = "./login.html"
  }
};
