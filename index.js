const users = [
    { name: "John", age: 25, occupation: "gardener" },
    { name: "Lenny", age: 51, occupation: "programmer" },
    { name: "Andrew", age: 43, occupation: "teacher" },
    { name: "Peter", age: 81, occupation: "teacher" },
    { name: "Anna", age: 43, occupation: "teacher" },
    { name: "Albert", age: 76, occupation: "programmer" },
    { name: "Adam", age: 47, occupation: "teacher" },
    { name: "Robert", age: 72, occupation: "driver" },
];

function main() {
    const hO = document.createElement("h1");
    const ulU = document.createElement("ul");
    const root = document.getElementById("root");

    //attributs
    ulU.setAttribute("id", "users")

    hO.innerText = "FREELANCERS";
    hO.style.textDecorationLine = `underline`;
    hO.style.color = "blue";
    // appends
    root.appendChild(hO);
    
    users.forEach(e => {
        var n = document.createElement("ul");
        let se = `Name: ${e.name}  \n Age: ${e.age}   \n Occupation: ${e.occupation}`;
        n.innerText = se;
        root.appendChild(n);
    });
}

//call the main function
main();

/*
about assignment


*/