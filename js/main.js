var galleryItemImg = Array.from(document.querySelectorAll(".gallery-item-img")),
    lightBoxContainer = document.getElementById("light-box"),
    lightBoxContent = document.getElementById("light-box-content"),
    nextBtn = document.getElementById("next"),
    prevBtn = document.getElementById("prev"),
    closeBtn = document.getElementById("closeBtn"),
    currentIndex = 0;

// //Display Slide Function:
for(var i = 0; i < galleryItemImg.length; i++) {

        galleryItemImg[i].addEventListener("click", function(eventInfo) {

            var imgSrc = eventInfo.target.getAttribute("src");

            lightBoxContent.style.backgroundImage = `url(${imgSrc})`;

            lightBoxContainer.style.display = "flex";

            currentIndex = galleryItemImg.indexOf(eventInfo.target);
        }
    );
};

// //Close Slide Function:
function CloseSlide() {

    lightBoxContainer.style.display = "none";
};

closeBtn.addEventListener("click", CloseSlide);

// //Next Slide Function:
function nextSlide() {

    currentIndex++;

    if(currentIndex == galleryItemImg.length)
    {
        currentIndex = 0;
    }

    var imgSrc = galleryItemImg[currentIndex].getAttribute("src");

    lightBoxContent.style.backgroundImage = `url(${imgSrc})`;
};

nextBtn.addEventListener("click", nextSlide);

// //Prev Slide Function:
function prevSlide() {

    currentIndex--;

    if(currentIndex < 0)
    {
        currentIndex = galleryItemImg.length -1;
    }

    var imgSrc = galleryItemImg[currentIndex].getAttribute("src");

    lightBoxContent.style.backgroundImage = `url(${imgSrc})`;
};

prevBtn.addEventListener("click", prevSlide);


// //Keyboard Functions:
document.addEventListener("keydown" , function(eventInfo) {

    if(eventInfo.key == 'Escape')
    {
        CloseSlide();
    }
    else if(eventInfo.key == 'ArrowRight')
    {
        nextSlide();
    }
    else if(eventInfo.key == 'ArrowLeft')
    {
        prevSlide();
    }
});


// lightBoxContainer.addEventListener("click", CloseSlide);