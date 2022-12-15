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
                        <Movie />
                        <Movie />
                        <Movie />
                        <Movie />
                    </div>
                </div>
            </div>
        </div>
    </>
}