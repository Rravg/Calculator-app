let icon = document.getElementById('theme-selector');

const themeFunction = () => {
    let state = icon.value;
    if (state === '1') {
        document.body.className = 'theme-1';
    }   else if (state === '2') {
        document.body.className = 'theme-2';
    }   else {
        document.body.className = 'theme-3';
    }
}

icon.addEventListener('change', themeFunction);