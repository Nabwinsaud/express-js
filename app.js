// console.log(global);

setTimeout(() => {
  console.log("Set time out method");
  clearInterval(interval);
}, 4000);

const interval = setInterval(() => {
  console.log("Interval");
}, 1000);

console.log(__dirname);
// get asbolute path of folder
console.log(__filename);
// get absolute path will path name
