import React, { useState, useEffect } from 'react';
import ProductList from './ProductList';
import getProductList from './Productfetch';

function ProductListPage() {
  const [data, setData] = useState([]);
  const [query, changeQuery] = useState("");
  const [sort, setSort] = useState("default");

  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;  // Set how many items you want per page

  useEffect(() => {
    getProductList().then((listData) => {
      let p = listData.data.products;
      setData(p);
    });
  }, []);

  function handler(event) {
    let newq = event.target.value;
    let newdata = data.filter(function(item) {
      return item.title.toLowerCase().includes(newq.toLowerCase());
    });

    changeQuery(newq);
    setCurrentPage(1);  // Reset to page 1 on search
    setData(newdata);
  }

  function sortChange(event) {
    setSort(event.target.value);
  }

  if (sort === "htol") {
    data.sort(function(a, b) {
      return b.price - a.price;
    });
  } else if (sort === "ltoh") {
    data.sort(function(a, b) {
      return a.price - b.price;
    });
  } else if (sort === "name") {
    data.sort(function(a, b) {
      return a.title.localeCompare(b.title);
    });
  }

  // Pagination logic
  const totalPages = Math.ceil(data.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const paginatedData = data.slice(startIndex, endIndex);

  function goToNextPage() {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
  }

  function goToPreviousPage() {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  }

  function goToPage(pageNumber) {
    setCurrentPage(pageNumber);
  }

  return (
    <div className="bg-gray-300">
      <div className="mt-10 bg-white w-9/12 m-auto mb-10">
        <input
          value={query}
          placeholder="Search"
          className="border border-gray-200 rounded-md w-96 p-2"
          onChange={handler}
        />
        <div className="w-32 ml-auto mr-14 ">
          <select
            onChange={sortChange}
            className="border border-black ml-auto w-32 mt-14"
            value={sort}
          >
            <option value="default">Default Sorting</option>
            <option value="htol">Price - High to Low</option>
            <option value="ltoh">Price - Low to High</option>
            <option value="name">Sort by Title</option>
            <option>Customer Rating</option>
          </select>
        </div>
        <ProductList products={paginatedData} />
        <div className="pagination-controls">
          <button
            onClick={goToPreviousPage}
            disabled={currentPage === 1}
            className="px-4 py-2 mx-2 bg-gray-200 rounded"
          >
            Previous
          </button>
          {[...Array(totalPages)].map((_, index) => (
            <button
              key={index + 1}
              onClick={() => goToPage(index + 1)}
              className={`px-4 py-2 mx-1 ${currentPage === index + 1 ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
            >
              {index + 1}
            </button>
          ))}
          <button
            onClick={goToNextPage}
            disabled={currentPage === totalPages}
            className="px-4 py-2 mx-2 bg-gray-200 rounded"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductListPage;
