// import { Button } from '@chakra-ui/react'
import "./Heading.css"
import Button from "../Button/Button"
export default function Heading(props) {
    const {heading, p_tag} = props
    return <>
        <div className='container_h'>
            <div className='heading'>
                <h2>{heading}</h2>
                <p>{p_tag}</p>
                <Button btn="Signup"/>

            </div>

        </div>

    </>
}