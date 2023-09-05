const contactModal = document.getElementById("contact-modal");

//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/includes
function toggleModal() {
  if (contactModal.className.includes("show")) {
    contactModal.classList.remove("show");
  } else {
    contactModal.classList.add("show");
  }
}

