## What happens when you run javascript code

### Summary

1. Whenever any javascript code is executed. an **execution context** is created. it is called as **global execution context**.
2. An execution context is basically a box which has two components.
   - 1. Memory Component (Variable Environment)
   - 2. Code component (Thread of execution).
3. Memory creation phase
   - In this phase, memory is allocated to all the **variables** and **functions** which are present in **global scope**.
   - Special keyword **Undefined** in case of variables and **whole function** in case of function
4. Code execution Phase
   - In this phase **code is executed line by line.**
5. Whenever there is function invocation. an all new execution context is created and same process is followed again.
6. if there is any **function parameters**. then it is also allocated memory while creating the execution context of the function.
7. Whenever **return keyword** is encountered, it means the task of function is over and it returns back the control of the program. and back to the place **where it was invoked**. after that execution context is **deleted from stack**
8. **call stack**
   - is basically a stack which maintains the **order of execution of execution context**.
   - whenever a code is executed the global execution context is pushed into the stack first and later
     on as per the function invocation the execution context is pushed into the stack.
   - When function code is done execution the execution context is popped out and last the execution
     context also deleted.
