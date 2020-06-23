export const toBinary = (number) => {

    let result = 0;
    let i = 0;
  
    /*
        Loop through the number by dividing it by 2 until we reach 1 or below
    */
    while(number >= 1) {
      let reminder = number % 2;
      if (reminder) {
        /* 
      If the reminder is 1 we add it to the power of 10 to get the 
      place value. ie. 100, 1000 ... 
        */
        result += Math.pow(10, i);
      }
      /* 
      Increment the i value
      Reduce the number by dividing it by 2
      */
      i++;
      number = Math.floor(number / 2);
    }
  
    return result;
}


export const toDecimal = (number) => {

    let result = 0;
    let i = 0;
  
    /*
       Loop through the number by dividing it by 10 until we reach 0 or below
    */
    while(number > 0) {
      let reminder = number % 10;
      if (reminder) {
        /* 
            Get the last digit of the binary number and if it is 1,
            then add it to the result by 2 to the power of the i.
        */
        result += Math.pow(2, i);
      }
      /*
         Increment the i in every iteration.
         reduce the number by 10.
      */
      i++;
      number = Math.floor(number / 10);
    }
    return result;
}