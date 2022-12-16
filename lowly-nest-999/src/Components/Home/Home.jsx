import Heading from "../Heading/Heading"
import Card from "../Card/Card"
import "./Home.css"
import { background } from "@chakra-ui/react"
import { red, teal } from "@mui/material/colors"
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

        <div className="video_card">
            <div className="video_cont">
                <div className="video">
                    <img src="https://embed-ssl.wistia.com/deliveries/f9d4f61a1c1af30c55441ddd498bceec.webp?image_crop_resized=640x360" alt="" />
                </div>
                <div className="video_content">
                    <p>Most email marketing platforms tell you how your campaigns perform. We analyze the data from the billions of emails we send to give you personalized recommendations for improving your content, targeting, and automations</p>
                </div>
            </div>
        </div>
        <div className="heading_2">
            <Heading />

        </div>
        <div className="cards_content">
            <div className="cards_cont clr1">
                <div className="cards">
                    <h2>Convert more customers at scale</h2>
                    <p>Drive more traffic and sales by setting up automations that trigger emails based on customer behavior with our Customer Journey Builder.</p>
                    <div>
                        Learn more -
                    </div>
                </div>
            </div>

            <div className="cards_cont clr2">
                <div className="cards">
                    <h2>Convert more customers at scale</h2>
                    <p>Drive more traffic and sales by setting up automations that trigger emails based on customer behavior with our Customer Journey Builder.</p>
                    <div>
                        Learn more -
                    </div>
                </div>
            </div>

            <div className="cards_cont clr3">
                <div className="cards">
                    <h2>Convert more customers at scale</h2>
                    <p>Drive more traffic and sales by setting up automations that trigger emails based on customer behavior with our Customer Journey Builder.</p>
                    <div>
                        Learn more -
                    </div>
                </div>
            </div>

            <div className="cards_cont clr4">
                <div className="cards">
                    <h2>Convert more customers at scale</h2>
                    <p>Drive more traffic and sales by setting up automations that trigger emails based on customer behavior with our Customer Journey Builder.</p>
                    <div>
                        Learn more -
                    </div>
                </div>
            </div>
        </div>

        <div className="video_card">
            <div className="video_cont">
                <div className="video_content">
                    <p>Most email marketing platforms tell you how your campaigns perform. We analyze the data from the billions of emails we send to give you personalized recommendations for improving your content, targeting, and automations</p>
                </div>
            </div>
        </div>

        <div className="heading_2">
            <Heading />

        </div>

        <div className="cards_content">
            <div className="cards_cont clr1">
                <div className="cards">
                    <h2>Convert more customers at scale</h2>
                    <p>Drive more traffic and sales by setting up automations that trigger emails based on customer behavior with our Customer Journey Builder.</p>
                    <div>
                        Learn more -
                    </div>
                </div>
            </div>

            <div className="cards_cont clr2">
                <div className="cards">
                    <h2>Convert more customers at scale</h2>
                    <p>Drive more traffic and sales by setting up automations that trigger emails based on customer behavior with our Customer Journey Builder.</p>
                    <div>
                        Learn more -
                    </div>
                </div>
            </div>

            <div className="cards_cont clr3">
                <div className="cards">
                    <h2>Convert more customers at scale</h2>
                    <p>Drive more traffic and sales by setting up automations that trigger emails based on customer behavior with our Customer Journey Builder.</p>
                    <div>
                        Learn more -
                    </div>
                </div>
            </div>

            <div className="cards_cont clr4">
                <div className="cards">
                    <h2>Convert more customers at scale</h2>
                    <p>Drive more traffic and sales by setting up automations that trigger emails based on customer behavior with our Customer Journey Builder.</p>
                    <div>
                        Learn more -
                    </div>
                </div>
            </div>
        </div>

        <div className="partners_container">
            <div className="prtn_cont">


                <div className="partners_heading">
                    <h2>
                        Bring in more data, drive more growth with our integrations
                    </h2>

                </div>

                <div className="partners">
                    <div className="partners_card">
                        <div className="prt_img_div">
                            <img src="https://eep.io/images/yzco4xsimv0y/egMxvwdsj41K5eESLhWBO/cf823adbd311e33919f97ffc5bf3181d/Canva.jpg?w=196&fm=webp&q=80" alt="" />
                        </div>
                        <div className="prt_content">
                            <h2>Canva</h2>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi, impedit.
                            </p>
                        </div>
                    </div>

                    <div className="partners_card">
                        <div className="prt_img_div">
                            <img src="https://eep.io/images/yzco4xsimv0y/51oq4AakIqo8fATlHgqHK0/02a750b1c1a16745296dca6fa7cb830c/Salesforce__1_.jpg?w=196&fm=webp&q=80" alt="" />
                        </div>
                        <div className="prt_content">
                            <h2>Canva</h2>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi, impedit.
                            </p>
                        </div>
                    </div>

                    <div className="partners_card">
                        <div className="prt_img_div">
                            <img src="https://eep.io/images/yzco4xsimv0y/67trWJLKtKcvrqlKYSlskE/696ad499e0cc60aa7392521a6a7cfd90/Instagram__1_.jpg?w=196&fm=webp&q=80" alt="" />
                        </div>
                        <div className="prt_content">
                            <h2>Canva</h2>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi, impedit.
                            </p>
                        </div>
                    </div>

                    <div className="partners_card">
                        <div className="prt_img_div">
                            <img src="https://eep.io/images/yzco4xsimv0y/egMxvwdsj41K5eESLhWBO/cf823adbd311e33919f97ffc5bf3181d/Canva.jpg?w=196&fm=webp&q=80" alt="" />
                        </div>
                        <div className="prt_content">
                            <h2>Canva</h2>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi, impedit.
                            </p>
                        </div>
                    </div>

                    <div className="partners_card">
                        <div className="prt_img_div">
                            <img src="https://eep.io/images/yzco4xsimv0y/51oq4AakIqo8fATlHgqHK0/02a750b1c1a16745296dca6fa7cb830c/Salesforce__1_.jpg?w=196&fm=webp&q=80" alt="" />
                        </div>
                        <div className="prt_content">
                            <h2>Canva</h2>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi, impedit.
                            </p>
                        </div>
                    </div>

                    <div className="partners_card">
                        <div className="prt_img_div">
                            <img src="https://eep.io/images/yzco4xsimv0y/67trWJLKtKcvrqlKYSlskE/696ad499e0cc60aa7392521a6a7cfd90/Instagram__1_.jpg?w=196&fm=webp&q=80" alt="" />
                        </div>
                        <div className="prt_content">
                            <h2>Canva</h2>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi, impedit.
                            </p>
                        </div>
                    </div>

                    <div className="partners_card">
                        <div className="prt_img_div">
                            <img src="https://eep.io/images/yzco4xsimv0y/egMxvwdsj41K5eESLhWBO/cf823adbd311e33919f97ffc5bf3181d/Canva.jpg?w=196&fm=webp&q=80" alt="" />
                        </div>
                        <div className="prt_content">
                            <h2>Canva</h2>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi, impedit.
                            </p>
                        </div>
                    </div>

                    <div className="partners_card">
                        <div className="prt_img_div">
                            <img src="https://eep.io/images/yzco4xsimv0y/51oq4AakIqo8fATlHgqHK0/02a750b1c1a16745296dca6fa7cb830c/Salesforce__1_.jpg?w=196&fm=webp&q=80" alt="" />
                        </div>
                        <div className="prt_content">
                            <h2>Canva</h2>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi, impedit.
                            </p>
                        </div>
                    </div>

                    <div className="partners_card">
                        <div className="prt_img_div">
                            <img src="https://eep.io/images/yzco4xsimv0y/67trWJLKtKcvrqlKYSlskE/696ad499e0cc60aa7392521a6a7cfd90/Instagram__1_.jpg?w=196&fm=webp&q=80" alt="" />
                        </div>
                        <div className="prt_content">
                            <h2>Canva</h2>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi, impedit.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
}