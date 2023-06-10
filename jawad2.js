let startbtn=document.querySelector(".gamestarter");
let word=document.querySelector(".word");
let maininput=document.getElementById("maininput");
let comingWords=document.querySelector(".coming-words");
let choonword=document.querySelector(".word h1");
let chooselvl=document.querySelector(".chooselvl");
let clicklvl=document.querySelectorAll(".chooselvl span")
let score=0;
let timeleft=document.querySelector(".timeleft")
let duration;
const mainarray=["jawad","husam","ali","people","book","man","woman"];
let startlength=mainarray.length;
let lvldefname = "Normal";
const lvls={
  "Easy":5,
  "Normal":3,
  "Hard":2
}
whichlevel();
clicklvl.forEach((one)=>{
  one.addEventListener("click",function(){
    lvldefname=`${one.innerHTML}`;
    whichlevel()
  })
})

function whichlevel(){
  document.querySelector(".left").innerHTML=mainarray.length;
  document.querySelector(".difficalty").innerHTML=lvldefname;
  document.querySelector(".timehave").innerHTML=lvls[lvldefname];
  duration=lvls[lvldefname];

  timeleft.innerHTML=duration;
}

nextwords(mainarray);

startbtn.addEventListener("click",function(){
  startbtn.classList.add("start");
  chooselvl.classList.add("start")
  word.classList.add("ok");
  maininput.focus();
  takerandomword();
})

function takerandomword(){
  let randomone=Math.floor(Math.random()*mainarray.length);
  choonword.innerHTML=mainarray[randomone];
  mainarray.splice(randomone,1);
  nextwords()
  timedesd()
}

function nextwords(){
  comingWords.innerHTML="";
  for(let i=0;i<mainarray.length;i++){
    let span=document.createElement("span");
    span.innerText=mainarray[i];
    comingWords.appendChild(span);
  }
}

function timedesd(){
  if(mainarray.length == startlength -1){
    duration=duration + 2;
  }else{
    duration=lvls[lvldefname]
  }
  timeleft.innerHTML=duration;
  let start=setInterval(() => {
    timeleft.innerHTML--;
    if(timeleft.innerHTML == "0"){
      clearInterval(start);
      if(maininput.value == choonword.innerHTML){
        score++;
        maininput.value="";
        if(mainarray.length > 0){
          takerandomword()
        }else{
          document.querySelector(".centering p").innerText="Good Job"
          document.querySelector(".centering p").classList.add("win");
          word.remove();
          comingWords.remove();
        }
      }else{
        document.querySelector(".centering p").innerText="Game Over"
        document.querySelector(".centering p").classList.add("over");
        word.remove();
      }
    }
    document.querySelector(".solved").innerHTML=score;
  }, 1000);
}