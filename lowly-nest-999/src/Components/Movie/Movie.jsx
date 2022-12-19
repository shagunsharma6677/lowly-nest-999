

import 'bootstrap/dist/css/bootstrap.min.css';
import "./Movie.css"
export default function Movie(props) {
    const {movie, p_tag,head} = props
    return <>
        <div class="col-md-3">
            <div class="card card-action">
                <img className="card-image" src={movie} alt="" />

                <div className='card-overlay'>
                    <div class="card-body">
                        <h3 class="card-title">{head}</h3>
                        <p class="card-text">{p_tag}</p>
                    </div>
                </div>
            </div>
        </div>
    </>
}