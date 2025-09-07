import { use } from "react"
import { NavLink } from "react-router";

const categoriePromis = fetch("/categories.json").then(res => res.json())


const AllCategories = () => {
    const categories = use(categoriePromis)
    console.log(categories);
    console.log(categories.id);

    
    
  return (
    <div>
      <h3 className='font-bold'>All Categories {categories.length}</h3>
      <div className="grid grid-cols-1 gap-3">
        {
            categories.map(categorie => 
            <NavLink 
            to={`/categorie/${categorie.id}`} 
            key={categorie.id} 
            className={"btn mt-2 bg-base-100 hover:bg-base-200 border-0"}>
                {categorie.name}
            </NavLink>)
        }
      </div>
    </div>
  )
}

export default AllCategories
