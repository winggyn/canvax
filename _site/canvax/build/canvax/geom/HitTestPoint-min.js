define("canvax/geom/HitTestPoint",["canvax/core/Base","canvax/geom/Math"],function(a,b){function c(b,c){var g=c.x,h=c.y;if("bitmap"==b.type)return!0;if(!b||!b.type)return!1;var i=b.type,j=d(i,b,g,h);if("undefined"!=typeof j)return j;if("beziercurve"!=i&&b.buildPath&&a._pixelCtx.isPointInPath)return e(b,a._pixelCtx,g,h);if(a._pixelCtx.getImageData)return f(b,g,h);switch(i){case"droplet":return!0;case"ellipse":return!0;default:return!1}}function d(a,b,c,d){switch(a){case"line":return i(b.context,c,d);case"brokenLine":return j(b,c,d);case"text":return!0;case"rect":return!0;case"circle":return l(b,c,d);case"ellipse":return n(b,c,d);case"sector":return m(b,c,d);case"path":return p(b,c,d);case"polygon":case"isogon":return o(b,c,d);case"image":return!0}}function e(a,b,c,d){var b=a.context;return b.beginPath(),a.buildPath(b,b),b.closePath(),b.isPointInPath(c,d)}function f(b,c,d){var e=b.context,f=a._pixelCtx;f.save(),f.beginPath(),a.setContextStyle(f,e.$model),f.transform.apply(f,b.getConcatenatedMatrix().toArray()),f.clearRect(b._rect.x-10,b._rect.y-10,b._rect.width+20,b._rect.height+20),b.draw(f,e),f.globalAlpha=1,b.drawEnd(f),f.closePath(),f.restore();var h=b.getConcatenatedMatrix();if(h){var i=h.clone(),j=[c,d];i.mulVector(j,[c,d,1]),c=j[0],d=j[1]}return g(f,c,d)}function g(a,b,c,d){var e;"undefined"!=typeof d?(d=Math.floor((d||1)/2),e=a.getImageData(b-d,c-d,d+d,d+d).data):e=a.getImageData(b,c,1,1).data;for(var f=e.length;f--;)if(0!==e[f])return!0;return!1}function h(a,b,d){return!c(a,b,d)}function i(a,b,c){var d=a.xStart,e=a.yStart,f=a.xEnd,g=a.yEnd,h=a.lineWidth,i=0,j=d;if(d===f)return Math.abs(b-d)<=h/2;i=(e-g)/(d-f),j=(d*g-f*e)/(d-f);var k=(i*b-c+j)*(i*b-c+j)/(i*i+1);return h/2*h/2>=k}function j(a,b,c){for(var d,e=a.context,f=e.pointList,g=!1,h=0,j=f.length-1;j>h&&(d={xStart:f[h][0],yStart:f[h][1],xEnd:f[h+1][0],yEnd:f[h+1][1],lineWidth:e.lineWidth},!k({x:Math.min(d.xStart,d.xEnd)-d.lineWidth,y:Math.min(d.yStart,d.yEnd)-d.lineWidth,width:Math.abs(d.xStart-d.xEnd)+d.lineWidth,height:Math.abs(d.yStart-d.yEnd)+d.lineWidth},b,c)||!(g=i(d,b,c)));h++);return g}function k(a,b,c){return b>=a.x&&b<=a.x+a.width&&c>=a.y&&c<=a.y+a.height?!0:!1}function l(a,b,c,d){var e=a.context;return!d&&(d=e.r),d*d>b*b+c*c}function m(a,c,d){var e=a.context;if(!l(a,c,d)||e.r0>0&&l(a,c,d,e.r0))return!1;var f=b.degreeTo360(e.startAngle),g=b.degreeTo360(e.endAngle),h=b.degreeTo360(Math.atan2(d,c)/Math.PI*180%360),i=!0;(f>g&&!e.clockwise||g>f&&e.clockwise)&&(i=!1);var j=[Math.min(f,g),Math.max(f,g)],k=h>j[0]&&h<j[1];return k&&i||!k&&!i}function n(a,b,c){var d,e=a.context,f={x:0,y:0},g=e.hr,h=e.vr,i={x:b,y:c};return i.x-=f.x,i.y-=f.y,i.x*=i.x,i.y*=i.y,g*=g,h*=h,d=h*i.x+g*i.y-g*h,0>d}function o(a,b,c){var d,e,f,g=a.context?a.context:a,h=g.pointList,i=h.length,j=!1,k=!0;for(d=0;i>d;++d)if(h[d][0]==b&&h[d][1]==c){k=!1,j=!0;break}if(k)for(k=!1,j=!1,d=0,e=i-1;i>d;e=d++)if(h[d][1]<c&&c<h[e][1]||h[e][1]<c&&c<h[d][1]){if(b<=h[d][0]||b<=h[e][0])if(f=(c-h[d][1])*(h[e][0]-h[d][0])/(h[e][1]-h[d][1])+h[d][0],f>b)j=!j;else if(b==f){j=!0;break}}else if(c==h[d][1]){if(b<h[d][0]){h[d][1]>h[e][1]?--c:++c;break}}else if(h[d][1]==h[e][1]&&c==h[d][1]&&(h[d][0]<b&&b<h[e][0]||h[e][0]<b&&b<h[d][0])){j=!0;break}return j}function p(a,b,c){for(var d=a.context,e=d.pointList,f=!1,g=0,h=e.length;h>g&&!(f=o({pointList:e[g]},b,c));g++);return f}var q={};return q={isInside:c,isOutside:h}});