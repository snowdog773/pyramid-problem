# Pyramid Problem

This repo contains my solution to a well known coding challenge often set by recruiters for programming jobs. The challenge is to find the shortest path through a pyramid of numbers. Given a pyramid filled with numbers where each row is one number longer than the last, you need to move from top to bottom where you can only move to the two adjacent spaces on the next layer. The objective is to find the path of least resistance, i.e. to find the route that has the lowest sum of numbers passed though.

The full technical brief is included in this repo as a pdf.

There are a few solutions to this problem published on reddit and stack overflow, however my approach was to represent the original pyramid as a series of arrays for rows, and create a new pyramid filled with row by row running totals, but instead of storing numbers as primitives, for each number I created an object containing the running total, and the index of the array where it had just been passed from. It's not the most efficient of solutions but it does work.
