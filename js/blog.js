// let namaSiswa1 = "oji";
// let namaSiswa2 = "Roby";
// let namaSiswa3 = "Puja";

// console.log(namaSiswa1);
// console.log(namaSiswa2);
// console.log(namaSiswa3);

// // array
// let namaSiswa = ["oji", "roby", "puja"];
// console.log(namaSiswa);
// console.log(namaSiswa[0]);

// let nama = "Badriana";
// let alamat = "Tangerang Selatan";
// let umur = 24;

// console.log(nama);
// console.log(alamat);
// console.log(umur);

// // object
// let dataPersonal1 = {
//   nama: "Badriana",
//   alamat: "Tangerang Selatan",
//   umur: 24,
// };
// let dataPersonal2 = {
//   nama: "Puan Maharani",
//   alamat: "Jakarta Barat",
//   umur: 48,
// };

// let dataPersonal3 = {
//   nama: "Joko Widodo",
//   alamat: "Solo",
//   umur: 48,
// };

// let dataPersonal4 = {
//   nama: "Megawati",
//   alamat: "Jakarta Pusat",
//   umur: 68,
// };

// console.log(dataPersonal1);
// console.log(dataPersonal2);
// console.log(dataPersonal3);
// console.log(dataPersonal4);
// console.log(dataPersonal2.nama);

// array of object
// let dataCaleg = [
//   { nama: "Joko Widodo", alamat: "Solo" },
//   { nama: "Puan Maharani", alamat: "Jakarta Barat" },
//   { nama: "Prabowo S", alamat: "Semarang" },
// ];

// console.log(dataCaleg);
// console.log(dataCaleg[1].nama);

let dataBlog = [];

function addBlog(event) {
  event.preventDefault();

  let title = document.getElementById("input-blog-title").value;
  let content = document.getElementById("input-blog-content").value;
  let image = document.getElementById("input-blog-image").files;

  // untuk membuat url gambar, agar tampil
  image = URL.createObjectURL(image[0]);
  console.log(image);

  let blog = {
    title,
    content,
    image,
    postAt: "19 May 2023",
    author: "oji",
  };

  console.log(blog);
}
