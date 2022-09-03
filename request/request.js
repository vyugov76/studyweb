console.log("скрипт успешно подключен")

// получили узел  кнопки
const btn = document.querySelector(".buttontest")
console.log(btn)

let counter = 0
// обьявляем коллбэк
function clickCallback(){
    console.log("кнопка")
    const tasksContainer = document.querySelector(".tasks")

    // по нажатию кнопки значение переменной увеличивается на единицу
    tasksContainer.insertAdjacentHTML('beforeend', `<div>задание ${counter+=1}</div>`)
}

// вешаем событие клик на кнопку
btn.addEventListener("click", clickCallback)

