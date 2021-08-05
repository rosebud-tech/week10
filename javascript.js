function spinalCase (str){
    str =str.split(" ");
     str=str.join("-");
     str=str.toLowerCase();
     return str;
   }
     console.log(spinalCase("I AM GOOD"));