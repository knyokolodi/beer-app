import { Link } from 'react-router-dom';
import { IBeerProps } from '../../../interfaces/IBeer';

import './BeerItem.css';

const BeerItem = ({ beer }: IBeerProps) => {
  return (
    <div className='col-md-3 text-center mb-5'>
      <div className='image-container'>
        <img src={beer.image_url} />
      </div>

      <h5>{beer.name}</h5>
      <Link
        className='btn btn-dark'
        to={{
          pathname: `/beer/${beer.id}`,
          state: {
            beer,
          },
        }}
      >
        More Details
      </Link>
    </div>
  );
};

export default BeerItem;
