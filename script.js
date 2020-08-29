//challenge 1 age in days
function ageInDays(){
    if(document.getElementById("ageInDays")){document.getElementById("ageInDays").remove();}
    var birthyear= prompt("What year you born");
    if (birthyear==null){
        var ageindayz=0;
    }else{
        var ageindayz= (2020-birthyear)*365;
    }
    var h2 = document.createElement("h2");
    var textAnswer = document.createTextNode('you are '+ ageindayz+' days old');
    h2.setAttribute('id','ageInDays');
    h2.appendChild(textAnswer);
    document.getElementById('flexbox__box__result').appendChild(h2);
    console.log(birthyear);
}
function reset(){
    document.getElementById("ageInDays").remove();
}

function generateCat(){
    var image = document.createElement("img");
    image.setAttribute("src", "D:/MMC/DCIM/Screenshots/Screenshot_2020_0408_215808.png");
    image.setAttribute('id','cat-gen-image');
    document.getElementById('cat-result').appendChild(image);
}

function rpsGame(yourChoice){
    console.log(yourChoice);
    var humanChoice, botChoice;
    humanChoice=yourChoice.id;
    botChoice= numberToChoice(Math.floor((Math.random())*3));
    //alert(botChoice);
    var result = decideWinner(humanChoice, botChoice);
    //alert(result);
    var message = finalMessage(result);
    console.log(message);
    rpsFrontEnd(yourChoice.id,botChoice,message)

}

function numberToChoice(number){
   return ["rock","paper","scissors"][number];
}
function decideWinner(humanChoice, botChoice){
    var rpsDataBase = {
        'rock':{'scissors':1, 'rock':0.5,'paper':0},
        'paper':{'scissors':0,'rock':1,'paper':0.5},
        'scissors':{'scissors':0.5,'rock':0,'paper':1}
    }
    var yourScore = rpsDataBase[humanChoice][botChoice];
    var botScore = rpsDataBase[botChoice][humanChoice];
    return [yourScore,botScore];
}
function finalMessage([yourScore,botScore]){
    if (yourScore===1){
        return {message:'You Won', color:'green'}
    }
    else if (yourScore===0.5){
        return {message:'You tied', color:'yellow'}
    }
    else (yourScore===0)
        return {message:'You lose', color:'red'};
    
}

function rpsFrontEnd(humanImageChoice, botImageChoice,finalMessage){
    var imageDatabased ={
        'rock':document.getElementById('rock').src,
        'paper':document.getElementById('paper').src,
        'scissors':document.getElementById('scissors').src
    }
    document.getElementById('rock').remove();
    document.getElementById('paper').remove();
    document.getElementById('scissors').remove();

    var humanDiv = document.createElement('div');
    var botDiv = document.createElement('div');
    var messageDiv = document.createElement('div');
    
    humanDiv.innerHTML = '<img src="' +imageDatabased[humanImageChoice]+'" height="150" width="150" style="box-shadow:0px 10px 50px rgba(0,204,0,1);">'
    messageDiv.innerHTML = '<h1 style="color:'+ finalMessage['color']+';font-size:60px; padding:30px;">'+finalMessage['message']+'</h1>'
    botDiv.innerHTML = '<img src="' +imageDatabased[botImageChoice]+'" height="150" width="150" style="box-shadow:0px 10px 50px rgba(243,38,24,1);">'
    document.getElementById('flex-box-rps-div').appendChild(humanDiv);
    document.getElementById('flex-box-rps-div').appendChild(messageDiv);
    document.getElementById('flex-box-rps-div').appendChild(botDiv);
}