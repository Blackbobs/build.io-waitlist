'use server'
import getDb from "@/db";
export default async function addToWaitlist(firstname: string, email: string, role: string) {
    try {
        // Get 'db' from the asynchronous function
        const db = await getDb();

        if (!db) {
            throw new Error('MongoDB database is not initialized');
        }

        // const firstname = formData.get('firstname');
        // const email = formData.get('email');
        // const role = formData.get('role');

        console.log(firstname, email, role);

        // Example: Insert data into MongoDB collection
        const result = await db?.collection('user').insertOne({
            firstname,
            email,
            role
        });

        console.log("Inserted:", result.insertedId);

        // return { firstname, email, role };
    } catch (error) {
        console.error("Error inserting into MongoDB:", error);
        // throw new Error('Failed to insert into MongoDB: ' + error.message);
    }
}