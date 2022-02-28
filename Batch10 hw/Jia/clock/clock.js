const hourPin = document.getElementById("hour-pin");
const minPin = document.getElementById("min-pin");
const SecPin = document.getElementById("second-pin");


// console.log(SecPin)

function clockDate() {
    const curtime = new Date();

    const second = curtime.getSeconds();
    const hour = curtime.getHours();
    const minute = curtime.getMinutes();

    // console.log("current time is: " + hour + ":" + minute + ":" + second)

    const secondDeg = second/60*360 + 90;
    const minuteDeg = minute/60*360 + 90 + secondDeg/360*6;
    const hourDeg = hour/12*360 + 90 + minuteDeg/360 * 30;

    // console.log("hour Deg is " + hour)
    // console.log("min Deg is " + minute)
    // console.log("sec Deg is " + second)


    hourPin.style.transform=`rotate(${hourDeg}deg)`;
    minPin.style.transform=`rotate(${minuteDeg}deg)`;
    SecPin.style.transform=`rotate(${secondDeg}deg)`;


}

clockDate();

var intervalId = window.setInterval(function(){
    clockDate();
  }, 1000);
