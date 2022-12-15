import Heading from "../Heading/Heading"
import Card from "../Card/Card"
import "./Home.css"
export default function Home() {
    return <>

        <div className="heading_1">
            <Heading />
        </div>
        <br />
        <div className="image_card">
            <Card img="https://eep.io/images/yzco4xsimv0y/33f3mgIWbzKjIpIRJi2f5v/6bd36bba38b7f6a94d587605ab9a7d75/Desktop_Feature_Cards_1_Automations.jpeg?w=630&fm=webp&q=80"
                bg="#D99536"
                data="Send the right message at the right time to convert more customers" />
            <Card img="https://eep.io/images/yzco4xsimv0y/hBcOt3RZ5DOhMJD2Hi2Z2/96b28d17c45e9376731ad825b002b0ff/Desktop_Feature_Cards_2_Analytics.png?w=630&fm=webp&q=80"
                bg="#E7B75F"
                data="Get AI-assisted suggestions to help make your content more engaging. " />
            <Card img="https://eep.io/images/yzco4xsimv0y/5xqzo6y8Z7anw9VQXJarpj/5f91182af7bf16ecc34b487a619d0a54/Desktop_Feature_Cards_3_Segmentation.jpeg?w=630&fm=webp&q=80"
                bg="#FDF8EA"
                data="Boost customer loyalty by predicting the right ones to target" />
            <Card img="https://eep.io/images/yzco4xsimv0y/lsHRpmOI81ZcFS1Yld0Bs/1e2812587cd0f3089061bd4b513fd6d0/Desktop_Feature_Cards_4_Integrations.png?w=630&fm=webp&q=80"
                bg="#241C15"
                data="Connect more tools, get more data, save time, and make better decisions. " />
        </div>

        {/* <div className="video_card">
            <VideoCard />

        </div>
        <div className="plan">
            <Plan />

        </div>
        <div className="heading_2">
            <Heading />

        </div> */}

        {/* <div>
            <Cards />
            <Cards />
            <Cards />
            <Cards />
            <Cards />
            <Card />

            /</div> */}

        <div className="patners">

        </div>



    </>
}