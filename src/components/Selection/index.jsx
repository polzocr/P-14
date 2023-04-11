import './index.css'
export default function Selection({elements, title, name, handleChange}){
    return (
        <>
            <select name={name} onChange={handleChange} aria-label={`Choisir ${name}`} className="select-plug">
                <option>{title}</option>
                {elements.map(element => (
                    <option value={element} key={element}>{element}</option>
                ))}
            </select>
        </>
    )
}