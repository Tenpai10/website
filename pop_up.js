var btn = document.querySelector(".btn");

btn.addEventListener("click", function () {
   document.querySelector(".dark_bg").style.display = "flex"; 
});

document.querySelector(".close").addEventListener("click", function(){
   document.querySelector(".dark_bg").style.display = "none"; 
});