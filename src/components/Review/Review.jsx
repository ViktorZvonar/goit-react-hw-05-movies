import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import API from 'services/API';

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
      <ul>
        {review.map(({ author, content }, index) => {
          return (
            <li key={index}>
              <h4>Author: {author}</h4>
              <p>{content}</p>
            </li>
          );
        })}
      </ul>
      {!reviewStatus && <p>We don't have any reviews for this movie.</p>}
    </>
  );
};

export default Review;
