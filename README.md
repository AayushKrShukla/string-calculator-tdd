# String Calculator

This project is a test task for Incubytes designed to implement Test-Driven Development (TDD) practices and is based on [TDD Kata 1](https://osherove.com/tdd-kata-1/).

A TypeScript implementation of the String Calculator kata. This project parses strings containing numbers separated by custom delimiters and computes their sum, with support for various delimiter formats and input validation.

## Features

- Supports comma `,` and newline `\n` as default delimiters.
- Allows custom single-character and multi-character delimiters.
- Supports multiple delimiters.
- Ignores numbers greater than 1000.
- Throws an error for negative numbers, listing all negatives found.

## Usage

The main logic is implemented in [`StringCalculator`](src/string-calculator.ts). To use:

```ts
import { StringCalculator } from "./string-calculator";

const calculator = new StringCalculator();
const result = calculator.add("1,2,3"); // result: 6
```

## Getting Started

To get started, clone the repository and install dependencies:

```sh
git clone <repository-url>
cd string-calculator
npm install
```

## Running Tests

Tests are written using Jest in [`string-calculator.test.ts`](src/string-calculator.test.ts).

To run tests:

```sh
npm test
```

## License

ISC