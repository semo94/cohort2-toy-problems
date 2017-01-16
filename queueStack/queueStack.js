/**
  * Write a stack using your preferred instantiation pattern. Once you're done,
  * implement a queue using two stacks.
  */

 /**
   * Stack Class
   */
 var Stack = function() {
  this.stack=[];

   // add an item to the top of the stack
   this.push = function(value){
   	this.stack.push(value);
   };

   // remove an item from the top of the stack
   this.pop = function(){
   	(this.size() > 0) ? this.stack.pop() : "empty stack";
   };

   // return the number of items in the stack
   this.size = function(){
   	return this.stack.length;
   };
 };

 /**
   * Queue Class
   */
 var Queue = function() {
   // Use two `stack` instances to implement your `queue` Class
   var inbox = new Stack();
   var outbox = new Stack();

   // called to add an item to the `queue`
   this.enqueue = function(value){
   	inbox.push(value);
		 
   };

   // called to remove an item from the `queue`
   this.dequeue = function(){
   	if (inbox.size() > 0){
   		while(inbox.size() > 1){
	   		outbox.push(inbox.pop());
	   	}
	   	inbox.pop();
	   	while(outbox.size() !== 0){
	   		inbox.push(outbox.pop());
	   	}
   	}
   };

   // should return the number of items in the queue
   this.size = function(){
   	return inbox.size();
   };
 };