// console.log("hai student");
// alert("selamat pagi");
// document.write("batch 47");

// variabel

// let, var, const

// bisa di deklarasikan ulang dan bisa diubah valuenya
// var gelas = "Air Putih";
// var gelas = "Kopi";
// console.log(gelas);

// // tidak bisa di deklarasikan ulang, namun value/datanya bisa kita ubah
// let pemerintah = "PDIP";
// pemerintah = "Nasdem";
// console.log(pemerintah);

// let Pemerintah = "golkar";
// console.log(Pemerintah);
// // tidak bisa di deklarasikan ulang atau tidak bisa diubah value
// const rog = "asus";
// // rog = "lenovo";
// console.log(rog);

// tipe data
// // string, number, boolean
// let name = "oji"; //string
// let umur = 15; //number
// let isMarried = false; //boolean

// // nama saya oji umur saya 15 tahun
// console.log("nama saya oji umur saya 15 tahun");
// console.log("Nama saya " + name + " umur saya " + umur + " tahun");

// operator
// let x = 48;
// let y = "4";

// let result = x + y;

// console.log(result);

// condition
// jika nilai sama dengan atau lebih dari 75, maka lulus

// let nilai = 76;

// if (nilai >= 75) {
//   console.log("kamu lulus");
// } else {
//   console.log("kamu tidak lulus");
// }

// // function
// function Hello() {
//   let x = 5;
//   let y = 10;

//   let result = x * y;
//   console.log(result);
// }

// Hello();

// function Hello2(x, y) {
//   console.log(x);
//   console.log(y);

//   let result = x * y;
//   console.log(result);
// }
// Hello2(5, 10);

// function namaSaya(name) {
//   console.log(name);
// }

// namaSaya("oji");

function submitData() {
  let name = document.getElementById("input-name").value;
  let email = document.getElementById("input-email").value;
  let phone = document.getElementById("input-phone").value;
  let subject = document.getElementById("subject").value;
  let message = document.getElementById("input-message").value;

  if (name == "") {
    return alert("Nama Harus diisi");
  } else if (email == "") {
    return alert("Email harus diisi");
  } else if (phone == "") {
    return alert("Telepon harus diisi");
  } else if (subject == "") {
    return alert("Subject Harus diisi");
  }

  let emailReceiver = "kelengoji79@gmail.com";

  let a = document.createElement("a");
  a.href = `mailto:${emailReceiver}?subject=${subject}&body=Halo, Nama saya ${name}, ${message}. Silahkan kontak saya ${phone}`;
  a.click();
  console.log(name);
  console.log(email);
  console.log(phone);
  console.log(subject);
  console.log(message);
}
