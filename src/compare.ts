/**
 * @author WMXPY
 * @namespace Compare
 * @description Compare
 */

import { CompareResult } from "./declare";
import { createCompareResult } from "./result";

export const compare = (
    left: any,
    right: any,
    initialStack: string[] = [],
): CompareResult[] => {

    const results: CompareResult[] = [];

    if (typeof left !== 'object' || typeof right !== 'object') {

        if (left === right) {
            return [];
        }
        return [createCompareResult([], left, right)];
    }

    const leftKeys: Set<string> = new Set(Object.keys(left));
    const rightKeys: Set<string> = new Set(Object.keys(right));

    for (const currentKey of leftKeys) {

        if (!rightKeys.has(currentKey)) {

            results.push(
                createCompareResult(
                    [
                        ...initialStack,
                        currentKey,
                    ],
                    left[currentKey],
                    undefined,
                ),
            );
        }
    }

    return results;
};
