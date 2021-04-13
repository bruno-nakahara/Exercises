function getFlag(arg) {
    // const arr = process.argv 
    // let getArgument;
    // arr.forEach((val,index) => {
    //     if(arr[index] == arg) {
    //         getArgument = arr[index + 1]
    //     }
    // })

    // return getArgument
    const index = process.argv.indexOf(arg) + 1
    return process.argv[index]
}

module.exports = {
    getFlag
}