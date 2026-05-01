const data = [
    {name: "Alice", department: "CS", age: 20},
    {name: "Bob", department: "IT", age: 22},
    {name: "Charlie", department: "ME", age: 21}
];

let output = "";
data.forEach(student => {
    output += `
        <div class="card">
            <h2>${student.name}</h2>
            <p>Department: ${student.department}</p>
            <p>Age: ${student.age}</p>
        </div>
    `;
});
document.getElementById("students").innerHTML = output;