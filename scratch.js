const dumpster = require('./src')
const drop = require('./src/lib/drop-db')

// const path = '/Users/spencer/data/wikipedia/simplewiki-latest-pages-articles.xml'
// const path = '/Users/spencer/data/wikipedia/eswiki-latest-pages-articles.xml'
// const path = '/Users/spencer/data/wikipedia/enwiki-latest-pages-articles.xml'
// const path = './tests/smallwiki-latest-pages-articles.xml'
// const path = './tests/tinywiki-latest-pages-articles.xml'
// const dbName = path.match(/\/([a-z-]+)-latest-pages/)[1]
let dbName = 'plainwiki'
let options = {
  file: './tests/tinywiki-latest-pages-articles.xml',
  db: dbName,
  plaintext: true,
  html: true,
  markdown: true,
}
//delete all pages
drop(options).then(() => {
  dumpster(options)
})


//      half-               6021472
// Euston Road            - 5888070
//Turquoise-browed motmot - 9030127
//Holyoke, Massachusetts  - 9030314
//Jacobabad District     -  2765854
//Tubize                 -  2833911
//Ribes, Ardèche         -  2911022
//Saint-Germain-l'Aiguill - 3490581
//Adolphe-Marie Hardy     - 5958564
//White Hart Lane railway - 4146036
//List of cities in Somal-  7925458
//Computer data storage  -  8852258
// end           -         12042945

// 604084071
// worker #0 : 0→154021017
// worker #1 : 150021017→304042034
// worker #2 : 301042034→455063051
// worker #3 : 452063051→606084068
