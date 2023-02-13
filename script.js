const rootEl = document.getElementById(root);

let fristName = Hafsa;
let lastName = Ahmed;

let date = new Date();
let hours = Date.getHours();
let minutes = Date.minutes();

let greeting;

if (hours > 0 && hours < 12) {
    greeting = "Good morning";
} else if (hours >= 12 && hours <= 17) {
    greeting = "Good Afternoon";
} else {
    greeting = "Good Evening";
}
let greetingEl = document.createElement(h1);
greetingEl.innerHTML = "<span> " + greeting + "</span>" + fristName + " " + lastName;

rootEl.appendChild(greetingEl);
