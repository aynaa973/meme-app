const students = [
    { name: "Alice", grades: [89, 79, 94, 90], assessments: { assignments: [30, 28, 29], quizzes: [18, 19], exams: [45, 47] } },
    { name: "Pedro", grades: [77, 81, 89, null], assessments: { assignments: [25, 27, null], quizzes: [20, null], exams: [40, 42] } },
    { name: "Jeff", grades: [73, null, 71, 85], assessments: { assignments: [23, null, 20], quizzes: [18, 17], exams: [40, 38] } },
    { name: "Laura", grades: [80, 91, 63, 78], assessments: { assignments: [27, 28, 25], quizzes: [18, 19], exams: [45, 40] } }
];

const calculateAvg = grades => {
    const Grades = grades.filter(g => g !== null);
    return Math.round(Grades.reduce((a, b) => a + b, 0) / Grades.length);
};

const getGrade = avg => {
    if (avg >= 90) return "A";
    if (avg >= 85) return "A-";
    if (avg >= 80) return "B+";
    if (avg >= 75) return "B";
    if (avg >= 70) return "B-";
    if (avg >= 65) return "C+";
    if (avg >= 60) return "C";
    return "F";
};

const tableBody = document.querySelector("#gradeBook tbody");

students.forEach(student => {
    const avg = calculateAvg(student.grades);
    const letter = getGrade(avg);

    const row = `
        <tr>
            <td><a href="student.html?name=${student.name}">${student.name}</a></td>
            ${student.grades.map(g => `<td>${g ?? "-"}</td>`).join("")}
            <td>${avg}</td>
            <td>${letter}</td>
        </tr>
    `;
    tableBody.innerHTML += row;
});
