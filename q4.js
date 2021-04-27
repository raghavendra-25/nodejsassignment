const express = require('express');
let app = new express();
const https = require('https');
const fs = require('fs');
const request = require('request');

const port = process.env.PORT || 9989;

let imageCount = 0;
let folderCount = 0;
let dest='./imagefolder_';

app.get("/", async (req, res) => {
    let urls = [
        "https://doodleart.redbull.com/assets/managed/entries/processed/sm/367010617181759_36211000.jpg",
        "https://images.pexels.com/photos/1519753/pexels-photo-1519753.jpeg",
        "https://www.justcolor.net/wp-content/uploads/sites/1/nggallery/doodle-art-doodling/coloring-page-adults-doodle-art-rachel.jpg",
        "https://i.pinimg.com/originals/e5/55/a3/e555a39ca5457a079a9bcce59f61f8d5.jpg",
        "https://i.pinimg.com/originals/ef/4c/91/ef4c91fb73e61e19211a0589187ccaa6.jpg",
        "https://static.vecteezy.com/system/resources/previews/000/107/464/non_2x/huge-doodle-vector-pack.jpg",
        "https://i.ytimg.com/vi/O5u1apUkYV0/maxresdefault.jpg",
        "https://media.glassdoor.com/l/e9/c1/7a/84/independence-day-celebration.jpg"
    ];

    let actualDestination = dest + folderCount;


    urls.forEach((element, index) => {
        if (imageCount >= 5) {
            imageCount = 0;
            folderCount++;
            actualDestination = dest + folderCount;
        }
        
        console.log(actualDestination)

        if (fs.existsSync(actualDestination)) {
            console.log('The path exists.');
        } else {
            fs.mkdirSync(actualDestination, { recursive: true })
            console.log('Directory created: ', actualDestination)
        }

        imageCount++
        let destPath = ''
        let imageName = 'img_' + index + '.jpeg'
        destPath = actualDestination + '/' + imageName
        console.log('Downloading : ', imageName);
        download(element, destPath, imageName)

    });
});

// function download (url, dest, imageName) {
//     request(url).pipe(fs.createWriteStream(dest));
//     console.log('Downloaded: ' , imageName);
// }

async function download (url, dest, imageName) {
    var file = fs.createWriteStream(dest);
    https.get(url, function (response) {
        response.pipe(file);
        file.on('finish', function () {
            console.log('Downloaded: ' , imageName);
            file.close();
        });
    });
}

app.listen(port);
console.log('It is working')
