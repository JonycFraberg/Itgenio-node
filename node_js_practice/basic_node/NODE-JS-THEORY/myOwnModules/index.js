const greeting = require("./lib/greeting");
const date = require("../dateLib/date");
const user = require("../../nodeJS_theory_ modules/user");
console.log(`Дата запроса: ${date.currentDate}`);
console.log(greeting.getMessage(user.userName, date.currentDate));
