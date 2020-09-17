/**
 * @author WMXPY
 * @namespace Compare
 * @description Result Creator
 */

import { CompareResult } from "./declare";
import { createCompareResult } from "./util";

export class ResultCreator {

    public static create(initialStack: string[] = []): ResultCreator {

        return new ResultCreator(initialStack);
    }

    private readonly _stack: string[];

    private constructor(initialStack: string[]) {

        this._stack = initialStack;
    }

    public get length(): number {
        return this._stack.length;
    }

    public getStack(): string[] {
        return this._stack;
    }

    public down(step: string): ResultCreator {

        return new ResultCreator([
            ...this._stack,
            step,
        ]);
    }

    public result(left: any, right: any): CompareResult {

        return createCompareResult(
            this._stack,
            left,
            right,
        );
    }
}
