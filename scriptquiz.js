// let text = document.getElementById('text');
document.getElementById("number").onclick = addTextBox;

document.getElementById("text").onclick = addTextBox;

function addTextBox() {
  var textField = document.createElement("input");
  const submitBox = document.createElement("button");
  const sortBox = document.createElement("button");
  const addASortBox = document.createElement("button");
  const addReverseBox = document.createElement("button");
  const spliceBox = document.createElement("button");
  const shiftBox = document.createElement("button");

  textField.type = "text";
  textField.id = "textbox";
  textField.value = "";

  submitBox.innerHTML = "SUBMIT";
  submitBox.id = "btn";
  sortBox.innerHTML = "SORT";
  sortBox.id = "sort";

  addASortBox.innerHTML = "Add  & Asc. sort";
  addASortBox.id = "addSort";

  addReverseBox.innerHTML = "Add  & Desc. sort";
  addReverseBox.id = "addReverse";

  spliceBox.innerHTML = "Splice or Slice";
  spliceBox.id = "startSplice";

  shiftBox.innerHTML = "Shift or Unshift";
  shiftBox.id = "startShift";

  document.getElementById("display").appendChild(textField);
  document.getElementById("display").appendChild(submitBox);
  document.getElementById("display").appendChild(sortBox);
  document.getElementById("display").appendChild(addASortBox);
  document.getElementById("display").appendChild(addReverseBox);
  document.getElementById("display").appendChild(spliceBox);
  document.getElementById("display").appendChild(shiftBox);

  document.getElementById("btn").onclick = addArray;
  document.getElementById("sort").onclick = arraySort;
  document.getElementById("addSort").onclick = addSortArray;
  document.getElementById("addReverse").onclick = addReverse;
  document.getElementById("startSplice").onclick = addRemoveElement;
  document.getElementById("startShift").onclick = moveItems;
}

// var x = 0;
var cArray = [];
function addArray() {
  var list = "";
  // console.log("Hello");
  var showArray = document.createElement("p");
  showArray.id = "result";
  document.getElementById("display").appendChild(showArray);
  var num = document.getElementById("textbox").value;
  // cArray[x] = num
  cArray.push(num);
  console.log(cArray);

  var arrayLength = cArray.length;
  for (var y = 0; y < arrayLength; y++) {
    list += "Element " + y + " = " + cArray[y] + "<br/>";
  }
  document.getElementById("result").innerHTML = list;
  //  console.log(cArray);
}

function arraySort() {
  var sortContainer = document.createElement("p");
  sortContainer.id = "aSort";
  var dSortContainer = document.createElement("p");
  dSortContainer.id = "dSort";
  document.getElementById("display").appendChild(sortContainer);
  document.getElementById("display").appendChild(dSortContainer);
  var ascOrder = cArray.sort(function (a, b) {
    return a - b;
  });
  document.getElementById("aSort").innerHTML =
    "Ascending Order: " + ascOrder + "<br/>";
  var desOrder = cArray.reverse(function (a, b) {
    return a - b;
  });
  document.getElementById("dSort").innerHTML =
    "Descending Order: " + desOrder + "<br/>";
}

function addSortArray() {
  var addField = document.createElement("input");
  addField.type = "text";
  addField.id = "numberBox";
  addField.value = "0";
  var addBttn = document.createElement("button");
  addBttn.innerHTML = "Add and Sort";
  addBttn.id = "addAndSort";
  var addSortContainer = document.createElement("p");
  addSortContainer.id = "sortAdd";
  document.getElementById("display").appendChild(addField);
  document.getElementById("display").appendChild(addBttn);
  document.getElementById("display").appendChild(addSortContainer);
  document.getElementById("addAndSort").onclick = sortAsc;
  function sortAsc() {
    cArray.push(document.getElementById("numberBox").value);
    var aSort = cArray.sort(function (a, b) {
      return a - b;
    });
    document.getElementById("sortAdd").innerHTML = aSort;
  }
}

