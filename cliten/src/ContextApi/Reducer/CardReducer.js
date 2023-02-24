const cardReducer = (state, action) => {
    switch (action.type) {
        case "GET_CARD_PRODUCT":

           const item = action.payload;

           const isItemExist = state.Carditem.find(
            (i) => i.product === item.product
          );

           if(isItemExist){
            return{
                ...state,
                Carditem : state.Carditem.map(
                    (i)=> i.product === isItemExist.product ? item : i
                )
            }
           }else{
        return{
            ...state,
            Carditem : [...state.Carditem,item]
        }

           };


        //    ==================== removeitem 

        case "REMOVE_CARD_ITEM" :

          const id = action.payload;

          const newCard = state.Carditem.filter(
              
            (i) => i.product !== id

          )

          return{
            ...state,
            Carditem : newCard
          }

          // ========== SHIPPING_INFO_SAVE 

          case "SHIPPING_INFO_SAVE" : 
          return{
            ...state,
            shippinginfo : action.payload
          }

          

           default : 
           return state

    }

}

export default cardReducer;