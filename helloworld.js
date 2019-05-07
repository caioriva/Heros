const varOut = 'OUT';

function helloWorld() {
    console.log('Hello World');    
};

function helloWorldOut() {
    console.log(varOut);    
};

function helloWorldParam(arg) {
    console.log(arg);    
};

function helloWorldIn() {
    const varIn = 'In';
    console.log(varIn);
}

const helloWorldAnonymousFunction = function() {
    console.log('Hello World');
};

const helloWorldArrowFunction = () => {
    console.log('Hello World');
};

helloWorld();