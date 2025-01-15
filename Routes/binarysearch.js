let arr = [2,5,8,12,16,23,38,56,72,91]

let search = (n) => {
    let l=arr.length-1;
let st=0;
let it=0;
let mid;
let f=0;
while(st <= l)
{
    it++;
   mid=Math.floor((st+l)/2)
    if(arr[mid]==n)
    {
        f=1;
        break
    }
    if(arr[mid]>n)
        l=mid-1
    if(arr[mid]<n)
        st=mid+1
}
   return {fetched:f,iterations:it};
}

const searchNumber = (req,res)=>{
    const n = req.body.number;
    let obj = search(n);
    if(obj.fetched)
    return res.json({status:"Ok",message:"index fetched",index:mid,iterations:it})
    else
    return res.json({status:"Not Ok",message:"not found"})
}

export default searchNumber;