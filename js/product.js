document.addEventListener("DOMContentLoaded", () => {
    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get("id");
    const productTitle = urlParams.get("title");
    const productPrice = urlParams.get("price");
    const productImage = urlParams.get("image");
    const productDescription = urlParams.get("description");
    const productRating = parseFloat(urlParams.get("rating"));

    if (productId) {
        const fullStars = Math.floor(productRating);
        const halfStar = productRating % 1 >= 0.5 ? 1 : 0;
        const emptyStars = 5 - fullStars - halfStar;

        let starsHTML = '';
        for (let i = 0; i < fullStars; i++) {
            starsHTML += '<i class="fa fa-star full-star"></i>';
        }
        if (halfStar) {
            starsHTML += '<i class="fa fa-star-half-alt half-star"></i>';
        }
        for (let i = 0; i < emptyStars; i++) {
            starsHTML += '<i class="fa fa-star empty-star"></i>';
        }

        const productDetail = `
            <div class="prodact__img">
                <img src="${productImage}" alt="${productTitle}" />
            </div>
            <div class="prodact__content">
                <h2>${productTitle}</h2>
                <div class="rating">Rating: ${starsHTML}</div>
                <p>Price: $${productPrice}</p>
                <p>${productDescription}</p>
            </div>
        `;
        document.getElementById("productDetail").innerHTML = productDetail;
    }
});