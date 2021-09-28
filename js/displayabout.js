$(document).ready(function(){
    $(".about").click(function(){
        $("#aboutinfo").toggle();
    });
});

function myTime(){
    const time = new Date();
    const hh = time.getHours();
    const mm = time.getMinutes();
    const ss = time.getSeconds();
   if(hh>=5&&hh<12)
   {
       txt1="早上好，现在是";
       txt2="一天之计在于晨";
   }
   else if(hh>=12&&hh<13)
   {
        txt1="中午好，现在是";
        txt2="休息一下吧";
   }
   else if(hh>=13&&hh<18)
   {
        txt1="下午好，现在是";
        txt2="少坐多动";
   }
   else
   {
        txt1="晚上好，现在是";
        txt2="把时间留给自己";
   }
    document.getElementById('clock').innerText =txt1 +'\n'+ Math.floor(hh / 10) + (hh % 10 + ':') + Math.floor(mm / 10) + mm % 10 + ':' + Math.floor(ss / 10) + ss % 10 + '\n' + txt2;
  }
  myTime();
  setInterval(myTime, 1000);