import { useEffect, useState } from 'react';

import { IBeer } from '../../interfaces/IBeer';

import BeerItem from './BeerItem/BeerItem';

const Beers = () => {
  const [beers, setBeers] = useState<Array<IBeer>>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const getBeers = async () => {
      try {
        const data: Array<IBeer> = await (
          await fetch(`${process.env.REACT_APP_BEER_API_URL}/beers`)
        ).json();
        setBeers(data);
        setLoading(false);
      } catch (err) {
        setError('An error ocuured!');
        setLoading(false);
      }
    };

    getBeers();
  }, []);

  return (
    <div className='container mt-5'>
      <div className='row'>
        {loading && <h3 className='text-center mt-5'>Loading...</h3>}
        {beers.length > 0 && beers.map((beer) => <BeerItem key={beer.id} beer={beer} />)}
        {error && <h3 className='text-center mt-5'>{error}</h3>}
      </div>
    </div>
  );
};

export default Beers;
