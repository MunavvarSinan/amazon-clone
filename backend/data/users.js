import bcrypt from "bcryptjs";

const users = [
  {
    name: "Admin User",
    email: "admin@example.com",
    password: bcrypt.hashSync("1234", 10),
    isAdmin: true,
  },
  {
    name: "Munavvar",
    email: "munavvar@example.com",
    password: bcrypt.hashSync("1234", 10),
  },
  {
    name: "Sinan",
    email: "sinan@example.com",
    password: bcrypt.hashSync("1234", 10),
  },
];

export default users