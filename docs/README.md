# Sudoo-Compare

[![Continuous Integration](https://github.com/SudoDotDog/Sudoo-Compare/actions/workflows/ci.yml/badge.svg)](https://github.com/SudoDotDog/Sudoo-Compare/actions/workflows/ci.yml)
[![codecov](https://codecov.io/gh/SudoDotDog/Sudoo-Compare/branch/master/graph/badge.svg)](https://codecov.io/gh/SudoDotDog/Sudoo-Compare)
[![npm version](https://badge.fury.io/js/%40sudoo%2Fcompare.svg)](https://www.npmjs.com/package/@sudoo/compare)
[![downloads](https://img.shields.io/npm/dm/@sudoo/compare.svg)](https://www.npmjs.com/package/@sudoo/compare)

A object comparison package

## Install

```sh
yarn add @sudoo/compare
# Or
npm install @sudoo/compare --save
```

## Usage

Compare two objects

```ts
import { compare, CompareResult } from "@sudoo/compare";

const firstObject: Record<string, string> = {
    foo: "bar",
};
const secondObject: Record<string, string> = {
    foo: "baz",
    extra: "extra",
};

const result: CompareResult[] = compare(firstObject, secondObject);
```

By running the able code, your `result` variable to get a list of result that indicate the difference between two objects.

```ts
[
  {
    keyStack: [ 'extra' ],
    keyString: 'extra',
    left: undefined,
    right: 'extra',
  },
  { 
    keyStack: [ 'foo' ],
    keyString: 'foo',
    left: 'bar',
    right: 'baz',
  },
]
```

If two objects are same, the `result` list will be empty.
