const type_check_v1 = function(val,type) {
  if(null === val)
    return true;

  if(type === "array")
    return Array.isArray(val)

  if(type === "function")
    return functionToCheck && {}.toString.call(functionToCheck) === '[object Function]';

  return typeof (val) === type;
};

// console.log(type_check_v1([1,2],"null"))