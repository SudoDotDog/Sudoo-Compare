/**
 * @author WMXPY
 * @namespace Compare
 * @description Compare
 */

import { CompareResult } from "./declare";
import { createCompareResult } from "./util";

export const compare = (left: any, right: any): CompareResult[] => {

    if (typeof left !== 'object' || typeof right !== 'object') {

        if (left === right) {
            return [];
        }
        return [createCompareResult([], left, right)];
    }

    return [];
};
