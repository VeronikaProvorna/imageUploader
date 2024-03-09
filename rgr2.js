const banner = document.getElementById("banner");
const closeBtn = document.getElementById("closeBtn");

closeBtn.addEventListener("dblclick", closeBanner);

//змінимо час показу банера - зміна в branch 1
setTimeout(showBanner, 4000);

function closeBanner(){
    banner.style.display = "none";
    //змінимо час показу банера - зміна в branch 1
    setTimeout(showBanner, 4000);
}

function showBanner(){
    banner.style.display = "block";
}