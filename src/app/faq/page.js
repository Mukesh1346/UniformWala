import React from 'react'
import FAQ from '../Components/FAQ/Faq'



export default function page() {
  return (
    <div>
        <FAQ/>
    </div>
  )
}


/*

1. var

Definition:
var is the old way of declaring variables in JavaScript. It has function scope (not block scope), and variables declared with var are hoisted (moved to the top of their scope during execution).

Key Points:

Can be re-declared and updated.

Function-scoped, not block-scoped.

Hoisted (accessible before declaration, but value is undefined).

Example:

function exampleVar() {
  console.log(x); // undefined (hoisted)
  var x = 10;
  if (true) {
    var x = 20; // Same variable as above
    console.log(x); // 20
  }
  console.log(x); // 20
}
exampleVar();

2. let

Definition:
let is the modern way to declare variables in JavaScript. It has block scope and can be updated but cannot be re-declared in the same scope.

Key Points:

Block-scoped.

Can be updated but not re-declared in the same scope.

Hoisted but not accessible before declaration (temporal dead zone).

Example:

function exampleLet() {
  let y = 10;
  if (true) {
    let y = 20; // Different variable (block scope)
    console.log(y); // 20
  }
  console.log(y); // 10
}
exampleLet();

3. const

Definition:
const is used to declare constants — variables whose value cannot be reassigned after initialization. It also has block scope.

Key Points:

Must be initialized during declaration.

Block-scoped.

Value cannot be reassigned, but objects and arrays can be mutated.

Example:

const z = 10;
console.log(z); // 10

// z = 20; // ❌ Error: Assignment to constant variable

const obj = { name: "Mukesh" };
obj.name = "Ravi"; // ✅ Allowed (mutating object property)
console.log(obj.name); // "Ravi"

Quick Comparison Table
Feature	var	let	const
Scope	Function	Block	Block
Re-declaration	Yes	No	No
Update value	Yes	Yes	No (except objects/arrays)
Hoisting	Yes	Yes (TDZ)	Yes (TDZ)

✅ Summary (Easy Way to Remember):

Use var only if you need function-scoped variables (rarely nowadays).

Use let for variables that will change.

Use const for variables that should not change.

If you want, I can also make a small visual diagram showing the difference between var, let, and const — it makes it super easy to remember.

Do you want me to make that? */ 
