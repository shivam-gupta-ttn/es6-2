class Node{
    constructor(val){
      this.val = val;
      this.next = null;
      this.previous=null;
    
    }
  
  }
  
  class SinglyLinkedList{
      constructor(){
        this.head = null
        this.tail = null
        this.length = 0
      }

      size() { return this.length; }

      addFirst(val){
		var node = new Node(val);
		if (this.head === null) {
			this.head = node;
			this.tail = this.head;
		} else {
			node.next = this.head;
			this.head.previous = node;
			this.head = node;
		}
		this.length++;
	}
      addLast(val){
		var node = new Node(val);
		if (this.head === null) {
			this.head = node;
			this.tail = this.head;
		} else {
			this.tail.next = node;
			node.previous = this.tail;
			this.tail = node;
		}
		this.length++;
	}

	getFirst() {
		var current = this.head;
		document.write("HEAD: ");
		while (current) {
			document.write(current.val);
			if (current.next !== null) { document.write(" -> "); }
			current = current.next;
		}
		document.write(" :TAIL<br />");
	
    }
    getLast(){
        var current = this.tail;
		document.write("TAIL: ");
		while (current) {
			document.write(current.val);
			if (current.previous !== null) { document.write(" <- "); }
			current = current.previous;
		}
		document.write(" :HEAD<br />");
    }
    removeLast() {
		var node = this.tail;
		this.tail = this.tail.previous;
		this.tail.next = null;
		this.length--;
		return node;
	}
	
	removeFirst() {
		var node = this.head;
		this.head = this.head.next;
		this.head.previous = null;
		this.length--;
		return node;
	}
  }
  stack = new SinglyLinkedList();
  stack.addFirst("Alpha");
  stack.addFirst("Bravo");
  stack.addLast(5);
  stack.addFirst("Charlie");
  stack.addLast("Delta");
  
  document.write("" + stack.size() + "<br />");
  stack.getFirst();
  stack.getLast();
  
  stack.removeLast();
  stack.removeFirst();
  stack.getFirst();
  document.write("" + stack.size() + "<br />");
  
