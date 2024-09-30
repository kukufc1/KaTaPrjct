
export function modal() {
    
   // !!!!!!!!!modal0!!!!!!!

const modal = document.getElementById("modal");
const callButton = document.getElementById("call");
const callButton1 = document.getElementById("call1");
const callButtons = [callButton,callButton1];
const closeButton = document.querySelector(".close-button");
const form = document.getElementById("callForm");

// Открытие модального окна
callButtons.forEach(button => {
  button.addEventListener("click", () => {
      modal.style.display = "block";
  });
});

// Закрытие модального окна при клике на кнопку закрытия
closeButton.addEventListener("click", () => {
    modal.style.display = "none";
});

// Закрытие модального окна при клике вне него
window.addEventListener("click", (event) => {
    if (event.target === modal) {
        modal.style.display = "none";
    }
});

// Закрытие по нажатию клавиши Escape
window.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
        modal.style.display = "none";
    }
});

// Отправка формы
form.addEventListener("submit", (event) => {
    event.preventDefault(); // предотвращаем стандартное поведение формы
    const phone = document.getElementById("phone").value;
    alert("Заявка  звонок отправлена");
    modal.style.display = "none"; // Закрытие модального окна после отправки
});


    console.log('modal');
}

