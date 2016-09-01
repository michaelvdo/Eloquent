# Ch. 2

## Expressions and statements
A fragment of code that produces a value is called an *expression*. Every value that is written literally is an expression, as are expressions between parentheses, unary, binary and ternary operators.

Where an expression can be seen as part of a sentence, a *statement* is a full sentence. Usually, a statement is any combination of expressions, terminated by a semicolon.

## Variables
A variable statement points a name to a value, after which the variable can be used as an expression in other statements. You can also change the value of the variable later on.

When you define a variable without giving it a value, it will simply stay empty. If you prompt the variable for its value, it will return `undefined`.

## Keywords and reserved words
Some words cannot be used as variable names. See [here](http://mdn.beonex.com/en/JavaScript/Reference/Reserved_Words.html) for more info.

## The environment
The collection of variables and their values that exist at a given time is called the *environment*. The environment doesn't start empty.

## Functions
One type of variable is a *function*. A function can be *invoked*, *called* or *applied* (they all mean the same thing). You call a function by adding parentheses after an expression (e.g. `alert`) that produces a function value (creating `alert()`). Usually you will use the function's name directly. The value(s) in the parentheses are given to the function as *arguments*.

## Return values
When a function produces a value, it is said to *return* that value. Anything that produces a value is an expression in javascript, which means function calls can be used within larger expressions, like so: `console.log(Math.min(2, 4) + 100)` produces `102`.

## Conditional execution
There are several ways in which you can execute pieces of code conditionally. For this, you can use `if`, `else if` and `else`, `while`, `do`, and `for`. You can break out of a loop using `break`, or you can jump to a new iteration of the loop using `continue`.

## Updating variables succinctly
`a = a + 1;` is equivalent to `a += 1;`, which is equivalent to `a++;`.
