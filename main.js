//Dom Elements
const time = document.getElementById(`time`),
  greeting = document.getElementById(`greeting`),
  name = document.getElementById(`name`),
  focus = document.getElementById(`focus`);

  //Show Time
function showTime() {
    let today = new Date(),
    hour = today.getHours(),
    min = today.getMinutes(),
    sec = today.getSeconds();
    //Set AM or PM
    const amPM = hour >= 12 ? `PM` : `AM`;
    
    //12 hour format
    hour = hour % 12 || 12;

    //Output Tme
    time.innerHTML =`${hour}<span>:</span>${addZero(min)}<span>:</span>${addZero(sec)}`;

    setTimeout(showTime, 1000);
}

//Add 0 

function addZero(n) {
    return (parseInt(n, 10) < 10 ? '0' : '') +n;
}

// Set background and greeting
function setBgGreet() {
    let today = new Date(),
    hour = today.getHours();

    if(hour < 8) {
        //Morning
        document.body.style.backgroundImage ="/images/morning.jpg";
        greeting.textContent = "Good Morning";
    } else if (hour < 12) {
        //Mid-morning
        document.body.style.backgroundImage = "/images/mid-morning.jpg";
        greeting.textContent = "Good Morning";
    } else if (hour < 16) {
        //Afternoon
        document.body.style.backgroundImage = "../images/afternoon.jpg";
        greeting.textContent = "Good Afternoon";
    }
}
//Run
showTime();
setBgGreet();