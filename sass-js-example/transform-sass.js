var sass = require('sass');
var fs = require('fs');

var file = sass.renderSync({
    file: "styles.scss",
    sourceMap: true,
    outFile: "styles.css"
});

fs.writeFileSync('styles.css', file.css.toString());

