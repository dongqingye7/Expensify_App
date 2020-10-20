import { addExpense, editExpense, removeExpense } from "../../actions/expenses";

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
    const expenseData = {
        description : 'dinner',
        amount : 100,
        createdAt: 20000,
        note : 'Sunday dinner'
    }
    const action = addExpense(expenseData);
    expect(action).toEqual({
      type: "ADD_EXPENSE",
      expense: {
          ...expenseData,
          id: expect.any(String)
      }
    });
  });

  test("should add expense action object with default values", () => {
    const action = addExpense();
    expect(action).toEqual({
      type: "ADD_EXPENSE",
      expense: {
        description: "",
        note : "",
        amount : 0,
        createdAt : 0,
        id: expect.any(String)
        }
    });
  });