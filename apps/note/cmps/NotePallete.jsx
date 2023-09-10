export function NotePallete({ note, onChangeNoteBgc }) {
    return (
        <div className="color-pallete flex">
            <button className="transparent" onClick={() => onChangeNoteBgc('transparent', note)}>
                ✖
            </button>
            <button className="lightblue" onClick={() => onChangeNoteBgc('lightblue', note)}></button>
            <button className="lightgreen" onClick={() => onChangeNoteBgc('lightgreen', note)}></button>
            <button className="lightpink" onClick={() => onChangeNoteBgc('lightpink', note)}></button>
            <button className="lightcoral" onClick={() => onChangeNoteBgc('lightcoral', note)}></button>
            <button className="lightsalmon" onClick={() => onChangeNoteBgc('lightsalmon', note)}></button>
            <button
                className="lightseagreen"
                onClick={() => onChangeNoteBgc('lightseagreen', note)}
            ></button>
        </div>
    )
}
