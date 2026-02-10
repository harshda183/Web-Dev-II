document.querySelector("form").addEventListener("submit", function (e) {
    e.preventDefault();

    let name = document.getElementById("name").value.trim();
    let doctorId = document.getElementById("docID").value.trim();
    let specialization = document.getElementById("dept").value;
    let experience = Number(document.getElementById("exp").value);
    let email = document.getElementById("email").value.trim();
    let mobile = document.getElementById("mbl").value.trim();

    let role = "";
    if (experience > 5) {
      role = "Senior";
    } else if (experience >= 2 && experience <= 5) {
      role = "Junior";
    } else {
      role = "Trainee";
    }

    let tr = document.createElement("tr");

    let td1 = document.createElement("td");
    td1.innerText = name;

    let td2 = document.createElement("td");
    td2.innerText = doctorId;

    let td3 = document.createElement("td");
    td3.innerText = specialization;

    let td4 = document.createElement("td");
    td4.innerText = experience;

    let td5 = document.createElement("td");
    td5.innerText = email;

    let td6 = document.createElement("td");
    td6.innerText = mobile;

    let td7 = document.createElement("td");
    td7.innerText = role;

    let td8 = document.createElement("td");
    let deleteBtn = document.createElement("button");
    deleteBtn.innerText = "Delete";

    deleteBtn.addEventListener("click", function () {
      tr.remove();
    });

    td8.append(deleteBtn);

    tr.append(td1, td2, td3, td4, td5, td6, td7, td8);

    document.querySelector("#tbody").append(tr);

    document.querySelector("#form").reset();
  });
