let hours=document.getElementById("hours");
let minutes=document.getElementById("minutes");
let start=document.getElementById("start");
let stop=document.getElementById("stop");
let ampm=document.getElementById("ampm");
let display=document.getElementById("display");



hours.value=new Date().getHours(); 
minutes.value=new Date().getMinutes(); 

if(hours.value<=12){
   ampm.value="AM";
}
else{
   ampm.value="PM";
}
if(minutes.value<=10){
   minutes.value="0" + minutes.value;
   hours.value="0" + hours.value;

}
if(hours.value<=10){

   hours.value="0" + hours.value;

}

function alarm(){
if(hours.value && minutes.value){
   x=setInterval(() => {
      setalarm()
   }, 1000);
}
}
function setalarm(){
   // console.log("hello")
   let date=new Date().toLocaleDateString();
   let then=new Date(`${date} ${hours.value}:${minutes.value}`).getTime();
   let now=new Date().getTime();
   // console.log(then);
   // console.log(now);
   let settime=then-now;
   // console.log(settime);
   
   let rhours=Math.floor(settime/1000/60/60)%24;
   let rminutes=Math.floor(settime/1000/60)%60;
   let rseconds=Math.floor(settime/1000)%60;
   // console.log(rhours);
   // console.log(rminutes);
   // console.log(rseconds);
   display.innerHTML=`Alarm At <br>${rhours}hr : ${rminutes}min  : ${rseconds}sec `;
   display.style.color="red";
   if(settime<0){
   display.innerHTML=`Itz Alarm Time`;
   stop.style.display="inline";
  
   start.style.display="none";
let audio=new Audio("./audio.wav");
audio.play();
stop.addEventListener("click",()=>{
   clearInterval(x);
   audio.pause();
   display.innerHTML=``;

   hours.value=new Date().getHours();
   minutes.value=new Date().getMinutes();
   stop.style.display="none";
   start.style.display="inline";
  

})
   }

}





   


start.addEventListener("click",()=>alarm())