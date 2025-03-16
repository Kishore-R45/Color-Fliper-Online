let button=document.getElementById("btn");
let con=document.getElementById("container");
let code=document.getElementById("code");
const hexCode=[0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];


button.addEventListener("click",function(){
    let h = "#";
    for (let i = 0; i < 6; i++) {
      h += hexCode[Math.floor(Math.random() * 16)];
    }
    con.style.backgroundColor=h;
    code.innerHTML=h;
});