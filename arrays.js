var chocolateBars = ["snickers","hundred grand","kitkat","skittles"]


function addElementToBeginningOfArray(arrayName,newElement){
newArray = [newElement, ...arrayName]
return newArray
}

function destructivelyAddElementToBeginningOfArray(arrayName, newElement){
arrayName = arrayName.upshift(newElement)
return arrayName
}
