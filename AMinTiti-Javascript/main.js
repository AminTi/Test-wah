let form = document.querySelector(".report")
let tbody = document.querySelector("tbody")

form.addEventListener("submit", function(e) {
    e.preventDefault()

    let obj = {
        project: form.project.value,
        activity: form.activity.value,
        from: form.from.value,
        to: form.to.value,
        message: form.note.value
    }

    addToTabel(obj)
})

function addToTabel(obj) {
    tbody.innerHTML += `<tr>
    <td>${obj.project}</td>
    <td>${obj.activity}</td>
    <td>${obj.from}</td>
    <td> ${obj.to}</td>
    <td>${obj.message}</td>
    <td><button>Redigera</button></td> 
    <td><button>Radera</button></td>
  </tr>`
}

tbody.addEventListener("click", function(e) {
    radera(e)
    for (let i = 0; i < tbody.rows.length; i++) {
        const tb = tbody.rows[i]
        edit(e, tb)
    }
})

function radera(elm) {
    if (elm.target.innerText == "Radera") {
        if (confirm("Bekräfta för att radera") == true) {
            elm.target.parentNode.parentNode.remove()
        }
    }
}

function edit(e, elm) {
    elm.addEventListener("click", function(t) {
        if (t.target.textContent == "Redigera") {
            // let index = this.rowIndex test
            form.project.value = this.cells[0].innerHTML
            form.activity.value = this.cells[1].innerHTML
            form.from.value = this.cells[2].innerHTML
            form.to.value = this.cells[3].innerHTML
            form.note.value = this.cells[4].innerHTML
            t.target.parentNode.parentNode.remove()
        }
    })
}
