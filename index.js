const createAdForm = document.forms.createad;
const fileUpload = createAdForm.adpicture;

fileUpload.addEventListener("change", getImage);
let fileImage = null;

createAdForm.addEventListener("submit", createAd);

const url = "http://localhost:1337";

function createAd(e) {
  e.preventDefault();
  const title = createAdForm.adtitle.value.trim();
  const category = createAdForm.adcategory.value;
  const picture = fileImage;
  const adDetails = createAdForm.addetails.value;

  const payload = {
    title,
    content: adDetails,
    category,
    user: "Bob",
  };

  fetch(`${url}/classifiedads`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(payload),
  })
    .then((res) => res.json())
    .then((createdAd) => {
      console.log("ad content data", createdAd);

      const formData = new FormData();
      formData.append("files", picture);
      formData.append("ref", "classifiedad"); // singular
      formData.append("refId", createdAd.id);
      formData.append("field", "picture");

      fetch(`${url}/upload`, {
        method: "POST",
        body: formData,
      }).then((res) => {
        console.log("res image upload", res);
      });
    });
}

function getImage(params) {
  console.log("getImage / images", this.files[0]);
  fileImage = this.files[0];
}
