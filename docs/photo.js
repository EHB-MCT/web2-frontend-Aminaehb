window.onload = function () {

    const image_btn = document.getElementById('image_btn');
    const images = document.getElementById('images');
    image_btn.addEventListener('click', renderPhotos)

    async function renderPhotos() { //GET all images

        await fetch('https://web2-backend-amina.herokuapp.com/photo')
            .then(response => {
                return response.json();
            }).then(data => {
                console.log(data);
                images.innerHTML = '';
                data.forEach(image => {
                    const imagediv = document.createElement('img');
                    imagediv.src = image.url
                    imagediv.id = 'image'
                    images.appendChild(imagediv);
                    console.log(image.url);
                });
            }).catch(error => {
                console.log(error)
            })

        //document.getElementById("results").innerHTML = img_result.innerHTML;

    }
    //renderPhotos(); 
}


//const image = document.getElementById('image');
//image.src = data.message