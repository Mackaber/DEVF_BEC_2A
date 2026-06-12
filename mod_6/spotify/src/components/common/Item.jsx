function Item({image, name, description}) {
  return (
        <div className="item">
            <img src={image} alt={name} />
            <h4>{name}</h4>
            <p>
                {description}
            </p>
        </div>
  );
}

export default Item;