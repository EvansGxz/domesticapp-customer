import { useEffect } from "react";
import { useAuth } from "../context/auth-context";
import MenuCustomer from "../components/MenuCustomer";
import C from "../components/style-component/index";
import FoodCard from "../components/cards/food-card";

export default function CustomerHome() {
  document.body.style.transition = "background-color 1s ease-out";
  document.body.style.backgroundColor = "white";
  var color = "#0BBBEF";

  const { categories, getCategories } = useAuth();

  useEffect(() => {
    getCategories();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div>
      {categories ? (
        <C.ContainerDishes>
          {categories.map((category) => {
            return (
              <C.StyledLink
                to={{
                  pathname: "/select_service",
                  search: `?name=${category.category_name}&id=${category.id}`,
                }}
                key={category.id}
              >
                <FoodCard key={category.id} src={category.cover} name={category.category_name} />
              </C.StyledLink>
            );
          })}
        </C.ContainerDishes>
      ) : (
        <div>
          <h2>Categories not found</h2>
        </div>
      )}

      <MenuCustomer home={color} />
    </div>
  );
}

