var request = require("request");
var options = {
  method: "POST",
  url: "http://51.79.130.105:3000/api/v1/users/login",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    userName: "truong",
    password: "123456",
  }),
};
request(options, function (error, response) {
  if (error) throw new Error(error);
  console.log(response.body);
});
