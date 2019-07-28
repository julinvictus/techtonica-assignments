function calculate(num1, str, num2){
  let result;
  switch(str){
    case "+": 
    	result = num1 + num2; 
    	break;
    case "-": 
    	result = num1 - num2; 
    	break;
    case "*": 
    	result = num1 * num2; 
    	break;
    case "/": 
    	result = num1 / num2; 
    	break;
    case "%": 
    	result = num1 % num2; 
    	break;
  }
  return result;
}
calculate(3, '*', 7);