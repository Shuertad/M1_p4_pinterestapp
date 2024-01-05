import './style.css'
import { renderHeader } from './src/Header/Header'
import { renderFooter } from './src/Footer/Footer'
import { renderImages, refreshButton, query } from './src/ImageImports/ImageImports'

const init = async () => {
  renderHeader();
  await renderImages();
  renderFooter();

  console.log('Before event listener registration');

  console.log(document.body.querySelector(".button-refresh-home"));
  console.log(document.body.querySelector(".search-bar"));

  document.body.querySelector(".button-refresh-home").addEventListener('click',refreshButton);
  document.body.querySelector(".search-bar").addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        event.preventDefault(); // Prevent the default behavior of the Enter key (e.g., form submission)
        query(document.getElementById("query-input").value);
    }
  });

  console.log('After event listener registration');
}

init();