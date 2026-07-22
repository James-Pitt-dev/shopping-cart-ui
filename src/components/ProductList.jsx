const ProductList = ({products}) => {
    return ( 
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map((p) => (
          <div key={p.id} className="bg-white rounded-lg shadow p-4 flex flex-col">
            <img src={p.image} alt={p.name} className="h-40 object-cover rounded mb-4"/>
            <h2 className="text-xl font-semibold">{p.name}</h2>
            <p className="text-gray-500 text-sm mb-2">
              {p.description}
            </p>
            <p className="font-bold text-lg">${p.price.toFixed(2)}</p>
          </div>
        ))}
      </div>
     );
}
 
export default ProductList;