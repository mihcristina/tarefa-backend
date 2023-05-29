import { IsNull, Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';
@Entity('tasks', {orderBy: {
    finished: "ASC",
    title: "ASC"
}})
export class Tasks{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;

    @Column({
        default: false
    })
    finished: boolean;

}