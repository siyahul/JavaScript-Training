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
    image.setAttribute('length','250');
    image.setAttribute('width','150');
    document.getElementById('cat-result').appendChild(image);
}