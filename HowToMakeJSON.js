"use strict";

let user = {
    name: "John Smith",
    age: 35
};

let user2 = JSON.parse(JSON.stringify(user));
let json = JSON.stringify(user);
alert(user2);
alert(json); // serverside can read this shit

let room = {
    number: 23
};

let meetup = {
    title: "Conference",
    occupiedBy: [{name: "John"}, {name: "Alice"}],
    place: room
};

room.occupiedBy = meetup;
meetup.self = meetup;

alert( JSON.stringify(meetup, function replacer(key, value) {
    return (key != "" && value == meetup) ? undefined : value;
}));