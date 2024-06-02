function displayimage() {
    let file = document.getElementById('input').files[0];
    let reader = new FileReader();
    reader.onload = function (e) {
        // document.getElementById('display').innerHTML =
        //     `<img src="${e.target.result}" alt="Selected Image">`
        let img = document.createElement('img');
        img.src = e.target.result;
        let display = document.getElementById('display');
        display.appendChild(img);
    };
    if (file) {
        reader.readAsDataURL(file);
    }
    else {
        document.getElementById('display').innerHTML = "No Selected File";
    }
};

document.getElementById('input').addEventListener('change', displayimage);
document.getElementById('submit').addEventListener('click', () => {
    let show = document.getElementById('display');
    let first = document.getElementById('name').value;
    let txtarea = document.getElementById('textarea').value;
    show.innerHTML = '';
    // Create text nodes
    let firstTextNode = document.createTextNode(first + "\n")
    let breaker = document.createElement('br');
    let txtareaTextNode = document.createTextNode(txtarea + "\n");

    // Append text nodes
    show.appendChild(firstTextNode);
    show.append(breaker);
    show.appendChild(txtareaTextNode);
});


//  This is has Pushed to github/Khanzaid

// Here i am practicing Hoisting in js absolutely amazing feature