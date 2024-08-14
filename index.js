// import { loadHome } from './home';
// import { loadMenu } from './menu';
// import { loadAbout } from './about';

// document.addEventListener('DOMContentLoaded', () => {
//     loadHome();
    
//     document.getElementById('homeBtn').addEventListener('click', () => {
//         loadHome();
//     });
    
//     document.getElementById('menuBtn').addEventListener('click', () => {
//         loadMenu();
//     });
    
//     document.getElementById('aboutBtn').addEventListener('click', () => {
//         loadAbout();
//     });
// });



import { loadHome } from './home';
import { loadMenu } from './menu';
import { loadAbout } from './about';

console.log('index.js is running');

document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM fully loaded and parsed');
    loadHome();
    
    document.getElementById('homeBtn').addEventListener('click', () => {
        loadHome();
    });
    
    document.getElementById('menuBtn').addEventListener('click', () => {
        loadMenu();
    });
    
    document.getElementById('aboutBtn').addEventListener('click', () => {
        loadAbout();
    });
});
