const users = [{
        user_id: "1",
        data: {
            name: "Bagas",
            department: "Frontend"
        },
        school: {
            id: "1",
            data: "PLMK"
        },
    },

    {
        user_id: "2",
        data: {
            name: "Faisal",
            department: "Frontend"
        },
        school: {
            id: "2",
            data: "PLMI"
        },
    },
    {
        user_id: "3",
        data: {
            name: "Surya",
            department: "Backend"
        },
        school: {
            id: "3",
            data: "PLN"
        },
    },
    {
        user_id: "4",
        data: {
            name: "Ari",
            department: "Backend"
        },
        school: {
            id: "4",
            data: "PTN"
        },
    }
]

const result = users.map(({
    user_id,
    data,
    school,
}) => {
    return {
        user_id: user_id.hasOwnProperty("user_id") ? `${user_id.user_id +""+user_id}` : user_id,
        name: data.hasOwnProperty("name") ? `${data.name}` : data.name,
        department: data.hasOwnProperty("department") ? `${data.department}` : data.department,
        school_id: school.hasOwnProperty("short_name") ? `${school.short_name + " "+ school.id}` : school.id,
        school: school.hasOwnProperty("short_name") ? `${school.short_name + " "+ school.data}` : school.data
    };
});



console.log(result);