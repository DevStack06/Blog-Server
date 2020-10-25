const bcrypt = require('bcrypt');
const saltRounds = 10;
 function compare(plaintxt,hash){
  return bcrypt.compare(plaintxt, hash).then(function(result) {
        if(result){
            return true;
        }
        else{
            return false;
        }
    });
}
 function hash(plaintxt)
{
   return bcrypt.hash(plaintxt, saltRounds).then(function(hash) {
       if(hash)
       {
        return hash;
       }
       else{
           return;
       }
       
           
    });
}
module.exports.Hash=hash;
module.exports.Compare=compare
