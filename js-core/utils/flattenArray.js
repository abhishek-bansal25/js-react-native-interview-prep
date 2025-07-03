export default function flattenArray(val) {
    if(!Array.isArray(val)) {
        return val
    }

    let res = []

    for(let v of val){
        if(!Array.isArray(v)) {
            res.push(v)
        } else {
            res = res.concat(flattenArray(v))
        }
        
    }

    return res
}
