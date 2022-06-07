const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const galleryEl = document.querySelector('#gallery');
galleryEl.classList.add("gallery_style");
galleryEl.style.display = "flex";


// const allImages = images.map(picture => {
//   const imgElLi = document.createElement('li')
//    const imgEl = document.createElement('img');
//   imgEl.src = picture.url;
//   imgEl.alt = picture.alt;
//   imgEl.width = 300;
//   imgEl.style.marginLeft = "20px";
//   imgElLi.appendChild(imgEl);
// console.log(imgElLi);
  
//   return imgElLi;
//   })

//   galleryEl.append(...allImages)



