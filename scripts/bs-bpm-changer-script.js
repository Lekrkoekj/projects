var mapContents;
var newMapContents;

var originalBpm;
var targetBpm;

function readFile() {
    if(document.getElementById("fileInput").value == "") {
        document.getElementById("fileContent").innerHTML = "";
        return;
    }
    const selectedFile = document.getElementById('fileInput').files[0];
    const reader = new FileReader();
    reader.addEventListener('load', (event) => {
        // document.getElementById("fileContent").innerHTML = event.target.result;
        mapContents = JSON.parse(event.target.result);
        console.log(mapContents)
    });
    reader.readAsText(selectedFile);
}

function convertBpm() {
    if(!mapContents) { 
        alert("No map selected!")
        return;
    }

    newMapContents = mapContents;

    var bpmRatio = originalBpm / targetBpm;

    // Notes
    newMapContents.colorNotes.forEach((note) => {
        note.b /= bpmRatio;
    })

    // Light events
    newMapContents.basicBeatmapEvents.forEach((event) => {
        event.b /= bpmRatio;
    })

    // Chains
    newMapContents.burstSliders.forEach((chain) => {
        chain.b /= bpmRatio;
        chain.tb /= bpmRatio;
    })

    // Bombs
    newMapContents.bombNotes.forEach((bomb) => {
        bomb.b /= bpmRatio;
    })

    // Walls
    newMapContents.obstacles.forEach((wall) => {
        wall.b /= bpmRatio;
        wall.d /= bpmRatio;
    })

    // Arcs
    newMapContents.sliders.forEach((arc) => {
        arc.b /= bpmRatio;
        arc.tb /= bpmRatio;
    })
        
    console.log(newMapContents);
    download("NormalStandard.dat", JSON.stringify(newMapContents));
}

function download(filename, text) {
    var element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', filename);
  
    element.style.display = 'none';
    document.body.appendChild(element);
  
    element.click();
  
    document.body.removeChild(element);
}