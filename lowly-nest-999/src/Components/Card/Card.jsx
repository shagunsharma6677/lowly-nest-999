import { Button } from '@chakra-ui/react'
import "./Card.css"
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
                        <Button colorScheme='yellow' variant='outline'>
                            Learn more
                        </Button>
                    </div>
                </div>
            </div>

        </div>

    </>
}