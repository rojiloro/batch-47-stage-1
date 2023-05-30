// // step:
// // making class
// class Testimonial {
//   quote = "";
//   image = "";

//   constructor(quote, image) {
//     this.quote = quote;
//     this.image = image;
//   }

//   get quote() {
//     return this.quote;
//   }

//   get image() {
//     return this.image;
//   }

//   get author() {
//     throw new Error("getAuthor() method ");
//   }
// }

// const testimonial1 = new Testimonial("Jagalah kebersihan", "image.jpg");

// console.log(testimonial1.quote + testimonial1.image);

const testimonialData = [
  {
    author: "Mohammad Fatkhuroji",
    name: "jagalah kebersihan",
    image: "https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8bWFufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    rating : 5
  },
  {
    author: "anjay gurinjay",
    name: "makan bang",
    image: "https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8bWFufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    rating: 3
  },
  {
    author: "anton setiana",
    name: "minum bang",
    image: "https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8bWFufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    rating: 4
  },
];

function allTestimonials() {
  let testimonialHTML = "";

  testimonialHTML.foreach(function (item) {
    testimonialHTML += ` <div class="testimonial">
        <img src="${item.image}" class="img-testimonial" />
        <p class="quote">${item.quote}</p>
        <p class="author">${item.name}</p>
        </div>`;
  });
}

allTestimonials();

function filterTestimonial(rating) {
    let testimonialHTML = "";

    const testimonialFiltered = testimonialData.filter(function (item){
        return item.rating += ``
    })
}