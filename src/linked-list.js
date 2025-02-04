const Node = require('./node');

class LinkedList {
    constructor() {
        this._head = null;
        this._tail = null;
        this.length = 0;
    }

    append(data) {
        const newNode = new Node();
        newNode.data = data;

        if(this.length === 0) {
            this._head = newNode;
            this._tail = newNode;
        } else {
            this._tail.next = newNode;
            newNode.prev = this._tail;
            this._tail = newNode;
        }

        this.length++;

        return this;
    }

    head() {
        if(this.length != 0) {
            return this._head.data;
        } else {
            return null;
        }
    }

    tail() {
        if(this.length != 0) {
            return this._tail.data;
        } else {
            return null;
        }
    }

    at(index) {
        if(this.length === 0) {
            return null;
        }

        if(index < 0 || this.length <= index) {
            return false;
        }

        let current = this._head;;
        let position = 0;

        while(position < index) {
            current = current.next;
            position++;
        }

        return current.data;
    }

    insertAt(index, data) {
        if(index < 0 || this.length < index) {
            return false;
        }

        let newNode = new Node();
        newNode.data = data;

        if(index === 0) {
            newNode.next = this._head;
            this._head.prev = newNode;
            this._head = newNode;
        } else if (index === this.length) {
            this._tail.next = newNode;
            newNode.prev = this._tail;
            this._tail = newNode;
        } else {
            let current = this._head;
            let prev = null;
            let position = 0;

            while(position < index) {
                prev = current;
                current = current.next;
                position++;
            }

            prev.next = newNode;
            newNode.prev = prev;
            newNode.next = current;
            current.prev = newNode;
        }

        this.length++;
        return this;
    }

    isEmpty() {
        if(this.length === 0) {
            return true;
        } else {
            return false;
        }
    }

    clear() {
        this._head = null;
        this._tail = null;
        this.length = 0;

        return this;
    }

    deleteAt(index) {
        if(this.length === 0) {
            return false;
        }

        if(index < 0 || this.length <= index) {
            return null;
        }

        let current;

        if(index === 0) {
            current = this._head;
            this._head = this._head.next;
            this._head.prev = null;
        } else if(index === this.length - 1) {
            current = this._tail;
            this._tail = this._tail.prev;
            this._tail.next = null;
        } else{
            current = this._head;
            let prev = null;
            let position = 0;

            while(position < index) {
                prev = current;
                current = current.next;
                position++;
            }

            prev.next = current.next;
            current.next.prev = prev;
        }

        return this;
    }

    reverse() {
        let current = this._head;
        this._head = this._tail;
        this._tail = current;

        for(let i = 0; i < this.length; i++) {
            let buffer = current.next;
            current.next = current.prev;
            current.prev = buffer;

            current = current.prev;
        }

        return this;
    }

    indexOf(data) {
        if(this.length === 0) {
            return false;
        }

        let current = this._head;
        
        for(let i = 0; i < this.length; i++) {
            if(current.data === data) {
                return i;
            } else {
                current = current.next;
            }
        }

        return -1;
    }
}

module.exports = LinkedList;
