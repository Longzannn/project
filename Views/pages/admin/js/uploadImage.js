var imgInp = document.querySelector('#imgInp')
var imgUp = document.querySelector('#img-upload')
imgInp.onchange = (e) => {
    const [file] = imgInp.files
    if (file) {
        imgUp.src = URL.createObjectURL(file)
    }
}