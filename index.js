function takeANumber (line, customername) {
  line.push(customername);
  var position = line.length
  return (`Welcome, ${customername}. You are number ${position} in line.`)
}

function nowServing (line) {
  if (line.length > 0) {
    var customer = line[0];
    line.shift()
    return `Currently serving ${customer}.`
  }
  else {
    return "There is nobody waiting to be served!"
  }
}

function currentLine (line) {
  if (line.length > 0) {
    var message = ["The line is currently:"]
    var j = 0;
    if (j == (line.length - 1)) {
      var lineadd = (j+1, ". ", line[j])
      
    }
    return line
  } else return "The line is currently empty."
}