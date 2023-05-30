// what is async await? the point is that async-await is simply other to call promise
let condition = true;

let promise = new Promise((resolve, reject) => {
  if (condition) {
    resolve("promise is resolved");
  } else {
    reject("promise is rejected");
  }
});

// if we previously call the promise like this;
// promise
//   .then((value) => {
//     console.log(value);
//   })
//   .catch((reason) => {
//     console.log(reason);
//   });

//   now, with ascync-await, we can call it like this
async function asyncFunction() {
  const response = await promise;
  console.log(response);
}

condition = false;
asyncFunction();
