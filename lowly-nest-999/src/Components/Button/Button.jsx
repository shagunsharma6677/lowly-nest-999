import "./Button.css"

export default function Button(props) {
    const {btn} = props
    return <>
        <div className="btn_div ">
            <button className="button color">{btn}</button>
        </div>
    </>
}