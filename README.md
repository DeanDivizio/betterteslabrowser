# A Better Tesla Browser
### It's kinda like abettertheater, but... better-ish

This project was made with the goal of being a more visually appealing, self hostable fullscreen launcher for sites accessed through the Tesla web browser. All it requires is a DynamoDB table to hold links. All interaction with the AWS SDK is done using server actions and credentials/table information is set using environment variables.

Variables that need specifying are:
- AWS_ACCESS_KEY_ID
- AWS_SECRET_ACCESS_KEY
- AWS_REGION
- TABLE_NAME

The functions are set up to look for "displayName" and "url". These can be edited in actions.js.