const $ = document.querySelector.bind(document);

let btnControl = $("#btn-control");

let contentDisplay = $("#content_display");

function toggleContentDisplay() {
  const classDisplay = contentDisplay.className;

  if (classDisplay.includes("show")) {
    contentDisplay.classList.remove("show");
  } else {
    contentDisplay.classList.add("show");
  }
}

btnControl.addEventListener("click", toggleContentDisplay);
