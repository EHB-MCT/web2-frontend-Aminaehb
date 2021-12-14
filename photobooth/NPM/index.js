import * as filestack from './filestack-js';
const client = filestack.init('AxN8ROZz3T8azRC4SxHcQz');
const fileObject = document.querySelector('#fileObject');
client.upload(fileObject).then(data => console.log(data.url));

client.picker().open();

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