import { MigrationInterface, QueryRunner } from "typeorm";

export class table1675649501307 implements MigrationInterface {
    name = 'table1675649501307'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "users" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying(60) NOT NULL, "email" character varying(60) NOT NULL, "password" character varying(120) NOT NULL, "tel" character varying(120) NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "UQ_97672ac88f789774dd47f7c8be3" UNIQUE ("email"), CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "networks" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying(60) NOT NULL, "tel" character varying(120) NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "userId" uuid, CONSTRAINT "PK_61b1ee921bf79550d9d4742b9f7" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "networks" ADD CONSTRAINT "FK_6814885cf9591b93da6b568349c" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "networks" DROP CONSTRAINT "FK_6814885cf9591b93da6b568349c"`);
        await queryRunner.query(`DROP TABLE "networks"`);
        await queryRunner.query(`DROP TABLE "users"`);
    }

}
