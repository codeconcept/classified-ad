const createAdForm = document.forms.createad;

createAdForm.addEventListener("submit", createAd);

function createAd(e) {
  e.preventDefault();
  const title = createAdForm.adtitle.value.trim();
  const category = createAdForm.adcategory.value;
  console.log(title, category);
}
