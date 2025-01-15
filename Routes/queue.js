
let queue = [5,6,7,8,9]

const enqueue = (n) => {
    queue.push(n)
}
const dequeue = () => {
    if(queue.length==0)
        return false
   return  queue.shift()
}



const queueOp = {
    enqueue:(req,res)=>{
        const n = req.body.number;
        enqueue(n)
        return res.json({status:"Ok",message:"Inserted at the end",queue:queue,inserted:n})
    },
    dequeue:(req,res)=>{
        let ans = dequeue();
        if(!ans)
            return res.json({status:"Not Ok",message:"queue is already empty",queue:queue})  
        return res.json({status:"Ok",message:"deleted from front",queue:queue,deleted:dequeue()})  
    }
}

export default queueOp;