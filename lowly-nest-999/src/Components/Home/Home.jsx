import Heading from "../Heading/Heading"
import Card from "../Card/Card"
import "./Home.css"
import Button from "../Button/Button"
// import { background } from "@chakra-ui/react"
// import { red, teal } from "@mui/material/colors"
export default function Home() {
    return <>
    <div className="home">

    
        <div className="heading_1">
            <Heading heading="Turn Emails into Revenue" p_tag="Win new customers with the #1 email marketing and automations brand* that recommends ways to get more opens, clicks and sales." />
            {/* <Button/> */}
        </div>

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
            <div className='container_h'>
                <div className='heading'>
                    <h2>Generate up to 4x more orders* with Customer Journey Builder automations</h2>
                </div>

            </div>

        </div>
        <div className="cards_content">
            <div className="cards_cont clr1">
                <div className="cards">
                    <h2>Convert more customers at scale</h2>
                    <p>Drive more traffic and sales by setting up automations that trigger emails based on customer behavior with our Customer Journey Builder.</p>
                    <p>
                        Learn more -
                    </p>
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
                    <h2>Discover new ways to automate</h2>
                    <p>Get a head start with pre-built journeys that help you cross-sell your products, recover abandoned carts, re-engage existing customers, and win new ones.</p>
                    <div>
                        Learn more -
                    </div>
                </div>
            </div>

            <div className="cards_cont clr4">
                <div className="cards">
                    <h2>Keep your emails relevant and your brand growing</h2>
                    <p>Deliver personalized emails based on their buying behavior, survey responses, chat interactions, and support tickets to promote loyalty and growth.</p>
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
                        
                            <img className="my" src="https://eep.io/images/yzco4xsimv0y/egMxvwdsj41K5eESLhWBO/cf823adbd311e33919f97ffc5bf3181d/Canva.jpg?w=196&fm=webp&q=80" alt="" />
                     
                        <div className="prt_content">
                            <h2>Canva</h2>
                            <p>Create compelling visuals for your marketing.
                            </p>
                        </div>
                    </div>

                    <div className="partners_card">
                       
                            <img  className="my" src="https://eep.io/images/yzco4xsimv0y/51oq4AakIqo8fATlHgqHK0/02a750b1c1a16745296dca6fa7cb830c/Salesforce__1_.jpg?w=196&fm=webp&q=80" alt="" />
                        
                        <div className="prt_content">
                            <h2>MailPanda for Salesforce</h2>
                            <p>Sync your MailPanda subscribers and Salesforce leads across platforms.
                            </p>
                        </div>
                    </div>

                    <div className="partners_card">
                      
                            <img className="my"  src="https://eep.io/images/yzco4xsimv0y/67trWJLKtKcvrqlKYSlskE/696ad499e0cc60aa7392521a6a7cfd90/Instagram__1_.jpg?w=196&fm=webp&q=80" alt="" />
                       
                        <div className="prt_content">
                            <h2>Instagram</h2>
                            <p>Promote and share your instagram posts in email Campaigns
                            </p>
                        </div>
                    </div>

                    <div className="partners_card">
                       
                            <img className="my"  src="https://eep.io/images/yzco4xsimv0y/44dW9Z4hibyDYi0qggfets/b01884985e996ffb5dc133556b92bb7a/Shopify__1_.jpg?w=196&fm=webp&q=80" alt="" />
                    
                        <div className="prt_content">
                            <h2>Shopify</h2>
                            <p>Sync Shopify customers, products and purchase data to MailPanda
                            </p>
                        </div>
                    </div>

                    <div className="partners_card">
                     
                            <img className="my"  src="https://eep.io/images/yzco4xsimv0y/7mpZ7UZrdzk2BmWX1OnRvb/5e610ecd21eeb25d0b82b098ce424e34/Google_Analytics2.jpg?w=196&fm=webp&q=80" alt="" />
                   
                        <div className="prt_content">
                            <h2>Google Analytics</h2>
                            <p>Unlock powerful insights with campaigh, website or landing page data.
                            </p>
                        </div>
                    </div>

                    <div className="partners_card">
                    
                            <img className="my"  src="https://eep.io/images/yzco4xsimv0y/2uruOq31Y1FKdghFWn5zMg/8a35f3f9e463ba34038f3c3f16ccb635/WooCommerce.jpg?w=196&fm=webp&q=80" alt="" />
                    
                        <div className="prt_content">
                            <h2>WooCommerce</h2>
                            <p>Power your ecommerce store with smart marketing features
                            </p>
                        </div>
                    </div>

                    <div className="partners_card">
                      
                            <img className="my"  src="https://eep.io/images/yzco4xsimv0y/uZVnrVt3DO1G4Ec5G4pvs/e6c9d3c2613827f7dd238f1c5e0b02d9/Quickbooks.jpg?w=196&fm=webp&q=80" alt="" />
                     
                        <div className="prt_content">
                            <h2>QuickBooks Online</h2>
                            <p>Bring together your marketing tools and invoice data.
                            </p>
                        </div>
                    </div>

                    <div className="partners_card">
                       
                            <img className="my"  src="https://eep.io/images/yzco4xsimv0y/2klSrOoLZKmLuGKZjKT9o3/ca400f60c2f3673f3ab9b52f4d03360d/Squarespace.jpg?w=196&fm=webp&q=80" alt="" />
                     
                        <div className="prt_content">
                            <h2>Squarespace Commerce</h2>
                            <p>Market your ecommerce business drive sales.
                            </p>
                        </div>
                    </div>

                    <div className="partners_card">
                      
                            <img className="my" src="https://eep.io/images/yzco4xsimv0y/26deBkGp3A5Pj7suZ9oV7V/858e8a4603707166988a3282bca7e29b/Zapier.jpg?w=196&fm=webp&q=80" alt="" />
                    
                        <div className="prt_content">
                            <h2>Zapier</h2>
                            <p>Automatically pass data between web services without a single line of code.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    </>
}