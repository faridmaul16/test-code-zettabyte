const students = [{
        id: "1",
        name: "Sherlock",
        score: 90
    },
    {
        id: "2",
        name: "Genta",
        score: 75
    },
    {
        id: "3",
        name: "Ai",
        score: 80
    },
    {
        id: "4",
        name: "Budi",
        score: 85
    }
]

const filterStudentsByMinScore = (students, minScore) =>
    students
    .filter(({
        score
    }) => score >= minScore)
    .sort(({
            name: na,
            score: sa
        }, {
            name: nb,
            score: sb
        }) =>
        sb - sa || na.localeCompare(nb));
const results = filterStudentsByMinScore(students, 85);

console.log(results);