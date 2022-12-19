export class ItemDto {
    name: string;
    amount: number;
    isChecked: boolean;

    constructor(name: string, amount: number, isChecked: boolean) {
        this.name = name;
        this.amount = amount;
        this.isChecked = isChecked;
    }
}