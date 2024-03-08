const banner = document.getElementById("banner");
const closeBtn = document.getElementById("closeBtn");

closeBtn.addEventListener("dblclick", closeBanner);

setTimeout(showBanner, 5000);
//змінимо час показу банера - зміна в branch 1
setTimeout(showBanner, 5000);

function closeBanner(){
    banner.style.display = "none";

    setTimeout(showBanner, 5000);
    //змінимо час показу банера - зміна в branch 1
    setTimeout(showBanner, 5000);
}

function showBanner(){
    //в якості змін для другої гілки я придумала тільки
    //додати коментар - branch2
    banner.style.display = "block";
}