# LinkedList Implementation in TypeScript

This repository contains a simple implementation of a singly linked list in TypeScript.

## Classes

### ListNode

Represents a node in the linked list.

#### Properties
- `data: string` - The data stored in the node.
- `next: ListNode` - The reference to the next node in the list.

#### Constructor
- `constructor(data: string)` - Initializes a new node with the given data.

### LinkedList

Represents the linked list.

#### Properties
- `head: ListNode` - The head node of the list.

#### Methods
- `add(data: string): void` - Adds a new node with the given data to the end of the list.
- `remove(data: string): void` - Removes the first node with the given data from the list.
- `print(): void` - Prints the list in a readable format.

## Usage

```typescript
const list = new LinkedList();
for (let i = 0; i < 10; i++) {
    list.add(`${i}`);
}
list.remove('5');
list.print();
