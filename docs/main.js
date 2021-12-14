//const api = ('https://www.filestackapi.com/api/file');

//import * as Filestack from 'filestack-js';
//import {} from './filestack';

//import * as filestack from './filestack';

window.addEventListener('DOMContentLoaded', function () {
    const apikey = 'AxN8ROZz3T8azRC4SxHcQz';
    const client = filestack.init(apikey);
    const options = {
        maxFiles: 20,
        uploadInBackground: false,
        transformations: {
            crop: {
                force: false,
                aspectRatio: 1.778,
            },
            circle: true,
            rotate: true,
        },
        onOpen: () => console.log('opened!'),
        onUploadDone: (res) => showImages(res),
        fromSources: ["local_file_system", "instagram", "facebook"],
    };
    client.picker(options).open();
});


const showImages = (res) => {
    console.log(res);
    let imageContainer = document.createElement('div'); // create a div element in js
    res.filesUploaded.forEach(image => {
        let imageDiv = document.createElement('img');
        console.log(image.url)
        imageDiv.setAttribute('src', image.url);
        imageContainer.appendChild(imageDiv);
    });
    document.body.appendChild(imageContainer);
}
    //https://jsfiddle.net/gh/get/library/pure/filestack/filestack-js/tree/master/examples/upload

    