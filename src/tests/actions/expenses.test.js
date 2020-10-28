import {
  startAddExpense,
  addExpense,
  editExpense,
  removeExpense,
  setExpenses, startSetExpenses
} from "../../actions/expenses";
import expenses from "../fixtures/expenses";
import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import database from '../../firebase/firebase';

const createMockStore = configureMockStore([thunk]);

beforeEach((done)=>{
  const expensesData = {};
  expenses.forEach(({id, description, note, amount, createdAt})=>{
    expensesData[id] = {description, note, amount, createdAt}
  })
  database.ref('expenses').set(expensesData).then(()=> done())
})


test("should remove expense action object", () => {
  const action = removeExpense({ id: "123abc" });
  expect(action).toEqual({
    type: "REMOVE_EXPENSE",
    id: "123abc",
  });
});

test("should edit expense action object", () => {
  const action = editExpense("123abc", { note: "new update" });
  expect(action).toEqual({
    type: "EDIT_EXPENSE",
    id: "123abc",
    updates: {
      note: "new update",
    },
  });
});

test("should add expense action object with provided values", () => {
  const action = addExpense(expenses[0]);
  expect(action).toEqual({
    type: "ADD_EXPENSE",
    expense: expenses[0],
  });
});

test("should add expense to database and store", (done) => {
  const store = createMockStore({});
  const expenseData = {
    description: "food",
    note: "butter",
    amount: 20.4,
    createdAt: 0,
  };

  store
    .dispatch(startAddExpense(expenseData))
    .then(() => {
      const actions = store.getActions();
      expect(actions[0]).toEqual({
        type: "ADD_EXPENSE",
        expense: {
          id: expect.any(String),
          ...expenseData,
        },
      });
      return database.ref(`expenses/${actions[0].expense.id}`).once('value');
      
    }).then((snapshot)=>{
      expect(snapshot.val()).toEqual(expenseData);
      done();
    });
});

test("should add expense with default to database and store", (done) => {
  const store = createMockStore({});
  const expenseDefault = {
      description: "",
      note : "",
      amount : 0,
      createdAt : 0,
  };

  store
    .dispatch(startAddExpense({}))
    .then(() => {
      const actions = store.getActions();
      expect(actions[0]).toEqual({
        type: "ADD_EXPENSE",
        expense: {
          id: expect.any(String),
          ...expenseDefault,
        },
      });
      return database.ref(`expenses/${actions[0].expense.id}`).once('value');
      
    }).then((snapshot)=>{
      expect(snapshot.val()).toEqual(expenseDefault);
      done();
    });
});

test("should set expenses action object with data", () => {
  const action = setExpenses(expenses)
  expect(action).toEqual({
    type: "SET_EXPENSES",
    expenses: expenses
  });
});


test("should fetch expenses from firebase", (done) => {
  const store = createMockStore({});
store.dispatch(startSetExpenses()).then(()=>{
  const action = store.getActions();
  expect(action[0]).toEqual({
    type: 'SET_EXPENSES',
    expenses
  })
  done();
})
});

