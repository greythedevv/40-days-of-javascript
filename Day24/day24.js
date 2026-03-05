let errorPromise = new Promise(function(resolve, reject){
    reject("error occured")
}) 

async function errorLoad (){
    try{
        await errorPromise
    } catch(error) {
        console.log(error)
    }
}
errorLoad()

