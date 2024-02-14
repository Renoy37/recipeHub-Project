import Image1 from '../Assets/Untitled design (1).png'


function Discover (){
    return(
        <div className='container1'>
          <div className='image12'>
              <img src={Image1} />
           </div>
           <div>
             <h2 className='Discover-text'>DISCOVER MORE <span className='recipe'>RECIPE</span></h2>
                <p className='p-tag'>
                The classic burger is an all-time BBQ favourite! This super easy homemade beef burger recipe gives you delicious patties, packed with onions and herbs for extra flavour, that are perfect for topping with cheese, lettuce and tomato, and sandwiching between floury buns.  
                See Method:
                Serves 4
                20 mins to prepare and 17 mins to cook
                472 calories / serving
             </p>
             <input placeholder='Type here'></input>
             <button>
                Search
             </button>
           </div>


        </div>
    );
}

export default Discover;