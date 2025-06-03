interface User1 {
    id: number;
    name: string;
    email: string;
    createdAt: string;
}

let userId01 : User1 = {
    id: 18,
    name: "Virat",
    email: "virat@gmail.com",
    createdAt: "01-01-97"
}

// For a profile display, only pick 'name' and 'email'
type UserProfile = Pick<User1, 'name' | 'email'>;

const displayUserProfile = (user: UserProfile) => {
    console.log(`Name: ${user.name}, Email: ${user.email}`);
}

displayUserProfile(userId01);