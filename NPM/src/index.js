import * as filestack from './filestack-js';
const client = filestack.init('AxN8ROZz3T8azRC4SxHcQz');
client.upload(fileObject).then(data => console.log(data.url));

client.picker().open();
//https://jsfiddle.net/gh/get/library/pure/filestack/filestack-js/tree/master/examples/picker
//https://www.npmjs.com/package/filestack-js