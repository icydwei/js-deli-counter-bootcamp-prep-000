function takeANumber (line, customername) {
  line.push(customername);
  var position = line.length
  return (`Weclome, ${customername}. You are number ${position} in line.`)
}

function nowServing (line) {
  if (line.length > 0)
}