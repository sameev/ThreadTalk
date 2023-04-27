import { useParams } from 'react-router-dom';

const AllPosts = () => {
  const { pageNumber } = useParams();

  return <h2>All Posts; Page: {pageNumber}</h2>;
};

export default AllPosts;
