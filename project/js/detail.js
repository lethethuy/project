let detailProducts = JSON.parse(localStorage.getItem("dataclickImg")) || [];
let dataCart = JSON.parse(localStorage.getItem("dataCart")) || [];
let detailProduct_container = document.getElementById(
  "detailProduct_container"
);
console.log(detailProduct_container);
function renderDetailproduct() {
  detailProduct_container.innerHTML = `
        <div class="row align-items-start">
        <div class="col-3 left">
          <div>CHẤT LIỆU, CÁCH CHĂM SÓC</div>
          <div>& NGUỒN GỐC</div>
          <br>
          <div>CHẤT LIỆU</div>
          <br>
          <div>
            Chúng tôi đang triển khai các chương trình giám sát nhằm đảm bảo
            việc tuân thủ các tiêu chuẩn của chúng tôi về xã hội, môi trường,
            cũng như về độ an toàn và tính lành mạnh của các sản phẩm. Nhằm đánh
            giá việc tuân thủ các tiêu chuẩn này, chúng tôi đã phát triển một
            chương trình kiểm toán và các kế hoạch cải thiện liên tục.
          </div>
          <br>
          <div>LỚP NGOÀI</div>
          <br>
          <div>77% vải pôliexte</div>
          <br>
          <div><a href="">Xem thêm</a></div>
        </div>
        <div class="col-6">
          <img src="${detailProducts.img}" alt="" />
          <img src="${detailProducts.img1}" alt="" />
          <img src="${detailProducts.img2}" alt="" />
          <img src="${detailProducts.img3}" alt="" />
        </div>
        <div class="col-3 right">
          <div id="name">${detailProducts.name}</div>
          <div>SLIM FIT</div>
          <div><div id="money">${detailProducts.price} </div>VND</div>       
             <br>
          <div>
            Áo khoác blazer có cổ ve lật, ve áo kiểu chữ K. Dài tay, cổ tay có
            khuy cài. Có một túi may viền trước ngực và túi có nắp ở hai bên
            hông. Có một túi ở lớp vải lót bên trong. Cài phía trước bằng khuy
            cài.
          </div>
          <br>
          <div class="square-contaienr">
            <div id="square1"></div>
            <div id="square2"></div>
            <div id="square3"></div>
            <div id="square4"></div>
          </div>
          <br>
          <hr>
          <form id = "btn-addtocart" action="">
            <label for="sizeselect">Chọn size:</label>
            <select name="sizes" id="sizes">
              <option value="xxl">XXL</option>
              <option value="xl">XL</option>
              <option value="l">L</option>
              <option value="m">M</option>
              <option value="s">S</option>
            </select>
            <br><br>
            <div class="btn-add">
                <button onclick="addCart(${detailProducts.id}, event)" id="btnadd">
                     THÊM VÀO GIỎ HÀNG
                </button>
              </div>
          </form>
          <hr>
          <div class="size6">KIỂM TRA TÌNH TRẠNG CÒN HÀNG</div>
          <div>GỬI, ĐỔI VÀ HOÀN TRẢ HÀNG</div>
        </div>
      </div>
        `;
}
renderDetailproduct();

// hàm cũ

// function addCart(id, event) {
//   event.preventDefault();
//   let indexInCart = findIndexbyid(id, dataCart);
//   console.log(indexInCart);
//   if (indexInCart) {
//     indexInCart.amount += 1;
//     localStorage.setItem("dataCart", JSON.stringify(dataCart));
//   } else {
//     dataCart.push(detailProducts);
//     localStorage.setItem("dataCart", JSON.stringify(dataCart));
//   }
// }
// function findIndexbyid(element, array) {
//   let index = -1;
//   for (let i = 0; i < array.length; i = i + 1) {
//     if (array[i].id == element) {
//       index = i;
//       break;
//     }
//   }
//   return index;
// }
// Với cách kiểm tra index như này, nếu findIndexbyid không tìm thấy phần tử trong mảng thì nó 
// sẽ trả về giá trị -1. trong điều kiện if (indexInCart !== -1) nó chỉ kiểm tra nếu tìm 
// thấy index khác -1 thì mới tăng amount lên 1. Tuy nhiên trong trường hợp đầu tiên khi anh thêm vào giỏ hàng, 
// biến dataCart là một mảng rỗng, nên findIndexbyid sẽ trả về giá trị là -1. dẫn đến trong điều kiện if (indexInCart !== -1)
// không thỏa mãn nên sẽ thêm một phần tử mới vào giỏ hàng.



// sửa lại hàm findIndexbyid để trả về null thay vì -1 khi không tìm thấy phần tử. 
// Sau đó, trong điều kiện if (indexInCart !== null) anh kiểm tra nếu tìm thấy phần tử thì mới tăng amount lên 1

function addCart(id, event) {
  event.preventDefault();
  let indexInCart = findIndexbyid(id, dataCart);
  console.log(indexInCart);
  if (indexInCart !== null) {
    console.log("tăng lên");
    indexInCart.amount += 1;
    localStorage.setItem("dataCart", JSON.stringify(dataCart));
  } else {
    console.log("tạo mới");
    dataCart.push(detailProducts);
    localStorage.setItem("dataCart", JSON.stringify(dataCart));
  }
}

function findIndexbyid(element, array) {
  for (let i = 0; i < array.length; i = i + 1) {
    if (array[i].id == element) {
      return array[i];
    }
  }
  return null;
}

