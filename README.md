# Next.js 15 App Router - Unexpected ISR behavior with dynamic routes

This repository demonstrates an unexpected behavior I encountered while using the Next.js 15 App Router with dynamic routes and Incremental Static Regeneration (ISR).

## Bug Description

When using ISR with dynamic routes, the regeneration process seems to behave unexpectedly leading to stale data.  The issue is more pronounced with certain route segments or configurations, resulting in inconsistent data between reloads.

## Reproduction Steps

1. Clone this repository.
2. Run `npm install`.
3. Run `npm run dev`.
4. Observe the output.  Reload multiple times and note any inconsistencies.

## Expected Behavior

With ISR, the page should regenerate its content at the specified intervals, always displaying the latest data.

## Actual Behavior

The page sometimes displays stale data, even after the regeneration interval has passed.

## Potential Causes

* A bug in the Next.js 15 App Router's ISR implementation.
* Incorrect configuration of ISR settings.
* Interaction with other features (e.g., data fetching).

## Workaround (If applicable)

Workarounds are currently being explored.
