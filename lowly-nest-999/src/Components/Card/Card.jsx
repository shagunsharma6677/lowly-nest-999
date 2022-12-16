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
                <div style={{
                    backgroundColor: "#FDF8EA", height: "180px",
                    padding: "50px"
                }} className='lower'>
                    <div className="img-2">
                        <p>{data}</p>
                    </div>
                    <div>
                        <Button colorScheme='yellow' variant='outline'>
                            SighUp
                        </Button>
                    </div>
                </div>
            </div>

        </div>

    </>
}