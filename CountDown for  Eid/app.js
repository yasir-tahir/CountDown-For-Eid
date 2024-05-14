
// document.getElementById("main").innerText
// document.getElementById("input").innerText




// var months = document.getElementById("month");
// var days = document.getElementById("days");
// var hours = document.getElementById("hours");
// var minutes = document.getElementById("minutes");
// var seconds = document.getElementById("seconds");
// // ================= Calculations-Started ===============/
// var date = new Date().getTime();
// var eid = new Date("17 june 2024").getTime();
// var conversion = eid - date;
// months.value = Math.floor(conversion / (1000 * 60 * 60 * 24 * 31));
// days.value = Math.floor(conversion / (1000 * 60 * 60 * 24) - 31).toString();
// if (days.value == -1) {
//   days.value = "0";
// }
// hours.value = Math.floor((conversion / (1000 * 60 * 60)) % 24);
// minutes.value = Math.floor((conversion / (1000 * 60)) % 60);
// seconds.value = Math.floor(conversion / 1000) % 60;
// // ================= Calculations-End ===============/
// // console.log();





// function countdown(){
//     setInterval(function(){

// var eid = new Date('June 17, 2024 00:00:00').getTime();
// var now = new Date().getTime();
// var remainingTime = eid - now;

// var month = Math.floor(conversion / (1000 * 60 * 60 * 24 * 31));
// console.log("month")
// var days = Math.floor(remainingTime / (1000 * 60 * 60 * 24));
// var hours = Math.floor((remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
// var minutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60));
// var seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);

// document.getElementById("month").innerHTML=month+"<br/>"+"Month";
// document.getElementById("days").innerHTML = days + "<br/>" + "Days";
// document.getElementById("hours").innerHTML = hours + "<br/>" + "Hours";
// document.getElementById("minutes").innerHTML = minutes + "<br/>" + "Minutes";
// document.getElementById("seconds").innerHTML = seconds + "<br/>" + "Seconds";

// },1000)

// }

// countdown();

// // function getvalue() {
// //     (document.getElementById("days").value)
// // }
// // console.log(daysLeft + ' days left');
// // console.log(hoursLeft + ' hours left');
// // console.log(minutesLeft + ' minutes left');
// // console.log(secondsLeft + ' seconds left');




function countdown() {
    setInterval (function() {

    let dest = new Date("june 17, 2024, 00:00:00").getTime();
    let cur = new Date().getTime();
    let diff = dest - cur;

    // let month = Math.floor( / (1000 * 60 * 60 * 24 * 31));
    // console.log("month")


    let days = Math.floor(diff / (1000*60*60*24));
    console.log(days);

    let hours = Math.floor(diff % (1000*60*60*24) / (1000*60*60));
    console.log(hours);

    let minutes = Math.floor(diff % (1000*60*60) / (1000*60));
    console.log(minutes);

    let seconds = Math.floor(diff % (1000*60) / (1000));
    console.log(seconds);

    // document.getElementById("month").innerHTML = month + "</br>" + "Month";
    document.getElementById("days").innerHTML = days + "<br/>" + "Days";
    document.getElementById("hours").innerHTML = hours + "<br/>" + "Hours";
    document.getElementById("minutes").innerHTML = minutes + "<br/>" + "Minutes";
    document.getElementById("seconds").innerHTML = seconds + "<br/>" + "Seconds";

    
    
},0)
}

countdown();































