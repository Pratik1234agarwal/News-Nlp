

async function evaluateNLP(url='/evaluate',data={value:'This is amazin'}){
    const response = await fetch(url,{
        method:'POST',
        credentials:'same-origin',
        headers:{
            'Content-type':'application/json',
        },
        body:JSON.stringify(data),
    });
    try{
        const newData = await response.json();
        return newData;
    }catch(error){
        console.log('error',error);
    }
}

export { evaluateNLP }