import * as filestack from './filestack-js';
const client = filestack.init('AxN8ROZz3T8azRC4SxHcQz');
client.upload(fileObject).then(data => console.log(data.url));

client.picker().open();
//https://jsfiddle.net/gh/get/library/pure/filestack/filestack-js/tree/master/examples/picker
//https://www.npmjs.com/package/filestack-js



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
        onUploadDone: (res),
        fromSources: ["local_file_system", "instagram", "facebook"],
    };
    client.picker(options).open();
});
//https://jsfiddle.net/gh/get/library/pure/filestack/filestack-js/tree/master/examples/picker

//A8ottKMzuQbG0MJ618CPnz = key school account
//AxN8ROZz3T8azRC4SxHcQz = key gmail account