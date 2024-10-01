
export function links1() {
       // !!!!!!!!!links2!!!!!!!

       
const toggleButton2 = document.getElementById('toggleButton2');
const links2 = document.querySelectorAll('.link__service');
  let isExpanded2 = false;

const getMaxVisibleLinks2 = () => {
           if (window.innerWidth > 320 && window.innerWidth < 768) return 2;  // Максимум 2 ссылка
           if (window.innerWidth >= 768 && window.innerWidth < 1120) return 3;  // Максимум 3 ссылки
           if (window.innerWidth >= 1120 && window.innerWidth < 2000) return 4; // Максимум 4 ссылки
           return links2.length; // Все ссылки
};

const updateLinkVisibilitytwo = () => {
const maxVisible2 = getMaxVisibleLinks2();

           links2.forEach((link2, index2) => {
               if (isExpanded2 || index2 < maxVisible2) {
                   link2.classList.remove('hidden');
               } else {
                   link2.classList.add('hidden');
               }
           });
       };

       toggleButton2.addEventListener('click', () => {
           isExpanded2 = !isExpanded2;
           // Обновляем текст кнопки в зависимости от состояния
    if (isExpanded2) {
        toggleButton2.textContent = 'Скрыть';
        toggleButton2.style.backgroundImage =' url("./img/hide.png")';
    } else {
        toggleButton2.textContent = 'Показать все';
        toggleButton2.style.backgroundImage = 'url("./img/icon.png")';
    }
           updateLinkVisibilitytwo();
       });

       // Начальная установка
       updateLinkVisibilitytwo();

       // Обновляем видимость ссылок при изменении размера окна
       window.addEventListener('resize', updateLinkVisibilitytwo);

  

    console.log('links1');
}

