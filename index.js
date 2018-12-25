var socket = io.connect('http://localhost:3000'); //connect to server socket
//var uploader = new SocketIOFileUpload(socket);
var uploader = new SocketIOFileUpload(socket);
var form = document.getElementById('form');

uploader.on('start', function(fileInfo) {
    document.getElementById("uploadProgress").innerHTML = 'Start uploading';
});
uploader.on('stream', function(fileInfo) {
    document.getElementById("uploadProgress").innerHTML = 'Streaming... sent ' + fileInfo.sent + ' bytes.';
});
uploader.on('complete', function(fileInfo) {
    document.getElementById("uploadProgress").innerHTML = 'Upload Complete';
});
uploader.on('error', function(err) {
    document.getElementById("uploadProgress").innerHTML = 'Error!';
});
form.onsubmit = function(ev) {
    ev.preventDefault();

    var fileEl = document.getElementById('filetoupload');
    var uploadIds = uploader.upload(fileEl);
};
/*console.log(document.getElementById("siofu_input"));
//uploader.listenOnSubmit(document.getElementById("my_button"), document.getElementById("siofu_input"));
uploader.listenOnInput(document.getElementById("siofu_input"));
uploader.addEventListener("start", function(event){
  console.log(event);
});*/
