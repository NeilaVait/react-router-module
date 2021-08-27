import { useParams } from 'react-router-dom';

const ProductDetails = () => {
  const params = useParams();
  console.log(params.product);

  let details;
  if (params.product === 'boat') {
    details = 'A very nice boat';
  }
  return (
    <section>
      <h3>Product: {params.product}</h3>
      <p>Details: {details}</p>
    </section>
  );
};

export default ProductDetails;
