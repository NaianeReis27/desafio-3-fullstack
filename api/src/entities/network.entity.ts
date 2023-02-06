import {
    Column,
    CreateDateColumn,
    Entity,
    ManyToOne,
    PrimaryGeneratedColumn,
} from 'typeorm';
import { User } from './user.entity';

@Entity('networks')
class NetWork {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({ length: 60 })
    name: string;

    @Column({ length: 120 })
    tel: string;

    @CreateDateColumn()
    createdAt: Date;

    @ManyToOne(() => User, { onDelete: 'CASCADE' })
    user: User;
}

export { NetWork };
