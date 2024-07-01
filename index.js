const MedalyBtn = document.querySelector("#MedalyBtn");

MedalyBtn.addEventListener("click",function () {
    alert("Obvio que la Medaly esta mejor")
});

const AlciraBtn = document.querySelector("#AlciraBtn");

AlciraBtn.addEventListener("mouseover",function () {
    const randomX = parseInt(Math.random()*100); 
    const randomY = parseInt(Math.random()*100)
    AlciraBtn.style.setProperty("top",randomY+"%");
    AlciraBtn.style.setProperty("left",randomX+"%");
    AlciraBtn,style.setProperty("transfore",`transalte(-${randomX}%,-${randomY}%)`);
})