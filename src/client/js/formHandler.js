const postURLData = async (url = '', data = {}) => {
    const response = await fetch(url, {
        method: 'POST',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json',
        },
        // Body data type must match "Content-Type" header        
        body: JSON.stringify(data),
    });

    try {
        const newData = await response.json();
        console.log(newData)
        return newData;
    } catch (error) {
        console.log("error", error);
    }
}

const updateUI = (data) => {
    document.getElementById('results').innerHTML = data.text
}


function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let formText = document.getElementById('url').value

    if (Client.checkURL(formText)) {
        console.log("::: Form Submitted :::")
        postURLData('http://localhost:8081/testing', { url: formText })
            .then((function (data) {
                updateUI(data)
            }))
    }
    else {
        alert('Please enter a valid URL.')
    }
}

export { handleSubmit }
