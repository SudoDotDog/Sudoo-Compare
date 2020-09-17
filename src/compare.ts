/**
 * @author WMXPY
 * @namespace Compare
 * @description Compare
 */

import { CompareResult } from "./declare";
import { createCompareResult } from "./util";

export const compare = (left: any, right: any): CompareResult[] => {

    const results: CompareResult[] = [];

    if (typeof left !== 'object' || typeof right !== 'object') {

        if (left === right) {
            return [];
        }
        return [createCompareResult([], left, right)];
    }

    const leftKeys: Set<string> = new Set(Object.keys(left));
    const rightKeys: Set<string> = new Set(Object.keys(right));

    return results;
};
