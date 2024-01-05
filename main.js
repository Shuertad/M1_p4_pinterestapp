import './style.css'
import { renderHeader } from './src/components/Header/Header'
import { renderFooter } from './src/components/Footer/Footer'
import { renderImages, refreshButton, query } from './src/components/ImageImports/ImageImports'

renderHeader();
renderImages();
renderFooter();
document.body.querySelector(".button-refresh-home").addEventListener('click',refreshButton);
document.body.querySelector(".search-bar").addEventListener('keydown', function(event) {
  if (event.key === 'Enter') {
      event.preventDefault(); // Prevent the default behavior of the Enter key (e.g., form submission)
      query(document.getElementById("query-input").value);
  }
});