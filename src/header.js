const navigationBar = () => {
    const nav = document.createElement('div');
    nav.classList.add('navBar');
    const btn1 = document.createElement('button');
    btn1.classList.add('btn1');
    btn1.textContent = 'Home';
    btn1.style.fontWeight = 'bold';
    btn1.style.fontSize = '20px';
    btn1.style.fontFamily = 'sans-serif, Arial';
    const btn2 = document.createElement('button');
    btn2.classList.add('btn2');
    btn2.textContent = 'Menu';
    btn2.style.fontWeight = 'bold';
    btn2.style.fontSize = '20px';
    btn2.style.fontFamily = 'sans-serif, Arial';
    const btn3 = document.createElement('button');
    btn3.classList.add('btn3');
    btn3.textContent = 'Contact';
    btn3.style.fontWeight = 'bold';
    btn3.style.fontSize = '20px';
    btn3.style.fontFamily = 'sans-serif, Arial';
    nav.appendChild(btn1);
    nav.appendChild(btn2);
    nav.appendChild(btn3);
    return nav;
}
export default navigationBar;