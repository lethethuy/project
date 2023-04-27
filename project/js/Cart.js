let totalitems = document.getElementById("totalItem");
let productcontainer = document.getElementById("product-container");
let dataCart = JSON.parse(localStorage.getItem("dataCart")) || []; // gọi dữ liệu từ local về
//hàm render các sản phẩm được thêm vào giỏ hàng
function renderArr() {
  productcontainer.innerHTML = "";
  for (let i = 0; i < dataCart.length; i++) {
    productcontainer.innerHTML +=
      `
    <div class="product-1" id="${dataCart[i].id}">
    <div class="product-img">
        <img src=${dataCart[i].img} alt="" />
      </div>
      <div class="product-detail">
        <div>
          <div>${dataCart[i].name}</div>
          <div>${dataCart[i].price}</div>
          <div><button class ="sell" id ="${dataCart[i].id}">-</button> <b>${dataCart[i].amount}</b> <button class="buy" id="${dataCart[i].id}">+</button></div>
        </div>
        <div>
        <a href="">XÓA</a>
        </div>
        </div>
        </div>
        
        `;
  }
}
renderArr();

productcontainer.onclick = function (e) {
  let money = document.getElementById("money");
  // truy cập vào trừng phần tử có class là sell
  if (e.target.classList.contains("sell")) {
    //lấy ra id của phần tử đó và thực hiện các logic
    let sellID = +e.target.id;
    let check = -1;
    for (let i = 0; i < dataCart.length; i++) {
      if (sellID === dataCart[i].id) {
        check = i;
      }
    }
    if (dataCart[check].amount <= 0) {
      dataCart.splice(check, 1);
      localStorage.setItem("dataCart", JSON.stringify(dataCart));
      renderArr();
    } else if (check !== -1 && dataCart[check].amount > 0) {
      dataCart[check].amount = dataCart[check].amount - 1;
      localStorage.setItem("dataCart", JSON.stringify(dataCart));
      money.innerHTML = `${totalMoney().toLocaleString()}
      `;
      localStorage.setItem("totalmoney", JSON.stringify(totalMoney()));
      totalitems.innerHTML = `${totalItem()}`;
      localStorage.setItem("totalitem", JSON.stringify(totalItem()));
      renderArr();
    }
  }
  // truy cập vào từng phần tử html có class là but
  if (e.target.classList.contains("buy")) {
    // lấy ra id của phần tử đó và thực hiện các logic
    let buyID = +e.target.id;
    let check = -1;
    for (let i = 0; i < dataCart.length; i++) {
      if (buyID === dataCart[i].id) {
        check = i;
      }
    }
    if (check !== -1) {
      dataCart[check].amount = dataCart[check].amount + 1;
      localStorage.setItem("dataCart", JSON.stringify(dataCart));
      money.innerHTML = `${totalMoney().toLocaleString()}
      `;
      localStorage.setItem("totalmoney", JSON.stringify(totalMoney()));
      totalitems.innerHTML = `${totalItem()}`;
      localStorage.setItem("totalitem", JSON.stringify(totalItem()));
      renderArr();
    }
  }
};
//hàm tính tổn tiền
function totalMoney() {
  let sum = 0;
  for (let i = 0; i < dataCart.length; i = i + 1) {
    sum += +dataCart[i].price.replaceAll(".", "") * dataCart[i].amount;
  }
  return sum;
}
money.innerHTML = `${totalMoney().toLocaleString()}`;
function totalItem() {
  let sum = 0;
  for (let i = 0; i < dataCart.length; i++) {
    sum += dataCart[i].amount;
  }
  return sum;
}
totalitems.innerText = `${totalItem()}`;

