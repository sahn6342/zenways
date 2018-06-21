const download = require('image-downloader')
 
// Download to a directory and save with the original filename
var options = {
  url: 'https://www.catster.com/wp-content/uploads/2017/08/A-fluffy-cat-looking-funny-surprised-or-concerned.jpg',
  dest: './'                  // Save to /path/to/dest/image.jpg
}
 
download.image(options)
  .then(({ filename, image }) => {
    console.log('File saeeeeved to', filename)
  })
  .catch((err) => {
    console.error(err)
  })
 
// Download to a directory and save with an another filename
options = {
  url: 'https://www.catster.com/wp-content/uploads/2017/08/A-fluffy-cat-looking-funny-surprised-or-concerned.jpg',
  dest: './'        // Save to /path/to/dest/photo.jpg
}
 
download.image(options)
  .then(({ filename, image }) => {
    console.log('File saved to', filename)
  })
  .catch((err) => {
    console.error(err)
  })

