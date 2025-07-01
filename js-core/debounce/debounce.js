export const debounce = (func, wait=1000) =>{
    let timeout
    return function(...arg) {
        clearTimeout(timeout)
        timeout = setTimeout(()=>{
            func.apply(this,arg)
        },wait)
    }
}