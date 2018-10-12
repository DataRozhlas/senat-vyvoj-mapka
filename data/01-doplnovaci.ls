require! {
  fs
}
(err, files) <~ fs.readdir "#__dirname/../data/scrape"
out = {}
files.forEach (file) ->
  (err, body) <~ fs.readFile "#__dirname/../data/scrape/#file"
  lines = body.toString!split "\n"
  if lines[27].length <= 5
    console.log do
      file.split "." .0
