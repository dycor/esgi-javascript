const type_check_v1 = function(val,type) {
  if(null === val) {
    if(type === "null")
      return true;
    return false;
  }

  if(type === "array") {
      return Array.isArray(val);
  }

  if(type === "function")
    return val && {}.toString.call(val) === '[object Function]';

  if(type === "object")
    if(Array.isArray(val))
      return false;

  return typeof (val) === type;
};

const type_check_v2 = function(val,condition) {
  if(type_check_v1(val,"object")){

  } else {
    if(condition.type)
      return type_check_v1(condition.type);
  }
  return false;
};

// console.log(type_check_v2({prop1: 1},{type:"object"}))
// console.log(type_check_v2("foo",{type:"string",value:"foo"}))
// console.log(type_check_v2("bar",{type:"string",value:"foo"}))
// console.log(type_check_v2(3,{enum:["foo","bar",3]}))

// console.log(type_check_v1(null,"object"))
console.log(type_check_v1([1,2,3],"object"))