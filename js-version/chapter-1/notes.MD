# Ch. 1

Javascript has 4 distinct value types.

## Numbers
Numbers are simply represented as numbers, like `13`, `9.81` or `2.998e8`. Basic arithmetic can be applied to numbers, including the remainder operator `%`.


`Infinity` and `-Infinity` are also numbers, as is `NaN`.

## Strings
Strings represent text, surrouded by quotes like `"this bit of text"`.


(\\) escapes the next character. Using this, you can add newlines (\n), tabs (\t) and quotes (\") to a string.

(+) can be used to concatenate strings. `"this is a con" + "catenated string"` produces `"this is a concatenated string"`.

## Unary operator
`typeof` is a unary operator in that it only takes one value and produces a result. For instance, `console.log(typeof "x") --> "string"`.

## Boolean values
Javascript has two boolean values: `true` and `false`.

### Comparisons
Comparing different values with the binary operators `>`, `<`, `<=`, `>=`, `===` or `!==` produces boolean values. Note that `NaN === NaN` produces `false` since `NaN` denotes the result of a nonsensical operation. Therefore, it can't possibly be equal to the result of any other nonsensical operation.

### Logical operators
Use `&&` as the logical operator AND, use `||` as the logical operator OR, and use `!==` as the logical operator NOT.

`expr1 && expr2` returns `expr1` if it can be converted to false. If not, it returns `expr2`. `expr1 || expr2` returns `expr1` if it can be converted to true. If not, it returns `expr2`. In both cases, the operators effectively return *truthy* and *falsy* values rather than strict Boolean values. Also, both the `&&` and `||` operators are processed in a short-circuited manner. With `||`, if `expr1` evaluates to `true`, it returns that and never evaluates `expr2`. The same goes for `&&` and `expr1` evaluating to `false`. Lastly, the `!==` operator returns an actual Boolean value.

There is also a *ternary* operator that takes 3 values. It takes the form of `expr1 ? 1 : 2`. It returns the value before the colon in case `expr1` evaluates to true. If not, it returns the value after the colon. You can use the ternary operator to assign variables: `var a = Math.Pi > 4 ? "true" : "false";`.

## Undefined values
`null` and `undefined` denote the absence of a meaningful value.

## Automatic type conversion
When an operator is applied to the wrong type of value, javascript will quietly convert that value to the type it wants. This is called *type coercion*. When comparing values using `==`, type conversion is applied when possible before the values are compared. When comparing values using `===`, this is not done. It is recommended to use `===` to prevent unexpected type conversions from happening.
