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
    const balance = deposit - cost;
    if (balance >= 0) {
        return `Вася сможет купить дом, остаток после покупки - ${parseInt(balance)}$`;
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