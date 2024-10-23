export default {
    name : 'product',
    type : 'document',
    title : 'Product Schema',
    fields : [
        {
            name : 'name',
            type : 'string',
            title : ' Name of the product',
        },
        {
            name : 'image',
            type : 'array',
            title : 'Product Image',
            of : [ { type: 'image'} ],
            options : {
                hotspot : true,
            }
        },
        {
            name : 'description',
            type : 'text',
            title : 'Product Description',
        }, 
        {
            name : 'slug',
            type : 'slug',
            title : 'Unique id',
            options : {
                source : 'name'
            }
        }, 
        {
            name : 'price',
            type : 'number',
            title : 'Price'
        }, 
        {
            name:'price_id',
            type : 'string',
            title : 'stripe price id'

        },
        {
            name : 'category',
            title : 'prouct category',
            type : 'reference',
            to : [
                {
                    type : 'category'
                }
            ]
        }

    ]
}