# Sudoo-Compare

[![Build Status](https://travis-ci.com/SudoDotDog/Sudoo-Compare.svg?branch=master)](https://travis-ci.com/SudoDotDog/Sudoo-Compare)
[![codecov](https://codecov.io/gh/SudoDotDog/Sudoo-Compare/branch/master/graph/badge.svg)](https://codecov.io/gh/SudoDotDog/Sudoo-Compare)
[![npm version](https://badge.fury.io/js/%40sudoo%2Fcompare.svg)](https://www.npmjs.com/package/@sudoo/compare)
[![downloads](https://img.shields.io/npm/dm/@sudoo/compare.svg)](https://www.npmjs.com/package/@sudoo/compare)

:beetle: A object comparison package

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
