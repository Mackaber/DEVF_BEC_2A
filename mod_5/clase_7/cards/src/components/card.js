const Card = (username, content, posted_at) => {
    return /* html */ `
        <div class="card">
            <p>${username} <span>${posted_at}</span></p><br>
            <p>${content}</b>
        </div>
    `
}

// Exportar componentes para usarlos en otros lados
export default Card