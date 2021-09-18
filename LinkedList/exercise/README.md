Exercises

1- Find the middle of a linked list in one pass.  
If the list has an even number of nodes, there would be two middle nodes. 
(Note: Assume that you don’t know the size of the list ahead of time.)  

Solution: LinkedList.printMiddle() 


2- Check to see if a linked list has a loop.Hint: use two pointers (slow and fast) to traverse the list. 

Move the slow pointer one step forward and the fast pointer two steps forward. If there’s a loop, at some point, the fast pointer will meet the slow pointer and overtake it. 

Draw this on a paper and see it for yourself. 

This algorithm is called Floyd’s Cycle-finding Algorithm.

Solution: LinkedList.hasLoop() 
