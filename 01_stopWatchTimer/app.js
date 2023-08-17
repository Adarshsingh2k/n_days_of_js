const display = document.getElementById('display')
const start = document.getElementById('start')
const stop = document.getElementById('stop')
const reset = document.getElementById('reset')

let timer
let elapsedTime = 0;
let check=false;

display.textContent = "00:00:00:000"

let updateTime = (val) => {

    let hrs = Math.floor(val / 3600000)
    let mins = Math.floor((val % 3600000) / 60000)
    let sec = Math.floor((val % 60000) / 1000)
    let msec = val % 1000

    let formattedHrs = hrs < 10 ? "0" + hrs : hrs;
    let formattedMins = mins < 10 ? "0" + mins : mins;
    let formattedSec = sec < 10 ? "0" + sec : sec;
    let formattedMsec = msec < 100 ? (msec < 10 ? "00" + msec : "0" + msec) : msec;

    display.textContent = `${formattedHrs}:${formattedMins}:${formattedSec}:${formattedMsec}`;


}

let buttonsDisabled=(val,res=false)=>{
    if(val===true){
        start.disabled=true;
        stop.disabled=false
        reset.disabled=false
    }
    else if(val===false  && res){
        start.disabled=false
        stop.disabled=true
        reset.disabled=true
        
    }
    else{
        start.disabled=false
        reset.disabled=false
        stop.disabled=true
    }

}


start.onclick = function () {
    check=true;
    buttonsDisabled(check)
    
    console.log("Timer start");
    const starttime = Date.now() - elapsedTime

    timer = setInterval(() => {
        elapsedTime = Date.now() - starttime
        updateTime(elapsedTime);
    }, 100);



}

stop.onclick = () => {
    
    console.log("check")
    elapsedTime = elapsedTime
    clearInterval(timer)
    check=false;
    buttonsDisabled(check)

}

reset.onclick = () => {
    elapsedTime = 0;
    clearInterval(timer)
    updateTime(elapsedTime)
    check=false;
    buttonsDisabled(check,true)

}
