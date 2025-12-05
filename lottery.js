// Usage: node lottery.js holders.csv "SEED"

const fs = require("fs");
const crypto = require("crypto");

const file = process.argv[2];
const seed = process.argv[3];

if (!file || !seed) {
  console.log('Use: node lottery.js holders.csv "SEED"');
  process.exit();
}

const csv = fs.readFileSync(file, "utf8").trim().split("\n").slice(1);

let ranges = [];
let start = 0;

for (let line of csv) {
  let [address, balStr] = line.split(",");
  let bal = Number(balStr);
  let entries = Math.floor(bal / 10000);
  if (entries <= 0) continue;

  let end = start + entries - 1;
  ranges.push({ address, start, end });
  start = end + 1;
}

let total = start;

if (total === 0) {
  console.log("Nobody has 10,000 tokens, so no entries.");
  process.exit();
}

let hash = crypto.createHash("sha256").update(seed).digest("hex");
let idx = Number(BigInt("0x" + hash) % BigInt(total));

let winner = ranges.find(r => idx >= r.start && idx <= r.end);

console.log("Seed:", seed);
console.log("Winner index:", idx);
console.log("Winner address:", winner.address);
