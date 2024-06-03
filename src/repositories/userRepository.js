const AWS = require('aws-sdk');

const dynamoDbClient = new AWS.DynamoDB.DocumentClient();
const users = "USERS";

const save = async (user) => {
  const params = {
    TableName: users,
    Item: user,
  };
  await dynamoDbClient.put(params).promise();
};

const get = async (id) => {
  const params = {
    TableName: users,
    Key: { id },
  };
  const result = await dynamoDbClient.get(params).promise();
  return result.Item;
};

const update = async (id, data) => {
  const params = {
    TableName: users,
    Key: { id },
    UpdateExpression: 'set #name = :name, #role = :role, #age = :age',
    ExpressionAttributeNames: {
      '#name': 'name',
      '#role': 'role',
      '#age': 'age',
    },
    ExpressionAttributeValues: {
      ':name': data.name,
      ':role': data.role,
      ':age': data.age,
    },
    ReturnValues: 'ALL_NEW',
  };
  const result = await dynamoDbClient.update(params).promise();
  return result.Attributes;
};

const deleteItem = async (id) => {
  const params = {
    TableName: users,
    Key: { id },
  };
  await dynamoDbClient.delete(params).promise();
};

const list = async () => {
  const params = {
    TableName: users,
  };
  const result = await dynamoDbClient.scan(params).promise();
  return result.Items;
};

module.exports = {
  save,
  get,
  update,
  delete: deleteItem,
  list,
};