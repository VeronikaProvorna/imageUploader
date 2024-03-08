const banner = document.getElementById("banner");
const closeBtn = document.getElementById("closeBtn");

closeBtn.addEventListener("dblclick", closeBanner);

setTimeout(showBanner, 10000);

function closeBanner(){
    banner.style.display = "none";
    setTimeout(showBanner, 10000);
}

function showBanner(){
    banner.style.display = "block";
}