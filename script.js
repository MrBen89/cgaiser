
let originalCanvas = document.getElementById("original");
let originalCtx = originalCanvas.getContext("2d");

let cgaCanvas = document.getElementById("cga");
let cgaCtx = cgaCanvas.getContext("2d");

cgaCtx.fillStyle = "#1BEDCA"
originalCtx.fillStyle = "#1BEDCA"
cgaCtx.fillRect(0, 0, 320, 200);
originalCtx.fillRect(0, 0, 320, 200);

let handleLoading = ((event) => {
    console.log(event)
    const file = event.target.files[0]; // Get the first selected file

    if (file) {
        const reader = new FileReader();

        reader.onload = function(e) {
            const img = new Image(); // Create a new Image object

            img.onload = function() {
                // Set canvas dimensions to match the image
                
                // Draw the image onto the canvas
                originalCtx.drawImage(img, 0, 0, 320, 200);
                for (let x=0; x <320; x++) {
    for (let y=0; y < 200; y++) {
        cgaise(x,y)
    };
};
            };

            img.src = e.target.result; // Set the image source to the data URL
        };

        reader.readAsDataURL(file); // Read the file as a data URL
    }
})

let cgaise = ((x,y) => {
    const data = originalCtx.getImageData(x, y, 1, 1).data;
    let fillCol = "#"
    for (let x = 0; x < 3; x++) {
        if (data[x] > 212) {
            fillCol += "FF"
        } else if (data[x] > 128) {
            fillCol += "AA";
        } else if (data[x] > 42) {
            fillCol += "55"
        } else {
            fillCol += "00"
        }
    }
    cgaCtx.fillStyle = fillCol;
    cgaCtx.fillRect(x, y, 1, 1)
})



let imgUp = document.getElementById("imgUpHidden");
imgUp.addEventListener('change', handleLoading);