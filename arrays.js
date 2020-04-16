var chocolateBars = ["snickers","hundred grand","kitkat","skittles"]


function addElementToBeginningOfArray(arrayName,newElement){
newArray = [newElement, ...arrayName]
return newArray
}

function destructivelyAddElementToBeginningOfArray(arrayName, newElement){
arrayName.unshift(newElement)
return arrayName
}

function addElementToEndOfArray(arrayName,newElement){
newArray = [...arrayName, newElement]
return newArray
}

destructivelyAddElementToEndOfArray
