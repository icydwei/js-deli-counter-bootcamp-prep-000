function takeANumber (line, customername) {
  line.push(customername);
  var position = line.length
  return console.log(`Weclome, ${customername}. You are number ${position} in line.`)
}