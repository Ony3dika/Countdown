
 let days=document.querySelector(".one"),
     hours=document.querySelector(".two"),
     minutes=document.querySelector(".three"),
     seconds=document.querySelector(".four");



function CountDown (){

    let date = new Date('July 24, 2022 19:0:41').getTime()
    let now= new Date().getTime()
    let timeGap= date - now;

    /////Time 

    let second = 1000
    let minute = second*60
    let hour = minute*60
    let day = hour*24

    ///Calc 

    let textDay = Math.floor(timeGap/day);
    let textHour = Math.floor((timeGap % day)/hour)
    let textMinute = Math.floor((timeGap % hour)/minute)
    let textSecond = Math.floor((timeGap % minute)/second);


    days.innerText=textDay
    hours.innerText=textHour
    minutes.innerText=textMinute
    seconds.innerText=textSecond
};

setInterval(CountDown,1000)

