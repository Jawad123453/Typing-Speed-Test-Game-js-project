let starbtn=document.querySelector(".gamestarter");
let word=document.querySelector(".word");
let maininput=document.getElementById("maininput");
let choonenword=document.querySelector(".word h1");
let comingWords=document.querySelector(".coming-words");
let newarray=[];
const mainarray=["jawad","husam","ali","people","book","man","woman"];
let rightone=0;
document.querySelector(".left").innerHTML=mainarray.length -1;
let countdowninterval;

const levels={
  Easy:5,
  Normal:3,
  Hard:2
}
let levelname="Normal";
document.querySelector(".difficalty").innerText=levelname;
document.querySelector(".timehave").innerText=levels[levelname];
let d=levels[levelname];


function missingupthearray(randomarray){
  for(let i=mainarray.length -1;i>0;i--){
    let random=Math.floor(Math.random()*(i+1))
    let temp=randomarray[i];
    randomarray[i]=randomarray[random];
    randomarray[random] = temp;
  }
  return randomarray;
}
missingupthearray(mainarray)

starbtn.addEventListener("click",function(){
  starbtn.classList.add("start");
  word.classList="word ok";
  maininput.focus();
  timer(d);
  maininput.addEventListener("keyup",function(e){
    if(maininput.value == choonenword.innerText){
      givingnewone();
      timer(d);
      missingupthearray(mainarray)
      maininput.value="";
      rightone++;
      document.querySelector(".solved").innerText=rightone;
    }
  })
})

function givingnewone(){
  for(let i=0;i<mainarray.length;i++){
    if(i == mainarray.length - 1){
      choonenword.innerText=mainarray[i];
      newarray.push(mainarray[i])
      newspans(mainarray)
      mainarray.length--;
      if(mainarray.length == 0){
        gameover();
      }
    }
  }
}
givingnewone()

function gameover(){
  comingWords.classList="coming-words end";
  word.classList.remove("ok");
  if(mainarray.length == 0){
    document.querySelector(".centering p").classList.add("win");
    document.querySelector(".centering p").innerText="Graet Job";
  }else{
    document.querySelector(".centering p").classList.add("over");
    document.querySelector(".centering p").innerText="Game Over";
  }
}

function newspans(array){
  comingWords.innerText="";
  for(let i=0;i<array.length;i++){
    let span=document.createElement("span");
    span.innerText=array[i];
    comingWords.appendChild(span);
  }
}

function timer(times){
  times.innerHTML=times;
  console.log("hello");
  let seconds;
  
  countdowninterval=setInterval(() => {
    seconds = parseInt(times % 60);
    document.querySelector(".timeleft").innerHTML=`${seconds} Seconds`;
    if(--times == -1){
      clearInterval(countdowninterval);
      gameover();
    }
  }, 1000);
}
