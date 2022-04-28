
const fs = require('fs');
const articlesList = JSON.parse( fs.readFileSync('src/pages_data/articles-list.json') );

addArticlesTo( 'src/pages_data/index-data.json' );
addArticlesTo( 'src/pages_data/articles-data.json' );

function addArticlesTo( jsonURL ) {
	const indexData = JSON.parse( fs.readFileSync( jsonURL ) );
	indexData.articles = articlesList;
	const data = JSON.stringify( indexData, null, 2 );
	fs.writeFileSync( jsonURL , data);
}