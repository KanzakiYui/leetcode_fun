const customLikedList = function(){
    // https://leetcode.com/problems/design-linked-list/

    const MyLinkedList = function() {
        this.link = [];
    };
    
    MyLinkedList.prototype.get = function(index) { 
        if(index < 0 || index >= this.link.length || index >= 1000)
            return -1
        return this.link[index]
    };
    
    MyLinkedList.prototype.addAtHead = function(val) {
        this.link.unshift(val)
    };
    
    MyLinkedList.prototype.addAtTail = function(val) {
        this.link.push(val)
    };
    
    MyLinkedList.prototype.addAtIndex = function(index, val) {
        if(index < 0 || index > 1000 || val < 0 || val > 1000)
            return
        this.link.splice(index, 0, val);
    };
    
    MyLinkedList.prototype.deleteAtIndex = function(index) {
        if(index < 0 || index > 1000)
            return
        this.link.splice(index, 1);
    };
}

export default customLikedList;