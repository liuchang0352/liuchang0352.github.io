const myImage = document.querySelector("img");

myImage.onclick = () => {
    const mySrc = myImage.getAttribute("src");
    if (mySrc === "images/hope.jpg") {
        myImage.setAttribute("src", "images/hope2.jpg");
    } else {
        myImage.setAttribute("src", "images/hope.jpg");
    }
};

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
    const myName = prompt("Please enter your name.");
    if (myName === null) {
        setUserName();
    } else {
        localStorage.setItem("name", myName);
        myHeading.textContent = `Happiness is great, ${myName}`;
    }
}

if (!localStorage.getItem("name")) {
    setUserName();
} else {
    const storedName = localStorage.getItem("name");
    myHeading.textContent = `Happiness is great, ${myName}`;
}

myButton.onclick = () => {
    setUserName()
}