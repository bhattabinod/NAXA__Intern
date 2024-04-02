// YourComponent.js
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchData } from './actions';

const YourComponent = () => {
  const dispatch = useDispatch();
  const data = useSelector(state => state.data);
  const isLoading = useSelector(state => state.isLoading);
  const error = useSelector(state => state.error);

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div>
      {/* Render your data here */}
    </div>
  );
};

export default YourComponent;