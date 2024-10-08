
export function links() {
    // !!!!!!!!!links!!!!!!!
    const toggleButton = document.getElementById('toggleButton');
    const links = document.querySelectorAll('.link');
      let isExpanded = false;

    const getMaxVisibleLinks = () => {
               if (window.innerWidth > 320 && window.innerWidth < 768) return 2;  // Максимум 1 ссылка
               if (window.innerWidth >= 768 && window.innerWidth < 1120) return 6;  // Максимум 2 ссылки
               if (window.innerWidth >= 1120 && window.innerWidth < 2000) return 8; // Максимум 3 ссылки
               return links.length; // Все ссылки
    };

    const updateLinkVisibility = () => {
    const maxVisible = getMaxVisibleLinks();

               links.forEach((link, index) => {
                   if (isExpanded || index < maxVisible) {
                       link.classList.remove('hidden');
                   } else {
                       link.classList.add('hidden');
                   }
               });
           };

           toggleButton.addEventListener('click', () => {
               isExpanded = !isExpanded;
               // Обновляем текст кнопки в зависимости от состояния
        if (isExpanded) {
            toggleButton.textContent = 'Скрыть';
            toggleButton.style.backgroundImage =' url("./img/hide.png")';
        } else {
            toggleButton.textContent = 'Показать все';
            toggleButton.style.backgroundImage = 'url("./img/icon.png")';
        }
               updateLinkVisibility();
           });

           // Начальная установка
           updateLinkVisibility();

           // Обновляем видимость ссылок при изменении размера окна

           window.addEventListener('resize',updateLinkVisibility);


    console.log('links');
}

