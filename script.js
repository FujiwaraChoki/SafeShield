const checkHasUploaded = (id) => {
  // Get the file input element by id
  const fileInput = document.getElementById(id);
  // Get the file input element's value
  const fileInputValue = fileInput.value;
  // Check if the file input element has a value
  if (fileInputValue) {
    // If the file input element has a value, return true
    return true;
  } else {
    // If the file input element does not have a value, return false
    return false;
  }
};

const getRandomFaces = () => {
  faces = [];
  // Generate a random number between 1 and 10000
  const randomNumber = Math.floor(Math.random() * 10000) + 1;
  // Change the image src to a new random face
  faces.push(`https://thispersondoesnotexist.com/image?rand=${randomNumber}`);
};

document.addEventListener("DOMContentLoaded", () => {
  let isShowingQrCode = false;
  const showQrCodeButton = document.querySelector("#showQrCodeButton");
  showQrCodeButton.addEventListener("click", (e) => {
    const qrCode = document.querySelector("#qrCode");
    if(isShowingQrCode) {
      showQrCodeButton.innerHTML = "Show";
      qrCode.classList.add("hidden");
      isShowingQrCode = false;
    } else {
      showQrCodeButton.innerHTML = "Hide";
      qrCode.classList.remove("hidden");
      isShowingQrCode = true;
    }
    
  });
  const sendMailButton = document.querySelector("#send-mail-button");
  sendMailButton.addEventListener("click", (e) => {
    e.preventDefault();
    // Get the name input element
    const name = document.querySelector("#name").value;
    const email = document.querySelector("#email").value;
    const message = document.querySelector("#message").value;

    const mailToLink = `mailto:sami@samihindi.com?subject=Message from ${name}&body=Site: Safeshield %0D%0AName: ${name}%0D%0AE-Mail: ${email}%0D%0A%0D%0AMessage:%0D%0A${message}`;
    window.location.href = mailToLink;
  });
});
