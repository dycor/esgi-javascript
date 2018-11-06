//ucfirst
var str = "Hello it's Dylan";
// var str = "yoda m Luke";

const ucfirst = function(str) {
  if(typeof (str) !== "string")
    return "";
  return str.charAt(0).toUpperCase() + str.slice(1);
}

//capitalize
const capitalize = function (str){
  if(typeof (str) !== "string")
    return "";
  return str.toLowerCase().replace( /\b./g, function(char){ return char.toUpperCase(); } );
};

//camelCase
const camelCase = function (str){
  if(typeof (str) !== "string")
    return "";
  return str.split(" ").map(a => ucfirst(a)).join("");
};

//snake_case
const snake_case = function (str){
  if(typeof (str) !== "string")
    return "";
  return str.split(" ").map(a => a.toLowerCase()).join("_");
};


//leet
const leet = function (str){
  if(typeof (str) !== "string")
    return "";
  const cryp = {
    a:"4",
    e:"3",
    i:"1",
    o:"0",
    u:"(_)",
    y:"7"
  };

  str = str.toLowerCase();
  for (i in keys = Object.keys(cryp)) {
    var regExp = new RegExp(eval('/'+keys[i]+'/g'));
    str = str.replace(regExp,cryp[keys[i]]);
  }
  return str;

};

//prop_access
const prop_access = function (str){
  if(typeof (str) !== "string")
    return "";
};

//verlan
const verlan = function (str){
  if(typeof (str) !== "string")
    return "";
  return str.split("").reverse().join("");
};

//yoda
const yoda = function (str){
  if(typeof (str) !== "string")
    return "";
  return str.split(" ").reverse().join(" ");
};

//vig
const vig = function (str){
  if(typeof (str) !== "string")
    return "";
  return str.split(" ").reverse().join(" ");
};


console.log(leet(str));