// start task 1

// 1 - отримай body елемент і виведи його в консоль;
// console.log(document.body);

// // 2 - отримай елемент id="title" і виведи його в консоль;
// const title = document.querySelector("#title");
// console.log(title);

// // 3 - отримай елемент class="list" і виведи його в консоль;
// const list = document.querySelector(".list");
// console.log(list);

// // 4 - отримай всі елементи з атрибутом data-topic і виведи їх в консоль;
// const allTopics = document.querySelectorAll("[data-topic]");
// console.log(allTopics);

// // 5 - отримай перший елемент з списку всіх елементів з атрибутом data-topic і виведи його в консоль;
// const firstTopic = document.querySelector("[data-topic]");
// console.log(firstTopic);

// // 6 - отримай останній елемент з списку всіх елементів з атрибутом data-topic і виведи його в консоль;
// const secondTopic = allTopics[allTopics.length - 1];
// console.log(secondTopic);

// // 7 - який елемент є сусідом для h1? Знайти і виведи його в консоль;
// const titleSibling = title.nextElementSibling;
// console.log(titleSibling);
// // 8 - по тегу h3 знайти всі заголовки та виведи їх у консоль;
// const h3Title = document.querySelectorAll("h3");
// console.log(h3Title);

// // 9 - для кожного елмента h3 додай class="active", який змінить колір заголовка на червоний колір
// h3Title.forEach(el => el.classList.add("active"));

// // 10 - знайти елемент li який має атрибут data-topic з значенням "navigation" і виведи його в консоль;
// const navigationItem = document.querySelector("[data-topic='navigation']");
// console.log(navigationItem);

// // 11 - додай для знайденого елемента data-topic="navigation" атрибут style і зроби його backgroundColor жовтим
// navigationItem.style.backgroundColor = "yellow";

// // 12 - у елемента data-topic="navigation" знайди елемент р і зміни його текст на "Я змінив тут текст!".
// const navigation = navigationItem.querySelector("p");
// navigation.textContent = "Я змінив тут текст!";

// // 13 - створи const currentTopic = "manipulation"; після цього знайди елемент у якогоо атрибут data-topic має значення, яке зберігається у змінній currentTopic і виведи його в консоль;
// const currentTopic = "manipulation";
// const currentTopicElement = document.querySelector(`li[data-topic='${currentTopic}']`);
// console.log(currentTopicElement);

// // 14 - додай до знайденого елемента атрибут style і зроби його backgroundColor блакитним;
// currentTopicElement.style.backgroundColor = "lightblue";

// // 15 - знайти в документі заголовок, який має class="completed" і виведи його в консоль;
// const completedHeading = document.querySelector("h3.completed");
// console.log(completedHeading);

// // 16 - видали елемент li в якому знаходиться заголовок, який має class="completed";
// completedHeading.closest("li").remove();

// // 17 - після заголовка h1 (перед списком) додай новий елемент p і задай йому наступний текст: "Об'єктна модель документа (Document Object Model)";
// const newParagraph = document.createElement("p");
// newParagraph.textContent = "Об'єктна модель документа (Document Object Model)";
// const titleElement = document.getElementById("title");
// titleElement.insertAdjacentElement("afterend", newParagraph);

// // 18 - додай новий елемент списку у кінець списка, його заголовок це - "Властивість innerHTML" а опис (р) - "Ще один спосіб створити DOM-елементи і помістити їх в дерево - це використовувати рядки з тегами і дозволити браузеру зробити всю важку роботу". тобто, потрібно створити елемент LI потім наповнити H3 та P і готову LI закинути у кінець списку
// const newListItem = document.createElement("li");
// const newListItemTitle = document.createElement("h3");
// newListItemTitle.textContent = "Властивість innerHTML";
// const newListItemDescription = document.createElement("p");
// newListItemDescription.textContent = "Ще один спосіб створити DOM-елементи і помістити їх в дерево - це використовувати рядки з тегами і дозволити браузеру зробити всю важку роботу.";
// newListItem.appendChild(newListItemTitle);
// newListItem.appendChild(newListItemDescription);
// document.querySelector(".list").appendChild(newListItem);

// // 19 - зроби це саме, але використовуй шаблонні рядки та метод insertAdjacentHTML()
// document.querySelector(".list").insertAdjacentHTML("beforeend", `
//     <li>
//         <h3>Властивість innerHTML</h3>
//         <p>Ще один спосіб створити DOM-елементи і помістити їх в дерево - це використовувати рядки з тегами і дозволити браузеру зробити всю важку роботу.</p>
//     </li>
// `);

// // 20 - очисти список
// document.querySelector(".list").innerHTML = "";

// finish task 1

// start task 2

