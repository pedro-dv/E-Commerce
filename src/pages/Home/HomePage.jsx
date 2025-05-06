import React from "react";
import "./styles.css";
import Layout from "../../components/Layout/Layout";
import Gallery from "../../components/Gallery/Gallery";
import Section from "../../components/Section/Section";
import ProductListing from "../../components/ProductListing/ProductListing";
import products from "../../components/ProductData/ProductData";
import { useNavigate } from "react-router-dom";

// ✅ Importações corretas das imagens do src/assets
import frame10 from "../../assets/categoryIcons/Frame-10.svg";
import frame11 from "../../assets/categoryIcons/Frame-11.svg";
import frame12 from "../../assets/categoryIcons/Frame-12.svg";
import frame13 from "../../assets/categoryIcons/Frame-13.svg";
import frame14 from "../../assets/categoryIcons/Frame-14.svg";

const HomePage = () => {
  const navigate = useNavigate();

  const handleCategoryClick = (category) => {
    navigate(`/categories?category=${category}`);
  };

  return (
    <Layout>
      <div className="home-page">
        <Gallery
          images={[
            { src: "/home-slide-1.jpeg" },
            { src: "/home-slide-2.jpeg" },
            { src: "/home-slide-3.jpeg" },
            { src: "/home-slide-4.jpeg" },
          ]}
          max-width="100%"
          height="681px"
        />

        <Section title="Coleções em destaque" titleAlign="left">
          <div className="collections-containers">
            <img src="/collection-2.png" className="collection-image" alt="Coleção 2" />
            <img src="/collection-3.png" className="collection-image" alt="Coleção 3" />
            <img src="/collection-1.png" className="collection-image" alt="Coleção 1" />
          </div>
        </Section>

        <Section title="Coleção em Destaque" titleAlign="center">
          <div className="collection-category">
            <img
              src={frame10}
              className="collection-image category"
              onClick={() => handleCategoryClick("camisas")}
              alt="Camisas"
            />
            <img
              src={frame11}
              className="collection-image category"
              onClick={() => handleCategoryClick("calcas")}
              alt="Calças"
            />
            <img
              src={frame12}
              className="collection-image category"
              onClick={() => handleCategoryClick("bones")}
              alt="Bonés"
            />
            <img
              src={frame13}
              className="collection-image category"
              onClick={() => handleCategoryClick("headphones")}
              alt="Headphones"
            />
            <img
              src={frame14}
              className="collection-image category"
              onClick={() => handleCategoryClick("tenis")}
              alt="Tênis"
            />
          </div>
        </Section>

        <Section
          title="Produtos em alta"
          titleAlign=""
          link={{ text: "Ver todos ->", href: "/products" }}
          className="PrtAlta-container"
        >
          <ProductListing products={products.slice(0, 8)} />
        </Section>
      </div>
    </Layout>
  );
};

export default HomePage;
