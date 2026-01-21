---
title: "Leverage"
sidebar_position: 2
description: "Understanding leverage on EveryX."
---

# Leverage: bigger positions with limited loss

## What is leverage on EveryX?
Leverage lets users control a larger position in an Outcome while only risking a smaller amount of their own cash (the "cash portion").
Maximum leverage is 10x for now (this can change over time).
Users always know their maximum loss: the cash portion of their trade.

Example (just to illustrate the idea):
You risk $50 of your own money with 10x leverage.
The system gives you $500 worth of exposure to that Outcome.
If the market moves against you and hits your stop-loss, your position closes and your loss is capped to the $50 cash you put in.
No interest is charged on the "borrowed" portion of a leveraged trade.

## The stop-loss
Every leveraged position has a stop-loss, expressed as a probability level:
When choosing leverage levels, you'll see the associated stop probability before opening the trade.
If the Outcome's probability falls to or below that level, the system automatically closes your position.
This protects you from losing more than your cash portion.
You can:
Use a stop that is closer (higher potential returns, but more likely to be hit), or
Set it further away (lower potential returns, but less likely to be hit).
You can also add margin later to reduce leverage and move the stop further away from the current probability.