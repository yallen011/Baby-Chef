export class Ingredient {
    name: string;
    amount: number;
    measurement: string;

    constructor(name?: string, amount?: number, measurement?: string) {
        this.name = name;
        this.amount = amount;
        this.measurement = measurement;
    }
}
