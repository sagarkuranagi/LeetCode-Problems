/**
 * @param {number} turnedOn
 * @return {string[]}
 */
var readBinaryWatch = function(turnedOn) {
   const result = [];

   for(let hour=0; hour<12; hour++){
    for(let minute = 0; minute < 60; minute++){

        const hourBits = hour.toString(2).split("1").length-1;
        const minuteBits = minute.toString(2).split("1").length-1;

        if(hourBits + minuteBits === turnedOn){
            result.push(`${hour}:${minute.toString().padStart(2, "0")}`);
        }
    }
   } 
   return result;
};