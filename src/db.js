import { MongoClient, ObjectId } from 'mongodb';
import dotenv from 'dotenv';
dotenv.config();
const url = process.env.DBPORT || 'mongodb://127.0.0.1:27017';
const client = new MongoClient(url);
const dbName = process.env.DBNAME || 'myProject';

async function dbConnection() {
    await client.connect();
    const db = client.db(dbName);
    const collection = db.collection('DropitCollection');
    return { collection: collection, client: client };
}

export { dbConnection, ObjectId };