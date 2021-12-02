const digits_day = document.getElementById('digits--day')
const digits_hour = document.getElementById('digits--hour')
const digits_minute = document.getElementById('digits--minute')
const digits_second = document.getElementById('digits--second')
const text_info = document.getElementById('text--info')
const releaseDate = new Date('December 3, 2021 01:00:00')

setInterval(setCountdown, 1000);

function setCountdown(){
    let currentDate = new Date();
    let cdTime = releaseDate.getTime() - currentDate.getTime();
    if(cdTime > 0){
        let cdDay = Math.floor(cdTime/1000/60/60/24);
        let cdHour = Math.floor(cdTime/1000/60/60 % 24) ;
        let cdMinute = Math.floor((cdTime/1000/60) % 60);
        let cdSecond = Math.floor((cdTime/1000) % 60);
    
        digits_day.innerHTML = cdDay;
        digits_hour.innerHTML = cdHour;
        digits_minute.innerHTML = cdMinute;
        digits_second.innerHTML = cdSecond;
    }
    else{
        text_info.innerHTML= "ENDWALKER IS RELEASED! LOG ON NOW!"
    }
}