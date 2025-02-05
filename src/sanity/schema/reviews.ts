// In Sanity schema
export default {
    name: 'productReviews',
    title: 'Product Reviews',
    type: 'document',
    fields: [
      {
        name: 'id',
        title: 'Product ID',
        type: 'string', // Or reference to a 'product' type if available
      },
      {
        name: 'username',
        title: 'Username',
        type: 'string',
      },
      {
        name: 'reviewText',
        title: 'Review Text',
        type: 'text',
      },
    ],
  };
  