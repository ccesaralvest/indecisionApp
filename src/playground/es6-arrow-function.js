function square(x) {
    return x * x;
};

const arrowSquare = (x) => {
    return x * x
}

// Dont need return
const arrowSquare = (x) => x * x;
// console.log(arrowSquare(3));

const fullName = 'Caio Timoteo';
const userName = 'Weverton Timoteo';

const getFirstName = (fullName) => {
    let firstName = fullName.split(' ')[0];
    return firstName;
}

const shortFunctionGetFirstName = (fullName) => fullName.split(' ')[1];

// console.log(getFirstName('Caio Timoteo'));