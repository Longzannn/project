var productImages = document.querySelectorAll('.product-image img')

productImages.forEach((productImage) => {
    var newSrc = productImage.getAttribute('newSrc')
    var oldSrc = productImage.getAttribute('oldSrc')
    productImage.addEventListener('mouseover', () => {
        productImage.src = newSrc
    })

    productImage.addEventListener('mouseout', () => {
        productImage.src = oldSrc
    })
})