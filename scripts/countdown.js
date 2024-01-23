let finalProjectDueDate = new Date('05/18/2024 11:59 PM')

const SECOND = 1000;
const MINUTE = SECOND * 60;
const HOUR = MINUTE * 60;
const DAY = HOUR * 24;

function displayTimeRemaining() {
    var now = new Date();
    var remaining = finalProjectDueDate.getTime() - now.getTime();
    let output;

    // After due date passed
    if (remaining < 0) {
        clearInterval(interval);
        output = "The final project is already due!"
    }
    else {
        var days = Math.floor(remaining / DAY);
        var hours = Math.floor((remaining % DAY) / HOUR);
        var minutes = Math.floor((remaining % HOUR) / MINUTE);
        var seconds = Math.floor((remaining % MINUTE) / SECOND);
        output = `The final project is due in ${days} days, ${hours} hours, ${minutes} minutes, and ${seconds} seconds!`
    }
    let display = document.getElementById('time-remaining').innerHTML = output;
}

let interval = setInterval(displayTimeRemaining, 1000)