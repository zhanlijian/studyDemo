var fetch = require('node-fetch');

function* gen(){
  console.log(123)
  var url = 'https://api.github.com/users/github';
  var result = yield fetch(url);
  console.log(result.name);
}

var g = gen();
var result = g.next();

result.value.then(function(data){
  return data.json();
}).then(function(data){
  g.next(data);
});


function Point(x, y) {
    this.x = x;
    this.y = y;
    toString = ()=>{
      console.log('自身的' + this.x + ', ' + this.y + ')');
      }
  }
  
  Point.prototype.toString = function () {
    return '(' + this.x + ', ' + this.y + ')';
  };
  
  var p = new Point(1, 2);
  p.toString();