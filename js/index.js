const input = document.getElementById("inp");
const qrcodeContainer = document.getElementById("qrcode-container");
const qrimg = document.getElementById("qrimg");
const btn = document.getElementById("btn");

const generateQRCode = (data) => {
  return `https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=${encodeURIComponent(
    data
  )}`;
};

const showPlaceholderQRCode = () => {
  qrimg.setAttribute("src", generateQRCode("https://qr-generate-piyush.vercel.app/"));
  qrcodeContainer.style.display = "flex";
};

btn.addEventListener("click", () => {
  if (input.value) {
    qrimg.setAttribute("src", generateQRCode(input.value));

    qrcodeContainer.style.display = "flex";
  } else {
    showPlaceholderQRCode();
  }
});

showPlaceholderQRCode();
