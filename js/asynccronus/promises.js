let condition = true;

let promise = new Promise(function (resolve, reject) {
  if (condition) {
    resolve("promise is resolved");
  } else {
    reject("promise is rejected");
  }
});

promise
  .then(function (value) {
    console.log(value);
  })
  .catch(function (reason) {
    console.log(reason);
  });
