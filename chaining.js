const response = {
    users: [
        {
            id: 1,
            name: "John",
            profile: {
                city: "Mumbai"
            }
        }
    ]
};

const [firstUser, ...remainingUsers] = response.users;

const {
    name,
    profile
} = firstUser;

const city = profile?.city ?? "Unknown";

const updatedUser = {
    ...firstUser,
    city
};

console.log(name);
console.log(city);
console.log(remainingUsers);
console.log(updatedUser);