class ListNode {
    data: string
    next: ListNode = null

    constructor(data: string) {
        this.data = data
    }
}


class LinkedList {
    head: ListNode = null

    add(data: string): void {
        const newNode = new ListNode(data)
        if (!this.head) {
            this.head = newNode
            return
        }

        let curr = this.head
        while (curr.next) {
            curr = curr.next
        }
        curr.next = newNode
    }

    remove(data: string): void {
        let curr = this.head
        if (curr.data === data) {
            this.head = curr.next
            return
        }
        while (curr.next && curr.next.data !== data) {
            curr = curr.next
        }
        curr.next = curr.next.next
    }

    print(): void {
        let curr = this.head
        const nodes: string[] = []
        while (curr) {
            nodes.push(curr.data)
            curr = curr.next
        }
        console.log(nodes.join(' -> '))
    }
}

const list = new LinkedList()
for (let i = 0; i < 10; i++) {
    list.add(`${i}`)
}
list.remove('5')
list.print()
