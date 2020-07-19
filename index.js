var x= Math.floor(Math.random() *6)+1;
var z= Math.floor(Math.random() *6)+1;
var sr1="images/dice"+x+".png";
var sr2="images/dice"+z+".png";
var im= document.querySelectorAll("img");
im[0].setAttribute("src",sr1);
im[1].setAttribute("src",sr2);
if(x>z){
  document.querySelector("h1").innerHTML="Player1 Won!🚩";
}
else if(z>x){
  document.querySelector("h1").innerHTML="Player2 Won!🚩";
}
else{
  document.querySelector("h1").innerHTML="Draw!";
}
