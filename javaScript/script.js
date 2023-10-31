function  randomColor(){
 const rancolor = Math.floor(Math.random()*16777215)
 const  colorCode = "#"+rancolor.toString(16)
 document.body.style.backgroundColor = (colorCode)
 document.getElementById("colorCode").innerText = colorCode;

 navigator.clipboard.writeText(colorCode)
}
randomColor()