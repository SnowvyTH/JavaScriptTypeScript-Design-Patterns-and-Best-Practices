const user = {
    id: 1,
    profile: {
        fullname: 'John Doe',
        address: {
            city: 'Ubon'
        }
    }
}

// old way
// if (user && user.profile.fullname !== undefined) {
//     console.log(user.profile.fullname)
// }

// new way
console.log(user?.profile?.fullname)