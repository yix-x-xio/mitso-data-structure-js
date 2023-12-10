const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');
const a = new ListNode();
a.

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
module.exports =class Queue {
  constructor()
  {
    this.head = null;
    this.tail = null;
  }


 

  getUnderlyingList() {
    
   return this.head;
   
  }

  enqueue(value) {
    const newNode = {value, next : null};
     if(this.is_Empty())
     {
      this.head = newNode;
      this.tail = newNode;

     }
     else
     {
      this.tail.next = newNode;
      this.tail= newNode;
     }

  
  }

  dequeue() {
    if(this.is_Empty())
    {
      return null;
    }

    const dequeued_Node = this.head;
    this.head = this.head.next;

    if(this.is_Empty())
    {
      this.tail=null;
    }

    return dequeued_Node.value;


  
  }

  is_Empty()
  {
    return !this.head;
  }

}


/*const obj = new Queue();
obj.enqueue(1337);
obj.enqueue('popa');
obj.enqueue('pisya');
obj.enqueue('gggg');
obj.enqueue(228);

console.log(obj.getUnderlyingList());*/

/*for (; obj.head!=null; ) 
  {
 
    console.log(obj.dequeue());
  }*/

  






