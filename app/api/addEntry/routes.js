// pages/api/addEntry.js
import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import { DynamoDBDocumentClient, PutCommand } from "@aws-sdk/lib-dynamodb";

export async function POST(req, res) {
  if (req.method === 'POST') {
    const { name, url } = req.body;

    const client = new DynamoDBClient({
      region: process.env.AWS_REGION,
      credentials: {
        accessKeyId: process.env.AWS_ACCESS_KEY_ID,
        secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY
      }
    });
    const docClient = DynamoDBDocumentClient.from(client);

    const params = {
      TableName: process.env.DYNAMODB_TABLE_NAME,
      Item: {
        name,  // 'name' is the primary key
        url    // 'url' is the attribute
      }
    };

    try {
      await docClient.send(new PutCommand(params));
      res.status(200).json({ message: "Item added successfully" });
    } catch (error) {
      console.error("Error adding item to DynamoDB:", error);
      res.status(500).json({ message: "Failed to add item" });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
