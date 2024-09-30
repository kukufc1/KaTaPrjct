
export function modal1() {
    // !!!!!!!!!modal1!!!!!!!
const modal1 = document.getElementById("feedbackModal");
const openFeedback = document.getElementById("chat");
const openFeedback1 = document.getElementById("chat1");
const openFeedbacks = [openFeedback,openFeedback1];
const closeFeedback = document.querySelector(".feedback-close");
const feedbackForm = document.getElementById("feedbackForm");

// Открытие модального окна
openFeedbacks.forEach(button => {
  button.addEventListener("click", () => {
      modal1.style.display = "block";
  });
});

// Закрытие модального окна при клике на кнопку закрытия
closeFeedback.addEventListener("click", () => {
    modal1.style.display = "none";
});

// Закрытие модального окна при клике вне него
window.addEventListener("click", (event) => {
    if (event.target === modal1) {
        modal1.style.display = "none";
    }
});

// Закрытие по нажатию клавиши Escape
window.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
        modal1.style.display = "none";
    }
});

// Отправка формы
feedbackForm.addEventListener("submit", (event) => {
  event.preventDefault();
      // Вывод данных формы в консоль (или отправьте на сервер)
      const formData = new FormData(event.target);
    alert("Заявка  звонок отправлена");
    modal1.style.display = "none"; // Закрытие модального окна после отправки
});

    console.log('modal1');
}

