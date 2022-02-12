function addName () {
    /*Get's the visitor's name, and makes all names uppercase
    Checks if there are numbers or if the names is already in the list
    Appends name to the list
    For now it always vanishs on reload*/
    
    // Function that tests if there is a number within the string
    function hasNumber (string){
        return /\d/.test(string)
    }
    
    let currentVisitorsList = document.getElementById('visitors-list')
    let currentVisitors = currentVisitorsList.innerText // Get the current list
    let visitorsList = currentVisitors.split(', ')// Split the list in an array of names
    let visitorName = document.getElementById('visitor-name').value // Get the visitor input in the field
    let visitorNameList = visitorName.split(' ') // Separate the names into an array
    let upperName = visitorNameList.map(item => 
        item[0].toUpperCase() + item.substring(1)
    ); //Uppercase the first letter of each name
    let visitorUpperName = upperName.join(' ')
    console.log(visitorUpperName)
    
    if (hasNumber(visitorUpperName)) {
        alert('Tem números nos seu nome!\n Por favor corrija e tente novamente.')
    } else if (visitorsList.includes(visitorUpperName)) {
        alert('Seu nome já está na lista,\n Obrigado!!')
    } else {
        if (currentVisitors !== '') {
            currentVisitorsList.append(', ' +visitorUpperName)
        } else {
            currentVisitorsList.append(visitorUpperName)
        }
    }
    }