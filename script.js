let userChoice;
let score=0;


function showImage(choice){

    var randomNumber=Math.floor(Math.random()*3);
   let user=choice.getAttribute('id');
    switch (randomNumber){
            case 0:
            document.getElementById('computer-choice-image').src='kamen.png';
            break;
            case 1:
            document.getElementById('computer-choice-image').src='papir.png';
            break;
            case 2:
            document.getElementById('computer-choice-image').src='makaze.png';
            break;
          
    }
    scoreCount(randomNumber , user);
}

function scoreCount(computer , user){
 if(computer===0 && user==='paper'){
    score+=1;
    let infotext=document.getElementById('info').innerText='WIN';   

 }
 if(computer===1 && user==='paper'){
    score=score;
    
    let infotext=document.getElementById('info').innerText='DRAW';   

 }
 if(computer===2 && user==='paper'){
    score=score;
    
    let infotext=document.getElementById('info').innerText='LOSE';   

 }
 if(computer===0 && user==='scissor'){
    score=score;
    
    let infotext=document.getElementById('info').innerText='LOSE';   

 }
 if(computer===1 && user==='scissor'){
    score+=1;
    let infotext=document.getElementById('info').innerText='WIN';   

 }
 if(computer===2 && user==='scissor'){
    score=score;
    
    let infotext=document.getElementById('info').innerText='DRAW';   

 }
 if(computer===0 && user==='rock'){
    score=score;
    
    let infotext=document.getElementById('info').innerText='DRAW';   

 }
 if(computer===1 && user==='rock'){
    score=score;
    
    let infotext=document.getElementById('info').innerText='LOSE';   

 }
 if(computer===2 && user==='rock'){
    score+=1;
    let infotext=document.getElementById('info').innerText='WIN';   

 }

  let scoreCount=document.getElementById('score').innerText="Score:"+score;     
}








