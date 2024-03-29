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
    postAt: new Date(),
    author: "oji",
  };

  dataBlog.push(blog);
  console.log(dataBlog);

  renderBlog();
}

function renderBlog() {
  document.getElementById("contents").innerHTML = "";

  for (let index = 0; index < dataBlog.length; index++) {
    document.getElementById("contents").innerHTML += `
    <div class="blog-list-item">
    <div class="blog-image">
        <img src="${dataBlog[index].image}" alt="blog_img" />
    </div>
    <div class="blog-content">
    <div class="btn-group">
        <button class="btn-edit">Edit Post</button>
        <button class="btn-delete">Delete Post</button>
    </div>
    <h1>
        <a href="blog-detail.html" target="_blank"
        >${dataBlog[index].title}</a
        >
    </h1>
    <div class="detail-blog-content">
        ${getFullTime(dataBlog[index].postAt)} | ${dataBlog[index].author}
    </div>
    <p>
        ${dataBlog[index].content}
    </p>
    </div>
    <div>
      <p>
        ${getDistanceTime(dataBlog[index].postAt)}
      </p>
    </div>
  </div>
  `;
  }
}

function getFullTime(time) {
  // console.log("get full time");
  // let time = new Date();
  // console.log(time);
  let monthName = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Des"];
  // console.log(monthName[8]);
  let date = time.getDate();
  // console.log(date);

  let monthIndex = time.getMonth();
  // console.log(monthIndex);

  let year = time.getFullYear();
  // console.log(year);

  let hours = time.getHours();
  let minutes = time.getMinutes();
  // console.log(minutes);
  if (hours <= 9) {
    hours = "0" + hours;
  } else if (minutes <= 9) {
    minutes = "0" + minutes;
  }

  return `${date} ${monthName[monthIndex]} ${year} ${hours} : ${minutes} WIB`;
}

// getFullTime();
function getDistanceTime(time) {
  let timeNow = new Date();
  let timePost = time;

  // waktu sekarang - waktu post
  let distance = timeNow - timePost; // hasilnya milidetik
  console.log(distance);

  let milisecond = 1000; //milisecond
  let secondIndHours = 3600; // 1 jam 3600 detik
  let hoursIndDay = 24; //1 hari 24 jam

  let distanceDay = Math.floor(distance / (milisecond * secondIndHours * hoursIndDay)); // 1/8640000
  let distanceHours = Math.floor(distance / (milisecond * 60 * 60)); // 1/3600000
  let distanceMinutes = Math.floor(distance / (milisecond * 60)); //1/60000
  let distanceSecond = Math.floor(distance / milisecond); // 1/1000

  if (distanceDay > 0) {
    return `${distanceDay} Day Ago`;
  } else if (distanceHours > 0) {
    return `${distanceHours} Hours Ago`;
  } else if (distanceMinutes > 0) {
    return `${distanceMinutes} Minutes Ago`;
  } else {
    return `${distanceSecond} Second Ago`;
  }
}

setInterval(function () {
  renderBlog();
}, 2000);
