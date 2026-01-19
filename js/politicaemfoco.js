const hamburger = document.getElementById('hamburger');
const nav = document.getElementById('nav');


hamburger.addEventListener('click', () => {
nav.style.display = nav.style.display === 'flex' ? 'none' : 'flex';
nav.style.flexDirection = 'column';
nav.style.background = '#0a5c3d';
nav.style.position = 'absolute';
nav.style.top = '100%';
nav.style.right = '0';
nav.style.width = '100%';
nav.style.padding = '20px';
});