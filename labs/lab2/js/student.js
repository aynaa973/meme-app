const getParam = param => new URLSearchParams(window.location.search).get(param);

const students = [
    { name: "Alice", assessments: { assignments: [30, 28, 29], quizzes: [18, 19], exams: [45, 47] } },
    { name: "Pedro", assessments: { assignments: [25, 27, null], quizzes: [20, null], exams: [40, 42] } },
    { name: "Jeff", assessments: { assignments: [23, null, 20], quizzes: [18, 17], exams: [40, 38] } },
    { name: "Laura", assessments: { assignments: [27, 28, 25], quizzes: [18, 19], exams: [45, 40] } }
];

const calcAvg = grades => {
    const Grades = grades.filter(g => g !== null);
    return Math.round(Grades.reduce((a, b) => a + b, 0) / Grades.length);
};

const studentName = getParam("name");
const student = students.find(s => s.name === studentName);

if (student) {
    const { assignments, quizzes, exams } = student.assessments;

    document.getElementById("studentInfo").innerHTML = `
        <h2>${student.name}'s Grades</h2>
        <p><strong>Assignments:</strong> ${assignments.map(g => g ?? "-").join(", ")} (Avg: ${calcAvg(assignments)})</p>
        <p><strong>Quizzes:</strong> ${quizzes.map(g => g ?? "-").join(", ")} (Avg: ${calcAvg(quizzes)})</p>
        <p><strong>Exams:</strong> ${exams.map(g => g ?? "-").join(", ")} (Avg: ${calcAvg(exams)})</p>
    `;
}
