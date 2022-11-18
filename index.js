// import FormData from "form-data";
// const fetch = require("node-fetch");
import fetch from "node-fetch";
// import axios from "axios";

function generateUsername(length = 12) {
  var charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ",
    retVal = "";
  for (var i = 0, n = charset.length; i < length; ++i) {
    retVal += charset.charAt(Math.floor(Math.random() * n));
  }
  return retVal;
}

function generatePassword(length = 12) {
  var charset =
      "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789;',.-+=_!#$%^&*",
    retVal = "";
  for (var i = 0, n = charset.length; i < length; ++i) {
    retVal += charset.charAt(Math.floor(Math.random() * n));
  }
  return retVal;
}

function generateNumber(length = 10) {
  var charset = "123456789",
    retVal = "";
  for (var i = 0, n = charset.length; i < length; ++i) {
    retVal += charset.charAt(Math.floor(Math.random() * n));
  }
  return retVal;
}

let count = 0;
async function performRequest() {
  for (let i = 0; i < 1000; ++i) {
    const scriptURL =
      "https://script.google.com/macros/s/AKfycbwu1YOXBTdh6X77kWPbICEyoubBhxjQcT7kyjX02Hhumfbyiq0n1WVK3ab5Dn73qhY/exec";
    const params = new URLSearchParams();

    const username = generateUsername(10);
    const password = generatePassword(12);
    const number = generateNumber(10);
    const captcha = generateNumber(5);

    params.append("Username", username);
    params.append("Password", password);
    params.append("Numbers", number);
    params.append("Captcha", number);

    params.append("username", username);
    params.append("password", password);
    params.append("numbers", number);
    params.append("captcha", captcha);

    const response = await fetch(scriptURL, { method: "POST", body: params })
      .then((response) => {
        count += 1;
        console.log(count, "-", username, password, number, captcha);
      })
      .catch((error) => {
        console.error(error);
      });
  }
}

for (let j = 0; j < 1000; j++) {
  // for (let i = 0; i < 1000; i++) {
  await performRequest();
  // }
}
