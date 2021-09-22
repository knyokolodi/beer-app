import { Link, useLocation } from 'react-router-dom';
import { IBeer } from '../../../interfaces/IBeer';

import './BeerDetails.css';

interface LocationState {
  beer: IBeer;
}

const BeerDetails = () => {
  const {
    state: { beer },
  } = useLocation<LocationState>();

  return (
    <div className='col-md-6 text-center mb-5 mt-5 mx-auto'>
      <div className='image-container'>
        <img src={beer.image_url} />
      </div>

      <h5>{beer.name}</h5>
      <p>{beer.description}</p>
      <Link className='btn btn-dark' to='/'>
        Go Back
      </Link>
    </div>
  );
};
export default BeerDetails;
