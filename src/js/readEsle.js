
export function readEsle() {
    // !!!!!!!!!!читать далее!!!!!!!!!!!!!


const textContainer = document.getElementById('textContainer');
const next_read_btn = document.getElementById('next_read_btn');
const prgrf = document.getElementById('prgrf');
const prgrf1 = document.getElementById('prgrf1');
const strlchk = document.getElementById('strlchk');
const strlchk1 = document.getElementById('strlchk1');

    next_read_btn.addEventListener('click', () => {
    textContainer.classList.toggle('expanded');


    // Изменяем видимость параграфов в зависимости от состояния контейнера
    if (textContainer.classList.contains('expanded')) {
        // Контейнер развернут - показываем "Скрыть" и скрываем "Читать далее"
        prgrf.style.display = 'none';
        strlchk.style.display = 'none';
        prgrf1.style.display = 'block';
        strlchk1.style.display = 'inline-block';
    } else {

        prgrf.style.display = 'block';
        strlchk.style.display = 'inline-block';
        strlchk1.style.display = 'none';
        prgrf1.style.display = 'none';
    }
    });

    console.log('readEsle');
}

