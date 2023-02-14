
const _items = new WeakMap();

class Stack {

    cnstructor() {
        _items.set(this, []);
    }

    push(obj) {
        _items.get(this).push(obj)
    }

    pop() {
        if (_items.get(this).length === 0) throw new Error(`Stack is empty.`);

        return _items.get(this).pop();
    }

    peek() {
        if (_items.get(this).length === 0)  throw new Error(`Stack is empty.`);

        return _items.get(this)[_items.get(this).length - 1];
    }

    get count() {
        return _items.get(this).length;
    }

}

const stack = new Stack();