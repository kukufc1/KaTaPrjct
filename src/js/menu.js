
export function menu() {
    document.getElementById('burger').addEventListener('click', function() {
        const menu = document.getElementById('menu');
        const overlay = document.getElementById('overlay');
        const burger = document.getElementById('burger');
    
        menu.classList.toggle('active');
        burger.classList.toggle('active');
    
        // Меняем background-image в зависимости от состояния меню
        if (menu.classList.contains('active')) {
            // Когда меню открыто
            burger.style.backgroundImage = 'url(./img/burgerX.png)'; // Укажите путь к новому изображению
        } else {
            // Когда меню закрыто
            burger.style.backgroundImage = 'url(./img/burger.png)'; // Укажите путь к изначальному изображению
        }
    
        overlay.style.display = menu.classList.contains('active') ? 'block' : 'none';
    });
    
    // Закрываем меню при клике на оверлей
    document.getElementById('overlay').addEventListener('click', function() {
        const menu = document.getElementById('menu');
        menu.classList.remove('active');
        this.style.display = 'none';
    
        // Также меняем изображение назад, когда меню закрывается
        const burger = document.getElementById('burger');
        burger.style.backgroundImage = 'url(/src/img/burger.png)'; // Укажите путь к изначальному изображению
    });

    console.log('menu');
}

