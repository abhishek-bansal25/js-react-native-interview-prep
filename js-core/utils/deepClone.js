/**
 * Deeply clones an object or array.
 * Handles nested objects, arrays, and primitives.
 * Does NOT yet handle circular references.
 */

export default function deepclone(val) {
    if(typeof val != "object" || val == null){
        return val
    }

    if(Array.isArray(val)) {
        return val.map(item=>deepclone(item))
    }

    const res={}

    Object.keys(val).forEach(key=> res[key] = deepclone(val[key]))

    return res
}
