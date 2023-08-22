import { createContext, useContext, useReducer } from "react";
import reducer from "../Reducer/OrderReducer";
import { toast } from "react-toastify";

const OrderContext = createContext();

const initialValue = {
  orderLoading: false,
  OrderError: "",
  CreateOrderdata: [],
  myOrders: [],
  singleOrderDetails: {},
  Allorders: [],
};

const OrderProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialValue);

  const CreateOrder = async (order, navigate) => {
    try {
      dispatch({ type: "ORDER_LOADING" });

      const res = await fetch("https://ochre-dhole-wig.cyclic.app/order/new", {
        method: "post",
        headers: {
          "Content-Type": "application/json",
          token: localStorage.getItem("Token"),
        },
        body: JSON.stringify(order),
      });
      dispatch({ type: "ORDER_FETCH_FAIL" });
      const data = await res.json();
      if (res.status === 400 || !data) {
        return toast.error(data.message, {
          theme: "dark",
        });
      } else {
        toast.success("Your Order Placed successfully", {
          theme: "dark",
        });
        navigate("/order/success");
      }
      dispatch({ type: "ORDER_CREATE_SUCCESS", payload: data });
    } catch (error) {
      dispatch({ type: "ORDER_SUCCESS_FAIL", payload: error.message });
    }
  };
  // ============================== careate orders
  const myOrderget = async () => {
    try {
      dispatch({ type: "MY_ORDER_LOADING" });

      const res = await fetch(
        "https://ochre-dhole-wig.cyclic.app/loginUserOrder",
        {
          method: "get",
          headers: {
            "Content-Type": "application/json",
            token: localStorage.getItem("Token"),
          },
        }
      );
      dispatch({ type: "MY_ORDER_FETCH_FAIL" });
      const data = await res.json();
      if (res.status === 400 || !data) {
        return toast.error(data.message, {
          theme: "dark",
        });
      }
      dispatch({ type: "MY_ORDER_CREATE_SUCCESS", payload: data.order });
    } catch (error) {
      dispatch({ type: "MY_ORDER_SUCCESS_FAIL", payload: error.message });
    }
  };
  // ======================== get singleorder
  const GetSingleOrder = async (id) => {
    try {
      dispatch({ type: "SINGLE_ORDER_LOADING" });

      const res = await fetch(
        `https://ochre-dhole-wig.cyclic.app/singleOrder/${id}`,
        {
          method: "get",
          headers: {
            "Content-Type": "application/json",
            token: localStorage.getItem("Token"),
          },
        }
      );
      dispatch({ type: "SINGLE_ORDER_FETCH_FAIL" });
      const data = await res.json();
      if (res.status === 400 || !data) {
        return toast.error(data.message, {
          theme: "dark",
        });
      }
      dispatch({ type: "SINGLE_ORDER_CREATE_SUCCESS", payload: data.order });
    } catch (error) {
      dispatch({ type: "SINGLE_ORDER_SUCCESS_FAIL", payload: error.message });
    }
  };

  // ================ get all orders
  const GetAllOrder = async () => {
    try {
      dispatch({ type: "ALL_ORDER_LOADING" });

      const res = await fetch(`https://ochre-dhole-wig.cyclic.app/allOrders`, {
        method: "get",
        headers: {
          "Content-Type": "application/json",
          token: localStorage.getItem("Token"),
        },
      });
      dispatch({ type: "ALL_GET_ORDER_FETCH_FAIL" });
      const data = await res.json();
      if (res.status === 400 || !data) {
        return toast.error(data.message, {
          theme: "dark",
        });
      }
      dispatch({ type: "ALL_ORDER_GET_SUCCESS", payload: data.orders });
    } catch (error) {
      dispatch({ type: "ALL_ORDER_GET_SUCCESS_FAIL", payload: error.message });
    }
  };

  // ================ Delete Order
  const DeleteOrder = async (id) => {
    try {
      dispatch({ type: "DELETE_ORDER_LOADING" });

      const res = await fetch(
        `https://ochre-dhole-wig.cyclic.app/deleteOrder/${id}`,
        {
          method: "delete",
          headers: {
            "Content-Type": "application/json",
            token: localStorage.getItem("Token"),
          },
        }
      );
      dispatch({ type: "DELETE_ORDER_FETCH_FAIL" });
      const data = await res.json();
      if (res.status === 400 || !data) {
        return toast.error(data.message, {
          theme: "dark",
        });
      }
      dispatch({ type: "DELETE_GET_SUCCESS" });
    } catch (error) {
      dispatch({ type: "DELETE_GET_SUCCESS_FAIL", payload: error.message });
    }
  };
  // ================ Update Status
  const UpdateSatus = async (id, status, navgate) => {
    try {
      dispatch({ type: "UPDATE_ORDER_LOADING" });

      const res = await fetch(
        `https://ochre-dhole-wig.cyclic.app/UpdateOrderStatus/${id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            token: localStorage.getItem("Token"),
          },
          body: JSON.stringify({ status }),
        }
      );
      dispatch({ type: "UPDATE_ORDER_FETCH_FAIL" });
      const data = await res.json();
      if (res.status === 400 || !data) {
        return toast.error(data.message, {
          theme: "dark",
        });
      } else {
        toast.success(data.message, {
          theme: "dark",
        });
        navgate("/admin/products");
      }
      dispatch({ type: "UPDATE_GET_SUCCESS" });
    } catch (error) {
      dispatch({ type: "UPDATE_GET_SUCCESS_FAIL", payload: error.message });
    }
  };

  return (
    <OrderContext.Provider
      value={{
        ...state,
        UpdateSatus,
        DeleteOrder,
        GetAllOrder,
        CreateOrder,
        myOrderget,
        GetSingleOrder,
      }}
    >
      {children}
    </OrderContext.Provider>
  );
};

const useOrderContext = () => {
  return useContext(OrderContext);
};

export { OrderContext, OrderProvider, useOrderContext };
