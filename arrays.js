var chocolateBars = ["snickers","hundred grand","kitkat","skittles"]


function addElementToBeginningOfArray(arrayName,newElement){
newArray = [newElement, ...arrayName]
return newArray
}
