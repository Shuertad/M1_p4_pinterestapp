import './Header.css';
import { Button } from '/src/components/Button/Button'
import { SearchBar } from '/src/components/SearchBar/SearchBar'
import { Logo } from '/src/components/Logo/Logo'

const tagTemplateHeader = `
    ${Logo()}
    ${Button()}
    ${SearchBar()}
`;

const appContainer = document.getElementById('app');
const headerContainer = `<header class="header-container"></header>`

export const renderHeader = () => {
    appContainer.innerHTML += headerContainer;
    document.body.querySelector(".header-container").innerHTML = tagTemplateHeader;
};