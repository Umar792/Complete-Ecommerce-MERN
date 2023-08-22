import { createContext, useContext, useEffect, useReducer } from "react";
import reducer from "../Reducer/CardReducer";

const getLocalStiragedata = () => {
  let localData = localStorage.getItem("cardItem");
  if (localData === []) {
    return [];
  } else {
    return JSON.parse(localData);
  }
};
const getShippingdata = () => {
  let shippingdata = localStorage.getItem("shipping");
  if (shippingdata === {}) {
    return {};
  } else {
    return JSON.parse(shippingdata);
  }
};

const initialValue = {
  //   Carditem : [],
  Carditem: getLocalStiragedata(),
  shippinginfo: getShippingdata(),
  //   shippinginfo : {},
};

const CardContext = createContext();

const CardContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialValue);

  const getCardProduct = async (id, quantity) => {
    const res = await fetch(
      `https://ochre-dhole-wig.cyclic.app/singleProduct/${id}`
    );
    const data = await res.json();
    localStorage.setItem("cardItem", []);
    dispatch({
      type: "GET_CARD_PRODUCT",
      payload: {
        product: data.product._id,
        name: data.product.name,
        price: data.product.price,
        image: data.product.images[0].url,
        stock: data.product.stock,
        quantity,
      },
    });
  };
  useEffect(() => {
    localStorage.setItem("cardItem", []);
  }, []);
  useEffect(() => {
    localStorage.setItem("cardItem", JSON.stringify(state.Carditem));
  }, [state.Carditem]);

  // ===================== removeitem

  const removeitem = (id) => {
    dispatch({ type: "REMOVE_CARD_ITEM", payload: id });
  };

  // =========== shipping

  const ShppingInfocall = (data) => {
    dispatch({ type: "SHIPPING_INFO_SAVE", payload: data });
  };

  useEffect(() => {
    localStorage.setItem("shipping", {});
  }, []);

  useEffect(() => {
    localStorage.setItem("shipping", JSON.stringify(state.shippinginfo));
  }, [state.shippinginfo]);

  return (
    <CardContext.Provider
      value={{ ...state, ShppingInfocall, removeitem, getCardProduct }}
    >
      {children}
    </CardContext.Provider>
  );
};

const UseCardContext = () => {
  return useContext(CardContext);
};

export { CardContext, UseCardContext, CardContextProvider };
