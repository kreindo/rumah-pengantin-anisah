
const scriptURL = "https://script.google.com/macros/s/AKfycbxK6Mp--U46L2COOibwOnVyDauw38Z47sSu6iE76PtFCOGS__w9Zh8z3eSWeDDwd0JRPg/exec";
const form = document.forms["kontak-form"];
const btnKirim = document.querySelector('.btn-kirim')
const btnLoading = document.querySelector('.btn-loading')
const myAlert = document.querySelector('.btn-alert')

form.addEventListener("submit", (e) => {
e.preventDefault();
// Menghilakan Tombol Kirim
btnLoading.classList.toggle('d-none');
btnKirim.classList.toggle('d-none');
fetch(scriptURL, { method: "POST", body: new FormData(form) })
.then((response) => {
  console.log("Success!", response)
  myAlert.classList.toggle('d-none')
  btnLoading.classList.toggle('d-none')
  btnKirim.classList.toggle('d-none')
  form.reset();
})
.catch((error) => console.error("Error!", error.message));
});