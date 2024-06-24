import { Component } from '@angular/core';

@Component({
  selector: 'app-expense',
  templateUrl: './expense.component.html',
  styleUrl: './expense.component.css'
})
export class ExpenseComponent {

  transactionTitle: string = "";
  transactionTitle2: string = "";
  amount: number = 0;
  amount2: number = 0;
  balence: number = 0;
  income: number = 0;
  expense: number = 0;
  isIncome: boolean = true;
  allTransactions: Transaction[] = [];

  createTransaction() {
    let transaction: Transaction =
    {
      title: this.transactionTitle,
      amount: this.amount,
      isIncome: true
    };

    this.allTransactions.push(transaction);
    this.income += this.amount;
    this.balence = this.income - this.expense;
    this.transactionTitle = "";
    this.amount = 0;

  }

  createTransaction2() {
    let transaction2: Transaction =
    {
      title: this.transactionTitle2,
      amount: this.amount2,
      isIncome: false
    };
    this.allTransactions.push(transaction2);
    this.expense += this.amount2;
    this.balence = this.income - this.expense;
    this.transactionTitle2 = "";
    this.amount2 = 0;
  }

  deleteTransaction(index: number) {
    if (this.allTransactions[index].isIncome) {
      this.income -= this.allTransactions[index].amount;
    }
    else {
      this.expense -= this.allTransactions[index].amount;
    }
    this.balence = this.income - this.expense;
    this.allTransactions.splice(index, 1);
  }

  clearAllTransactions() {
    this.allTransactions.splice(0, this.allTransactions.length);
    this.balence = 0;
    this.income = 0;
    this.expense = 0;
  }
}

interface Transaction {
  title: string,
  amount: number,
  isIncome: boolean
}


/*

import { Component } from '@angular/core';

@Component({
  selector: 'app-expense',
  templateUrl: './expense.component.html',
  styleUrl: './expense.component.css'
})
export class ExpenseComponent {

  transactionTitle: string = "";
  transactionTitle2: string = "";
  amount: number = 0;
  amount2: number = 0;
  balence: number = 0;
  income: number = 0;
  expense: number = 0;
  isIncome: boolean = true;
  allTransactions: Transaction[] = [];
  
  constructor(){
    this.allTransactions = this.loadTransactions();
  }

  createTransaction() {
    let transaction: Transaction =
    {
      title: this.transactionTitle,
      amount: this.amount,
      isIncome: true
    };

    this.allTransactions.push(transaction);
    this.income += this.amount;
    this.balence = this.income - this.expense;
    this.saveTransactions();
    this.transactionTitle = "";
    this.amount = 0;

  }
  saveTransactions() {
    localStorage.setItem('transactions', JSON.stringify(this.allTransactions));
  }

  loadTransactions(): Transaction[] {
    const transactions = localStorage.getItem('transactions');
    return transactions ? JSON.parse(transactions) : [];
  }

  createTransaction2() {
    let transaction2: Transaction =
    {
      title: this.transactionTitle2,
      amount: this.amount2,
      isIncome: false
    };
    this.allTransactions.push(transaction2);
    this.expense += this.amount2;
    this.balence = this.income - this.expense;
    this.saveTransactions();
    this.transactionTitle2 = "";
    this.amount2 = 0;
  }

  deleteTransaction(index: number) {
    if (this.allTransactions[index].isIncome) {
      this.income -= this.allTransactions[index].amount;
    }
    else {
      this.expense -= this.allTransactions[index].amount;
    }
    localStorage.removeItem('transactions');
    this.balence = this.income - this.expense;
    this.allTransactions.splice(index, 1);
  }

  clearAllTransactions() {
    this.allTransactions.splice(0, this.allTransactions.length);
    this.balence = 0;
    this.income = 0;
    this.expense = 0;
  }
}

interface Transaction {
  title: string,
  amount: number,
  isIncome: boolean
}

*/