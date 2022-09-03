const source = [{
        id: "1",
        data: {
            first_name: "Rian",
            last_name: "Nugraha"
        },
        school: {
            id: "1",
            data: "PLMK-JKT"
        },
    },
    {
        id: "2",
        full_name: "Ari Santoso",
        school: {
            id: "1",
            short_name: "GRSR",
            data: "JKT"
        },
    },
    {
        id: "3",
        data: {
            first_name: "Rahman",
            last_name: "Sunggara"
        },
        school: {
            id: "1",
            short_name: "GELM",
            data: "JKT"
        },
    },
    {
        id: "4",
        data: {
            first_name: "Rian",
            last_name: "Nugraha"
        },
        school: {
            id: "2",
            data: "PLMK-BDG"
        },
    },
]


const result = source.map(({
    data,
    school,
    full_name
}) => {
    return {
        name: (typeof data) === "undefined" ? full_name : `${data.first_name + " "+ data.last_name}`,
        school_name: school.hasOwnProperty("short_name") ? `${school.short_name + " "+ school.data}` : school.data
    };
});



console.log(result);