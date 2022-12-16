

import 'bootstrap/dist/css/bootstrap.min.css';
import "./Movie.css"
export default function Movie() {
    return <>
        <div class="col-md-3">
            <div class="card card-action">
                <img className="card-image" src="https://eep.io/images/3eti6ketg4ch/2evVcu4qtDXaJmJ4E1bfJG/2eca2dc4786a2dae32622c6f90d17591/Series_Portrait_1380x2130.png?fm=jpg&fit=fill&w=1000" alt="" />

                <div className='card-overlay'>
                    <div class="card-body">
                        <h3 class="card-title">Podcast</h3>
                        <p class="card-text">Here's how Bjork revolutionized eltronic music by her 9 Album</p>
                        {/* <a href='*' class="btn btn-primary">Go somewhere</a> */}
                    </div>
                </div>
            </div>
        </div>
    </>
}