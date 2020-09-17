/**
 * @author WMXPY
 * @namespace Compare
 * @description Compare
 * @package Unit Test
 */

import { expect } from 'chai';
import * as Chance from 'chance';
import { compare, CompareResult, createCompareResult } from '../../src';

describe('Given [Compare] Helper methods', (): void => {

    const chance: Chance.Chance = new Chance('compare-compare');

    it('should be able to return empty value', (): void => {

        const value: string = chance.string();
        const result: CompareResult[] = compare(value, value);

        expect(result).to.be.lengthOf(0);
    });

    it('should be able to compare string', (): void => {

        const left: string = chance.string();
        const right: string = chance.string();
        const result: CompareResult[] = compare(left, right);

        expect(result).to.be.lengthOf(1);
        expect(result).to.be.deep.equal([
            createCompareResult([], left, right),
        ]);
    });

    it('should be able to compare number', (): void => {

        const left: number = chance.natural();
        const right: number = chance.natural();
        const result: CompareResult[] = compare(left, right);

        expect(result).to.be.lengthOf(1);
        expect(result).to.be.deep.equal([
            createCompareResult([], left, right),
        ]);
    });

    it('should be able to compare boolean', (): void => {

        const result: CompareResult[] = compare(false, true);

        expect(result).to.be.lengthOf(1);
        expect(result).to.be.deep.equal([
            createCompareResult([], false, true),
        ]);
    });

    it('should be able to compare combined', (): void => {

        const left: string = chance.string();
        const right: number = chance.natural();
        const result: CompareResult[] = compare(left, right);

        expect(result).to.be.lengthOf(1);
        expect(result).to.be.deep.equal([
            createCompareResult([], left, right),
        ]);
    });
});
