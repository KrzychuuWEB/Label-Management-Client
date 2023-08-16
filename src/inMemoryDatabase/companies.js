import {usersTable} from "@/inMemoryDatabase/users";

export const companiesTable = [
    {
        id: 1,
        name: "Label Management",
        footer: "NIP: 123456789, siedziba Programowa 001, Białystok 00-000",
        user_id: usersTable[0],
    },
    {
        id: 2,
        name: "Testowa Nazwa",
        footer: "Testowa stopka firmy",
        user_id: usersTable[1],
    },
];