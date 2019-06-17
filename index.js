function takeANumber (line, customername) {
  line.push(customername);
  var position = line.length
  console.log(`Weclome, ${customername}. You are number ${position} in line.`)
}