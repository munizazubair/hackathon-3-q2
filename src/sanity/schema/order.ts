// schemas/order.js
export default {
  name: 'order',
  title: 'Order',
  type: 'document',
  fields: [
    {
      name: 'sessionId',
      title: 'Session ID',
      type: 'string',
    },
    {
      name: 'customerEmail',
      title: 'Customer Email',
      type: 'string',
    },
    {
      name: 'amountTotal',
      title: 'Total Amount',
      type: 'number',
    },
    {
      name: 'products',
      title: 'Products',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'name', type: 'string' },
            { name: 'quantity', type: 'number' },
            { name: 'price', type: 'number' },
          ],
        },
      ],
    },
  ],
};