function addReverse() {
  var addField = document.createElement("input");
  addField.type = "text";
  addField.id = "numberBox";
  addField.value = "0";

  var addBttn = document.createElement("button");
  addBttn.innerHTML = "Add and Reverse";
  addBttn.id = "addAndReverse";

  var addSortContainer = document.createElement("p");
  addSortContainer.id = "reverseAdd";

  document.getElementById("display").appendChild(addField);
  document.getElementById("display").appendChild(addBttn);
  document.getElementById("display").appendChild(addSortContainer);
  document.getElementById("addAndReverse").onclick = sortDesc;

  function sortDesc() {
    cArray.push(document.getElementById("numberBox").value);
    document.getElementById("reverseAdd").innerHTML = cArray.sort(function (
      a,
      b
    ) {
      return b - a;
    });
  }
}

function addRemoveElement() {
  var addIndex = document.createElement("input");
  addIndex.type = "text";
  addIndex.id = "index";
  addIndex.placeholder = "Enter index";

  var elementsNo = document.createElement("input");
  elementsNo.type = "text";
  elementsNo.id = "noOfElements";
  elementsNo.placeholder = "Enter no. of elements";

  var elementsName = document.createElement("input");
  elementsName.type = "text";
  elementsName.id = "nameOfElements";
  elementsName.placeholder = "0";

  var spliceBttn = document.createElement("button");
  spliceBttn.innerHTML = "Splice";
  spliceBttn.id = "splice";

  var sliceBttn = document.createElement("button");
  sliceBttn.innerHTML = "Slice";
  sliceBttn.id = "slice";

  var container = document.createElement("p");
  container.id = "showArray";

  document.getElementById("display").appendChild(addIndex);
  document.getElementById("display").appendChild(elementsNo);
  document.getElementById("display").appendChild(elementsName);
  document.getElementById("display").appendChild(spliceBttn);
  document.getElementById("display").appendChild(sliceBttn);

  document.getElementById("display").appendChild(container);
  document.getElementById("splice").onclick = addItems;
  document.getElementById("slice").onclick = arrayNew;

  function addItems() {
    var index = parseInt(document.getElementById("index").value);
    var num = parseInt(document.getElementById("noOfElements").value);
    var element = document.getElementById("nameOfElements").value;
    var addedArray = element.split(",");
    console.log(addedArray);
    let sArray = cArray;
    console.log(sArray);
    let nArray = sArray.splice(index, num, addedArray);
    console.log(sArray);
    console.log(nArray);
    document.getElementById("showArray").innerHTML =
      "New Array: " + sArray + "<br/>" + "Removed items: " + nArray;
  }

  function arrayNew() {
    var index = parseInt(document.getElementById("index").value);
    var num = parseInt(document.getElementById("noOfElements").value);
    const pArray = cArray.slice(index, num);
    document.getElementById("showArray").innerHTML =
      "Old Array: " + cArray + "<br/>" + "New Array: " + pArray;
  }
}

function moveItems() {
  var addItem = document.createElement("input");
  addItem.type = "text";
  addItem.id = "item";
  addItem.placeholder = "Enter item";

  var shiftBttn = document.createElement("button");
  shiftBttn.innerHTML = "Shift";
  shiftBttn.id = "shift";

  var unshiftBttn = document.createElement("button");
  unshiftBttn.innerHTML = "unshift";
  unshiftBttn.id = "unshift";

  var container = document.createElement("p");
  container.id = "showArray";

  document.getElementById("display").appendChild(addItem);
  document.getElementById("display").appendChild(shiftBttn);
  document.getElementById("display").appendChild(unshiftBttn);
  document.getElementById("display").appendChild(container);

  document.getElementById("shift").onclick = removeFromFront;
  document.getElementById("unshift").onclick = addToFront;

  function removeFromFront() {
      cArray.shift()
    document.getElementById('showArray').innerHTML = cArray;
  }

  function addToFront(){
      var element = document.getElementById("item").value;
        cArray.unshift(element)
      document.getElementById('showArray').innerHTML = cArray;
  }
}
