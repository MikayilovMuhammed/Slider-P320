let images = document.querySelectorAll(".gallery a");
let popup = document.querySelector(".popup");
let biggestImg = document.querySelector(".popup .inner img");
let closeIcon = document.querySelector(".close-icon");
let prevBtn = document.querySelector(".arrows .prev");
let nextBtn = document.querySelector(".arrows .next");

images.forEach((image) => {
  image.addEventListener("click", function (e) {
    e.preventDefault();
    doOpen();
    changableImage(this);
    this.classList.add("showSlide");

    console.log(this);
    // console.log(biggestImg);
  });
});
nextBtn.addEventListener("click", function () {
  let showSlide = document.querySelector(".showSlide");
  nextElemSib(showSlide);
});

prevBtn.addEventListener("click", function () {
  let showSlide = document.querySelector(".showSlide");
  prevElemSib(showSlide);
});

function doOpen() {
  popup.style.display = "flex";
}

function doClose() {
  popup.style.display = "none";
}

closeIcon.addEventListener("click", function () {
  doClose();
});

document.addEventListener("keydown", (e) => {
  if (e.code === "Escape" && popup.style.display === "flex") {
    console.log("work");
    doClose();
  }
});

function changableImage(item) {
  let imgSrc = item.getAttribute("href");
  biggestImg.setAttribute("src", imgSrc);
}

function nextElemSib(item) {
  //   let showSlide = document.querySelector("");

  if (item.nextElementSibling !== null) {
    item.nextElementSibling.classList.add("showSlide");
    changableImage(item.nextElementSibling);
  } else {
    item.parentElement.children[0].classList.add("showSlide");
    changableImage(item.parentElement.children[0]);
  }

  item.classList.remove("showSlide");
}

function prevElemSib(item) {
  //   let showSlide = document.querySelector("");
  let length = item.parentElement.children.length;

  console.log(length);
  if (item.previousElementSibling !== null) {
    item.previousElementSibling.classList.add("showSlide");
    changableImage(item.previousElementSibling);
  } else {
    item.parentElement.children[length - 1].classList.add("showSlide");
    changableImage(item.parentElement.children[length - 1]);
  }
  item.classList.remove("showSlide");
}

popup.addEventListener("click", (e) => {
  if (e.target.classList.contains("popup")) {
    doClose();
  }
});
