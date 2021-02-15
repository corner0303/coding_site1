 
var images = document.getElementsByTagName('img');
var loadRatioArea = document.getElementById('loadRatioArea');
var loadingArea = document.getElementById('loading');
 
var imgLen = images.length;
var oneLoadRatio = 100 / imgLen;
var loadRatio = 0;
 
for (var i = 0; i < imgLen; i++) {
    images[i].onload = function() {
        loadRatio = loadRatio + oneLoadRatio;
        loadRatioArea.innerHTML = Math.round(loadRatio);
        if(loadRatio >= 100) {
            loadingArea.classList.add('loadingNone');
        }
    }
}

