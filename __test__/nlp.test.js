import { evaluateNLP } from "../src/client/js/nlp";
import "babel-polyfill";


console.log("Make sure the server is running");

test('The setence is a positive sentence', async () => {
    const data = await evaluateNLP('http://localhost:8081/evaluate',{value:'The movie is amazing'});
    expect(data.polarity).toBe('positive');
});


test('The setence is a negative sentence', async () => {
    const data = await evaluateNLP('http://localhost:8081/evaluate',{value:'The movie is horrible'});
    expect(data.polarity).toBe('negative');
});
