import Item from "./common/item"

const Content = (items) => {
    return /* html */ `
        <main>
            <div id="podcasts-header">
                <h1>Podcasts</h1>
            </div>
            <h4>Meet the Podcast Awards nominees</h4>
            <div id="items">
                ${items.map(({title, description, imgUrl}) => 
                    Item(title, description, imgUrl)
                ).join("")}
            </div>
        </main>
    `
}

export default Content