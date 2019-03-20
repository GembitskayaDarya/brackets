module.exports = function check(str, bracketsConfig) {
  let stack = [];
  for(let i = 0; i < str.length; i++){

      if(stack.length === 0){
          stack.push(str[i]);
      }
      else
    for( let j = 0; j < bracketsConfig.length; j++) {
        if (bracketsConfig[j][0] === bracketsConfig[j][1]) {
            if (str[i] === bracketsConfig[j][0] && stack[stack.length - 1] === bracketsConfig[j][0]) {
                stack.pop();
            } else if (str[i] === bracketsConfig[j][0]) {
                stack.push(str[i]);
                break;
            }
        }
        else if (str[i] === bracketsConfig[j][0]) {
            stack.push(str[i]);
            //stack[i] = bracketsConfig.find(bracketsConfig[j][1] === bracketsConfig[j][0]);

        }

          if (str[i] === bracketsConfig[j][1] && stack[stack.length - 1] === bracketsConfig[j][0]) {
            stack.pop();

        }




    }

      if(str === '5555512575557777777555566667888888667661133833448441111222233333444442266666')
          console.log(stack);
  }

  return stack.length === 0;
}
