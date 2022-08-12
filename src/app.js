import _images from "url:./trees/*.png";
const images = Object.values(_images);
// console.log(images[0]);

const canvas = document.createElement("canvas");
canvas.width = window.innerWidth;
canvas.style.width = canvas.width;
canvas.height = window.innerHeight;
canvas.style.height = canvas.height;
document.body.append(canvas);
const ctx = canvas.getContext("2d");
const treeCount = Math.random() * 10 + 5;
showRandomTree(treeCount, treeCount);

async function showRandomTree(count, n) {
  const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
  gradient.addColorStop(0, Math.random() > 0.5 ? "#FFFFFF1c" : "#FFFFFF00");
  gradient.addColorStop(1, Math.random() > 0.5 ? "#CCCCCC36" : "#CCCCCC01");
  // gradient.addColorStop(1, "#5522221a");
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  const x = Math.random() * (canvas.width + 300) - 250;
  const imgUrl = images[Math.floor(Math.random() * images.length)];

  const img = new Image();
  img.src = imgUrl;
  img.width = (img.naturalWidth * n) / count;
  img.height = (img.naturalHeight * n) / count;
  img.onload = () => {
    // img.hidden = "hidden";
    // img.style.display = "none";
    // document.body.append(img);
    ctx.drawImage(img, x, 40);
    if (n > 1) showRandomTree(count, --n);
  };
}
