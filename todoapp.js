function getIn() {
    var tB = document.getElementById('table')
    var nam = document.getElementById('name')
    var fname = document.getElementById('fname')
    var age = document.getElementById('age')
    var tr = document.createElement('tr')
    var td = document.createElement('td')
    var givenName = document.createTextNode(nam.value)
    td.appendChild(givenName)
    tr.appendChild(td)
    tB.appendChild(tr)

    var td = document.createElement('td')
    var givenFname = document.createTextNode(fname.value)
    td.appendChild(givenFname)
    tr.appendChild(td)
    tB.appendChild(tr)

    var td = document.createElement('td')
    var givenAge = document.createTextNode(age.value)
    td.appendChild(givenAge)
    tr.appendChild(td)
    tB.appendChild(tr)


    var td = document.createElement('td')
    var bttn1 = document.createElement('button')
    bttn1.innerHTML = 'Delete'
    bttn1.addEventListener('click', function () {
        tr.remove()
    })

    td.appendChild(bttn1)
    tr.appendChild(td)
    tB.appendChild(tr)
    
    
    // for edite button specially
    var a=fname.value 
    var b=nam.value 
    var c=age.value 



    var td = document.createElement('td')
    var bttn2 = document.createElement('button')
    bttn2.innerHTML = 'Edite'
    bttn2.addEventListener('click', function () {
        fname.value =a
        nam.value =b
        age.value =c
        tr.remove()
    })

    td.appendChild(bttn2)
    tr.appendChild(td)
    tB.appendChild(tr)

    fname.value =''
    nam.value =''
    age.value =''

}
