/**
 * @author WMXPY
 * @namespace Compare
 * @description Compare
 */

import { CompareResult } from "./declare";
import { ResultCreator } from "./result-creator";

export const compare = (
    left: any,
    right: any,
    initialStack: string[] = [],
): CompareResult[] => {

    const results: CompareResult[] = [];
    const resultCreator: ResultCreator = ResultCreator.create(initialStack);

    if (typeof left !== 'object' || typeof right !== 'object') {

        if (left === right) {
            return [];
        }
        return [resultCreator.result(left, right)];
    }

    const leftKeys: Set<string> = new Set(Object.keys(left));
    const rightKeys: Set<string> = new Set(Object.keys(right));

    const commonKeys: Set<string> = new Set();

    for (const currentKey of leftKeys) {

        const currentResultCreator: ResultCreator = resultCreator.down(currentKey);
        if (!rightKeys.has(currentKey)) {
            results.push(
                currentResultCreator.result(left[currentKey], undefined),
            );
        } else {
            commonKeys.add(currentKey);
        }
    }

    for (const currentKey of rightKeys) {

        const currentResultCreator: ResultCreator = resultCreator.down(currentKey);
        if (!leftKeys.has(currentKey)) {
            results.push(
                currentResultCreator.result(undefined, right[currentKey]),
            );
        } else {
            commonKeys.add(currentKey);
        }
    }

    return results;
};
