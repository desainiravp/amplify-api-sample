exports.handler = async (event) => {
  return {
    statusCode: 200,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Headers": "*",
      "Access-Control-Allow-Methods": "GET"
    },
    body: JSON.stringify({
      message: "Hello from API Gateway + Lambda ",
      service: "backend",
      time: new Date().toISOString()
    })
  };
};
