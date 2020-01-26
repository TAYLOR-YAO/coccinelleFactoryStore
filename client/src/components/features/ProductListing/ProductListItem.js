import React from "react";
import AddToCartBtn from "./AddToCartBtn";
import RemoveBtn from "./RemoveBtn";
// import ItemDetails from "./ItemDetails";
import "./ProductListItem.css";

export default function ProductListItem(props){
    
    return  <div className="productCard">

            <div className="imagebox" >
                <img className="productPucture" src={props.images[0]} alt="prodict View"/> 
            </div>
            <div>
                <p >{props.name}</p>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star"></span>
                <span className="fa fa-star"></span>
                <div >
                    <strong style={{color:"#000", float:"left", marginTop: "15px", marginLeft:"15px"}} className="item-information"><span style={{color:"red"}}>{`$${props.price}`}</span></strong>
                    <div className="addToCart" style={{paddingRight:"5px"}}>
                        <AddToCartBtn 
                        cartItem ={props.cartItem}
                        product={props.product}
                        addToCart ={props.addToCart}
                        />

                        {
                            props.cartItem
                            ? <RemoveBtn 
                            cartItem ={props.cartItem}
                            product={props.product}
                            removeFromCart ={props.removeFromCart}
                            />
                            : null
                        }
                    </div>  
                </div>
            </div> 
        </div>
    }