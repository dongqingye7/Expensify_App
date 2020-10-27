import selectExpensesTotal from '../../selectors/expenses-total';
import expenses from '../fixtures/expenses';

test('should return 0 if no expenses', ()=>{
    const total = selectExpensesTotal([]);

    expect(total).toBe(0);
})

test('should correctly add up a signle expense', ()=>{
    const total = selectExpensesTotal([expenses[0]]);

    expect(total).toEqual(expenses[0].amount);
})

test('should correctly add up mutiple expenses', ()=>{
    const total = selectExpensesTotal(expenses);

    expect(total).toEqual(expenses[0].amount+expenses[1].amount+expenses[2].amount);
})
