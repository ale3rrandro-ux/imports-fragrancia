import React from 'react';

const SAMPLE_PRODUCTS = [
  { id: 1, name: 'Hugo Boss Bottled', price: 299, img: 'https://source.unsplash.com/400x400/?boss,perfume', stock: 10 },
  { id: 2, name: 'Kit 4 Fragrâncias', price: 899, img: 'https://source.unsplash.com/400x400/?fragrance,kit', stock: 12 },
  { id: 3, name: 'Jean Paul Gaultier Le Beau', price: 355, img: 'https://source.unsplash.com/400x400/?gaultier,perfume', stock: 15 },
  { id: 4, name: 'YSL Libre Eau', price: 399, img: 'https://source.unsplash.com/400x400/?ysl,libre,perfume', stock: 7 }
];

export default function App() {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4 text-center">Imports Fragrância</h1>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {SAMPLE_PRODUCTS.map(p => (
          <div key={p.id} className="bg-white rounded-xl shadow p-3">
            <img src={p.img} className="w-full h-40 object-cover rounded" />
            <h2 className="font-bold mt-2">{p.name}</h2>
            <p className="text-gray-700">R$ {p.price}</p>
            <p className="text-sm text-gray-500">{p.stock} em estoque</p>
          </div>
        ))}
      </div>
    </div>
  );
}