// Створіть контейнер div (з класом number-container) в HTML-документі
// та динамічно створіть 100 блоків (з класом number) наповнивши їх рандомними
// числами від 1 до 100 і додайте їх до контейнера div(numberContainer).
// Парні числа повинні мати зелений фон (додати клас even),
// Непарні числа - жовтий фон (додати клас odd).

// const randomNumber = () => Math.floor(Math.random() * 100) + 1;
// const numberContainer = document.querySelector(".number-container");
// const elements = [];

// for (let i = 0; i < 100; i++) {
//     const numberBlock = document.createElement("div");
//     const number = randomNumber();
//     numberBlock.classList.add("number");
//     numberBlock.textContent = number;

//     if (number % 2 === 0) {
//         numberBlock.classList.add("even");
//     } else {
//         numberBlock.classList.add("odd");
//     }
//     elements.push(numberBlock);
// }

// numberContainer.append(...elements);
// finish task 2

// start task 3

// Form Events, Input, Focus, Blur and Submit.

// Використовуй шаблон форми з файлу html.

// 1 - При події `input`, якщо користувач ввів в поле більше
// 6 символів то додати клас `success`. Якщо ж символів менше аніж 6,
// то клас `error`

// 2 - При події `focus` зроби перевірку на пустоту поля інпута,
// якщо ж поле пусте, то зроби `outline` => `'3px solid red'`,
// якщо при фокусі поле непусте, то `outline` => `'3px solid green'`

// 3 - При події `blur` зроби перевірку на пустоту поля інпута,
// якщо ж поле пусте, то зроби `outline` => `'3px solid red'`,
// якщо при фокусі поле непусте, то `outline` => `'3px solid lime'`

// 4 - При події `submit`. Відміни поведінку браузера по змовчуванню.
// Дістань данні з інпуту і чек боксу, зроби перевірку,
// що інпут не порожній, також, що нажатий чек бокс у положення true,
// якщо користувач все виконав вірно, збери данні (userName)
// у обьект і виведи у консоль. У разі, якщо користувач не виконав
// одну із умов, виведи повідомлення. Також при події інпут реалізуй додавання
// ім`я користувача у span, замість слова "Anonymous".
// Якщо користувач ввів ім`я, а потім видалив, зроби так,
// щоб на місце повернулось дефолтне знаяення "Anonymous".
// При відправці форми, очисти інпут, верни чек бокс у положення
// false, верни дефолтне значення "Anonymous" у span.

// const form = document.querySelector('.js-contact-form');
// const input = document.querySelector('.js-username-input');
// const checkbox = document.querySelector('.js-policy-checkbox');
// const span = document.querySelector('.js-username-output');


// input.addEventListener('input', () => {
//   const value = input.value.trim();
//   const minLength = parseInt(input.dataset.length, 10);

//   if (value.length >= minLength) {
//     input.classList.add('success');
//     input.classList.remove('error');
//   } else {
//     input.classList.add('error');
//     input.classList.remove('success');
//   }


//   span.textContent = value || 'Anonymous';
// });

// input.addEventListener('focus', () => {
//   if (input.value.trim() === '') {
//     input.style.outline = '3px solid red';
//   } else {
//     input.style.outline = '3px solid green';
//   }
// });

// input.addEventListener('blur', () => {
//   if (input.value.trim() === '') {
//     input.style.outline = '3px solid red';
//   } else {
//     input.style.outline = '3px solid lime';
//   }
// });

// form.addEventListener('submit', (event) => {
//   event.preventDefault();

//   const userName = input.value.trim();
//   const isAgreed = checkbox.checked;

//   if (userName === '' || !isAgreed) {
//     alert('Будь ласка, введіть ім’я та погодьтесь із політикою!');
//     return;
//   }

//   const user = { userName };
//   console.log('User data:', user);

//   input.value = '';
//   checkbox.checked = false;
//   span.textContent = 'Anonymous';
//   input.classList.remove('success', 'error');
//   input.style.outline = 'none';
// });



// start task 4

 // Використовуй шаблон розмітки з файлу html та напиши наступний функціонал:
 // При кліку на кнопку "Зменшити" квадрат стає меньшим на 20 пікселів, 
 // При кліку на кнопку "Збільшити" - квадрат стає більшим на 20 пікселів.

const decreaseBtn = document.getElementById('decrease');
const increaseBtn = document.getElementById('increase');
const box = document.querySelector('.box');

let boxSize = 50;

decreaseBtn.addEventListener('click', () => {
    boxSize -= 20;
    box.style.width = `${boxSize}px`;
    box.style.height = `${boxSize}px`;
});

increaseBtn.addEventListener('click', () => {
    boxSize += 20;
    box.style.width = `${boxSize}px`;
    box.style.height = `${boxSize}px`;
});
// finish task 4