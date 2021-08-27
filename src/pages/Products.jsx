import { Link } from 'react-router-dom';
const Products = () => {
  return (
    <>
      <h1>The Products Page</h1>
      <ul>
        <li>
          <Link to='/product-details/boat'>A boat</Link>
        </li>
        <li>
          <Link to='/product-details/book'>A Book</Link>
        </li>
        <li>
          <Link to='/product-details/a-train'>A Train</Link>
        </li>
      </ul>
    </>
  );
};

export default Products;
