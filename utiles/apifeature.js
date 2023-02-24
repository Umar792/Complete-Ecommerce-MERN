class Apifeature{
    constructor(query , querystr){
        this.query = query,
        this.querystr = querystr
    }

    search(){
        const keyword = this.querystr.keyword ? {
            name :{
                $regex : this.querystr.keyword ,
                $options : "i",
            },
        } :{}

        this.query = this.query.find({...keyword})
        return this;

    }


    filter(){
        const querystrCopy = {...this.querystr}

        const removieField = ["keyword", "page" , "limit"]

        removieField.forEach(key => delete querystrCopy[key]);


        /// price filter
        let querystr = JSON.stringify(querystrCopy);
        querystr = querystr.replace(/\b(gt||gte||lt||lte)\b/g,key => `$${key}`)



        this.query = this.query.find(JSON.parse(querystr));

        return this;
    }


    pagination(pagelimit){
        const curentOage = Number(this.querystr.page || 1);

        const skip = pagelimit * (curentOage - 1);

        this.query = this.query.limit(pagelimit).skip(skip);

        return this;
    }
}


module.exports = Apifeature;