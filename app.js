const codeComp = document.getElementById("code-compiler");
const preview = document.getElementById("preview");
const dark = document.getElementById("dark-btn");
const bodydark= document.getElementById("darkside");



dark.addEventListener("click", () => {
    document.body.classList.toggle("body-dark");

    if (bodydark.className === "body-dark"){
        dark.textContent = "☀️";
    }else{
        dark.textContent = "🌙";
    }
});

codeComp.addEventListener("input", (event) => {
    preview.innerHTML = event.target.value;
    if(preview.textContent === ""){
        preview.textContent = "Nothing here..."
    }
    if(event.target.value === "!"){
        codeComp.value = `<!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Document</title>
        </head>
        <body>
            
        </body>
        </html>`;
    }
});
