import { pgTable, timestamp, varchar } from 'drizzle-orm/pg-core'
import { nanoid } from './utils.ts'

export const usersTable = pgTable('users', {
    id: nanoid().primaryKey(),
    createdAt: timestamp({ mode: 'date' }).defaultNow(),
    name: varchar({ length: 255 }).notNull(),
    email: varchar({ length: 255 }).notNull().unique(),
})
