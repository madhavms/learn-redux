## Redux Example App

This is a React counter application created to understand the functionalities of 
Redux state management. 

## What is Redux?
It helps to understand what this "Redux" thing is in the first place. What does it do? What problems does it help me solve? Why would I want to use it?

Redux is a pattern and library for managing and updating application state, using events called "actions". It serves as a centralized store for state that needs to be used across your entire application, with rules ensuring that the state can only be updated in a predictable fashion.

## Why Should I Use Redux?
Redux helps you manage "global" state - state that is needed across many parts of your application.

The patterns and tools provided by Redux make it easier to understand when, where, why, and how the state in your application is being updated, and how your application logic will behave when those changes occur. Redux guides you towards writing code that is predictable and testable, which helps give you confidence that your application will work as expected.

## When Should I Use Redux?
Redux helps you deal with shared state management, but like any tool, it has tradeoffs. There are more concepts to learn, and more code to write. It also adds some indirection to your code, and asks you to follow certain restrictions. It's a trade-off between short term and long term productivity.

### Redux is more useful when:

You have large amounts of application state that are needed in many places in the app
The app state is updated frequently over time
The logic to update that state may be complex
The app has a medium or large-sized codebase, and might be worked on by many people

## What is a reducer:

Reducers are functions that take the current state and an action as arguments, and return a new state result. In other words, `(state, action) => newState.`

### Rules of Reducers

We said earlier that reducers must always follow some special rules:

They should only calculate the new state value based on the state and action arguments
They are not allowed to modify the existing state. Instead, they must make immutable updates, by copying the existing state and making changes to the copied values.
They must not do any asynchronous logic or other "side effects"

```
A "side effect" is any change to state or behavior that can be seen outside of returning a value from a function. Some common kinds of side effects are things like:

Logging a value to the console
Saving a file
Setting an async timer
Making an AJAX HTTP request
Modifying some state that exists outside of a function, or mutating arguments to a function
Generating random numbers or unique random IDs (such as Math.random() or Date.now())
```

Any function that follows these rules is also known as a "pure" function, even if it's not specifically written as a reducer function.

But why are these rules important? There's a few different reasons:

* One of the goals of Redux is to make your code predictable. When a function's output is only calculated from the input arguments, it's easier to understand how that code works, and to test it.
* On the other hand, if a function depends on variables outside itself, or behaves randomly, you never know what will happen when you run it.
* If a function modifies other values, including its arguments, that can change the way the application works unexpectedly. This can be a common source of bugs, such as "I updated my state, but now my UI isn't updating when it should!"
* Some of the Redux DevTools capabilities depend on having your reducers follow these rules correctly
The rule about "immutable updates" is particularly important, and worth talking about further.



## Data Flow
We can summarize the flow of data through a Redux app with this diagram. It represents how:

1. actions are dispatched in response to a user interaction like a click
2. the store runs the reducer function to calculate a new state
3. the UI reads the new state to display the new values

![alt text](https://github.com/madhavms/learn-redux/blob/master/src/images/ReduxDataFlowDiagram.gif)