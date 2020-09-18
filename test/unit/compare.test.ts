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

    it('should be able to compare object - extra element', (): void => {

        const key: string = chance.string();
        const leftValue: string = chance.string();
        const rightValue: string = chance.string();

        const anotherKey: string = chance.string();
        const anotherValue: string = chance.string();

        const left: Record<string, string> = {
            [key]: leftValue,
        };
        const right: Record<string, string> = {
            [anotherKey]: anotherValue,
            [key]: rightValue,
        };
        const result: CompareResult[] = compare(left, right);

        expect(result).to.be.lengthOf(2);
        expect(result).to.be.deep.equal([
            createCompareResult([anotherKey], undefined, anotherValue),
            createCompareResult([key], leftValue, rightValue),
        ]);
    });

    it('should be able to compare object - difference object', (): void => {

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

    it('should be able to compare array - happy path', (): void => {

        const value: string = chance.string();

        const left: string[] = [value];
        const right: string[] = [value];
        const result: CompareResult[] = compare(left, right);

        expect(result).to.be.lengthOf(0);
    });

    it('should be able to compare array - extra element', (): void => {

        const value: string = chance.string();
        const anotherValue: string = chance.string();

        const left: string[] = [value];
        const right: string[] = [value, anotherValue];
        const result: CompareResult[] = compare(left, right);

        expect(result).to.be.lengthOf(1);
        expect(result).to.be.deep.equal([
            createCompareResult(['1'], undefined, anotherValue),
        ]);
    });

    it('should be able to compare array - wrong order', (): void => {

        const value: string = chance.string();
        const anotherValue: string = chance.string();

        const left: string[] = [anotherValue, value];
        const right: string[] = [value, anotherValue];
        const result: CompareResult[] = compare(left, right);

        expect(result).to.be.lengthOf(2);
        expect(result).to.be.deep.equal([
            createCompareResult(['0'], anotherValue, value),
            createCompareResult(['1'], value, anotherValue),
        ]);
    });
});
