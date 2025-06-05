import { db } from "@/server/db";

export default async function globalTeardown() {
    await db.project.deleteMany();
}
