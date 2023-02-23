const newYears="1 Jan 2024";
const dayss=document.getElementById('days');
const hourss=document.getElementById('hours');
const minutess=document.getElementById('minutes');
const secondss=document.getElementById('seconds');
function countdown(){
    const newYearsDate= new Date(newYears);
    const currDate=new Date();
    const total=(newYearsDate-currDate)/1000;/*total seconds*/
    const days=Math.floor(total/3600/24);
    const hours=Math.floor(total/3600)%24;
    const minutes=Math.floor(total/60)%60;
    const seconds=Math.floor(total)%60;
   
    dayss.innerHTML= days;
    hourss.innerHTML=formatTime(hours);
    minutess.innerHTML=formatTime(minutes);
    secondss.innerHTML=formatTime(seconds);


    console.log(days,hours,minutes,seconds);
}
function formatTime(time){
    return time<10?(`0${time}`):time;
}

countdown();
setInterval(countdown, 1000);