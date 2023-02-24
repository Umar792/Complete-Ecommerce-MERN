const Orderreducer = (state, action) => {

    switch (action.type) {
        case "ORDER_LOADING":
            return {
                ...state,
                orderLoading: true
            }
        case "ORDER_FETCH_FAIL":
            return {
                ...state,
                orderLoading: false
            }
        case "ORDER_CREATE_SUCCESS":
            return {
                ...state,
                orderLoading: false,
                CreateOrderdata: action.payload
            }

        case "ORDER_SUCCESS_FAIL":
            return {
                ...state,
                orderLoading: false,
                OrderError: action.payload
            }

            // ===================== get login user orders 
        case "MY-ORDER_LOADING":
            return {
                ...state,
                orderLoading: true
            }
        case "MY_ORDER_FETCH_FAIL":
            return {
                ...state,
                orderLoading: false
            }
        case "MY_ORDER_CREATE_SUCCESS":
            return {
                ...state,
                orderLoading: false,
                myOrders: action.payload
            }

        case "MY_ORDER_SUCCESS_FAIL":
            return {
                ...state,
                orderLoading: false,
                OrderError: action.payload
            }
            // ===================== get single order
        case "SINGLE-ORDER_LOADING":
            return {
                ...state,
                orderLoading: true
            }
        case "SINGLE_ORDER_FETCH_FAIL":
            return {
                ...state,
                orderLoading: false
            }
        case "SINGLE_ORDER_CREATE_SUCCESS":
            return {
                ...state,
                orderLoading: false,
                singleOrderDetails: action.payload
            }

        case "SINGLE_ORDER_SUCCESS_FAIL":
            return {
                ...state,
                orderLoading: false,
                OrderError: action.payload
            }
            // ===================== ALL_ORDER_LOADING
        case "ALL_ORDER_LOADING":
            return {
                ...state,
                orderLoading: true
            }
        case "ALL_GET_ORDER_FETCH_FAIL":
            return {
                ...state,
                orderLoading: false
            }
        case "ALL_ORDER_GET_SUCCESS":
            return {
                ...state,
                orderLoading: false,
                Allorders: action.payload
            }

        case "ALL_ORDER_GET_SUCCESS_FAIL":
            return {
                ...state,
                orderLoading: false,
                OrderError: action.payload
            }
            // ===================== DELETE_ORDER_LOADING
        case "DELETE_ORDER_LOADING":
            return {
                ...state,
                orderLoading: true
            }
        case "DELETE_ORDER_FETCH_FAIL":
            return {
                ...state,
                orderLoading: false
            }
        case "DELETE_GET_SUCCESS":
            return {
                ...state,
                orderLoading: false,
            }

        case "DELETE_GET_SUCCESS_FAIL":
            return {
                ...state,
                orderLoading: false,
                OrderError: action.payload
            }
            // ===================== UPDATE_ORDER_LOADING
        case "UPDATE_ORDER_LOADING":
            return {
                ...state,
                orderLoading: true
            }
        case "UPDATE_ORDER_FETCH_FAIL":
            return {
                ...state,
                orderLoading: false
            }
        case "UPDATE_GET_SUCCESS":
            return {
                ...state,
                orderLoading: false,
            }

        case "UPDATE_GET_SUCCESS_FAIL":
            return {
                ...state,
                orderLoading: false,
                OrderError: action.payload
            }

        default:
            return state
    }

}
export default Orderreducer