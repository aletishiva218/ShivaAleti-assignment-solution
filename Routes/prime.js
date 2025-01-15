
const findPrimeNumber = (n) => {
    let primeNumbers = []
    if(n<=0) return "Cannot find prime nymbers"
    let num = 2;
  
    let checkPrime =(n) => {
     if (n < 2) return false;
     for (let i = 2, sqrt = Math.sqrt(n); i <= sqrt; i++)
       if (n % i === 0) return false;
     return true;
   }
 
    while (primeNumbers.length < n) {
      if (checkPrime(num)) primeNumbers.push(num);
      num++;
    }
 
    return primeNumbers;
 }

const checkPrime = (req,res)=>{
    const n = req.body.number;
    return res.json({status:"Ok",message:"prime numbers calculated successfully",output:findPrimeNumber(n)})
}

export default checkPrime;