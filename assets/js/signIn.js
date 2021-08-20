var inp = document.getElementsByClassName("input-box");
var i = 0;

for (i = 0; i < inp.length; i++) {
  inp[i].addEventListener("click", function () {
    this.classList.toggle("active");
  });
}

// var inp = document.getElementsByClassName("input-box");
// var i = 0;

// for (i = 0; i < inp.length; i++) {
//   inp[i].addEventListener("click", function () {
//     this.classList.toggle("active");
//   });
// }
