"use client";
import React from "react";
import Image from "next/image";
import { MdDeleteSweep, MdShoppingCart } from "react-icons/md";
import pic1 from "@/Assets/Images/dress.webp";
import pic2 from "@/Assets/Images/salon.avif";
import "./wishlist.css";
import { useAppContext } from "@/context/AppContext";

const sampleProducts = [
  { id: 1, name: "GEL SUNSCREEN FOR OILY SKIN", price: 45.0, image: pic1, sizes: ["XXL", "XL", "M"] },
  { id: 2, name: "SPA CREAM FOR LADIES", price: 123.0, image: pic2, sizes: ["XXL", "XL", "M"] },
  { id: 3, name: "HAIR SERUM", price: 75.0, image: pic1, sizes: ["XXL", "XL", "M"] },
  { id: 4, name: "FACE MOISTURIZER", price: 99.0, image: pic2, sizes: ["XXL", "XL", "M"] },
];

export default function Wishlist() {
  const { state, dispatch, ACTIONS } = useAppContext();

  // ✅ Add or remove from wishlist
  const toggleWishlist = (product) => {
    const isInWishlist = state.wishlist.some((item) => item.id === product.id);

    if (isInWishlist) {
      dispatch({
        type: ACTIONS.REMOVE_FROM_WISHLIST,
        payload: { id: product.id },
      });
    } else {
      dispatch({
        type: ACTIONS.ADD_TO_WISHLIST,
        payload: {
          id: product.id,
          name: product.name,
          price: product.price,
          image: product.image,
          sizes: product.sizes,
        },
      });
    }
  };

  // ✅ Add or remove from cart
  const toggleCart = (product) => {
    dispatch({
      type: ACTIONS.TOGGLE_CART_ITEM,
      payload: {
        id: product.id,
        name: product.name,
        price: product.price,
        size: "M",
        quantity: 1,
      },
    });
  };

  const isInCart = (product) =>
    state.cart.some((item) => item.id === product.id && item.size === "M");

  return (
    <section className="wishlist-section py-5">
      <div className="container">
        <h2 className="wishlist-title text-center mb-5">My Wishlist</h2>

        {state.wishlist.length === 0 ? (
          <p className="text-center text-muted">
            Your wishlist is empty. ❤️<br />
            (Click on a product’s heart icon to add it here!)
          </p>
        ) : (
          <div className="wishlist-grid">
            {state.wishlist.map((product) => (
              <div key={product.id} className="wishlist-card-glass">
                <div className="wishlist-img-wrapper">
                  <Image
                    src={product.image}
                    alt={product.name}
                    width={300}
                    height={250}
                    className="wishlist-img"
                  />
                  <div className="wishlist-overlay">
                    <button
                      className="wishlist-btn remove-btn"
                      onClick={() => toggleWishlist(product)}
                    >
                      <MdDeleteSweep /> Remove
                    </button>
                    <button
                      className="wishlist-btn cart-btn"
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        toggleCart(product);
                      }}
                    >
                      <MdShoppingCart />{" "}
                      {isInCart(product) ? "Remove from Cart" : "Add to Cart"}
                    </button>
                  </div>
                </div>

                <div className="wishlist-info">
                  <h5>{product.name}</h5>
                  <p className="price">${product.price.toFixed(2)}</p>
                  {/* <p className="sizes">Sizes: {product.sizes.join(", ")}</p> */}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
