// import { Button } from '@chakra-ui/react'
import "./Card.css"
import Button from "../Button/Button" 
export default function Card(props) {
    const { img, data } = props
    return <>
        <div className="container">
            <div className="card">
                <div className="img-1">
                    <img src={img} alt="" />
                </div>
                <div className='lower'>
                    <div className="img-2">
                        <p>{data}</p>
                    </div>
                    <div>
                        <Button btn="Learn"/>
                    </div>
                </div>
            </div>

        </div>

    </>
}