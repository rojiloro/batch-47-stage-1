function hello() {
  console.log("Hello world!");
}

function goodbye() {
  console.log("Goodbye World!");
}

function print(callback) {
  callback();
}

print(hello);
print(goodbye);
