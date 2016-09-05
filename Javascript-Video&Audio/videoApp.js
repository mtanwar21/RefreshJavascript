function videoPlayer()
{
	// if(!document.createElement("videoPlay").canPlayType)
	// {
	// 	document.getElementById("controls").setAttribute("style","display:none");
	// 	return;
	// };

	
	
var video = document.getElementById("videoPlay");
document.getElementById("play_pause").addEventListener("click",function(e){

	var video = document.getElementById("videoPlay");
	if(video.paused)
	{
		video.play();
		e.target.innerText="Pause";
	}
	else
	{
		video.pause();
		e.target.innerText="Play";
	}
},false);

video.addEventListener("timeupdate",function(){
	var timeElapsedPerc=(this.currentTime/this.duration)*100;
	document.getElementById("progress").setAttribute("style","width :"+timeElapsedPerc +"%");
},false);

video.addEventListener("progress",function(){
	loadProgress();
},false);

video.addEventListener("loadeddata",function(){
	loadProgress();
},false);

video.addEventListener("canplaythrough",function(){
	loadProgress();
},false);

video.addEventListener("playing",function(){
	loadProgress();
},false);

video.addEventListener("timeupdate",function()
{
	document.getElementById("currentTime").innerText=setTime(this.currentTime);
	document.getElementById("totalTime").innerText=setTime(this.duration);
},false);

// video.ondurationchange=function()
// {
// 	console.log("inside");
// 	document.getElementById("totalTime").innerText=setTime(this.duration);
// };

};


function loadProgress()
{
	var video = document.getElementById("videoPlay");
	if(video.buffered.length>0)
	{
	var loadPerc= (video.buffered.end(0)/video.duration)*100;
	document.getElementById("loadStatus").setAttribute("style","width :"+loadPerc +"%");
	};
};

function setTime(time){
var seconds= Math.round(time);
var minutes =Math.floor(seconds/60);
seconds=Math.floor(seconds%60);

minutes=(minutes>10)?minutes:'0'+minutes;
seconds=(seconds>10)?seconds:'0'+seconds;

return minutes+":"+seconds;
}
window.onload =function()
{
	videoPlayer();
}