const messages = [
    "Please???",
    "Pretty Pleaseeeee",
    "Last chance to say yes",
    "Last last CHANCE to say yes",
    "I feel like you want to say yes but you're shy",
    "Please Janelleee",
    "Aww, Please think about itttt",
    "Jaaaaaaaaaa, Can you please go out with meeeeee",
    "😤😤😤😤😤😤😤",
    "PLEASEEE GO OUT WITH ME"
];

let messageIndex = 0;

function handleNoClick() {
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');
    noButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;
    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 1.3}px`;
}

function handleYesClick() {
    window.location.href = "yes_page.html";
}