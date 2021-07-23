let count = 0;

const val = document.querySelector("#val");
const btns = document.querySelectorAll(".btn");

btns.forEach(function(btn) {
  btn.addEventListener("click", function(e) {
    const classes = e.currentTarget.classList;
    if (classes.contains("dec")) {
      count--;
    } else if (classes.contains("inc")) {
      count++;
    } else {
      count = 0;
    }
    if (count > 0) {
      val.style.color = "green";
    } else if (count < 0) {
      val.style.color = "red";
    } else {
      val.style.color = "black";
    }
    val.textContent = count;
  });
});
