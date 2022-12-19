export class Item {
    id: string;
    name: string;
    amount: number;
    isChecked: boolean;

    constructor(id: string, name: string, amount: number, isChecked: boolean) {
        this.id = id;
        this.name = name;
        this.amount = amount;
        this.isChecked = isChecked;
    }
}