let budgetValue = 0;
let totalExpensesValue = 0;
let balanceColor = "green";

let expenseEntries = [
  ["groceries", 33],
  ["restaurants", 50],
  ["transport", 12],
  ["home", 70],
  ["subscriptions", 14],
  ["groceries", 28],
  ["subscriptions", 12],
];

for (const expense of expenseEntries) {
  totalExpensesValue += expense[1]; //updating the total expenses
}

//calculates the overal average expense,
function calculateAverageExpense() {
  if (expenseEntries.length === 0) {
    return 0;
  } else {
    return totalExpensesValue / expenseEntries.length;
  }
}
//calculates balance
function calculateBalance() {
  return budgetValue - totalExpensesValue;
}
//defines color based on how much balance is left
function updateBalanceColor() {
  const balanceValue = calculateBalance(); //returns a number
  if (balanceValue < 0) {
    balanceColor = "red";
  } else if (balanceValue < budgetValue * 0.25) {
    balanceColor = "orange";
  } else {
    balanceColor = "green";
  }
}
//calculate expenses of a given category
function calculateCategoryExpenses(category) {
  let categoryExpenses = 0;
  for (let i = 0; i < expenseEntries.length; i++) {
    //validates category
    if (expenseEntries[i][0] === category) {
      categoryExpenses += expenseEntries[i][1];
    }
  }
  return categoryExpenses;
}

// gets unique categories
function getCategories() {
  return [...new Set(expenseEntries)];
}

const categories = getCategories(); //Saves the uniquecategories
function calculateLargestCategory() {
  let biggestCategory = "";
  let biggerCategoryAmount = 0;
  for (const category of categories) {
    let categoryExpense = calculateCategoryExpenses(category);
    if (categoryExpense > biggerCategoryAmount) {
      biggerCategoryAmount = categoryExpense;
      biggestCategory = category;
    }
  }
  return biggestCategory;
}

function addExpenseEntry(values) {
  totalExpensesValue += values[1];
  expenseEntries.push(values);
}
