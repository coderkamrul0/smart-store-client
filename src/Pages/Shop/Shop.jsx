import { useState } from "react";
import { FaEye, FaFilter, FaSearch, FaShoppingCart } from "react-icons/fa";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import useProducts from "../../hooks/useProducts";
import PageHeader from "../../Components/PageHeader/PageHeader";
import ShopInstagram from "../../Components/ShopInstagram/ShopInstagram";
import Subscribe from "../../Components/Subscribe/Subscribe";

const checkPriceRange = (price, selectedPriceRanges) => {
  if (!selectedPriceRanges.length) {
    return true;
  }

  const selectedRanges = selectedPriceRanges.map(range => {
    if (range === "Less than 500") return price < 500;
    if (range === "$501 - $1000") return price >= 501 && price <= 1000;
    if (range === "$1001 - $2000") return price >= 1001 && price <= 2000;
    if (range === "$2001 - $3000") return price >= 2001 && price <= 3000;
    if (range === "Over 3000") return price >= 3000;
    return false;
  });

  return selectedRanges.some(match => match);
};

const Shop = () => {
  const [showFilters, setShowFilters] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [selectedPriceRanges, setSelectedPriceRanges] = useState([]);
  const [products] = useProducts();

  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategories.length === 0 || selectedCategories.includes(product.category);
    const matchesBrand = selectedBrands.length === 0 || selectedBrands.includes(product.brand);
    const matchesPrice = checkPriceRange(product.price, selectedPriceRanges);

    return matchesSearch && matchesCategory && matchesBrand && matchesPrice;
  });

  const resetFilters = () => {
    setSearchQuery("");
    setSelectedCategories([]);
    setSelectedBrands([]);
    setSelectedPriceRanges([]);
  };

  const toggleFilterSection = () => {
    setShowFilters(!showFilters);
  };

  const handleCategoryFilter = (category) => {
    if (selectedCategories.includes(category)) {
      setSelectedCategories(selectedCategories.filter(cat => cat !== category));
    } else {
      setSelectedCategories([...selectedCategories, category]);
    }
  };

  const handleBrandFilter = (brand) => {
    if (selectedBrands.includes(brand)) {
      setSelectedBrands(selectedBrands.filter(b => b !== brand));
    } else {
      setSelectedBrands([...selectedBrands, brand]);
    }
  };

  const handlePriceRangeFilter = (range) => {
    if (selectedPriceRanges.includes(range)) {
      setSelectedPriceRanges(selectedPriceRanges.filter(r => r !== range));
    } else {
      setSelectedPriceRanges([...selectedPriceRanges, range]);
    }
  };

  return (
    <div>
      <Helmet>
        <title>SmartStore | Shop</title>
      </Helmet>
      <PageHeader pageName={"Shop"} />
      <div>
        <div className="max-w-screen-xl mx-auto px-3 md:px-0 pt-5">
          <div className="md:flex gap-10">
            <div className="md:w-1/6 flex flex-col gap-10">
              <div className="flex justify-between pb-5 md:pb-0">
                <div>
                  <input
                    className="shadow-[0_8px_30px_rgb(0,0,0,0.20)] outline-none p-1 w-[85%] md:w-[80%]"
                    type="search"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search products"
                  />
                  <button className="bg-black text-white p-2">
                    <FaSearch />
                  </button>
                </div>
                <div className="md:hidden">
                  <button
                    className="bg-black text-white px-2 py-1 flex items-center"
                    onClick={toggleFilterSection}
                  >
                    <FaFilter /> Filter
                  </button>
                </div>
              </div>
              <div
                className={`filter-section flex-col gap-5 md:block ${
                  showFilters ? "block" : "hidden"
                }`}
              >
                <div>
                  <h5 className="uppercase underline font-semibold">Categories</h5>
                  <div className="flex flex-col">
                    <ul>
                      <li>
                        <input
                          type="checkbox"
                          checked={selectedCategories.includes("Smartphones")}
                          onChange={() => handleCategoryFilter("Smartphones")}
                        />
                        Smartphones
                      </li>
                      <li>
                        <input
                          type="checkbox"
                          checked={selectedCategories.includes("Smartwatches")}
                          onChange={() => handleCategoryFilter("Smartwatches")}
                        />
                        Smartwatches
                      </li>
                      <li>
                        <input
                          type="checkbox"
                          checked={selectedCategories.includes("Laptops")}
                          onChange={() => handleCategoryFilter("Laptops")}
                        />
                        Laptops
                      </li>
                      
                    </ul>
                  </div>
                </div>
                <div>
                  <h5 className="uppercase underline font-semibold pt-3">Brand</h5>
                  <div className="flex flex-col">
                    <ul>
                      <li>
                        <input
                          type="checkbox"
                          checked={selectedBrands.includes("Apple")}
                          onChange={() => handleBrandFilter("Apple")}
                        />
                        Apple
                      </li>
                      <li>
                        <input
                          type="checkbox"
                          checked={selectedBrands.includes("Asus")}
                          onChange={() => handleBrandFilter("Asus")}
                        />
                        Asus
                      </li>
                      <li>
                        <input
                          type="checkbox"
                          checked={selectedBrands.includes("Vivo")}
                          onChange={() => handleBrandFilter("Vivo")}
                        />
                        Vivo
                      </li>
                      
                    </ul>
                  </div>
                </div>
                <div>
                  <h5 className="uppercase underline font-semibold pt-3">Filter by Price</h5>
                  <div className="flex flex-col">
                    <ul>
                      <li>
                        <input
                          type="checkbox"
                          checked={selectedPriceRanges.includes("Less than 500")}
                          onChange={() => handlePriceRangeFilter("Less than 500")}
                        />
                        Less than 500
                      </li>
                      <li>
                        <input
                          type="checkbox"
                          checked={selectedPriceRanges.includes("$501 - $1000")}
                          onChange={() => handlePriceRangeFilter("$501 - $1000")}
                        />
                        $501 - $1000
                      </li>
                      <li>
                        <input
                          type="checkbox"
                          checked={selectedPriceRanges.includes("$1001 - $2000")}
                          onChange={() => handlePriceRangeFilter("$1001 - $2000")}
                        />
                        $1001 - $2000
                      </li>
                      <li>
                        <input
                          type="checkbox"
                          checked={selectedPriceRanges.includes("$2001 - $3000")}
                          onChange={() => handlePriceRangeFilter("$2001 - $3000")}
                        />
                        $2001 - $3000
                      </li>
                      
                    </ul>
                  </div>
                </div>
                <div>
                  <div className="flex flex-col gap-2">
                    <button className="text-xs bg-gray-300 px-2 py-1 rounded" onClick={resetFilters}>
                      Reset Filters
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="md:w-5/6">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
                {filteredProducts.length > 0 ? (
                  filteredProducts.map((product) => (
                    <div key={product._id}>
                      <div className="flex flex-col gap-3 border py-10 relative group">
                        <div className="relative cursor-pointer transition-transform transform-gpu hover:scale-110">
                          <img className="mx-auto" src={product.image} alt="" />
                          <div className="absolute bottom-20 left-0 right-0 flex justify-center items-center opacity-0 transition-opacity duration-300 group-hover:opacity-100 flex-col gap-2">
                            <Link to={`/products/${product._id}`}>
                              <button className="flex text-xs border border-white items-center gap-1 bg-black text-white justify-center py-1 px-2 rounded max-w-[120px]">View Detail <FaEye/></button>
                            </Link>
                            <button className="flex text-xs border border-white items-center gap-1 bg-black text-white justify-center py-1 px-1 rounded max-w-[120px]">Add Cart <FaShoppingCart/></button>
                          </div>
                        </div>
                        <div className="flex justify-around">
                          <p className="font-bold uppercase">{product.name}</p>
                          <p className="text-[#72AEC8] font-bold">
                            ${product.price}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="text-center text-gray-500-500 font-bold py-10">
                    No products found.
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Subscribe />
      <ShopInstagram />
    </div>
  );
};

export default Shop;

