module.exports.getMessage = (name, date) => {
  let hour = date.getHours();
  if (hour > 16) return "Добрый вечер, " + name;
  else if (hour > 10) return "Добрый день, " + name;
  else return "Доброе утро, " + name;
};
