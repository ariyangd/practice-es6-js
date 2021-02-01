const person = {name: 'jack', age:22, job:'google', gfName: 'jennifer', address: 'dhaka', phone:'1919182', friends:['ariyan', 'rehman', 'razon']};

const {phone, gfName, address, salary} = person;
// const gfName = person.gfName;
// const phone = person.phone;
const complexObject = {
    name: 'abc',
    info: {
        address: 'kola';
        leader: 'yiger';
    }
}
const {leader} = complexObject.info;
console.log(leader);


// console.log(gfName, phone, address, salary);

// const friends = ['sharukh', 'amir', 'salaman','aftab','arbaj'];

// const [chotoFriend, nextFriend, ...restFriends] = friends;
// console.log(chotoFriend, nextFriend, restFriends);

