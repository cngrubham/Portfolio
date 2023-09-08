let currentImgIndex = 0;
let previousImgIndex = 0;
const images = document.getElementsByClassName("project-image-link");

//grab the buttons and save to variable
const next = document.querySelectorAll(".next");
const prev = document.querySelectorAll(".prev");

const handleNext = () => {
  //console.log("You have clicked the next button");
  // The image being displayed currently will now become the previous image
  previousImgIndex = currentImgIndex;
  // The next image in the carousel will now become the current image
  currentImgIndex++;
  // Loop back to the beginning when on the last image
  if (currentImgIndex >= images.length) {
    currentImgIndex = 0;
  }

  changeDisplay();
};
const handlePrev = () => {
  //console.log("You have clicked the previous button");

  // The image being displayed previously will now become the current image
  previousImgIndex = currentImgIndex;
  // The previous image in the carousel will now become the current image
  currentImgIndex--;
  // Loop back to the beginning when on the last image
  if (currentImgIndex < 0) {
    currentImgIndex = images.length - 1;
  }
  changeDisplay();
};
//set event for button "next"
next[0].addEventListener("click", handleNext);
next[1].addEventListener("click", handleNext);
//set event for button "previous"
prev[0].addEventListener("click", handlePrev);
prev[1].addEventListener("click", handlePrev);

function changeDisplay() {
  images[previousImgIndex].style.display = "none";
  images[currentImgIndex].style.display = "block";
}
