import { GetProductData } from '@/sanity/sanity.query'

export default async function Pro() {
 const productData = await GetProductData()

  return (
    <div>
        <div>hello products

            <button className='snipcart-add-item'
            data-item-name={productData.name}
            data-item-image={productData.image}>add to cart</button>
        </div>
    </div>
  )
}
