import {usersTable} from "@/inMemoryDatabase/users";

export const labelTemplatesTable = [
    {
        id: 1,
        name: "Kwadrat",
        width: 250,
        height: 250,
        user_id: usersTable[0],
    },
    {
        id: 1,
        name: "Prostokąt",
        width: 350,
        height: 250,
        user_id: usersTable[1],
    },
];