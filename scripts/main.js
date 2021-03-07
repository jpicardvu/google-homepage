let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/website-drawing-scan.png') {
      myImage.setAttribute('src','images/test.png');
    } else {
      myImage.setAttribute('src','images/website-drawing-scan.png');
    }
}