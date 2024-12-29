# Unhandled Promise Rejection in Express.js Route

This repository demonstrates a common error in Node.js Express.js applications: unhandled promise rejections within route handlers.  Unhandled rejections can cause your application to crash silently, making debugging difficult.

The `bug.js` file shows the problematic code. The `bugSolution.js` file provides a corrected version.

## How to Reproduce

1. Clone this repository.
2. Navigate to the directory.
3. Run `npm install express`
4. Run `node bug.js` (this will likely produce no errors, but may crash silently depending on your Node.js version).
5. Run `node bugSolution.js` (this will handle the error correctly).

## Problem

Asynchronous operations, such as database queries, often return Promises. If these promises reject (due to errors), and the rejection is not handled, Node.js might not report the error clearly, leading to instability.

## Solution

Always handle promise rejections using `.catch()` to gracefully handle errors and prevent unhandled rejections. This allows for logging of errors and more robust application behavior.