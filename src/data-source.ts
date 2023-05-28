import "reflect-metadata"
import { DataSource } from "typeorm"
import { Tasks } from "./entity/Tasks"

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "drona.db.elephantsql.com",
    port: 5432,
    username: "kwvifkhy",
    password: "Xj3HeFMx4mcxpmABcjPzVZK1KfrQuQUC",
    database: "kwvifkhy",
    synchronize: true,
    logging: false,
    entities: [
        "src/entity/**/*.ts"
    ],
    migrations: [
        "src/migrations/**/*.ts"
    ],
    subscribers: [
        "src/subscribers/**/*.ts"
    ],
})
