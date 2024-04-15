'use server';
import { DynamoDBClient } from '@aws-sdk/client-dynamodb';
import { DynamoDBDocumentClient, ScanCommand, PutCommand } from '@aws-sdk/lib-dynamodb';

const client = new DynamoDBClient({
    credentials: {
      accessKeyId: process.env.AWS_ACCESS_KEY_ID,
      secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    },
    region: 'us-east-2' // specify your region
  });
const docClient = DynamoDBDocumentClient.from(client);

export async function getLinks() {
    const params = {
        TableName: process.env.TABLE_NAME,
    };

    try {
        // console.log('Params:', params);
        // console.log('DynamoDBClient Config:', client);
        const data = await docClient.send(new ScanCommand(params));
        console.log("GetItem succeeded:", JSON.stringify(data, null, 2));
        return data.Items;
    } 
    catch (err) {
        console.error("Unable to read item. Error JSON:", JSON.stringify(err, null, 2));
        throw err;
    }
}

export async function addLink(name, url) {
    const params = {
        TableName: process.env.TABLE_NAME,
        Item: {
            "displayName": name,
            "url": url
        }
    };

    try {
        await docClient.send(new PutCommand(params));
        console.log("PutItem succeeded:", JSON.stringify(params.Item, null, 2));
        return { message: "Item added successfully" };
    } catch (err) {
        console.error("Unable to add item. Error JSON:", JSON.stringify(err, null, 2));
        throw err;
    }
}
