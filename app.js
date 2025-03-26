// create variable for btn

const startStopBtn =document.querySelector('#startStopBtn');
const resetBtn = document.querySelector('#resetBtn');

// variables for time values
let seconds = 0;
let minutes= 0;
let hours = 0;

// variables ofr leading zero
let leadingSeconds = 0;
let leadingMinutes = 0;
let leadingHours = 0;

// variables for set interval and timer status






// stop watch function
function stopWatch() {


    seconds++


    if (seconds / 60 === 1) {
        seconds = 0;
        minutes++;

        if (minutes / 60 ===1) {
            minutes =0 ;
            hours++
        }
    }

        // leading seconds
    if (seconds < 10) {
        leadingSeconds = "0" + seconds.toString();
    } else{
        leadingSeconds = seconds;
    }

    // leading minutes
    if (minutes < 10) {
        leadingMinutes= "0" + minutes.toString();
    } else{
        leadingMinutes = minutes;
    }


        // leading hours
    if (hours < 10) {
        leadingHours = "0" + hours.toString();
    } else{
        leadingHours = hours;
    }




    // display timer
    let displayTimer = document.getElementById('timer').innerText =
    leadingHours+ ":" + leadingMinutes+ ":" + leadingSeconds;
}

// window.setInterval(stopWatch,1000)


