
exports.getDate = function(){
let date = new Date();
let dateFormat = {
  weekday: 'long',
  month: 'long',
  day: 'numeric'
}
return date.toLocaleDateString("en-US", dateFormat);
}


exports.getDay = function(){
let date = new Date();
let dateFormat = {
  weekday: 'long'
}
return date.toLocaleDateString("en-US", dateFormat);
}
