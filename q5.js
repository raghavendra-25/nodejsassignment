const tinyUrl = require('tinyurl');
const ObjectsToCsv = require('objects-to-csv');
const tinyurl = require('tinyurl');

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

function urlShortner(urls){
    for(let i=0;i<urls.length;i++){
         tinyUrl.shorten(urls[i], function(res, err) {
            if(err)
                console.log(err)
            //mp.set(urls[i],res);
            let newobj = {};
            newobj.url = urls[i];
            newobj.shortened=res;
            //console.log(res);
            //console.log(newobj);
            const csv = new ObjectsToCsv(new Array(newobj));
            csv.toDisk('./list.csv', { append: true });
        });
    }
}
urlShortner(urls);




