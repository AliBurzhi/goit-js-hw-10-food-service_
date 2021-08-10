import "./styles/styles.scss";

import menu from "./data/menu.json";

import template from "./templates/main.hbs";

window.onload = () => {
    const refs = {
        menuList: document.querySelector('.js-menu'),
        switch: document.querySelector('.theme-switch__toggle'),
        body: document.body
    };

    const Theme = {
        LIGHT: 'light-theme',
        DARK: 'dark-theme',
    };
    const murkup = template(menu);

    refs.menuList.insertAdjacentHTML('beforeend', murkup);

    refs.switch.addEventListener('change', onChangeTheme);
    
    refs.body.classList.add(localStorage.getItem('theme') === null ? Theme.LIGHT: localStorage.getItem('theme'));

    refs.switch.checked = localStorage.getItem('theme') === Theme.DARK;

    const changeTheme = (add, rem) => {
        localStorage.setItem('theme', add);
        refs.body.classList.replace(rem, add);
    };

    function onChangeTheme(event) {
    if (event.target.checked) { //refs.body.classList.remove(Theme.LIGHT); //refs.body.classList.add(Theme.DARK); //localStorage.setItem('theme', Theme.DARK);
        changeTheme(Theme.DARK, Theme.LIGHT);
        return;
    } //refs.body.classList.remove(Theme.DARK); //refs.body.classList.add(Theme.LIGHT); //localStorage.setItem('theme', Theme.LIGHT);
    changeTheme(Theme.LIGHT, Theme.DARK);
    }
    
};