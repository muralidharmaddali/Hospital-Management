const bcrypt = require("bcrypt");
async function genPassword(password) {
  const salt = await bcrypt.genSalt();
  password = await bcrypt.hash(password, salt);
  console.log(password);
}
const password = "test1234";
genPassword(password);
//$2b$10$i.0XR5H9MznJ3Q5Zxf8kpeOr5A7eDdT1Thei5lMAjd./CPo3su4Lu
