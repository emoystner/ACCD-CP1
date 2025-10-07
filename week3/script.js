// let gT1 = document.getElementById("galleryThumb1")
// let gT2 = document.getElementById("galleryThumb2")
// let gT3 = document.getElementById("galleryThumb3")
// let gT4 = document.getElementById("galleryThumb4")

let thumbImages = document.querySelectorAll(".gallery-thumb > img")

let scIamge = document.getElementById("showcaseImage")
let arrRight = document.querySelector(".showcase-arrow-right")
let arrLeft = document.querySelector(".showcase-arrow-left")

let currentIndexThumb = 0

function changeImage(_image){
    let thumbSrc = _image.src
    scIamge.src = thumbSrc

    thumbImages.forEach(function(elem){
        elem.parentElement.classList.remove("current-thumb")   
    })
    

    _image.parentElement.classList.add("current-thumb")

    currentIndexThumb = Array.from(thumbImages).indexOf(_image)
}

for(let i = 0; i < thumbImages.length; i++){
    thumbImages[i].addEventListener("click", function(event){
        changeImage(event.target)
    })
}

arrRight.addEventListener("click", function(){
    currentIndexThumb++
    if(currentIndexThumb >= thumbImages.length){
        currentIndexThumb = 0
    }
    changeImage(thumbImages[currentIndexThumb])
})

arrLeft.addEventListener("click", function(){
    currentIndexThumb--
    if(currentIndexThumb < 0){
        currentIndexThumb = thumbImages.length - 1
    }
    changeImage(thumbImages[currentIndexThumb])
})


// gT1.addEventListener("click", changeImage)
// gT2.addEventListener("click", changeImage)
// gT3.addEventListener("click", changeImage)
// gT4.addEventListener("click", changeImage)

// --- Auto-rotate every 5s + pause/resume ---
const AUTO_INTERVAL_MS = 5000;
let autoTimer = null;

function startAuto() {
  stopAuto(); 
  autoTimer = setInterval(() => {
    currentIndexThumb = (currentIndexThumb + 1) % thumbImages.length;
    changeImage(thumbImages[currentIndexThumb]);
  }, AUTO_INTERVAL_MS);
}

function stopAuto() {
  if (autoTimer) {
    clearInterval(autoTimer);
    autoTimer = null;
  }
}


if (arrRight) arrRight.addEventListener('click', startAuto);
if (arrLeft)  arrLeft.addEventListener('click', startAuto);
thumbImages.forEach(img => img.addEventListener('click', startAuto));


const showcaseFrame = document.querySelector('.imgShowcase');
if (showcaseFrame) {
  showcaseFrame.addEventListener('mouseenter', stopAuto);
  showcaseFrame.addEventListener('mouseleave', startAuto);
}


document.addEventListener('visibilitychange', () => {
  if (document.hidden) stopAuto(); else startAuto();
});


startAuto();