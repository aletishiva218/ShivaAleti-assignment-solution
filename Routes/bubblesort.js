
let sortArray = (arr)=>{
    let i, j, t, n= arr.length,sw;
    for (i = 0; i < n - 1; i++){
        sw = 0;
        for (j = 0; j < n - i - 1; j++){
            if (arr[j] > arr[j + 1]) 
            {
                t = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = t;
                sw = 1;
            }
        }
        if (!sw)
        break;
    }
    return arr;
}

const sort = (req,res)=>{
    let arr = req.body.array;
    let sortedArray = sort(arr)
    if(sortedArray==arr)
return res.json({status:"Ok",message:"The array is already sorted",sortedArray:arr})  
return res.json({status:"Ok",message:"sorted",sortedArray:arr})  
}

export default sort;