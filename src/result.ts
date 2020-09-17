/**
 * @author WMXPY
 * @namespace Compare
 * @description Util
 */

import { CompareResult } from "./declare";

export const createCompareResult = (keyStack: string[], left: any, right: any): CompareResult => {

    return {

        keyStack,
        keyString: keyStack.join('.'),

        left,
        right,
    };
};
