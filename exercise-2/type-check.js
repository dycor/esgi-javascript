const type_check_v1 = function(val,type) {
  if(type ===  "undifined")
    return val === undefined;

  if(null === val) {
    return type === "null";
  }

  if(type === "array") {
      return Array.isArray(val);
  }

  if(type === "object")
    if(Array.isArray(val))
      return false;

  return typeof (val) === type;
};

const type_check_v2 = function(val,condition) {

  var verified = true;

  if(condition.type)
    verified = verified && type_check_v1(val,condition.type);

  if(condition.value)
    verified = verified && (val === condition.value);

  if(condition.enum){
    var found =false;

    condition.enum.map(enumVal =>{
      if(val === enumVal)
        found = true;
    });
    verified = verified && found;
  }


  return verified;
};
// console.log(typeof (type_check_v2))
console.log(type_check_v2({prop1: 1},{type:"object"}))
console.log(type_check_v2("foo",{type:"string",value:"foo"}))
console.log(type_check_v2("bar",{type:"string",value:"foo"}))
console.log(type_check_v2(3,{enum:["foo","bar",3]}))

// console.log(type_check_v1(type_check_v2,"function"))

// [1,2,3].map(a => console.log(a))
// console.log(type_check_v1([1,2,3],"object"))