// Add your code here

function submitData(userName, userEmail){

    const configurationObject = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
        },
        body: JSON.stringify({
            name : `${userName}`,
            email: `${userEmail}`,

        })
    }



    return fetch('http://localhost:3000/users',configurationObject)
    .then(response => response.json())
    .then(data => {
        document.body.innerHTML = data.id
    } )
    .catch((error) => {
        alert('Oops!')
        document.body.innerHTML = error.message;
    })

}