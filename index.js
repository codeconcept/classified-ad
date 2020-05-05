const createAdForm = document.forms.createad;
const fileUpload = createAdForm.adpicture;

fileUpload.addEventListener("change", getImage);
let fileImage = null;

createAdForm.addEventListener("submit", createAd);

function createAd(e) {
  e.preventDefault();
  const title = createAdForm.adtitle.value.trim();
  const category = createAdForm.adcategory.value;
  const picture = fileImage;
  console.log(title, category, picture);
}

function getImage(params) {
  console.log("images", this.files[0]);
  fileImage = this.files[0];
}
