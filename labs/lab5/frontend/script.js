async function searchImages() {
  const searchQ = document.getElementById('search').value;
  const response = await fetch(`http://localhost:3000/api/images?query=${searchQ}`);
  const data = await response.json();
  
  const imgs = document.getElementById('image-gallery');
  imgs.innerHTML = ''; 

  data.images.forEach(imgUrl => {
      const imgElement = document.createElement('img');
      imgElement.src = imgUrl;
      imgElement.alt = 'Meme image';
      imgElement.onclick = () => loadmeme(imgUrl);
      imgs.appendChild(imgElement);
  });
}

function loadmeme(imgUrl) {
  const canvas = document.getElementById('meme-canvas');
  const ctx = canvas.getContext('2d');
  
  const img = new Image();
  img.src = imgUrl;
  img.onload = () => {
      canvas.width = img.width;
      canvas.height = img.height;
      ctx.drawImage(img, 0, 0);
  };
  
  document.getElementById('meme-editor').style.display = 'block';
}

function generateMeme() {
  const topText = document.getElementById('top-text').value;
  const bottomText = document.getElementById('bottom-text').value;
  const canvas = document.getElementById('meme-canvas');
  const ctx = canvas.getContext('2d');

  ctx.font = '30px Arial';
  ctx.fillStyle = 'white';
  ctx.textAlign = 'center';
  ctx.fillText(topText, canvas.width / 2, 50);
  ctx.fillText(bottomText, canvas.width / 2, canvas.height - 50);
}
