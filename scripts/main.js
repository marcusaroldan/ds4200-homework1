// const myHeading = document.querySelector("h3");
// myHeading.textContent = "Hello world!";

document.querySelector("html").addEventListener("click", function () {
    alert("Ouch! Stop poking me!");
  });

const myImage = document.querySelector("img");

myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/new-york/20231209_154629.jpg") {
    myImage.setAttribute("src", "images/new-york/image2.jpg");
  } else {
    myImage.setAttribute("src", "images/new-york/20231209_154629.jpg");
  }
};

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h3");

function setUserName() {
    const myName = prompt("Please enter your name.");
    if (!myName) {
        setUserName();
    } else {
        localStorage.setItem("name", myName);
        myHeading.textContent = `Mozilla is cool, ${myName}`;
  }
  }

if (!localStorage.getItem("name")) {
  setUserName();
} else {
  const storedName = localStorage.getItem("name");
  myHeading.textContent = `Mozilla is cool, ${storedName}`;
}

myButton.onclick = () => {
    setUserName();
  };