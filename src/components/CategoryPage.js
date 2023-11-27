import React from 'react';
import { useParams } from 'react-router-dom';
import babyCareImage from './images/babycare.jpg';
import supplementImage from './images/supplements.jpg';
import womenCareImage from './images/womencare.jpg';
import personalCareImage from './images/personalcare.jpg';
import protienImage from './images/proteinpowder.jpg';
import healthImage from './images/health.jpg';
import medicineImage from './images/medicine.jpg';

const Category = () => {
  const { id } = useParams(); // Accessing the parameter from the URL

  // Assuming you have a list of items for each category with images
  const categoryItems = [
    // Define items for each category using their respective IDs
    // This is just an example; replace it with your actual category items
    { id: 1, name: 'Baby Care', image: babyCareImage },
    { id: 2, name: 'Supplement', image: supplementImage },
    { id: 3, name: 'Health Check Devices', image: healthImage },
    { id: 4, name: 'general', image: medicineImage },
    { id: 5, name: 'Personal Care', image: personalCareImage },
    { id: 6, name: 'Women Care', image: womenCareImage },
    { id: 7, name: 'Protein Powder & Drinks', image: protienImage },
    // Add more items as needed
  ];

  // Filter items based on the selected category ID
  const selectedProducts = categoryItems.filter((item) => item.id === parseInt(id, 10));

  return (
    <div>
      {selectedProducts.length > 0 ? (
        <div>
          <h2>Products in Category {selectedProducts[0].name}</h2>
          <div style={{ display: 'flex', flexWrap: 'wrap' }}>
            {selectedProducts.map((item) => (
              <div key={item.id} style={{ margin: '10px', textAlign: 'center' }}>
                <img
                  src={item.image} 
                  alt={item.name}
                  style={{ width: '150px', height: '150px', objectFit: 'cover' }}
                />
                <h2>{item.name}</h2>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <h2>Category not found</h2>
      )}
    </div>
  );
};

export default Category;
