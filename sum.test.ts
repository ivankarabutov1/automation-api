import {describe, expect, test} from '@jest/globals';
import {sum, sumName, fullName}  from './sum' ;


describe('sum module', () => {
  test('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3);
  });
  test('adds 0.3 + 8 to equal 8.3', () => {
    expect(sum(0.3, 8)).toBe(8.3); 
  });
});

describe('cuncut', () =>{
    test('name plus surname', () =>{
        expect(sumName('chmonya', 'tom')).toBe('chmonya tom');
    });
});

describe('cuncut fullname', () =>{
    test('firstName plus secondName', () =>{
        expect(fullName({firstName:'Ivan', secondName:'Karabutov'})).toBe('Ivan Karabutov');
    });
});