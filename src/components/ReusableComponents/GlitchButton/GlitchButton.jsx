import './GlitchButton.css'
export default function GlitchButton({label,onClick}){
    return(<button onClick={onClick ? onClick: undefined } className="Glitchbutton">{label}</button>);
}