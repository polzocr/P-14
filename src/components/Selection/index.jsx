import './index.css'

export default function Selection({ elements, title, name, onChange }){
    return (
        <>
            <select name={name} onChange={onChange} aria-label={`Choisir ${name}`} className="select-plug">
                <option>{title}</option>
                {elements.map(element => (
                    <option value={element} key={element}>{element}</option>
                ))}
            </select>
        </>
    )
}