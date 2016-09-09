var countdown = {

			 title: document.getElementById("title"),
			 date:document.getElementById("date"),
			 time: document.getElementById("time"),
			countdownForm1:document.getElementById("countdown1"),

getCountdownSchedule: function(){
		document.getElementById("countdownForm").addEventListener("submit",function(e){e.preventDefault()},false);
		console.log(this.countdownForm1);
		document.getElementById("submit-countdown").addEventListener("click",function(){
			var countdownForm1 =document.getElementById("countdown1");
			var showTime = document.getElementById("show-time");
			var formtitle= document.getElementById("title");
			var formdate=document.getElementById("date");
			var formtime= document.getElementById("time");
			countdownForm1.className+=" hide";
			showTime.className="show";

			var formDay= formdate.value.substr(8,2);
			var formMonth= formdate.value.substr(5,2);
			var formYear= formdate.value.substr(0,4);
			var formHours = formtime.value.substr(0,2);
			var formMinutes = formtime.value.substr(3,2);
			console.log(formDay+"   FORM DAY  " +formMonth + "Month "+ formYear+" year " +" formHours "+formHours+" formMinutes" +formMinutes);
			var currentTime = new Date();
var currentHours=(currentTime.getHours()<10?'0':'') + currentTime.getHours();
var currentMinutes=(currentTime.getMinutes()<10?'0':'') + currentTime.getMinutes();
var currentSeconds =(currentTime.getSeconds()<10?'0':'') + currentTime.getSeconds();
var currentDay =(currentTime.getDate()<10?'0':'') + currentTime.getDate();
var currentMonth =((currentTime.getMonth()+1)<10?'0':'') + (currentTime.getMonth()+1) ;
var oneDay= 24*60*60*1000;
var getDate = new Date( formYear,formMonth,formDay,formHours,formMinutes);
var getCurrentDate = new Date(currentTime.getFullYear(),currentMonth,currentDay,currentTime.getHours(),currentTime.getMinutes(),currentTime.getSeconds());
console.log(" currentTime.getYear(),currentMonth,currentDay,currentTime.getHours(),currentTime.getMinutes(),currentTime.getSeconds() "+	 currentTime.getFullYear()+"  "+currentMonth+"  "+currentDay+"   "+currentTime.getHours()+"   "+currentTime.getMinutes()+"    "+currentTime.getSeconds());
console.log(getDate +" Thats the time");
var getDateMiliSeconds = getDate.getTime();
var currentDateMiliseconds =getCurrentDate.getTime();
console.log("curetn =======oooooooo>>>>>" +getDateMiliSeconds+" ==========>>=======>>" +currentDateMiliseconds);
var daysLeft = Math.floor(Math.abs((getDateMiliSeconds- currentDateMiliseconds)/(oneDay)));
var hoursLeft = Math.floor((Math.abs(getDateMiliSeconds- currentDateMiliseconds)%(oneDay))/(3600000));
var minutesLeft = Math.floor((Math.abs(getDateMiliSeconds- currentDateMiliseconds)%(oneDay))/(60000));
var secondsLeft = Math.floor((Math.abs(getDateMiliSeconds- currentDateMiliseconds)%(oneDay))/(10000));

console.log("Left out Time  days ====> " +daysLeft+"  hours ====> " + hoursLeft + " minutes  ====>" +minutesLeft+"seconds left ====>" +secondsLeft);



console.log("curren current "+currentTime.getTime() +"current Date"+currentTime+ "current month "+ currentMonth +" day " +currentDay+" hours "+currentHours+ " Minutes "+currentMinutes+" Seconds "+currentSeconds);
console.log("from values" +formtitle.value+" date  " +formdate.value +" time" +formtime.value);
			//this.setCountDownDisplay(title,date,time);
		// 	console.log(countdownForm1);
		// console.log(title.value);	
		// console.log(date.value);
		// console.log(time.value);
		},false);

	},
// setCountDownDisplay:function(title,date,time){



// }

};

countdown.getCountdownSchedule();
