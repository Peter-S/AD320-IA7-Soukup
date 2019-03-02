document.getElementById("event1").addEventListener("click", myFunction1);

function myFunction1() {
  if (document.getElementById("event1").style.backgroundColor == "red")
  document.getElementById("event1").style.backgroundColor = "blue"
  else document.getElementById("event1").style.backgroundColor = "red"
}