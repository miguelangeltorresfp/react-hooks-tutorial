# useReducer Hook

* This hook is for storing state and it's an alternative of the useState hook.

* useReducer parameters => the reducer function and the initial values for the parameters o a function that intialize them.

* reducer function paramters => the current state and the action.
  The action is the parameter passed when we call dispatch.

* We create the reducer function as an outside function that is pure.

* You can pass parameter to the action - ` dispatch({ type: "add-todo", text });`

* useReducer let you change multiple state values at the same call of the reducer function.

* Redux is recommended to deal with state across several components and useImer