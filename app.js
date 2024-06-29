let count = 0; // initial count

const value = document.querySelector("#value");
const buttons = document.querySelectorAll(".btn");

buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    const styles = e.currentTarget.classList; // to find out which btn was clicked

    // changing value
    if (styles.contains("decrease-btn")) {
      count--;
    } else if (styles.contains("increase-btn")) {
      count++;
    } else if (styles.contains("reset-btn")) {
      count = 0;
    }

    // changing color of value
    if (count < 0) {
      value.style.color = "red";
    } else if (count > 0) {
      value.style.color = "green";
    } else {
      value.style.color = "black";
    }

    value.textContent = count;
  });
});
