window.onload = function () {

    async function renderPhotos() { //GET all images

        await fetch('https://web2-backend-amina.herokuapp.com/photo').then(response => {
            return response.json();
        }).then(data => {
            photolist = data;
            console.log(data);
        })

        PhotoList.forEach(photo => {
            photosHTML += ` <div>
            <img id="photo1" ${photo.url} >
            <img id="photo2" ${photo.url} >
            <img id="photo3" ${photo.url}>
        </div>
         `
        })

        document.getElementById("PhotoList").innerHTML = photosHTML;
    }
    renderPhotos();
}