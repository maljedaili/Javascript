console.log('landscape-portait');

function isLandscape(width, height){
    return (width > height)
}

let checkWidthHeight1 = isLandscape(800, 600);
console.log('Landscape:',checkWidthHeight1);

let checkWidthHeight2 = isLandscape(600, 800);
console.log('Landscape:',checkWidthHeight2);

let checkWidthHeight3 = isLandscape(1024, 768);
console.log('Landscape:',checkWidthHeight3);