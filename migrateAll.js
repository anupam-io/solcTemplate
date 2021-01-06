// https://stackoverflow.com/a/50559862/12552972

const fs = require('fs')
const exec = require('child_process').exec

const async = require('async') // npm install async 

const scriptsFolder = './migrate/' // add your scripts to folder named scripts

const files = fs.readdirSync(scriptsFolder) // reading files from folders
const funcs = files.map(function(file) {
  return exec.bind(null, `node ${scriptsFolder}${file}`) // execute node command
})

function getResults(err, data) {
  if (err) {
    return console.log(err)
  }
  const results = data.map(function(lines){
    return lines.join('');
  })

  for(var i = 0; i<results.length; i++){
    console.log(results[i])
  }
}

// to run your scipts in parallel use
// async.parallel(funcs, getResults)

// to run your scipts in series use
async.series(funcs, getResults)