import { ShoppingList } from 'src/ShoppingList/ShoppingList.entity';
import { Entity, Column, PrimaryColumn, ManyToOne, JoinColumn, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Item{
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    name: string;

    @Column({ default: 1 })
    amount: number;

    @Column({ default: false })
    isInBasket: boolean;

    @ManyToOne(() => ShoppingList, (ShoppingList) => ShoppingList.items)
    @JoinColumn({ name: 'id_shoppinglist' })
    shoppingList: ShoppingList;
}