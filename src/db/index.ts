import { MongoClient, Db, ServerApiVersion } from "mongodb";

let client: MongoClient | undefined;

async function connectToMongoDB() {
    try {
        const uri = process.env.MONGODB_URI;
        if (!uri) {
            throw new Error('No MongoDB URI found');
        }
        client = new MongoClient(uri, {
            serverApi: {
                version: ServerApiVersion.v1,
                strict: true,
                deprecationErrors: true,
            }
        });
        await client.connect();
        console.log("Connected to MongoDB");
        await client.db("admin").command({ ping: 1 });
        console.log("Pinged your deployment. You successfully connected to MongoDB!");
    } catch (error) {
        console.error("Error connecting to MongoDB:", error);
        throw new Error('Failed to connect to MongoDB');
    }
    finally{
        await client?.close();
    }
}

// Async function to get the 'db' once connected
async function getDb(): Promise<Db | undefined> {
    // Wait for client to be initialized
    await connectToMongoDB();

    // Return 'db' if client is initialized, otherwise undefined
    return client?.db();
}



export default getDb;