import { Entity, Column, PrimaryColumn, OneToMany, JoinColumn, PrimaryGeneratedColumn } from 'typeorm';
import { Item } from '../Item/item.entity';

@Entity()
export class ShoppingList {
    constructor(name: string)
    {
        this.name = name;
    }

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    name: string;

    @OneToMany(() => Item, (item) => item.shoppingList)
    items: Item[];
}