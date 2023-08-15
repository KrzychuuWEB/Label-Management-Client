import {usersTable} from "@/inMemoryDatabase/users";

export const initialsTable = [
    {
        id: 1,
        user_id: usersTable[1],
        first_name: "Jan",
        last_name: "Kowalski",
        name: "JK",
    },
    {
        id: 2,
        user_id: usersTable[0],
        first_name: "Piotr",
        last_name: "Nowak",
        name: "PN",
    },
];