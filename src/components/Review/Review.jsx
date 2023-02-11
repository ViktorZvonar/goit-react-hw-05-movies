import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import API from 'services/API';

import css from './Review.module.css';

const Review = () => {
  const [review, setReview] = useState([]);
  const [reviewStatus, setReviewStatus] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    try {
      API.getReview(id).then(data => {
        data.data.results.map(({ author, content }) =>
          setReview(prevReview => [...prevReview, { author, content }])
        );
        data.data.results.length === 0
          ? setReviewStatus(false)
          : setReviewStatus(true);
      });
    } catch (error) {}
  }, [id]);

  return (
    <>
      <ul className={css.list}>
        {review.map(({ author, content }, index) => {
          return (
            <li className={css.item} key={index}>
              <h4>Author: {author}</h4>
              <p>{content}</p>
            </li>
          );
        })}
      </ul>
      {!reviewStatus && <p>Sorry... No reviews for this movie.</p>}
    </>
  );
};

export default Review;
