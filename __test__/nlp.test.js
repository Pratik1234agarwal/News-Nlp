import { evaluateNLP } from "../src/client/js/nlp";

//const evaluateNLP = require("../src/client/js/nlp")



test('Returns Poistive for a positive meaning sentence',()=>{
    
    expect(simplify("The movie was stunning")).toEqual("positive");

});

function simplify(data){
    const tmp = evaluateNLP({result:data});
    console.log(tmp);
    return tmp.polarity;
}