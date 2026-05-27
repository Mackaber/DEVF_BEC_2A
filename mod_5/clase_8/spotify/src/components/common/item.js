const Item = (title, description, imgUrl) => {
    return /* html */ `
        <div class="item">
            <img src="${imgUrl}">
            <h4>${title}</h4>
            <p>
                ${description}
            </p>
        </div>
    `
}

export default Item