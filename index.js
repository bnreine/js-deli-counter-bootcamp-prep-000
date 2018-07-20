
function takeANumber(currentLine,name) {
  currentLine.push(name);
  return `Welcome, ${name}. You are number ${currentLine.length} in line.`
}

function nowServing(currentLineList) {
  if (currentLineList.length===0) {
    return `There is nobody waiting to be served!`;
  }
  else {
    var servingNow=currentLineList[0];
    currentLineList.shift();
    return `Currently serving ${servingNow}.`;
  }
}
  
 function currentLine(line) {
   if (line.length===0) {
     return "The line is currently empty.";
   }
   else {
     var message="The line is currently:"
     for (var i=0;i<(line.length-1);i++) {
       message.push(` ${i+1}. ${line[i]},`);
     }
     message.push(` ${line.length}. ${line[line.length-1]}`);
     return message;
   }
 } 


/*
describe('currentLine(line)', () => {
    it('returns "The line is currently empty." if no one is in line', () => {
      expect(currentLine([])).toEqual("The line is currently empty.");
    });

    it('says who is in line when there are people waiting', () => {
      expect(currentLine(["Bill", "Jane", "Ann"])).toEqual("The line is currently: 1. Bill, 2. Jane, 3. Ann");
    });
  });
})
*/





/*
## Instructions

A pretty important deli needs somebody to program the "Take a Number" feature for their counter.

At the beginning of the day, the deli is empty and is represented by an empty array, e.g.,

`var katzDeli = [];`

1. Build a function that a new customer will use when entering the deli. The function, `takeANumber`, should accept the current line of people, `katzDeliLine`, along with the new person's name as parameters. The function should return their position in line. And don't go being too programmer-y and give them their index. These are normal people. If they are 7th in line, tell them that. Don't get their hopes up by telling them they are number 6 in line.

2. Build a function `nowServing`. This function should return the first person in line and then remove that individual from the line. If there is nobody in line, it should return "There is nobody waiting to be served!"

3. Build a function `currentLine` that returns the current line. For example, if `katzDeliLine` is currently `["Ada", "Grace"]`, `currentLine(katzDeliLine)` would return `"The line is currently: 1. Ada, 2. Grace"`.  If there is nobody in line, it should return `"The line is currently empty."`
*/
