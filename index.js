let students_data = {
    "students": [
        { name: "Sara Ahmed", age: 12, gender: "female", subjects: ["english", "science", "geography"] },
        { name: "Farrukh Amir", age: 13, gender: "male", subjects: ["computer", "science", "urdu"] },
        { name: "Sultan Khan", age: 13, gender: "male", subjects: ["english", "science", "arabic"] },
        { name: "Muneeza Hashir", age: 11, gender: "female", subjects: ["mathematics", "science", "french"] },
        { name: "Saad Jibran", age: 14, gender: "male", subjects: ["english", "science", "geography"] }
    ]
}

const rootEl = document.getElementById('root');

function createTable(data) {

    let tableEl = document.createElement('table')

    data.forEach(function (entry) {
        let rowEl = document.createElement('tr');

        let nameCol = document.createElement('td')
        let ageCol = document.createElement('td')
        let genderCol = document.createElement('td')
        let subjectsCol = document.createElement('td')

        nameCol.innerText = entry.name;
        ageCol.innerText = entry.age;
        genderCol.innerText = entry.gender;
        subjectsCol.innerText = entry.subjects;

        rowEl.appendChild(nameCol);
        rowEl.appendChild(ageCol);
        rowEl.appendChild(genderCol);
        rowEl.appendChild(subjectsCol);

        tableEl.appendChild(rowEl);
    });

    return tableEl;
}

const students_table = createTable(students_data.students);
rootEl.appendChild(students_table);