setInterval(() => {
  let time = new Date();
  let hour = time.getHours();
  let min = time.getMinutes();
  let sec = time.getSeconds();

  document.getElementById("hour").innerHTML=hour;
  document.getElementById("min").innerHTML=min;
  document.getElementById("sec").innerHTML=sec;
  if(hour>12){
    document.getElementById("session").innerHTML="PM";
  }else{
    document.getElementById("session").innerHTML="AM"
  }

}, 1000);
