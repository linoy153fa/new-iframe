
export function ItemsPreview({item}) {
    return (
        <div className="toy-card" >
            <img className="img-mock" src={item.src}/>
            <h2 className="item">{item.alt}</h2>
        </div>
    )
}
