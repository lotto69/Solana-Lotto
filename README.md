Solana Lotto – Weekly Holder Lottery

This repository shows the simple code used to select weekly winners.

How it works

Every 10,000 tokens = 1 entry

Each week I upload a CSV of all token holders

I also publish a public seed (example: Solana blockhash)

Anyone can verify the drawing by running the script in this repo

How to verify a winner

Use this command:

node lottery.js holders.csv "SEED_STRING"

Replace holders.csv with the CSV file for that week

Replace SEED_STRING with the public seed I announce

The script prints the winning wallet

Why this repo exists

To keep the lottery:

Transparent

Fair

Verifiable by anyone
