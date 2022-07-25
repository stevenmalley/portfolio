function setGallery(img,url) {
  galleryImg.src = img.src;
  if (url) galleryURLMessage.innerHTML = "<a href='"+url+"'>click here to visit</a>";
  else galleryURLMessage.innerHTML = "";
  gallery.style.display = "block";
}


function closeGallery() {
  gallery.style.display = "none";
}