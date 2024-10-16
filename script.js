const makeChange = (c) => {
  let q = Math.floor(c / 25);
  c = c % 25;
  let d = Math.floor(c / 10);
  c = c % 10;
  let n = Math.floor(c / 5);
  let p = c % 5;

  return { q, d, n, p };
  // your name here
};

// Do not the change the code below
const c = prompt("Enter c: ");
alert(JSON.stringify(makeChange(c)));
