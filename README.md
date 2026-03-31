# OpenRank — A Decentralized Skill Arena on Stellar

OpenRank is a **decentralized skill arena** where creators and players challenge each other publicly, and the community backs their favorite players with real stakes. Matches are verified through gameplay, and outcomes are settled transparently using **smart contracts on Stellar (Soroban)**.

Unlike traditional betting platforms, OpenRank focuses on **human skill** — turning games, performance, and reputation into on-chain, verifiable outcomes.

Current supported games:
- **Typing Race** – fastest and most accurate typist wins.
- **Chess** – classical 1v1 competitive chess.

---

## Links

- [Architecture](https://www.notion.so/2faba4f18c8280118585c7c1ab7d5f54)
- [Main Contract](https://stellar.expert/explorer/testnet/contract/CBRUJZHOXKMCKVPMJ3PMXKUB6JVAF2BOKIWXIJ4K62US3LTBFPO47RE6)
- [USDg SAC Contract](https://stellar.expert/explorer/testnet/contract/CAVN7O3AZXY4FUHBG6JCNFRE3COPDBEWOKHA7MSEXPNLLZ7T4NZEZZ7X)
- [Screenshots]
-  ![HomePage](https://drive.google.com/uc?export=view&id=16IfZ6zWx3ULvEpG3mu6tLCdu-wm5Mm3H)
-  ![TypingPage](https://drive.google.com/uc?export=view&id=1xLNRjrmMx0Hsl9Ms5zKSEUvTwr6sgi_u)
-  ![TransactionPage](https://drive.google.com/uc?export=view&id=1fGJ4I4cpJjU3gI9qghej24QYm-AK9XNz)
-  ![ChessPage](https://drive.google.com/uc?export=view&id=1vvddNnQ8nh5wTV6deAapJHhaNYirSgpF)
-  ![RedeemPage](https://drive.google.com/uc?export=view&id=14AOGlRkCA9l2pxyM80RfbialwIwmrcXE)
-  ![WinnerAnnoucementPage](https://drive.google.com/uc?export=view&id=1I7H6WDiZHkzvccBJ4JbvLnIvpdfwknrw)

---

## Overview

OpenRank lets anyone prove their skill publicly through live competitive games.  
Fans don’t just watch — they **participate economically** by staking on the players they believe in.

Each match becomes a small on-chain economy:
- Players challenge each other.
- Viewers back their favorites.
- The winner is resolved via game logic.
- Funds are settled automatically on Stellar.

This kind of application, where **human skills are put to the test to prove oneself publicly**, is a powerful new primitive and a great addition to the Stellar ecosystem.

---

## Features

- **On-chain escrow** for viewer bets using Soroban.
- **Live skill games** (Typing + Chess).
- **Community backing** — fans stake on players.
- **Real-time updates** via sockets.
- **Instant settlement** on Stellar with near-zero fees.
- **Fully transparent** match history and payouts.

---

## How It Works

1. **Create Challenge**  
   A player challenges another player via X or directly on the platform.

2. **Escrow on Stellar**  
   The match is created and an escrow contract is deployed.

3. **Fans Back Players**  
   Viewers can stake on either player before the match starts.

4. **Live Match**  
   Players compete in Typing Race or Chess.

5. **Resolve & Settle**  
   The game engine submits the result.  
   The contract distributes rewards automatically.

---

## Architecture

Monorepo with three primary apps and shared packages.

High-level flow:

X (Twitter)  
→ Web App (Next.js)  
→ Socket Server (Realtime)  
→ Soroban Smart Contracts (Escrow & Settlement)

---

## Monorepo Structure

- `apps/web`  
  Next.js frontend, Stellar wallet integration, Soroban interactions.

- `apps/socket-server`  
  Real-time updates for matches, spectators, and bets.

- `apps/http-server`  
  Off-chain orchestration, match creation, result submission.

- `packages/prisma`  
  Prisma schema, migrations, DB client.


---

## Tech Stack

- **Frontend:** Next.js, TypeScript  
- **Backend:** Node.js, Express  
- **Realtime:** WS  
- **Monorepo:** Turborepo, pnpm  
- **Database:** Prisma + PostgreSQL  
- **Blockchain:** Stellar + Soroban  
- **Wallets:** Freighter / Stellar Wallets Kit  
- **Smart Contracts:** Rust (Soroban)  

---

## Why Stellar?

OpenRank is designed specifically for Stellar’s strengths:

- **Ultra-low fees** → micro-bets are viable.  
- **Fast finality** → live matches feel instant.  
- **Native asset support** → stablecoin staking.  
- **Soroban** → secure escrow and settlement.  
- **Global accessibility** → anyone can participate.

A platform like OpenRank, where **real human skills are publicly challenged, verified, and settled on-chain**, fits perfectly with Stellar’s vision of open, accessible financial infrastructure.

# Future Plans

The current version of OpenRank is a prototype focused on core functionality.  
Planned future features include:

## 1. X (Twitter) Bot Integration
A dedicated X (Twitter) bot that listens to mentions and automatically:
- Creates matches when users challenge each other.
- Handles match acceptance.
- Posts match announcements and results.

This will turn X into a real-time social coordination layer for OpenRank.

## 2. Self-Betting via Escrow
Allowing players to stake on themselves using Soroban escrow contracts.  
This enables:
- Stronger incentives for competitive play.
- Higher trust in match seriousness.
- Direct alignment between player confidence and economic stake.
- Acts a source of liquidity 

## 3. More Minigames
Expanding beyond Typing and Chess with more skill-based games, such as:
- Reaction time tests  
- Trivia challenges  
- Memory games  
- Aim / precision challenges  

This will broaden the definition of "skill" on the platform and attract diverse types of players and audiences.
