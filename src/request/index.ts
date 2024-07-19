import getDb from "@/db";
// import { Client } from 'appwrite';

// const client = new Client();

// client
//     .setEndpoint('https://cloud.appwrite.io/v1')
//     .setProject('669ac30e000290db6973');

export const addToWaitlist = async (firstname: string, email: string, role: string) => {
    try {
        // Get 'db' from the asynchronous function
        const db = await getDb();

        if (!db) {
            throw new Error('MongoDB database is not initialized');
        }

       

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