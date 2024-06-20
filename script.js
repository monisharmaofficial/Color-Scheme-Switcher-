const buttons = document.querySelectorAll(".button");
const body = document.querySelector("body");

buttons.forEach((button) => {
  //   console.log(button);
  addEventListener("click", (e) => {
    // console.log(e);
    // console.log(e.target);
    if (e.target.id === "aqua") {
      body.style.backgroundColor = "rgb(6, 216, 216)";
    }

    if (e.target.id === "olive") {
      body.style.backgroundColor = " rgb(228, 228, 169)";
    }

    if (e.target.id === "red") {
      body.style.backgroundColor = " rgb(247, 92, 92)";
    }

    if (e.target.id === "teal") {
      body.style.backgroundColor = " rgb(159, 205, 205)";
    }

    if (e.target.id === "green") {
      body.style.backgroundColor = " rgb(107, 211, 107)";
    }

    if (e.target.id === "blue") {
      body.style.backgroundColor = "rgb(143, 143, 240)";
    }

    if (e.target.id === "fuchsia") {
      body.style.backgroundColor = "rgb(225, 155, 225)";
    }

    if (e.target.id === "gray") {
      body.style.backgroundColor = "rgb(172, 169, 169)";
    }

    if (e.target.id === "yellow") {
      body.style.backgroundColor = " rgb(239, 239, 96)";
    }
  });
});
