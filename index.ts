class TNode<T>{
    value: T;
    next: TNode<T> | null;

    constructor(value: T) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList<T> {
    private head: TNode<T> | null;

    constructor(head?: TNode<T>) {
        this.head = head ?? null;
    }

    add(value: TNode<T>): void {
        let current = this.head;

        if(!current) {
            this.head = value;
        } else {
           while(current.next !== null) {
            current = current.next;
           }
           current.next = value;
        }
    }

    display(): T[] {
        let current = this.head;
        if (current === null) {
            return []
        }

        const nodeValues: T[] = [];

        while (current.next !== null) {
            nodeValues.push(current.value);
            current = current.next
        }

        nodeValues.push(current.value)

        return nodeValues;
    }
}

const head = new TNode(1)
const second = new TNode("Holla")
const third = new TNode(3)
const fourth = new TNode(4)
const fifth = new TNode("five")

const linkedList = new LinkedList<number | string>()
linkedList.add(head)
linkedList.add(second)
linkedList.add(third)
linkedList.add(fourth)
linkedList.add(fifth)

console.log(linkedList.display())
