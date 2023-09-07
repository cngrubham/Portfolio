const hobbyList = ["hobby-one", "hobby-two", "hobby-three"];

//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/includes
function toggleInfo(id) {
  const hobbyInfo = document.getElementById(id);
  hobbyList.forEach((h) => {
    const hElement = document.getElementById(h);
    if (hElement.id !== id) {
      hElement.classList.remove("expanded");
    }
  });
  if (hobbyInfo.className.includes("expanded")) {
    hobbyInfo.classList.remove("expanded");
  } else {
    hobbyInfo.classList.add("expanded");
  }
}
function clickHandlerHobby1() {
  toggleInfo("hobby-one");
}
function clickHandlerHobby2() {
  toggleInfo("hobby-two");
}
function clickHandlerHobby3() {
  toggleInfo("hobby-three");
}
