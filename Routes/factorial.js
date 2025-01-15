
const findFactorial = (n) =>{
    if( n<=0)
    return false
    let factorial = 1;
    for(let k=1;k<=n;k++)
    factorial = factorial*k;
    
    return factorial;
}

const factorial = (req,res)=>{
    const n = req.body.number;
const ans = findFactorial(n)
if(!ans)
    return  res.json({status:"Not Ok",message:"cannot find factorial less than equal to 0"})  
return res.json({status:"Ok",message:"factorial find successfully",factorial:ans})  
}

export default factorial;