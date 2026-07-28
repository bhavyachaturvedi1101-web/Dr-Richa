const fs = require('fs');
const https = require('https');

const html = fs.readFileSync('pin.html', 'utf8');
const mp4Regex = /https:\/\/[^"'\s]*\.mp4/gi;
const matches = html.match(mp4Regex);

if (matches && matches.length > 0) {
  // Find highest quality or just the first unique one
  const uniqueUrls = [...new Set(matches)];
  console.log('Found video URLs:', uniqueUrls);
  
  // Download the first one
  const url = uniqueUrls[0];
  console.log(`Downloading ${url}...`);
  
  const file = fs.createWriteStream('./public/pinterest-video.mp4');
  https.get(url, function(response) {
    response.pipe(file);
    file.on('finish', function() {
      file.close(() => {
        console.log('Download complete.');
      });
    });
  }).on('error', function(err) {
    fs.unlink('./public/pinterest-video.mp4', () => {});
    console.error('Error downloading:', err.message);
  });
} else {
  console.log('No .mp4 URLs found in pin.html');
}
