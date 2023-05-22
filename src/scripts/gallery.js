export default function galleryScript() {
  let htmlElement = document.querySelector("html");
  var totalRows = getComputedStyle(htmlElement).getPropertyValue(
      "--number-of-gallery-columns"
    ),
    itemCol = 0;
  for (var rowCount = 0; rowCount < totalRows; rowCount++) {
    let newCol = document.createElement("div");
    newCol.className = "column";
    document.getElementsByClassName("masonry-layout")[0].appendChild(newCol);
  }

  for (
    var itemCount = 0;
    itemCount < document.querySelectorAll(".masonry-layout .image").length;
    itemCount++
  ) {
    document
      .getElementsByClassName("column")
      [itemCol].appendChild(
        document.querySelectorAll(".masonry-layout .image")[0]
      );
    if (itemCol < totalRows - 1) {
      itemCol++;
    } else {
      itemCol = 0;
    }
  }
  /* #endregion */

  /* #region  image pop up events */
  let allImages = document.querySelectorAll(".masonry-layout .image");
  let imagePopUpContainerElement = document.querySelector(".image-pop-up");
  let imgElement = imagePopUpContainerElement.querySelector("img");
  let highlightImagePopUp = function (event) {
    imgElement.src = event.target.src;
    imagePopUpContainerElement.classList.remove("hidden");
    imagePopUpContainerElement.classList.add("active");
    imgElement.classList.add("animate");
    setTimeout(() => {
      imgElement.classList.remove("animate");
    }, 300);
  };
  let hideImagePopUp = function () {
    imagePopUpContainerElement.classList.remove("active");
    setTimeout(() => imagePopUpContainerElement.classList.add("hidden"), 300);
  };
  allImages.forEach((image) =>
    image.addEventListener("click", highlightImagePopUp)
  );
  imagePopUpContainerElement.addEventListener("click", hideImagePopUp);
  setTimeout(() => {
    let websiteName = document.querySelector("#website-name").className;
    if (websiteName === "gallery")
      document.querySelector("#gallery").classList.remove("loading-images");
  }, 5000);
}
