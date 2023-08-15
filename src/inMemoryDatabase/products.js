import {nutritionalValuesTable} from "@/inMemoryDatabase/nutritionValues";
import {usersTable} from "@/inMemoryDatabase/users";
export const productsTable = [
    {
        id: 1,
        name: "Orzechy arachidowe prażone bez soli",
        description: "Orzechy ziemne, znane również jako arachidowe lub fistaszki, mają grono licznych wielbicieli.",
        composition: "Orzechy arachidowe łuskane, prażone 100% bez konserwantów, bez soli",
        nutritionalValues: nutritionalValuesTable,
        user_id: usersTable[0],
        slug: "orzech-arachidowe-prazone-bez-soli",
    },
    {
        id: 2,
        name: "Ziele angielskie",
        description: "Ziele angielskie jest tak naprawdę owocem korzennika lekarskiego (łac. Pimenta dioica) – drzewa z rodziny mirtowatych, występującego głównie w Ameryce Południowej i gdzieniegdzie w Ameryce Północnej. ",
        composition: "100% ziela angielskiego",
        nutritionalValues: nutritionalValuesTable,
        user_id: usersTable[1],
        slug: "ziele-angielskie",
    },
    {
        id: 3,
        name: "Przyprawa do kurczaka",
        description: "Przyprawa do kurczaka “Złoty kuczak” to aromatyczna mieszanka przyprawowa, która tworzy złocistą skórkę na mięsie.",
        composition: " imbir, kurkuma, majeranek, papryka słodka, chili, czosnek, kolendra, kmin rzymski, goździk oraz gorczyca biała",
        nutritionalValues: nutritionalValuesTable,
        user_id: usersTable[2],
        slug: "przyprawa-do-kurczaka",
    },
    {
        id: 4,
        name: "Przyprawa do gyrosa",
        description: " Przyprawa świetnie podkreśla smak mięsa, nadając mu orientalny smak.",
        composition: "papryka słodka, gorczyca, kolendra, majeranek, jałowiec, rozmaryn, pieprz czarny, chili, ziele angielskie oraz gałka muszkatołowa",
        nutritionalValues: nutritionalValuesTable,
        user_id: usersTable[1],
        slug: "przyprawa-do-gyrosa",
    },
]