let countdown=document.querySelector('.countdown');
const lauchdate=new Date('Dec 20, 2018 13:00:00').getTime();
var intvl=setInterval(()=>{
//get today

var now=new Date().getTime();

//from now to launch
let dist=lauchdate-now;
let days=Math.floor(dist/(1000*60*60*24));
console.log(days);
let hours=Math.floor(dist%((1000*60*60*24))/(1000*60*60));

const mins=Math.floor(dist%((1000*60*60))/(1000*60));
const secs=Math.floor(dist%((1000*60))/(1000));

//display result

countdown.innerHTML=    `

<div>${days} <span>Days</span></div>
<div>${hours} <span>Hours</span></div>
<div>${mins} <span>Minutes</span></div>
<div>${secs} <span>Seconds</span></div>

`;
if(dist<0){
    clearInterval(intvl);
    countdown.style.color='#12a2b8';
    document.querySelector('.comingsoon').innerHTML='Happy Hour';
    countdown.innerHTML='Launched';
}

},1000);
