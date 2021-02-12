let length = 0;
document.getElementById("press").addEventListener
("click", myInput);
function myInput() {
  length = document.getElementById("box").value
  length = (length ** 2)
  alert(length)
}