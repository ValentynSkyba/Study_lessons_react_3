import { useEffect, useState } from "react";
import productsData from "../../assets/products.json";
import ProductCard from "./ProductCard";
import s from "./Products.module.css";
import Modal from "../Modal/Modal";
const Products = () => {
  const [products] = useState(productsData);
  const [cart, setCard] = useState(() => {
    const savedData = JSON.parse(window.localStorage.getItem("cart"));
    if (savedData?.length) {
      return savedData;
    }
    return [];
  });
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenViewMore, setIsOpenViewMore] = useState(false);
  const [searchStr, setSearchStr] = useState("");
  const [contentModal, setContentModal] = useState({});

  useEffect(() => {
    window.localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const toggleModal = () => setIsOpen((prev) => !prev);
  const openModalWithProduct = (product) => {
    // console.log(product);
    setContentModal(product);
    setIsOpenViewMore(true);
  };
  const closeModalWithProduct = () => {
    setIsOpenViewMore(false);
  };

  const handleAddToCart = (product) => {
    setCard((prev) => [...prev, product]);
  };

  const handleDeleteFromCard = (id) => {
    setCard((prev) => prev.filter((item) => item.id !== id));
  };

  const getFilteredData = () => {
    return products.filter((item) =>
      item.title.toLowerCase().includes(searchStr.toLowerCase())
    );
  };
  const filteredData = getFilteredData();

  return (
    <>
      <header className={s.header}>
        <div>Logo</div>
        <input
          value={searchStr}
          onChange={(e) => setSearchStr(e.target.value)}
          type="text"
          placeholder="Enter product name..."
        />
        <button onClick={toggleModal}>Cart </button>
      </header>

      <ul className={s.list}>
        {filteredData.map((item) => (
          <ProductCard
            key={item.id}
            item={item}
            handleAddToCart={handleAddToCart}
            openModalWithProduct={openModalWithProduct}
          />
        ))}
      </ul>

      {isOpenViewMore && (
        <Modal closeModal={closeModalWithProduct}>
          <img src={contentModal.thumbnail} width="400" />
          <h2>{contentModal.title}</h2>
          <h2>{contentModal.description}</h2>
          <h2>{contentModal.category}</h2>
          <h2>{contentModal.rating}</h2>
        </Modal>
      )}

      {isOpen && (
        <Modal closeModal={toggleModal}>
          <h2>CART</h2>
          <ul>
            {cart.map((item) => (
              <li key={item.id}>
                {item.title} {item.price}${" "}
                <button onClick={() => handleDeleteFromCard(item.id)}>
                  Delete
                </button>
              </li>
            ))}
          </ul>
        </Modal>
      )}
    </>
  );
};

export default Products;
