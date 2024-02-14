import Image1 from '../Assets/burgerking.jpg.png'

function Discover (){
    return(
      <div className="landingPage">
           <div className="Disc-Image">
                <img src={Image1} alt="pizza" />
            </div>
            <div className="intro">
                <h1>DISCOVER MORE<span className="highlighted">COOK?</span></h1>
                <p>
                        The classic burger is an all-time BBQ favourite! This super easy homemade beef burger recipe gives you delicious patties, packed with onions and herbs for extra flavour, that are perfect for topping with cheese, lettuce and tomato, and sandwiching between floury buns.  
                        See Method:
                        Serves 4
                        20 mins to prepare and 17 mins to cook
                        472 calories / serving
                    </p>
            </div>

        </div>
    );
}

export default Discover;