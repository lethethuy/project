let students = [
    {
      id: 1,
      name: "Xuân Bách",
      email: "bachnx26@gmail.com",
      phone: "0342569157",
      address: "hà nội",
      gender: "nam",
    },
    {
      id: 2,
      name: "Xuân Lâm",
      email: "lamnx26@gmail.com",
      phone: "0342569157",
      address: "hà nội",
      gender: "nam",
    },
    {
      id: 3,
      name: "Xuân Hưng",
      email: "hungnx26@gmail.com",
      phone: "0342569157",
      address: "hà nội",
      gender: "nam",
    },
    {
      id: 4,
      name: "Xuân Bách",
      email: "hainx26@gmail.com",
      phone: "0342569157",
      address: "hà nội",
      gender: "nữ",
    },
  ];

// local chỉ chấp nhận dạng string, vì vậy cần phải chuyển đổi từ obj sang string

localStorage.setItem("key", "value") //  set gia tri value cho gia tri key
localStorage.getItem("key")  // lay gia tri value

// cách chuyển từ OBJ sang string
localStorage.setItem("students", JSON.stringify(students));
// Vì thêm sửa xóa thực hiện trên mảng cho nên sau khi lưu trên local thì sẽ cần chuyển sang mảng
let a = JSON.parse(localStorage.getItem("students"))
alert(a)