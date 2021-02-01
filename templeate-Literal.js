const firstName = "Shahidul";
const lastName = "Islam";
const NickName = "Siam";

// Traditional Methood 
const fullName = firstName + " " + lastName + NickName + " is a good boy";
console.log(fullName);

// Modern Javascript Templeate Methood 
const fullName2 = ` ${firstName} ${lastName} ${NickName} is a good boy.`;
console.log(fullName2);


// Traditional Methood 
const multiLine = "I love you\n"
    + "I miss you\n"
    + "I need you";

// Modern Javascript Templeate Methood 

const multiLine2 = `I love you
I miss you
no. I don't need you
You Can Sleep Now.
I'm Busy with Programming`


console.log(multiLine2);