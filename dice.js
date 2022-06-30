var x=Math.floor(Math.random()*6)+1;
var y=Math.floor(Math.random()*6)+1;
if(x===1) {document.querySelector(".img1").setAttribute("src","dice1.png");}
else if(x===2){ document.querySelector(".img1").setAttribute("src","dice2.png");}
else if(x===3){document.querySelector(".img1").setAttribute("src","dice3.png");}
else if(x===4){ document.querySelector(".img1").setAttribute("src","dice4.png");}
else if(x===5){ document.querySelector(".img1").setAttribute("src","dice5.png");}
else{ document.querySelector(".img1").setAttribute("src","dice6.png");}

if(y===1) {document.querySelector(".img2").setAttribute("src","dice1.png");}
else if(y===2){ document.querySelector(".img2").setAttribute("src","dice2.png");}
else if(y===3){ document.querySelector(".img2").setAttribute("src","dice3.png");}
else if(y===4){ document.querySelector(".img2").setAttribute("src","dice4.png");}
else if(y===5){ document.querySelector(".img2").setAttribute("src","dice5.png");}
else{ document.querySelector(".img2").setAttribute("src","dice6.png");}//

document.querySelector(".img-text1").innerHTML="PLAYER 1";
document.querySelector(".img-text2").innerHTML="PLAYER 2";
if(x>y){
  document.querySelector(".result").innerHTML="PLAYER 1 WON!!!";
}
else if (x<y) {
  document.querySelector(".result").innerHTML="PLAYER 2 WON!!!";
}
else document.querySelector(".result").innerHTML="ITS A TIE!!!";}
