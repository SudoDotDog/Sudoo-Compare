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

    it('should be able to compare object - happy path', (): void => {

        const key: string = chance.string();
        const value: string = chance.string();

        const left: Record<string, string> = {
            [key]: value,
        };
        const right: Record<string, string> = {
            [key]: value,
        };
        const result: CompareResult[] = compare(left, right);

        expect(result).to.be.lengthOf(0);
    });

    it('should be able to compare object - sad path', (): void => {

        const key: string = chance.string();
        const leftValue: string = chance.string();
        const rightValue: string = chance.string();

        const commonKey: string = chance.string();
        const commonValue: string = chance.string();

        const left: Record<string, string> = {
            [commonKey]: commonValue,
            [key]: leftValue,
        };
        const right: Record<string, string> = {
            [commonKey]: commonValue,
            [key]: rightValue,
        };
        const result: CompareResult[] = compare(left, right);

        expect(result).to.be.lengthOf(1);
        expect(result).to.be.deep.equal([
            createCompareResult([key], leftValue, rightValue),
        ]);
    });
});
