module.exports = function check(str, bracketsConfig) {
  let stack = [];
  for(let i = 0; i < str.length; i++){
      if(str[i] === '(' || str[i] === '[' || str[i] === '{' ){
        stack.push(str[i]);
      }
      if(str[i] === ')' && stack[stack.length - 1] === '('){
          stack.pop();
      }
      if(str[i] === '}' && stack[stack.length - 1] === '{'){
          stack.pop();
      }
      if(str[i] === ']' && stack[stack.length - 1] === '['){
          stack.pop();
      }
  }
  return stack.empty;
}
