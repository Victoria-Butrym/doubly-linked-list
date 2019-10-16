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
        // if(index < 0 || this.length < index) {
        //     return false;
        // }

        // let newNode = new Node();
        // newNode.data = data;

        // if(index === 0) {
        //     newNode.next = this._head;
        //     this._head.prev = newNode;
        //     this._head = newNode;
        // } else if (index === this.length - 1) {
        //     newNode.prev = this._tail;
        //     this._tail.next = newNode;
        //     this._tail = newNode;
        // } else {
        //     let current = this._head;
        //     let position = 0;

        //     while(position < index) {
        //         prev = current;
        //         current = current.next;
        //         position++;
        //     }

        //     prev.next = newNode;
        //     newNode.prev = prev;
        //     newNode.next = current;
        //     current.prev = newNode;
        // }

        // this.length++;
        // return this;
    }

    isEmpty() {
        if(this.length === 0) {
            return true;
        } else {
            return false;
        }
    }

    clear() {}

    deleteAt(index) {}

    reverse() {}

    indexOf(data) {}
}

module.exports = LinkedList;
