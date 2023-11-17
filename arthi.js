const cont = document.querySelector("h1");
const button = document.querySelector("button");


button.addEventListener("click", function() {
  cont.innerHTML = "Nothing happens, I just wasted your time!";
  cont.style.color = "red";
  cont.style.backgroundColor="grey";

});
