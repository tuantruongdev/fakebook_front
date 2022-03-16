export default function async(
  firstName,
  lastName,
  email,
  phoneNum,
  password,
  gender,
  dob
) {
  var igender;
  if (gender === 1) {
    igender = "male";
  } else if (gender === 2) {
    igender = "female";
  } else {
    igender = "LGTV";
  }

  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  myHeaders.append("Access-Control-Allow-Origin", "*");
  var raw = JSON.stringify({
    firstName: firstName,
    lastName: lastName,
    email: email,
    phoneNum: phoneNum,
    password: password,
    address: "viet nam",
    gender: igender,
    dob: dob,
  });

  var requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow",
  };

  return fetch("http://51.79.130.105:3001/api/v1/users/signup", requestOptions)
    .then((response) => response.json())
    .then((responseJson) => {
      return responseJson;
    })
    .catch((error) => console.log("error222", error));
}
