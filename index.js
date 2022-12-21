// code your solution here
const record = [
    { year: "2015", result: "W"},
    { year: "2014", result: "N/A"},
    { year: "2013", result: "L"},
    { year: "2012", result: "W"},
    { year: "2011", result: "N/A"},
    { year: "2010", result: "L"},
    //...
  ]
const superbowlWin = (array1) => {
  const win = array1.find((element)=>{
    return element.result === "W"
  })
  if (typeof win === "object") {
    return win.year
  }
};