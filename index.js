function takeANumber (line, customername) {
  line.push(customername);
  var position = line.length
  return (`Welcome, ${customername}. You are number ${position} in line.`)
}

function nowServing (line) {
  if (line.length > 0)
}