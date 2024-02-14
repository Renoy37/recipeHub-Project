import Image1 from '../Assets/Untitled design (1).png'

function Discover (){
    return(
        <>
        
            <section>
              <img src={Image1} />
            </section>

            <section>
                <div>
                    <h2>DISCOVER MORE RECIPES</h2>
                </div>
                <div>
                    <p>
                        The classic burger is an all-time BBQ favourite! This super easy homemade beef burger recipe gives you delicious patties, packed with onions and herbs for extra flavour, that are perfect for topping with cheese, lettuce and tomato, and sandwiching between floury buns.  
                        See Method:
                        Serves 4
                        20 mins to prepare and 17 mins to cook
                        472 calories / serving
                    </p>
                </div>
            </section>
            <section>
                <div>
                    <h2>SEARCH FOR RECIPES: </h2>
                    <button placeholder='serch here'>Click Me</button>
                    <button background-color='red' color='white'>Search</button>
                </div>
            </section>

        </>
    );
}

export default Discover;