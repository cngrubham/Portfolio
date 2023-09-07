const hobbyInfo = document.getElementById("hobby-info");

//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/includes
function toggleInfo() {
  if (hobbyInfo.className.includes("show")) {
    hobbyInfo.classList.remove("show");
  } else {
    hobbyInfo.classList.add("show");
  }
}