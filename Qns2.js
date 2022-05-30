function a(){
    return "hello"
}

const sentence = a `hi`;
console.log(sentence);

//tagged templete

// a `hi` ->here 'hi' will be coinsider as an argument to a function
// same like a("hi")

// more : https://wesbos.com/tagged-template-literals