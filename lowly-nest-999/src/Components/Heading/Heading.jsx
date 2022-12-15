import { Button } from '@chakra-ui/react'
import "./Heading.css"
export default function Heading() {
    return <>
        <div className='container'>
            <div className='heading'>
                <h2>Turn Emails into Revenue</h2>
                <p>Win new customers with the #1 email marketing and automations brand* that recommends ways to get more opens, clicks and sales.</p>
                <Button colorScheme='yellow' variant='outline'>
                    SighUp
                </Button>
            </div>

        </div>

    </>
}