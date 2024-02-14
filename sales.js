const button1 = document.getElementById("button1");
const button2 = document.getElementById("button2");
const button3 = document.getElementById("button3");

const content1 = document.getElementById("content1");
const content2 = document.getElementById("content2");
const content3 = document.getElementById("content3");


button1.addEventListener("click", () => {
  content1.style.display = "block";
  content2.style.display = "none";
  content3.style.display = "none";
});

button2.addEventListener("click", () => {
  content1.style.display = "none";
  content2.style.display = "block";
  content3.style.display = "none";
});

button3.addEventListener("click", () => {
  content1.style.display = "none";
  content2.style.display = "none";
  content3.style.display = "block";
});