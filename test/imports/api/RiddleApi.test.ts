import { describe, expect, test } from '@jest/globals';
import RiddleApi from '../../../src/imports/api/RiddleApi';
import Riddle from '../../../src/imports/api/Riddle';

describe('RiddleApi', () => {

  test('getRiddle', async () => {
    const riddle = await RiddleApi.getRiddle();

    expect(riddle.constructor.name).toBe(Riddle.name);
  });

  test('getChoicesNumberShouldReturn3', async () => {
    const riddle = await RiddleApi.getRiddle();

    expect(riddle.choices.length).toBe(3);
  });

  test('getQuestionShouldNotBeEmpty', async () => {
    const riddle = await RiddleApi.getRiddle();

    expect(riddle.question).not.toBe('');
  });

  test('getAnswerShouldNotBeEmpty', async () => {
    const riddle = await RiddleApi.getRiddle();

    expect(riddle.answer).not.toBe('');
  });

  test('getChoicesShouldNotBeEmpty', async () => {
      const riddle = await RiddleApi.getRiddle();

      expect(riddle.choices).not.toEqual([]);
  });

  test('getChoicesShouldContainAnswer', async () => {
      const riddle = await RiddleApi.getRiddle();

      expect(riddle.choices).toContain(riddle.answer);
  });

});