let ibrohimMars = {
  name: "Ibrohimjon",
  surname: "Athamjonov",
  coin: 400,
  hp: 1000,
  group: "F2-1275",
  login: 909090,
  password: 55555,
  teacher: "Akmal Mordayev",
};

let marsian = JSON.parse(localStorage.getItem("ibrohimMars"));

let legue = document.querySelector(".legue");
let coin = document.querySelector(".coin");
let hp = document.querySelector(".hp");
let name = document.querySelector(".name");
let groupName = document.querySelector(".group-name");
legue.textContent = ibrohimMars.legue;
coin.textContent = ibrohimMars.coin;
hp.textContent = ibrohimMars.hp;
name.textContent = `${ibrohimMars.name} ${ibrohimMars.surname}`;
groupName.textContent = `${ibrohimMars.group.toUpperCase()} ${ibrohimMars.teacher.toUpperCase()}`;
