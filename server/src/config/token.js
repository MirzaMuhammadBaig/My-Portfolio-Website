import jwt from "jsonwebtoken";

const generateToken = (id) => {
  return jwt.sign(
    { id },
    '?><MnbvCCXZ|ASdffgghhjkl:""}|{POiuuytreWQ!2@#$%^7*()__++};mnbvcxzlkjhgfdsapoiuytrewq',
    { expiresIn: "7d" }
  );
};

export default generateToken;
