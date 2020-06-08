function CreateShortURL() {
    var originalUrl = document.getElementById("original-url").value;
    var customPath = document.getElementById("custom-path").value;

    var data = "{\"allowDuplicates\":false,\"domain\":\"l.lekr.ml\",\"originalURL\":\"" + originalUrl + "\",\"path\":\"" +  customPath + "\"}";

    var xhr = new XMLHttpRequest();
    xhr.addEventListener("readystatechange", function () {
    if (this.readyState === this.DONE) {
        console.log(this.responseText);
        
        var generatedLink = this.responseText.split('"');
        
        document.getElementById("link-created").innerHTML = 'Your generated link is: <a href="' + generatedLink[33] + '">' + generatedLink[33];

    }
    });

    xhr.open("POST", "https://api.short.cm/links/public");
    xhr.setRequestHeader("accept", "application/json");
    xhr.setRequestHeader("content-type", "application/json");
    xhr.setRequestHeader("authorization", "0hszljKvdK9p9ifXFbZEuAplkNO72K4E");

    xhr.send(data);
    
}