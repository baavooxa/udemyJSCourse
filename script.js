let money = prompt ("Ваш бюджет на месяц?", "");
let time = prompt ("Введите дату в формате YYYY-MM-DD", "YYYY-MM-DD");
let appData = {
    money,
    time,
    expenses: 0,
    optionalExpenses:,
    income: 0,
    savings: false
};

let itemOfExpenses = prompt ("Введите обязательную статью расходов в этом месяце", "");
let itemCost = prompt ("Во сколько обойдется?", "");
const expenses = {
    itemOfExpenses : itemCost
};

let dayBudget = (money - itemCost) / 30;
alert (dayBudget); 