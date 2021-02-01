const person = {
    name: 'Shahidul Islam',
    age: 17,
    job: 'Full Stack WEB DEV In Sun Company',
    gfName: 'Sorry', 
    address: 'Komu Nah', 
    phone: '01717112211', 
    friends: ['Tom hancks', 'Deco Ry', 'siam']
}

console.log(person.job);
console.log(person.friends);
console.log(person.phone);
console.log(person.friends);

// All Properties Access 

console.log(person);

const { address, phone, gfName, salary } = person;
// const gfName = person.gfName;
// const phone = person.phone;

// console.log(gfName, phone, salary, address);
// console.log(gfName, phone, salary, address);


const friends = ['Sakib Khan', 'Arman Khan', 'Aamir Khan', 'Salman Khan', 'sharukh khan'];
const [chotoFriend, ...olderF] = friends;
console.log(olderF)