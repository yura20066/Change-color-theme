let changeThemeButtons = document.querySelectorAll('.changeTheme');

changeThemeButtons.forEach(button => {
    button.addEventListener('click', function () {
        let theme = this.dataset.theme;
        applyTheme(theme);
    });
});



const applyTheme = (themeName) =>{
    document.querySelector('[title="theme"]').setAttribute('href', `css/theme-${themeName}.css`);
    changeThemeButtons.forEach(button => {
        button.style.display = 'block';
    });
    document.querySelector(`[data-theme="${themeName}"]`).style.display = 'none';
    localStorage.setItem('theme', themeName);
}

let activeTheme = localStorage.getItem('theme');

if(activeTheme === null || activeTheme === 'white') {
    applyTheme('white');
} else if (activeTheme === 'black') {
    applyTheme('black');
}