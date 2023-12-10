const { NotImplementedError } = require("../extensions/index.js"); 
 
/** 
 * Implement the Stack with a given interface via arraloy. 
 * 
 * @example 
 * const stack = new Stack(); 
 * 
 * stack.push(1); // adds the element to the stack 
 * stack.peek(); // returns the peek, but doesn't delete it, returns 1 
 * stack.pop(); // returns the top element from stack and deletes it, returns 1 
 * stack.pop(); // undefined 
 * 
 */ 
 
 
module.exports =class Stack { 
 
constructor() 
{ 
  this.data =[]; 
} 
 
 
  push(value) { 
    this.data.push(value); 
    
  } 
 
  pop() { 
   return this.data.pop(); 
  } 
 
  peek() { 
  return this.data[this.data.length-1]; 
  } 
 
  size() 
  { 
    return this.data.length; 
  } 
}; 
 
/*const stack = new Stack(); 

stack.push('jalov'); 
stack.push('bunny'); 

console.log(stack);*/