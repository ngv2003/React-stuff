import burger from './assets/veg burger.avif';
function Card(){
    return(
        <div className="card">
            <img className="bug" src={burger}  alt="burger"></img>
            <h2>Veg Burger</h2>
            <p>Aloo tikka + Panner + Spinach </p>

        </div>
    );
}

export default Card;