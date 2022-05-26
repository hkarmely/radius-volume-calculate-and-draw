// creating a let radiuse variable for drawing
let drawingRadius = 0;
// calculate and present 
function buildVolume(radiusId) {
    const calculateVolume = (4 / 3 * (Math.PI * Math.pow(radiusId.value, 3)));
    const showVolume = document.getElementById("chen2PresentVolume");
    showVolume.innerHTML = `<h3>${calculateVolume} :הנפח של הכדור הינו </h3>`;
}

// validation function
function checkField(field) {
    field.style.backgroundColor = null;

    let spanId = `${field.getAttribute('spanId')}`;
    console.log(spanId);
    const alertSpan = document.getElementById(spanId);
    alertSpan.innerHTML = "";


    if (field.value === "") {
        field.style.backgroundColor = "red";
        alertSpan.innerHTML = ` <b> הכנס ${field.name} </b>`;
        field.focus(); // Focus on the element
        event.preventDefault(); // Prevents from default form 'submit' from occurring
        drawingRadius = 0;
        return 0;
    }

    if (isNaN(field.value)) {
        field.style.backgroundColor = "red";
        alertSpan.innerHTML = `<b>עליך להכניס ערך מספרי</b>`;
        field.focus();
        event.preventDefault();
        drawingRadius = 0;
        return 0;
    }

    if ((field.value > 299) || (field.value < 0)) {
        field.style.backgroundColor = "red";
        alertSpan.innerHTML = `<b>חרגת מגבולות הקנבס, ערך מקסימלי הוא 299 ומינימלי הוא 0</b>`;
        field.focus();
        event.preventDefault();
        return 0;
    }

    buildVolume(field);
    drawingRadius = field.value;
    console.log(drawingRadius);
    return 1;
}


function drawInput() {
    draw(drawingRadius);

}

//Drawing the circule on a canvas! 
function draw(XXX) {
    const myCanvas = document.getElementById("myCanvas");
    const painter = myCanvas.getContext("2d");
    var colors = ["red", "green", "blue", "gray", "black"];

    painter.beginPath();
    painter.lineWidth = Math.round(Math.random() * 15);
    painter.strokeStyle = colors[Math.floor(Math.random() * 5)]; // stroke = משיכת מכחול
    const X = 300;
    const Y = 300;
    const R = XXX;
    painter.arc(X, Y, R, 0, 2 * Math.PI);
    painter.stroke();

}


function undraw() {
    const myCanvas = document.getElementById("myCanvas");
    const painter = myCanvas.getContext("2d");
    painter.clearRect(0, 0, 600, 600);

}

function drawMax() {
    for (i = 0; i < 299; i++) {
        draw(i);

    }
}