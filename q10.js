// Reuse the gradeScore function (must be included in this file)
function gradeScore(score) {
    if (score >= 70 && score <= 100) {
        return 'A';
    } else if (score >= 60 && score <= 69) {
        return 'B';
    } else if (score >= 50 && score <= 59) {
        return 'C';
    } else if (score >= 40 && score <= 49) {
        return 'D';
    } else {
        return 'F';
    }
}

// Main bonus function
function summarizeStudent(students) {
    return students.map(student => {
        const grade = gradeScore(student.score);
        return `${student.name} scored ${student.score} — Grade: ${grade}`;
    });
}

// Example usage (as you provided)
const students = [
    { name: "Amara", score: 88 },
    { name: "Steve", score: 65 },
    { name: "John", score: 42 }
];

console.log(summarizeStudent(students));
