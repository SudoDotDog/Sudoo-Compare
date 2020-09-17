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

    const chance: Chance.Chance = new Chance('compare-result-creator');

    it('should be able to construct', (): void => {

        const resultCreator: ResultCreator = ResultCreator.create();

        expect(resultCreator).to.be.instanceOf(ResultCreator);
    });

    it('should be able to create 0 length class by default', (): void => {

        const resultCreator: ResultCreator = ResultCreator.create();

        expect(resultCreator).to.be.lengthOf(0);
    });

    it('should be able to down stack', (): void => {

        const step: string = chance.string();

        const resultCreator: ResultCreator = ResultCreator.create();
        const deepResultCreator: ResultCreator = resultCreator.down(step);

        expect(deepResultCreator).to.be.lengthOf(1);
        expect(deepResultCreator.getStack()).to.be.deep.equal([step]);
    });
});
