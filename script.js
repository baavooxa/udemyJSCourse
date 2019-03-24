let money = prompt ("Ваш бюджет на месяц?", ''),
    time = prompt ("Введите дату в формате YYYY-MM-DD", '');
let appData = {
    budget: money,
    timeData : time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false
};

let itemOfExpenses1 = prompt ("Введите обязательную статью расходов в этом месяце", ''),
    itemCost1 = prompt ("Во сколько обойдется?", ''),
    itemOfExpenses2 = prompt ("Введите обязательную статью расходов в этом месяце", ''),
    itemCost2 = prompt ("Во сколько обойдется?", '');

appData.expenses.itemOfExpenses1 = itemCost1; 
appData.expenses.itemOfExpenses2 = itemCost2; 

alert (appData.budget / 30); 