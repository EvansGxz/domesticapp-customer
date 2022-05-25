import { useEffect } from "react";
import { useAuth } from "../context/auth-context";
import { BasicContainer } from "../styles/containers";
import Header from "../components/Header";

export default function Home() {
  const { categories, getCategories } = useAuth();

  useEffect(() => {
    getCategories();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps
  return (
    <BasicContainer>
      <Header />
      {categories ? (
        <>
          {categories.map((category) => (
            <p key={category.id}>{category.category_name} </p>
          ))}
        </>
      ) : (
        <div>
          <h2>Categories not found</h2>
        </div>
      )}
    </BasicContainer>
  );
}
