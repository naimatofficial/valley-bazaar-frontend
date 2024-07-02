import { useState } from 'react';
import { FaChevronRight, FaChevronDown } from 'react-icons/fa';
import { Card, CardBody, Typography } from '@material-tailwind/react';

const categories = [
  { name: "Men's fashion", subcategories: ["Shirts", "Pants", "Accessories"] },
  { name: "Women's fashion", subcategories: ["Dresses", "Tops", "Accessories"] },
  { name: "ebook", subcategories: [] },
  { name: "Beauty, Health & Hair", subcategories: ["Skincare", "Haircare", "Makeup"] },
  { name: "Mobile Accessories", subcategories: ["Chargers", "Covers", "Headphones"] },
  { name: "Computer, Office & Security", subcategories: ["Laptops", "Desktops", "Accessories"] },
  { name: "Home, Pet & Appliances", subcategories: ["Furniture", "Kitchen", "Pet Supplies"] },
];

export const CategorySidebar = () => {
  const [openCategory, setOpenCategory] = useState(null);

  const toggleCategory = (index) => {
    setOpenCategory(openCategory === index ? null : index);
  };

  return (
    <>
    <Card className="w-full mx-auto  shadow-none bg-white-100">
      <CardBody>
        {categories.map((category, index) => (
          <div key={index} className='border-b border-gray-300'>
            <div
              className="flex justify-between items-center  py-2 border-b last:border-none cursor-pointer"
              onClick={() => toggleCategory(index)}
            >
              <Typography className="text-gray-700">{category.name}</Typography>
              {category.subcategories.length > 0 ? (
                openCategory === index ? (
                  <FaChevronDown className="w-3 h-3 text-gray-400" />
                ) : (
                  <FaChevronRight className="w-3 h-3 text-gray-400" />
                )
              ) : null}
            </div>
            {openCategory === index && category.subcategories.length > 0 && (
              <div className="ml-4">
                {category.subcategories.map((sub, subIndex) => (
                  <div key={subIndex} className="flex justify-between items-center py-2 border-b last:border-none">
                    <Typography className="text-gray-600">{sub}</Typography>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </CardBody>
    </Card>
  
    

    </>
  )
    
};

