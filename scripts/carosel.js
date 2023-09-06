let currentImgIndex = 0;
let previousImgIndex = 0;
const images = document.getElementsByClassName("images");

//grab the buttons and save to variable
const next = document.querySelector(".next");
const prev = document.querySelector(".prev");

//set event for button "next"
next.addEventListener("click", () => {
  //console.log("You have clicked the next button");
  // The image being displayed currently will now become the previous image
  previousImgIndex = currentImgIndex;
  // The next image in the carousel will now become the current image
  currentImgIndex++;
  // Loop back to the beginning when on the last image
  if (currentImgIndex >= images.length) {
    currentImgIndex = 0;
  }
  //dry code to clean it up
  changeDisplay();
  //   images[previousImgIndex].style.display = "none";
  //   images[currentImgIndex].style.display = "block";
});

//set event for button "previous"
prev.addEventListener("click", () => {
  //console.log("You have clicked the previous button");

  // The image being displayed previously will now become the current image
  previousImgIndex = currentImgIndex;
  // The previous image in the carousel will now become the current image
  currentImgIndex--;
  // Loop back to the beginning when on the last image
  if (currentImgIndex < 0) {
    currentImgIndex = images.length - 1;
  }
  //dry code - clean it up
  changeDisplay();
  //   images[previousImgIndex].style.display = "none";
  //   images[currentImgIndex].style.display = "block";
});

// dry code - clean it up
function changeDisplay() {
  images[previousImgIndex].style.display = "none";
  images[currentImgIndex].style.display = "block";
}
