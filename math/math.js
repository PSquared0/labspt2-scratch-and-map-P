module.exports = {

  add: (x,y) => {
   if (typeof x !== 'number' || typeof y !== 'number'){
     throw new Error('invalid argument');
   }
   return x +y;
  },

  subtract: (x,y) => {
    return Number(x) - Number(y);
  }
}