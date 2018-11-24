function getName(node){
  return node.name
}

function headNode(linkedList, collection){
  return collection[linkedList]
}

function next(node){
  let newAddress = node.next
  return collection[newAddress]
}

function indexAt(node, collection, linkedList) {
  let currentNode = headNode(linkedList, collection); 
  let currentIndex = 0 
  while (currentNode != node){
    currentIndex++
    currentNode = next(currentNode, collection)
  }
  return currentIndex
}