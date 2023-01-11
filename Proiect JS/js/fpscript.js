// Page title

const title = 'Cars';

const header = document.querySelector('header > h1');

header.innerText = `${title}`;

// Nav Bar Links

const menu = ['Electric Cars', 'Clasic Cars', 'About Us'];

links = ['/','/','/'];

const electricCars = document.querySelector("body > nav > ul > li:nth-child(1) > a");

electricCars.setAttribute('href', links[0]);

electricCars.innerText = menu[0];

const classicCars = document.querySelector("body > nav > ul > li:nth-child(2) > a");

classicCars.setAttribute('href', links[1]);

classicCars.innerText = menu[1];

const aboutUs = document.querySelector("body > nav > ul > li:nth-child(3) > a");

aboutUs.setAttribute('href', links[2]);

aboutUs.innerText = menu[2];

// Main Content

const articleTitle = ['Beauty of cars'];

const docArtTitle = document.querySelector('body > main > h2');

docArtTitle.innerText = articleTitle;

const articleContent = ['Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut auctor elementum aliquet. Ut aliquet accumsan ex ac pharetra. Quisque erat magna, volutpat nec consequat nec, sodales sit amet elit. Nullam interdum nisl sed egestas dapibus. Ut non mauris sit amet nisi egestas ultrices non sit amet nisi. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vivamus posuere ut nunc vel viverra. Nulla ac aliquet nisl. Pellentesque sollicitudin porttitor neque, sed aliquet magna. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nunc quis ligula ac ipsum vulputate maximus in ac odio. Nullam at fermentum elit, in dignissim neque. Vivamus quis tempus mauris.'];

const docArtCont = document.querySelector('body > main > p');

docArtCont.innerText = articleContent;

// Footer

const docFoot = document.querySelector('body > footer > h3');

docFoot.innerText = 'Copyright© '+new Date().getFullYear();