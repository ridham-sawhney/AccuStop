import './FloatingSelector.css'

export default function FloatingSelector({ labels, gameStatus, timeSelected, updateSelectedTime }) {
    return (
        <>
            <div className="radio-inputs" key={labels.length}>
                {
                    labels.map((ele) => {
                        return (
                            <label className="radio" key={'label' + ele}>
                                <input readOnly key={'input' + ele} onClick={() => { updateSelectedTime(ele) }} type="radio" name="radio" checked={timeSelected == ele} disabled={gameStatus} />
                                <span key={'span' + ele} className="name">{ele} sec</span>
                            </label>
                        )
                    })
                }
            </div>
        </>
    );
}