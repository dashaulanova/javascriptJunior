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
console.log('Стоимость заказа' + canculateCost(rate, projectHours));
console.log('Смогу ли взять заказ?' +  isPosible(daysUntilDeadline, projectHours, workingHoursPerDay));