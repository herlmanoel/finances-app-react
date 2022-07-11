import { Transaction, TransactionStatus } from './Transaction';

export class MyTransactions {
    public transactions: Transaction[];

    constructor() {
        this.transactions = [];
        this.inicialize();
    }

    inicialize() {
        this.transactions = [
            new Transaction(1, "Salgado", TransactionStatus.INPUT, 2, 56),
            new Transaction(2, "Salgado", TransactionStatus.OUTPUT, 2, 56),
            new Transaction(3, "Salgado", TransactionStatus.OUTPUT, 2, 56),
            new Transaction(4, "Salgado", TransactionStatus.OUTPUT, 2, 56),
            new Transaction(5, "Salgado", TransactionStatus.OUTPUT, 2, 56),
            new Transaction(6, "Salgado", TransactionStatus.OUTPUT, 2, 56),
        ];
    }

    addTransaction(transaction: Transaction) {
        this.transactions.push(transaction);
    }

    removeTransaction(id: number) {
        this.transactions.filter(transaction => transaction.id !== id);
        return this;
    }


}