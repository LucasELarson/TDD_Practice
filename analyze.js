const analyzeArray = (array) => {
   const sum = array.reduce((current, previous) => {
      return current + previous;
   });
   const average = sum / array.length;

   const min = array.reduce((current, previous) => {
      return Math.min(current, previous);
   });
   const max = array.reduce((current, previous) => {
      return Math.max(current, previous);
   });

   const length = array.length;

   const analized = {
      average,
      min,
      max,
      length,
   };
   console.log(analized);
   return analized;
};

module.exports = analyzeArray;
