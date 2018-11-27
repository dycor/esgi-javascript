const type_check_v1 = function(val,type) {
  return typeof (val) === type;
};

console.log(type_check_v1("1","number"))