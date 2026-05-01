fetch("http://127.0.0.1:8000/api/students/")
.then(response => response.json())
.then(data => {

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
})
.catch(error => {
    console.log(error);
});