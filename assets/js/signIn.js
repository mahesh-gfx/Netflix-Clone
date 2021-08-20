var inp = document.getElementsByClassName("inputs");
var i = 0;

for (i = 0; i < inp.length; i++) {
  inp[i].addEventListener("click", () => {
    console.log("clicked element");
  });
}
// ,
//     function () {
//     this.classList.toggle("active");
//     var panel = this.nextElementSibling;
//     if (panel.style.display == "block") {
//       panel.style.display = "none";
//     } else {
//       panel.style.display = "block";
//     }
//   }
