import React, { createContext, useContext, useReducer } from 'react';
import { toast } from 'react-toastify';
import reducer from "../Reducer/ProductReducer";
import axios from "axios"

const ProductContext = createContext();

const initailState = {
    loading: false,
    Error: "",
    SingleProductData: {},
    allproduct: [],
    filterproduct : [],
    boski : [],
    kurta : [],
    washWear : [],
    menShawl:[],
    cotton : [],
    karandi:[],
    Men : [],
    women : [],
    girl:[],
    boy:[],
    featured:[],
    AdminAllProducts : [],
    createProduct : {},
    updateProduct:{}
}

const ProductProvider = ({ children }) => {

    const [state, dispatch] = useReducer(reducer, initailState)
    // console.log(state.boy);
    //   =================== getsingle product 
    const getSingleProductData = async (id) => {
        try {
            dispatch({ type: "SINGLE_PRODUCT_LOADING" });
            const res = await fetch(`http://localhost:4000/singleProduct/${id}`, {
                method: "get",
                headers: {
                    "Content-Type": "accplication/json"
                }
            });
            dispatch({ type: "SINGLE_PRODUCT_LOADING_fail" });
            const data = await res.json();

            dispatch({ type: "SINGLE_PRODUCT_SUCCESS", payload: data.product });
        } catch (error) {
            dispatch({ type: "SINGLE_PRODUCT_ERROR", payload: error.message });
        }
    };
  

    // ===================== get all product 
    const getAllproducts = async (price=[0,25000]) => {
        try {
            dispatch({ type: "GET_ALL_PRODUCT_LOADING" });
            const res = await fetch(`http://localhost:4000/allproduct?price[gte]=${price[0]}&price[lte]=${price[1]}`, {
                method: "get",
                headers: {
                    "Content-Type": "accplication/json"
                }
            });
            const data = await res.json();

            dispatch({type:"GET_ALL_PRODUCT_SUCCESS", payload:data.products})

        } catch (error) {
            dispatch({ type: "GET_ALL_PRODUCT_FAIL", payload: error.message });
        }
    }


    // =================== get all admin product 

    const getAllAdminProducts = async()=>{
       try {
        dispatch({type : "ADMIN_ALL_PRODUCTS_LOADING"})
        const res = await fetch(`http://localhost:4000/AdminallProducts`, {
            method: "get",
            headers: {
                "Content-Type": "accplication/json",
                token : localStorage.getItem("Token")
            }
        });
        // dispatch({type : "ADMIN_ALL_PRODUCTS_LOADING_FAIL"})
        const data = await res.json();
        dispatch({type : "ADMIN_ALL_PRODUCT_SUCCESS", payload : data.products})
        
       } catch (error) {
        dispatch({ type: "ADMIN_ALL_PRODUCT_FAIL", payload: error.message });
       }
    }


    // ================ create Product Admin 

    const CreateProduct = async(productDatat)=>{
       
        try {
            dispatch({type : "CREATE_PRODUCT_LOADING"})

            const res = await fetch("http://localhost:4000/product/new",{
                method : "post",
                headers : {
                    "Content-Type"  :"application/json",
                    token : localStorage.getItem("Token")
                },
                body : JSON.stringify(productDatat)
            })
            dispatch({type : "CREATE_PRODUCT_LOADING_FAIL"});
            const data =await res.json();
            if(res.status === 400 || !data){
                return toast.error(data.message,{
                    theme:"dark"
                })
            }else{
                toast.success(data.message,{
                    theme:"dark"
                })
            }
            dispatch({type:"CREATE_PRODUCT_SUCCESS", payload:data.product});

        } catch (error) {
            dispatch({type:"CREATE_PRODUCT_FAIL", payload:error.message});
        }
    }

// ===================== Delete product
const DeleteProduct = async (id,navigate) => {
    try {
        dispatch({ type: "DELETE_PRODUCT_LOADING" });
        const res = await fetch(`http://localhost:4000/productDelete/${id}`, {
            method: "delete",
            headers: {
                "Content-Type": "accplication/json",
                token : localStorage.getItem("Token")
            }
        });
        dispatch({ type: "DELETE_PRODUCT_LOADING_FAIL" });
        const data = await res.json();
        if(res.status === 400 || !data){
            return toast.error(data.message,{
                theme:"dark"
            })
        }else{
            navigate("/admin/dashboard")
            toast.success(data.message,{
                theme:"dark"
            })
            
        }

        dispatch({type:"DELETE_PRODUCT_SUCCESS"})

    } catch (error) {
        dispatch({ type: "DELETE_PRODUCT_FAIL", payload: error.message });
    }
}

// =========== update product

const UpdateProduct =async (id, productData,navigate)=> {
    try {
      dispatch({ type: "UPDATE_PRODUCT_REQUEST" });
  
      const config = {
        headers: { "Content-Type": "application/json",
        token : localStorage.getItem("Token")
    
    },

      };
  
      const { data } = await axios.put(
        `http://localhost:4000/productUpadte/${id}`,
        productData,
        config
      );
    
        navigate("/admin/dashboard")
        toast.success(data.message,{
            theme:"dark"
        })
        
      dispatch({
        type: "UPDATE_PRODUCT_SUCCESS",
        payload: data.success,
      });
    } catch (error) {
      dispatch({
        type: "UPDATE_PRODUCT_FAIL",
        payload: error.response.data.message,
      });
    }
  };


    // ===================== get all product 
    const getfilterproducts = async (keyword="") => {
        try {
            dispatch({ type: "GET_FILTER_PRODUCT_LOADING" });
            const res = await fetch(`http://localhost:4000/allproduct?keyword=${keyword}`, {
                method: "get",
                headers: {
                    "Content-Type": "accplication/json"
                }
            });
            const data = await res.json();

            dispatch({type:"GET_FILTER_PRODUCT_SUCCESS", payload:data.products})

        } catch (error) {
            dispatch({ type: "GET_FILTER_PRODUCT_FAIL", payload: error.message });
        }
    }
    // ===================== Submit reviews
    const SubmitReview = async (reviedata) => {
        try {
            dispatch({ type: "REVIEW_PRODUCT_LOADING" });
            const res = await fetch(`http://localhost:4000/review`, {
                method: "put",
                headers: {
                    "Content-Type": "accplication/json",
                    token : localStorage.getItem("Token")
                },
                body: JSON.stringify(reviedata)
            });
            dispatch({ type: "REVIEW_PRODUCT_LOADING_FAIL" });
            const data = await res.json();
            
            console.log(reviedata);
            console.log(data.message);
            if(res.status === 400 || !data){
                return toast.error(data.message,{
                    theme :"dark"
                })
            }else{
                toast.success("Review Submit SSuccessfuly",{
                    theme :"dark"
            })

        }
            dispatch({type:"REVIEW_PRODUCT_SUCCESS"})

        } catch (error) {
            dispatch({ type: "REVIEW_PRODUCT_FAIL", payload: error.message });
        }
    }



    return <ProductContext.Provider value={{ ...state,UpdateProduct,DeleteProduct,CreateProduct,getAllAdminProducts,SubmitReview, getSingleProductData,getfilterproducts,getAllproducts }}>{children}</ProductContext.Provider>
}



const useProductContext = () => {
    return useContext(ProductContext)
}

export { ProductContext, ProductProvider, useProductContext }