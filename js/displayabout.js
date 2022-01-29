console.log("如果你愿意的话，本页面有两个小成就待你完成，它们分别是："
+'\n'+"1，玩小游戏达到1500分"
+'\n'+"2，点击“别点我”按钮并触发结局"
)

$(document).ready(function(){
    $(".about").click(function(){
        $("#aboutinfo").toggle();
    });
});

$(document).ready(function(){
  $(".game").click(function(){
      $("#gamerule").show();
  });
});
function cheat()
{
  document.getElementById("cheat").innerText="这里没有好康的";
}
function normal()
{
  document.getElementById("cheat").innerText="别点我";
}
function NGGYU()
{
  var flag=confirm("不要看了，没什么好看的，点击\"取消\"按钮就好");
  if (flag==true)
  {
      var flag1=confirm("我让你点击\"取消\"！！！");
      if (flag1==true)
      {
          var flag2=confirm("最后再问一次，是否要看？");
          if (flag2==true)
      {
        $("#cheaton").show();
      }
      }
  }
}

function disappear()
{
  $("#cheaton").hide();
  alert("恭喜你解锁成就👏：RickRoll")
}
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
   else if(hh>=12&&hh<14)
   {
        txt1="中午好，现在是";
        txt2="休息一下吧";
   }
   else if(hh>=14&&hh<17)
   {
        txt1="下午好，现在是";
        txt2="下午要是感到疲倦，就去洗把脸。";
   }
   else if(hh>=17&&hh<18)
   {
        txt1="已经傍晚了，现在是";
        txt2="看看远处的夕阳吧,人间忽晚，山河已秋";
   }
   else if(hh>=18&&hh<24)
   {
        txt1="晚上好，现在是";
        txt2="黑夜一无所有，为何给我安慰";
   }
   else
   {
        txt1="已经是深夜了，现在是";
        txt2="注意身体，少熬夜吧";
   }
    document.getElementById('clock').innerText =txt1 +'\n'+ Math.floor(hh / 10) + (hh % 10 + ':') + Math.floor(mm / 10) + mm % 10 + ':' + Math.floor(ss / 10) + ss % 10 + '\n' + txt2;
  }
  myTime();
  setInterval(myTime, 1000);

  var starCount = 200;
  var context;
  function starInit() {
    var bg = document.querySelector("body");
    for (var i = 0; i < starCount; i++) {
      var star = document.createElement("div");
      star.classList.add("star");
      bg.appendChild(star);
    }
  }
  function starPosition() {
    var stars = document.querySelectorAll(".star");
    for (var i = 0; i < starCount; i++) {
      stars[i].style.left = Math.random() * window.innerWidth + "px";
      stars[i].style.top = Math.random() * window.innerHeight + "px";
      stars[i].style.animationDelay = Math.random() * 10 + "s";
    }
  }

  function init() {
    var Meteor = document.getElementById("Meteor");
    Meteor.width = window.innerWidth;
    Meteor.height = window.innerHeight;
    context = Meteor.getContext("2d");
  }

  function MeteorRain() {
    this.x = Math.random() * window.innerWidth;
    this.y = Math.random() * window.innerHeight;
    this.length = Math.ceil(Math.random() * 80 + 150);
    this.angle = 30;
    this.cos = Math.cos((this.angle * 3.14) / 180);
    this.sin = Math.sin((this.angle * 3.14) / 180);
    this.width = this.length * this.cos;
    this.height = this.length * this.sin;
    this.speed = Math.ceil(Math.random() + 0.5);
    this.shifting_x = this.speed * this.cos;
    this.shifting_y = this.speed * this.sin;

    this.countPos = function () {
      this.x = this.x - this.shifting_x;
      this.y = this.y + this.shifting_y;
    };
    this.draw = function () {
      context.save();
      context.beginPath();
      context.lineWidth = 1;
      context.globalAlpha = this.alpha;
      var line = context.createLinearGradient(
        this.x,
        this.y,
        this.x + this.width,
        this.y - this.height
      );
      line.addColorStop(0, "white");
      line.addColorStop(0.5, "violet");
      line.addColorStop(1.0, "darkblue");
      context.strokeStyle = line;
      context.moveTo(this.x, this.y);
      context.lineTo(this.x + this.width, this.y - this.height);
      context.closePath();
      context.stroke();
      context.restore();
    };
    this.move = function () {
      var x = this.x + this.width - this.shifting_x;
      var y = this.y - this.height + this.shifting_y;
      context.clearRect(
        x - 3,
        y - 3,
        this.shifting_x + 5,
        this.shifting_y + 5
      );
      this.countPos();
      this.alpha -= 0.002;
      this.draw();
    };
  }
  function playRains() {
    for (var n = 0; n < rainCount; n++) {
      var rain = rains[n];
      rain.move();
      if (rain.y > window.innerHeight) {
        context.clearRect(
          rain.x,
          rain.y - rain.height,
          rain.width,
          rain.height
        )
        rains[n] = new MeteorRain();
      }
    }
    setTimeout("playRains()", 2);
  }
  var rainCount = 20;
  var rains = new Array();
  init();
  starInit();
  starPosition();
  for (var i = 0; i < rainCount; i++) {
    var rain = new MeteorRain();
    rain.draw();
    rains.push(rain);
  }
  playRains();

  fetch('https://v1.hitokoto.cn')
  .then(response => response.json())
  .then(data => {
    const hitokoto = document.getElementById('hitokoto_text')
    hitokoto.href = 'https://hitokoto.cn/?uuid=' + data.uuid
    hitokoto.innerText = data.hitokoto
  })
  .catch(console.error)


