const findTheOldest = function (people) {
    let maxAge = -1;
    const currentYear = new Date().getFullYear();
    let oldest = people[0];
    people.forEach((person) => {
        if (!person.yearOfDeath) person.yearOfDeath = currentYear;
        let age = person.yearOfDeath - person.yearOfBirth;
        console.log(age);
        if (age > maxAge) {
            maxAge = age;
            oldest = person;
        }
    })
    return oldest;
};

// Do not edit below this line
module.exports = findTheOldest;
