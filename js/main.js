// select target elements
const calcBody = document.querySelector(".calc-body");
console.log(calcBody);
// create an array of keys
const keys = [
  "C",
  "()",
  "%",
  "/",
  "7",
  "8",
  "9",
  "*",
  "4",
  "5",
  "6",
  "+",
  "1",
  "2",
  "3",
  "-",
  "+/-",
  "0",
  ".",
  "=",
];

keys.forEach((key) => {
  //create a button
  const btnKey = document.createElement("button");

  let btnclasses = "flex items-center justify-center p-2 rounded shadow shadow-slate-700";
  if (key == "=") {
    btnclasses += " bg-[#33C0DF]";
  } else if (key.toLocaleLowerCase() == "c") {
    btnclasses += " text-red-600";
  }

  btnKey.className = btnclasses
  btnKey.textContent = key;
  //add key to the body
  calcBody.appendChild(btnKey);
});
