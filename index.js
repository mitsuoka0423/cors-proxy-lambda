const { default: axios } = require("axios");

exports.handler = async (event) => {
  console.log(event);

  const url = event?.queryStringParameters?.url;

  if (!url) {
    return {
      statusCode: 200,
      body: JSON.stringify('Hello from Lambda!'),
    };
  }

  const response = await axios.get(url);

  return {
    statusCode: 200,
    body: response,
  };
};
