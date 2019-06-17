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
    return line
  }
}