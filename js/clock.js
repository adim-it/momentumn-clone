const clock = document.querySelector("#clock");


function getClock() {
    const date = new Date();
    const hours = date.getHours();
    const minutes = String(date.getMinutes()).padStart(2,"0");
    const seconds = String(date.getSeconds()).padStart(2,"0");
    const apm = hours > 12 ? 'PM' : 'AM';
    let apm_hours = hours % 12;    
    apm_hours = apm_hours ? apm_hours : 12;
    apm_hours = String(apm_hours).padStart(2, "0");

    clock.innerText = `${apm} ${apm_hours}:${minutes}:${seconds}`;
}


getClock();
setInterval(getClock, 1000);