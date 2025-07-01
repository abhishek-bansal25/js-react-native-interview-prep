export const  throttle = (func,wait) =>{
    let isRunning = false

    return function(...args) {
        if(isRunning) return

        setTimeout(()=>{
            func.apply(this, args)
            isRunning = false
        },wait)
        isRunning=true
    }
}