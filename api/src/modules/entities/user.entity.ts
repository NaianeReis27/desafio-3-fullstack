import {
    Column,
    CreateDateColumn,
    Entity,
    PrimaryGeneratedColumn,
    OneToMany,
} from 'typeorm';
import { NetWork } from './network.entity';

@Entity('users')
class User {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({ length: 60 })
    name: string;

    @Column({ length: 60, unique: true })
    email: string;

    @Column({ length: 120 })
    password: string;

    @Column({ length: 120 })
    tel: string;

    @CreateDateColumn()
    createdAt: Date;

    @OneToMany(() => NetWork, NetWork => NetWork.user, { cascade: true })
    studyTopics: NetWork[];
}

export { User };
