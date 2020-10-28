import expensesReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses'

test('should set default state', ()=>{
    const state = expensesReducer(undefined, {type: '@@INIT'});
     expect(state).toEqual([]);
})

test('should add expense', ()=>{
    const action = {
        type: "ADD_EXPENSE",
        expense: expenses[1]
    }
    const state = expensesReducer(undefined, action);
     expect(state).toEqual([expenses[1]]);
})

test('should remove expense by id', ()=>{
    const action = {
        type: "REMOVE_EXPENSE",
        id: expenses[1].id
    }
    const state = expensesReducer(expenses, action);
     expect(state).toEqual([expenses[0], expenses[2]]);
})

test('should not remove expense if id not found', ()=>{
    const action = {
        type: "REMOVE_EXPENSE",
        id: '-1'
    }
    const state = expensesReducer(expenses, action);
     expect(state).toEqual(expenses);
})

test('should edit expense by id', ()=>{
    const action = {
        type: "EDIT_EXPENSE",
        id: expenses[1].id,
        updates: {
            createdAt: 4000
        }
    }
    const state = expensesReducer(expenses, action);
     expect(state[1].createdAt).toEqual(4000);
})

test('should not edit expense if id not found', ()=>{
    const action = {
        type: "EDIT_EXPENSE",
        id: -1,
        updates: {
            createdAt: 4000
        }
    }
    const state = expensesReducer(expenses, action);
    expect(state).toEqual(expenses);
})

test('should set expenses', ()=>{
    const action = {
        type: "SET_EXPENSES",
        expenses: [expenses[0]]
    }
    const state = expensesReducer(expenses, action);
    expect(state).toEqual([expenses[0]]);
})