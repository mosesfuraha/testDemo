document.addEventListener("DOMContentLoaded", function () {
  document.querySelector(".head").textContent = "Javascript and DOM project";
});

function checkName() {
  const enteredName = document.getElementById("nameInput").value;
  if (enteredName === "Moses") {
    alert("Correct name entered: Moses");
  } else {
    alert("Incorrect name entered: " + enteredName);
  }
}
