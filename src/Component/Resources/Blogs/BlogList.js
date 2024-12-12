import React, { useState, useEffect, useRef } from "react";
import blogsData from "./blogs.json"; // Import JSON data
import images from "./BlogImage"; // Import image mappings
import { Link } from "react-router-dom";

const BlogList = () => {
  const categories = ["All", "WhatsApp Service", "Bulk SMS Service", "OTP Service", "Voice Call"];
  
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const blogsPerPage = 6; // Number of blogs per page

  // Pagination logic for all blogs
  const startIndex = (currentPage - 1) * blogsPerPage;
  const currentBlogs = blogsData.slice(startIndex, startIndex + blogsPerPage);

  // Filtered blogs for the "Exclusive Articles" section (changes based on selected category)
  const filteredExclusiveArticles =
    selectedCategory === "All"
      ? blogsData
      : blogsData.filter((blog) => blog.category === selectedCategory);

  // Show 7 blogs for "Exclusive Articles"
  const exclusiveArticlesToShow = filteredExclusiveArticles.slice(0, 7);

  // Split the blogs into two halves for the left and right columns
  const leftColumnBlogs = currentBlogs.slice(0, Math.ceil(currentBlogs.length / 2));
  const rightColumnBlogs = currentBlogs.slice(Math.ceil(currentBlogs.length / 2));

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  // Ref for center column to adjust height dynamically
  const centerColumnRef = useRef(null);

  // Effect to adjust the height of the center column
  useEffect(() => {
    const adjustHeight = () => {
      const leftHeight = document.querySelector(".col-md-4.left-column").offsetHeight;
      const rightHeight = document.querySelector(".col-md-4.right-column").offsetHeight;
      const centerColumn = centerColumnRef.current;

      if (centerColumn) {
        const maxHeight = Math.max(leftHeight, rightHeight);
        centerColumn.style.height = `${maxHeight}px`;
      }
    };

    // Adjust height on initial load and when window is resized
    adjustHeight();
    window.addEventListener("resize", adjustHeight);

    // Cleanup event listener on unmount
    return () => window.removeEventListener("resize", adjustHeight);
  }, [currentPage]);

  return (
    <div className="bg-light">
      <div className="container py-4">
        {/* Category buttons */}
        <div className="mb-4">
          {categories.map((category) => (
            <button
              key={category}
              className={`btn ${selectedCategory === category ? "btn-primary" : "btn-outline-primary"} me-2`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="row">
          {/* Left Column for Blog Cards */}
          <div className="col-md-4 para-blog left-column">
            {leftColumnBlogs.map((blog) => (
              <div className="card mb-4 shadow-sm border-0" key={blog.id}>
                <img
                  src={images[blog.id]}
                  alt={blog.title}
                  className="card-img-top"
                  style={{ height: "200px", objectFit: "cover" }}
                />
                <div className="card-body">
                  <h5 className="card-title">{blog.title}</h5>
                  <p className="card-text text-muted">{blog.category} · {blog.date}</p>
                  <p className="para-color">{blog.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Center Column for Exclusive Articles */}
          <div className="col-md-4 para-blog" ref={centerColumnRef}>
            <div className="w-75 mx-auto">
              <h4>Exclusive Articles</h4>
              <ul className="list-unstyled">
                {exclusiveArticlesToShow.map((article) => (
                  <li className="d-flex align-items-center mb-4" key={article.id}>
                    <img
                      src={images[article.id]}
                      alt={article.title}
                      className="me-3"
                      style={{ width: "80px", height: "80px", objectFit: "cover" }}
                    />
                    <div>
                      <p className="mb-1">
                        <Link to={`/blogs/${article.id}`} className="text-dark text-decoration-none">
                          {article.title}
                        </Link>
                      </p>
                      <p className="para-color">{article.category}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Column for Blog Cards */}
          <div className="col-md-4 para-blog right-column">
            {rightColumnBlogs.map((blog) => (
              <div className="card mb-4 shadow-sm border-0" key={blog.id}>
                <img
                  src={images[blog.id]}
                  alt={blog.title}
                  className="card-img-top"
                  style={{ height: "200px", objectFit: "cover" }}
                />
                <div className="card-body">
                  <h5 className="card-title">{blog.title}</h5>
                  <p className="card-text text-muted">{blog.category} · {blog.date}</p>
                  <p className="para-color">{blog.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Pagination */}
        <nav className="mt-4">
          <ul className="pagination justify-content-center">
            {[...Array(Math.ceil(blogsData.length / blogsPerPage))].map((_, index) => (
              <li className="page-item" key={index}>
                <button
                  className={`page-link ${currentPage === index + 1 ? "active" : ""}`}
                  onClick={() => handlePageChange(index + 1)}
                >
                  {index + 1}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default BlogList;
