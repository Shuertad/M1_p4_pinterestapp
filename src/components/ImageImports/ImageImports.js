import { Card } from '/src/components/Card/Card'

const apiUrlRoot = 'https://api.unsplash.com' //'https://api.unsplash.com/photos/';
const key = import.meta.env.VITE_KEY;
const clientID = 'client_id=' + key;
const imagesPerPage = 'per_page=30';
let pageCount = 1;
const apiUrl = apiUrlRoot + '/photos' + '?' + clientID + '&' + imagesPerPage


let i = 0;
//const userUnsplash = 'https://unsplash.com/es/@' + image.user.username

const loadImage = async (url) => {
  try {
      const response = await fetch(url);
      const result = await response.json();
      return result;
  } catch (error) {
      console.error(error);
  }
}

export const renderImages = async () => {
  const response = await loadImage(apiUrl);
  console.log(response)
  const galleryContainer = `<div class="grid-container gallery"></div>`;
  const appContainer = document.getElementById('app');
  appContainer.innerHTML += galleryContainer;
  for (const image of response) {
    const cardImage = Card(image.urls.regular,i,image.links.html);
    document.body.querySelector(".grid-container.gallery").innerHTML += cardImage;
    i++;
  }
}

export const refreshButton = async () => {
    pageCount++
    const pageRefresh = `&page=${pageCount}`
    const responseRefresh = await loadImage(apiUrl + pageRefresh);
    document.body.querySelector(".grid-container.gallery").innerHTML = '';
    let i = 0;
    for (const image of responseRefresh) {

        const cardImage = Card(image.urls.regular,i,image.links.html);
        document.body.querySelector(".grid-container.gallery").innerHTML += cardImage;
        i++;
      }
    console.log('Refresh triggered')
}

export const query = async (query) => {
    console.log('search:' + query)
    let apiUrlSearch = apiUrlRoot + `/search/photos?query=${query}` + '&' + clientID + '&' + imagesPerPage; 
    const responseRefresh = await loadImage(apiUrlSearch);
    console.log(responseRefresh)
    document.body.querySelector(".grid-container.gallery").innerHTML = '';
    let i = 0;
    for (const image of responseRefresh.results) {

        const cardImage = Card(image.urls.regular,i,image.links.html);
        document.body.querySelector(".grid-container.gallery").innerHTML += cardImage;
        i++;
      }
  }