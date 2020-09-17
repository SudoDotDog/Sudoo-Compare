/**
 * @author WMXPY
 * @namespace Compare
 * @description Result Creator
 * @package Unit Test
 */

import { expect } from 'chai';
import * as Chance from 'chance';
import { ResultCreator } from '../../src';

describe('Given {ResultCreator} Class', (): void => {

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const chance: Chance.Chance = new Chance('compare-result-creator');

    it('should be able to construct', (): void => {

        const resultCreator: ResultCreator = ResultCreator.create();

        expect(resultCreator).to.be.instanceOf(ResultCreator);
    });
});
