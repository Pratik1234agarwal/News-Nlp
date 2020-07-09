async function handleSubmit(event) {

    const btn = event.target;
   
    event.preventDefault()
    btn.value = "Evaluating";
    // check what text was put into the form field
    let formText = document.getElementById('text').value

    console.log("::: Form Submitted :::")
    const a = await Client.evaluateNLP('http://localhost:8081/evaluate',{value:formText});
    document.getElementById('polarity').innerHTML = `Polarity : ${a.polarity} `;
    document.getElementById('confidence').innerHTML = `Polarity Confidence = ${a.polarity_confidence} `

    btn.value = "Submit";

}

export { handleSubmit }
