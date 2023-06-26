let userCard = document.getElementById("userCard");

let Photo = document.getElementById("Photos");

GetUser();

GetPhoto();

async function GetUser()
{
    let response = await fetch('https://jsonplaceholder.typicode.com/users')

    let users = await response.json();

    InsertUser(users);
}

function InsertUser(users)
{
    users.forEach(user => 
    {
        userCard.innerHTML += `
        <div class="userCardContainer">

            <h1 class="userName"><u>${user.name}</u></h1>

            <div class="userSpecs">

                <label>ID:</label>
                <label>${user.id}</label>
                <br>

                <label>Email:</label>
                <label>${user.email}</label>
                <br>

                <label>Phone:</label>
                <label>${user.phone}</label>

            </div>

            <br>
            <br>

            <div class="buttonContainer">
                <button onclick="SelectUser(${user.id})"; class="selectButton"><b>Select User</b></button>    
            </div>            

        </div>`   
    });
}

async function GetPhoto()
{
    let response = await fetch('https://jsonplaceholder.typicode.com/photos?albumId=1');

    let photos = await response.json();

    InsertPhotos(photos);
}

function InsertPhotos(photos)
{
    photos.forEach(photo => 
    {
        Photo.innerHTML += `
        <img src="${photo.url}" width="300px" height="300px"></img>`
    });
}

function SelectUser(userid)
{
    let userID = document.getElementById("id");

    userID.value = userid;
}
async function Submit()
{
    let id = document.getElementById("id");
    let title = document.getElementById("title");
    let body = document.getElementById("body");

    const rawResponse = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({userid: id.value, title: title.value, body: body.value})
    })

    const content = await rawResponse.json();

    console.log(content);
}