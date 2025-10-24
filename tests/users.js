
// for login
const users = [
  { email: "test.627@mail.com", password: "test627" },
  { email: "unique1@mail.com", password: "test" },
  { email: "umami@mail.com", password: "umami" },
];

// for login fail
const unknows = [
  { username: "test.628", email: "test.628@mail.com", password: "test628" },
  { username: "meme", email: "meme@mail.com", password: "meme" },
  { username: "joke", email: "joke.cum", password: "jo" }
];

// for register
const newUsers = [
  { username: "627academy", email: "627academy@mail.com", password: "La_masia" },
  { username: "meyou", email: "meyou@mail.com", password: "lookkhunnhu" },
  { username: "joker", email: "joker@akham.com", password: "jokervsbatman" }
];

// for register fail (duplicate user : should already exist in db)
const newFailUsers = [
  { username: "627academy", email: "627academy@mail.com", password: "La_masia" },
  { username: "meyou", email: "meyou@mail.com", password: "lookkhunnhu" },
  { username: "joker", email: "joker@akham.com", password: "jokervsbatman" }
];

// id user สำหรับสร้างเพื่อเอาไว้รอ update
const idUser = [
  { id: 107 },
  { id: 108 },
  { id: 109 },
  { id: 110 },
]

// user สำหรับสร้างเพื่อเอาไว้รอ update
const userForUpdate1 = [
  { username: "updatedUser1", email: "updateUser1@mail.com", password: "updateUser1" },
  { username: "updatedUser2", email: "updateUser2@mail.com", password: "updateUser2" },
  { username: "updatedUser3", email: "updateUser3@mail.com", password: "updateUser3" },
  { username: "updatedUser4", email: "updateUser4@mail.com", password: "updateUser4" },
]

// user สำหรับสร้างเพื่อเอาไว้ update
const userForUpdate2 = [
    { id: 107, username: "newuser1", email: "newuser1@mail.com", password: "newuser1" },
    { id: 108, username: "newuser2", email: "newuser2@mail.com", password: "newuser2" },
    { id: 109, username: "newuser3", email: "newuser3@mail.com", password: "newuser3" },
    { id: 110, username: "newuser4", email: "newuser4@mail.com", password: "newuser4" },
]
export {users, unknows, newUsers, newFailUsers, idUser, userForUpdate1, userForUpdate2};