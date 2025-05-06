import React, { useState } from "react";
import "./styles.css";
import Layout from "../../components/Layout/Layout";
import ProductCard from "../../components/ProductCard/ProductCard";
import FilterGroup from "../../components/FilterGroup/FilterGroup";
import products from "../../components/ProductData/ProductData";
import { useParams } from "react-router-dom";

const CategoryProductsPage = () => {
  const { category } = useParams(); // Obtendo a categoria da URL
  
  const [selectedFilters, setSelectedFilters] = useState({
    price: "all", // Preço inicial: todos os produtos
    category: category, // Categoria inicial: a categoria que vem da URL
  });

  // Função para atualizar os filtros
  const handleFilterChange = (filterType, value) => {
    setSelectedFilters({
      ...selectedFilters,
      [filterType]: value,
    });
  };

  // Função para limpar os filtros
  const handleClearFilters = () => {
    setSelectedFilters({
      price: "all",
      category: category, // Mantém a categoria atual
    });
  };

  // Filtrando os produtos com base nos filtros selecionados
  const filteredProducts = products.filter((product) => {
    const priceCondition = selectedFilters.price === "all" || product.price <= parseFloat(selectedFilters.price);
    return priceCondition && product.category === selectedFilters.category;
  });

  // Opções de filtro de preço
  const priceOptions = [
    { text: "Até R$50", value: "50" },
    { text: "Até R$100", value: "100" },
    { text: "Até R$200", value: "200" },
    { text: "Todos os preços", value: "all" }, // Adicionando uma opção para "Todos os preços"
  ];

  return (
    <Layout>
      <div className="category-products-page">
        <h1 className="category-title">{category}</h1>
        <div className="category-container">
          <aside className="filters">
            {/* Filtro de preço */}
            <FilterGroup
              nameTitle="Preço"
              title="price"
              inputType="radio"
              options={priceOptions}
              selectedFilters={selectedFilters}
              onFilterChange={handleFilterChange}
            />
            <button className="bt clear-filters" onClick={handleClearFilters}>
              Limpar Filtros
            </button>
          </aside>

          {/* Lista de produtos filtrados */}
          <div className="product-listing-category">
            {filteredProducts.length > 0 ? (
              filteredProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  id={product.id}
                  image={product.image}
                  name={product.name}
                  price={product.price}
                  priceDiscount={product.priceDiscount}
                />
              ))
            ) : (
              <p>Nenhum produto encontrado.</p> // Exibindo uma mensagem caso nenhum produto seja encontrado
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default CategoryProductsPage;
