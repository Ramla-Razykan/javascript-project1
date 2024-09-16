function greating() {
    let username = prompt("Enter Your Name");
    let userAge = Number(prompt("Enter Your Age"));
    let great = document.getElementById("great");

    if (userAge >= 18) {
        great.textContent = `Welcome ${username}, You Are Eligible.`;
    }
    else if (userAge > 0 && userAge < 18) {
        great.textContent = `Sorry ${username}, You Age is ${userAge}, You Are Not Eligible.`;
    }
    else {
        great.textContent = `Enter Again.`
    }
}