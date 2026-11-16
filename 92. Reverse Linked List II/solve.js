

var reverseBetween = function(head, left, right) {
    if (!head || left === right || left > right) {
        return head;
    }

    const dummy = new ListNode(0, head);
    let prev = dummy;

    for (let i = 1; i < left; i++) {
        prev = prev.next;
    }

    let current = prev.next;

    for (let i = 0; i < right - left; i++) {
        const nextNode = current.next;
        current.next = nextNode.next;
        nextNode.next = prev.next;
        prev.next = nextNode;
    }

    return dummy.next;
};
