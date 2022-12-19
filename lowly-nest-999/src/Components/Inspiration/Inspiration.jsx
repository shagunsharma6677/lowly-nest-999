import Movie from "../Movie/Movie"
import "./Inspiration.css"
export default function Inspiration() {
    return <>
        <div className="Inspiration_cont">
            <div className="Inspiration">
                <div className="banner">
                    <div className="mailPanda_heading">MailPanda Presents</div>
                    <div className="flex content_cont">
                        <div className="content">
                            <div className="cnt">
                                <div className="img_div">
                                    <img src="https://images.ctfassets.net/3eti6ketg4ch/1z55OclXaN7Y6NImJvCEr0/9c0cbffcb8579ec95e3fcbf3eb31d852/06_Homepage_HeroLogo.png" alt="banner" />
                                </div>
                                <p>Join 5 documentarians who leave nothing to guess about as they dive into the worlds of photography and film, fireworks, cave drawings, and bugs. Reward your curiosity with inspiration to ask your own questions, or just immerse yourself into their worlds.
                                </p>

                            </div>

                        </div>
                        <div className="img_content">
                            <img src="https://images.ctfassets.net/3eti6ketg4ch/6EO1Cycwwu6o8i3iuGvbJb/e12843585079fef0e8f474d82c34994a/05_Homepage_HeroImage-min.png" alt="movie" />
                        </div>
                    </div>
                </div>
                <div className="all_shows_cont">
                    <h1 className="all_shows_heading">All Shows</h1>

                    <div className="all_shows">
                        <Movie movie="https://eep.io/images/3eti6ketg4ch/2evVcu4qtDXaJmJ4E1bfJG/2eca2dc4786a2dae32622c6f90d17591/Series_Portrait_1380x2130.png?fm=jpg&fit=fill&w=1000"
                            head="Podcast"
                            p_tag="Here's how Bjork revolutionized eltronic music by her 9 Album"

                        />
                        <Movie movie="https://eep.io/images/3eti6ketg4ch/2rbArBgEUZzZqijPFCCiDc/9faf442c3d6eef0565c79c7e2f56244b/episode_portrait_image__1_.png?fm=jpg&fit=fill&w=1000"
                            head="Listening"
                            p_tag="Discover how musicians use thrie creativity to make secse of the world" />
                        <Movie movie="https://eep.io/images/3eti6ketg4ch/6RH5fqjRUdeqHu4TwqiQHv/fdb6ac6a9b82a4a1f45e2f1119398047/Partners-platform-Portrait-2.jpg?fm=jpg&fit=fill&w=1000"

                            head="Partbers" p_tag="Hear stories from notable parttners who created something extraordinary together."
                        />
                        <Movie movie="https://eep.io/images/3eti6ketg4ch/6E9ZIAMB7gltc6S61ZsfvV/e012c265ccf8721ab0b061ecb9034224/MCP_Going-Through-It_Home_Series-Portrait.jpg?fm=jpg&fit=fill&w=1000" head="Going Through" p_tag="Jenny Yang sits down with 15 guests to reflect on their Going Through it moments.
                        " />

                        <Movie movie="https://eep.io/images/3eti6ketg4ch/0n1EzgQzcx10vad7bCnHm/a9d2a9549b6500ec331e8f0d54186fb8/The_Jump_S3_-_Series_Portrait_Key_Art.png?fm=jpg&fit=fill&w=1000" head="Jump" p_tag="Shorley Manson talks with misicians about that one song that changed everything." />


                    </div>
                    <div className="all_shows">
                        <Movie movie="https://eep.io/images/3eti6ketg4ch/5MUuAu83I37gzuqdKds4FW/20d02001c6ae6cca1d912bb29fbfc3b5/MCP_Call-Paul_Homepage_Episode-Portrait.jpg?fm=jpg&fit=fill&w=1000" head="Call Paul" p_tag="Paul Jarvis speaks with enterpreneurs who turned big ideas in to businesses." />

                        <Movie movie="https://eep.io/images/3eti6ketg4ch/q0uUlzR3DOwaVn0pfhcta/92dabb5dfe70d2866382d7cbb62e6f03/MCP_You_Are_What_You_Wear_TSO_Portrait.png?fm=jpg&fit=fill&w=1000" head="The Send Off"
                            p_tag="A group of teens show us their entree into the world of high fashion the prom."
                        />

                        <Movie movie="https://eep.io/images/3eti6ketg4ch/5wtDQSXhWhXrZlQjZdlJP6/d01e791309039defb11b17587d782a27/Indie_Game_-_Platform_Vertical.png?fm=jpg&fit=fill&w=1000" head="Indie Game" p_tag="The story of putting everything on he line to share your game with the abroad." />

                        <Movie movie="https://eep.io/images/3eti6ketg4ch/I3K6OVuoOFHdywKfFytAk/d18de9138acdcc1e789187252fd553aa/BJ-s_Mobile_Gift_Shop_Platform_Vertical_V2.png?fm=jpg&fit=fill&w=1000" head="BJ's Mobile Gift Shop" p_tag="A film about a man, his suitcase, an a dream." />


                    </div>
                    <div className="all_shows">
                        <Movie movie="https://eep.io/images/3eti6ketg4ch/6zL1GCX1Zus8OAsc6BAKmJ/c0a0f54fea29b5bed4835558ff4f218a/Memory_Video_-_Platform_Vertical_2.png?fm=jpg&fit=fill&w=1000" head="Memory Video" p_tag="A movie about business and the film lover in all of us." />

                        <Movie movie="https://eep.io/images/3eti6ketg4ch/3tBJ4fWO3f2LErpztdVZDO/d63a599b040b6507d0c29173738ebe69/Quilt_Fever_-_Platform_Vertical.png?fm=jpg&fit=fill&w=1000" head="Quilt fever" p_tag="People from different walks of life come together to share a common thread." />

                        <Movie movie="https://eep.io/images/3eti6ketg4ch/1goOp968jIwpWZtDHQQEIU/2c4f4f96c28b15f57f685641442396aa/Stories_in_Place_Portrait_1380x2130_A.jpg?fm=jpg&fit=fill&w=1000" head="Stories in Place" p_tag="7 Filmmakers, 7 small business stories." />

                        <Movie movie="https://eep.io/images/3eti6ketg4ch/3IZOXouC1tw2VP4atRV9NN/a8cbbe268bfd4807edd4e3851e24a05c/MCH04_Kitchen_Table_Entrepreneur_Edit_v042.mp4.00_01_46_09.Still001__1_.jpg?fm=jpg&fit=fill&w=1000" head="All in a Day's Work" p_tag="A glance into he highs ans lows of he life as an enterpreneus." />
                    </div>
                </div>
            </div>
        </div>
    </>
}