let cost = 0;

function coffee() {
  cost += 5;
  console.log(cost);
}

function bagel() {
  cost += 2;
  console.log(cost);
}

function soup() {
  cost += 9;
  console.log(cost)
}

function total() {
  tax = 0.1;
  cost = tax*cost + cost;
  alert(cost + '$')
}

function reOrder() {
  cost = 0;
}
