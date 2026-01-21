---
title: "Risk Management"
sidebar_position: 3
description: "Risk management and limits on EveryX."
---

# Risk management and limits
EveryX has multiple layers of risk control

## User-level risk
Max loss = cash portion of the trade.
Stop-loss closes positions before losses exceed that cash portion.
Users can set stop warnings to get alerts when their position is close to being stopped-out, giving them a chance to add margin to move the stop further away.

## Event-level risk
Each Event can have:
Maximum leverage settings per Outcome.
Limits based on how much cash is in the Event overall.
Rules to limit market impact so one very large trade doesn't destabilize prices.
These settings can differ between Events (e.g., a high-profile, well-funded Event vs. a small niche Event).

## System-level risk
At the platform level, EveryX:
Monitors overall exposure and cash in all pools.
Adjusts allowed leverage when Events are very small or unbalanced.

The goal is simple:
Users can take meaningful risk and use leverage, without the platform taking on hidden liabilities it cannot cover.