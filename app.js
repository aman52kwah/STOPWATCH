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
let timeInterval =null;
let  timerStatus = "stopped";





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


//start and stop button with a function to set time and pause it

startStopBtn.addEventListener('click',
    
    function(){
    
      if(timerStatus === "stopped") {
        timeInterval = window.setInterval(stopWatch,1000);
        document.getElementById('startStopBtn').innerHTML =`<i 
        class ="fa-solid fa-pause" id ="pause"></i>`;

        timerStatus ="started";

      } else{
        window.clearInterval(timeInterval);
        document.getElementById('startStopBtn').innerHTML=
        `<i 
        class ="fa-solid fa-play" id ="play"></i>`;
        timerStatus ="stopped";
      }    
    
    }
);

    // a reset function to clear the time after clicking on the reset
resetBtn.addEventListener('click', 
function(){

       window.clearInterval(timeInterval);
       seconds = 0;
      minutes = 0;
       hours = 0;

       document.getElementById('timer').innerHTML= "00:00:00";

});