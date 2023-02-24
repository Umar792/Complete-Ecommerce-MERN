const productReducer = (state,action)=>{

    switch(action.type){
      
        // ========== ADMIN_ALL_PRODUCTS_ 

        case "ADMIN_ALL_PRODUCTS_LOADING" :
            return{
                ...state,
                loading : true,
            }
        case "ADMIN_ALL_PRODUCTS_LOADING_FAIL" :
            return{
                ...state,
                loading : false,
            }
        case "ADMIN_ALL_PRODUCT_SUCCESS" :
            return{
                ...state,
                loading : false,
                AdminAllProducts: action.payload
            }
        case "ADMIN_ALL_PRODUCT_FAIL" :
            return{
                ...state,
                loading : false,
                Error  :action.payload
            }
            
        // ========== ADMIN_ create product_ 

        case "CREATE_PRODUCT_LOADING" :
            return{
                ...state,
                loading : true,
            }
        case "CREATE_PRODUCT_LOADING_FAIL" :
            return{
                ...state,
                loading : false,
            }
        case "CREATE_PRODUCT_SUCCESS" :
            return{
                ...state,
                loading : false,
                createProduct: action.payload
            }
        case "CREATE_PRODUCT_FAIL" :
            return{
                ...state,
                loading : false,
                Error  :action.payload
            }
        // ========== ADMIN_ UPADTE_PRODUCT_LOADING 

        case "UPDATE_PRODUCT_REQUEST" :
            return{
                ...state,
                loading : true,
            }
        case "UPADTE_PRODUCT_LOADING_FAIL" :
            return{
                ...state,
                loading : false,
            }
        case "UPDATE_PRODUCT_SUCCESS" :
            return{
                ...state,
                loading : false,
                updateProduct: action.payload
            }
        case "UPDATE_PRODUCT_FAIL" :
            return{
                ...state,
                loading : false,
                Error  :action.payload
            }
        // ========== ADMIN_ Delete product

        case "DELETE_PRODUCT_LOADING" :
            return{
                ...state,
                loading : true,
            }
        case "DELETE_PRODUCT_LOADING_FAIL" :
            return{
                ...state,
                loading : false,
            }
        case "DELETE_PRODUCT_SUCCESS" :
            return{
                ...state,
                loading : false,
            }
        case "DELETE_PRODUCT_FAIL" :
            return{
                ...state,
                loading : false,
                Error  :action.payload
            }
            













// =================== SINGLE PRODUCT 
        case "SINGLE_PRODUCT_LOADING" :
            return{
                ...state,
                loading : true
            };
        case "SINGLE_PRODUCT_LOADING_fail" :
            return{
                ...state,
                loading : false
            };

            case "SINGLE_PRODUCT_SUCCESS" :
                return {
                    ...state,
                    loading:false,
                    SingleProductData : action.payload,

                }

            case  "SINGLE_PRODUCT_ERROR" : 
            return{
                ...state , 
                loading:false,
                Error : action.payload
            }

            // =============== get All products data 

            case "GET_ALL_PRODUCT_LOADING" :
                return{
                    ...state,
                    loading:true,
                }

            case "GET_ALL_PRODUCT_SUCCESS" :
                let AllfakeData = [...action.payload];
                const boski = AllfakeData.filter((curElem)=>{
                    return curElem.category === "boski";
                });
                const kurta = AllfakeData.filter((curElem)=>{
                    return curElem.category === "kurta";
                });
                const washWear = AllfakeData.filter((curElem)=>{
                    return curElem.category === "wash&wear";
                });
                const menShawl = AllfakeData.filter((curElem)=>{
                    return curElem.category === "menShawl";
                });
                const cotton = AllfakeData.filter((curElem)=>{
                    return curElem.category === "cotton";
                });
                const karandi = AllfakeData.filter((curElem)=>{
                    return curElem.category === "karandi";
                });
                const Men = AllfakeData.filter((curElem)=>{
                    return curElem.mainCategory === "men";
                });
                const boy = AllfakeData.filter((curElem)=>{
                    return curElem.mainCategory === "boy";
                });
                const women = AllfakeData.filter((curElem)=>{
                    return curElem.mainCategory === "women";
                });
                const girl = AllfakeData.filter((curElem)=>{
                    return curElem.mainCategory === "girl";
                });
                const featured = AllfakeData.filter((curElem)=>{
                    return curElem.featured === true;
                });
                return{
                    ...state,
                    loading : false,
                    allproduct : action.payload,
                    boski : boski,
                    kurta : kurta,
                    washWear : washWear,
                    menShawl : menShawl,
                    cotton : cotton,
                    karandi:karandi,
                    Men : Men,
                    women:women,
                    girl:girl,
                    boy:boy,
                    featured:featured
                }

            case "GET_ALL_PRODUCT_FAIL" :
                return{
                    ...state,
                    Error : action.payload
                }

                 // =============== get filter products data 

            case "GET_FILTER_PRODUCT_LOADING" :
                return{
                    ...state,
                    loading:true,
                }

            case "GET_FILTER_PRODUCT_SUCCESS" :

              

                return{
                    ...state,
                    loading : false,
                    filterproduct : action.payload,
                    

                }

            case "GET_FILTER_PRODUCT_FAIL" :
                return{
                    ...state,
                    Error : action.payload
                }
                 // =============== add reviews

            case "REVIEW_PRODUCT_LOADING" :
                return{
                    ...state,
                    loading:true,
                }      
            case "REVIEW_PRODUCT_LOADING_FAIL" :
                return{
                    ...state,
                    loading:false,
                }      

            case "REVIEW_PRODUCT_SUCCESS" :
                return{
                    ...state,
                    loading : false,
                    

                }

            case "REVIEW_PRODUCT_FAIL" :
                return{
                    ...state,
                    Error : action.payload
                }
            
            default:
                return state;

    }

};

export default productReducer;