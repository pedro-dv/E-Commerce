import React from "react";
import "./styles.css";
import Layout from "../../components/Layout/Layout";
import Section from "../../components/Section/Section";
import { useNavigate } from "react-router-dom";
import products from "../../components/ProductData/ProductData";

// ✅ Importando imagens corretamente
import camisaImg from "../../assets/categoryIcons/iconsPng/camisa.png";
import calcaImg from "../../assets/categoryIcons/iconsPng/calca.png";
import boneImg from "../../assets/categoryIcons/iconsPng/bone.png";
import headphoneImg from "../../assets/categoryIcons/iconsPng/headphone.png";
import tenisImg from "../../assets/categoryIcons/iconsPng/tenis.png";

// Lista de categorias
const categories = [
  {
    name: "Camisetas",
    image: camisaImg,
  },
  {
    name: "Calças",
    image: calcaImg,
  },
  {
    name: "Bonés",
    image: boneImg,
  },
  {
    name: "Headphones",
    image: headphoneImg,
  },
  {
    name: "Tênis",
    image: tenisImg,
  },
];

const CategoryPage = () => {
  const navigate = useNavigate();

  const handleCategoryClick = (category) => {
    navigate(`/categories/${category}`);
  };

  return (
    <Layout>
      <div className="category-page">
        <h1 className="category-title">Categorias</h1>
        <div className="section-container">
          {categories.map((category, index) => (
            <Section key={index} title={category.name} titleAlign="center">
              <div className="category-images">
                {products
                  .filter((product) => product.category === category.name)
                  .slice(0, 1)
                  .map((product) => (
                    <img
                      key={product.id}
                      src={category.image}
                      alt={product.name}
                      className="category-image"
                      onClick={() => handleCategoryClick(category.name)}
                    />
                  ))}
              </div>
            </Section>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default CategoryPage;
