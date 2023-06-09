import { useSelector } from "react-redux"
import Card from '../Card/Card'
 const Favorite = () => {
    const favorites = useSelector((state)=> state.myFavorites);

    return(
        <div>
            {
                favorites?.map((fav)=>{
                    return(
                        <Card 
                        key={fav.id}
                        id = {fav.id}
                        name = {fav.name}
                        status = {fav.status}
                        species = {fav.species}
                        gender = {fav.gender}
                        origin = {fav.origin}
                        image= {fav.image}
                        onClose={fav.onClose}
                        />
                    )
                })
            }
        </div>
    )
 }

 export default Favorite