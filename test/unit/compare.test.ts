/**
 * @author WMXPY
 * @namespace Compare
 * @description Compare
 * @package Unit Test
 */

import { expect } from 'chai';
import * as Chance from 'chance';
import { compareObject, CompareResult } from '../../src';

describe('Given [Compare] Helper methods', (): void => {

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const chance: Chance.Chance = new Chance('compare-compare');

    it('should be able to return empty value', (): void => {

        const result: CompareResult[] = compareObject();

        expect(result).to.be.lengthOf(0);
    });
});
