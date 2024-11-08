//Задача - расчета стоимости заказа и определение 
//возможности его выполнить при ограниченном кол-ве времени


//Решение(функции)
function canculateCost(rateUSD, projectHours) {
    return rateUSD * projectHours + '$'
}

function isPosible(daysUntilDeadline, projectHours, workingHoursPerDay) {
    const nowDate = new Date();
    const deadlineDate = new Date();
    deadlineDate.setDate(deadlineDate.getDate() + daysUntilDeadline);

    while(projectHours) {
        if (nowDate.getDay !== 0 && nowDate.getDay !== 6) {
            projectHours -= workingHoursPerDay;
            nowDate.setDate(nowDate.getDate() + 1);
        }
    }
    if (deadlineDate.valueOf() > nowDate.valueOf()) {
        return true;
    } else {
        return false;
    }
}

//Данные 
const rate = 80;
const workingHoursPerDay = 5;
const daysUntilDeadline = 11;
const projectHours = 40;

//Вывод
console.log('Стоимость заказа ' + canculateCost(rate, projectHours));
console.log('Смогу ли взять заказ? ' +  isPosible(daysUntilDeadline, projectHours, workingHoursPerDay));


//Задача 
/*Вася положил 12 000$ на вклад 7% годовых 
с капитализацией 1 раз в месяц.
Вывести в консоль, сможет ли он купить дом за 13 500$ через 2 года
после снятия вклада. И остаток после покупки. 

Итог = сумма * (1 + ставка в месяц) ^ срок в месяцах.*/


//решение
function calculateDeposit(contributionUSD, annualRate, months) {
    const deposit = contributionUSD * (1 + annualRate/100/12) ** months;
    return deposit;
}

function isAvailableToBuy(cost, contributionUSD, annualRate, months ) {
    const deposit = calculateDeposit(contributionUSD, annualRate, months);
    const balanceAfter = deposit - cost;
    if (balanceAfter >= 0) {
        return `Вася сможет купить дом, остаток после покупки - ${parseInt(balanceAfter)}$`;
    } else {
        return `Вася не сможет купить дом`
    }
}
//вывод
console.log(isAvailableToBuy(13500, 12000, 7, 24));


//Упражнение - проверка робота
//Методом prompt получите ответ пользователя на вопрос "Сколько будет 7 + или -15?".
//Если ответ верен - выдедите в консоле "Успех", если нет - " Вы робот!", а если он
//введет "Я не робот", то тоже "Успех". 

function isHuman() {
    const answer = prompt('Сколько будет 7 + или -15?');
    switch (answer.trim().toLowerCase().split(' ').join('')) {
        case '22': 
        case '-8':
        case 'я не робот':
            console.log('Успех');
            return true;
        default:
            console.log('Вы робот!');
            return false;
    }
}

isHuman();

//Упражнение Проверка прав
//Пользователь хочет приобрести игру в магазине.
//Он сможет это сделать только если:
/*
    - его баланс больше 1000 (balance) 
    или число бонусов больше 100 (bonusBalance);
    - он не забанен;
    - игра не куплена(isExist);
    - игра в продаже;
    Напишите условие для покупки и выведите результат в консоль. 
*/


function checkRights(balance, bonusBalance, isBanned, isExist, isSelling) {
    if ((balance > 1000 || bonusBalance > 100)
        && !isBanned
        && !isExist
        && isSelling) {
            return true
        } else {
           return false
        }
}

//Данные

const balance = 800;
const bonusBalance = 110;
const isBanned = false;
const isExist = false;
const isSelling = true;

console.log(checkRights(balance, bonusBalance, isBanned, isExist, isSelling));

//Задача - Кредит на макбук
/*
Пользователь:
- возраст
- наличие работы
- деньги
 Нужно проверить может ли он купить новый макбук за 2000$.
 Он может брать не только свои деньги, но и взять кредит.
 ему дадут 500$, только если ему больше 24-х лет и он имеет работу,
 100$ если ему просто больше 24-х лет и 0 в ином случае.
 Напишите функцию, которая принимает данные пользователя и товара и 
 возвращает true или false.
 */

//решение
function canBuy(age, cash,  hasAJob = false, cost = 2000) {
    const credit = (age > 24) ? hasAJob ? 500 : 100 : 0;
    if (cash + credit >= cost) {
        return true;
    } else {
        return false;
    }
}

//данные
const age = 25;
const hasAJob = true;
const cash = 1500;
const cost = 2000;

//вывод
console.log(canBuy(age, cash, hasAJob));

//Упражнение - Обновление списка задач(упражнение на работу с массивами)
/*
    Дан список задач
    const tasks = ['Задача1'];
    Сделать функции:
        - добавление задачи в конец;
        - удаление задачи по названию;
        - перенос задачи в начало списка по названию.
    Всегда меняем исходный массив. 
*/

 function addTask(newTask, tasks) {
    return tasks.push(newTask);
 }

 function deleteTaskbyName(task, tasks) {
    if (tasks.indexOf(task) === -1) {
        return;
    }
    return tasks.splice(tasks.indexOf(task), 1);
 }

 function makeUrgent(urgentTask, tasks) {
    if (!deleteTaskbyName(urgentTask, tasks)) {
        return;
    }
    return tasks.unshift(urgentTask);
 }

 //данные
 const tasks = ['Задача1'];

 //вывод
 addTask('Задача2', tasks);
 console.log(tasks);
 deleteTaskbyName('Задача4', tasks);
 console.log(tasks);
 addTask('Задача3', tasks);
 addTask('Задача4', tasks);
 console.log(tasks);
 makeUrgent('Задача4', tasks);
 console.log(tasks);
 makeUrgent('Задача5', tasks);
 console.log(tasks);




