function getName(node){
  return node.name
}

function headNode(linkedList, collection){
  return collection[linkedList]
}

function next(node, collection){
  let newAddress = node.next
  return collection[newAddress]
}

function nodeAt(index, linkedList, collection){
  let currentNode = headNode(linkedList, collection)
  for (let i=0; i<index; i++){
    currentNode = next(currentNode, collection)
  }
  return currentNode
}

function addressAt(index, linkedList, collection){
  let current
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