/*
 * Implement a linked list using the pseudoclassical instantiation pattern.
 *
 * Your linked list should have methods called "addToTail", "removeHead", and "contains."
 *
 */

// EXAMPLE USAGE:
// var list = new LinkedList();
// list.tail;         //yields 'null'
// list.addToTail(4);
// list.addToTail(5);
// list.head.value;   //yields '4';
// list.contains(5);  //yields 'true';
// list.contains(6);  //yields 'false';
// list.removeHead(); //yields '4'
// list.tail.value;   //yields '5';


var LinkedList = function(){
  this.head = null;
  this.tail = null;
};

var Node = function(value){
	this.value = value;
	this.next = null;
}

LinkedList.prototype.addToTail = function(value) {
	if(this.head===null){
		this.head = new Node(value);
		this.tail = new Node(value);
	}else{
		var pointer = this.head;
		while(pointer.next !== null){
			pointer = pointer.next;
		}
		pointer.next = new Node(value);
		this.tail = new Node(value); 
	}
};

LinkedList.prototype.removeHead = function() {
	var result = this.head.value;
	this.head = this.head.next;
	if(this.head === null){
		this.tail = null;
	}
	return result;

};

LinkedList.prototype.contains = function(target) {
  var pointer = list.head;
  while (pointer.next !== null){
    if (pointer.value===target){
      return true;
    }
    pointer = pointer.next
    if(pointer.value === target){return true;}
  }
  return false;
};