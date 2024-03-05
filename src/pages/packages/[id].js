import { programs } from '@/constants/constants';
import { useRouter } from 'next/router';
import { MdStarRate } from 'react-icons/md';

const SinglePage = ({ object }) => {
  return (
    <div>
      <h1>{object.title}</h1>
      <img src={object.image} alt={object.title} />
      <p>Location: {object.locate}</p>
      <p>Duration: {object.day} days, {object.night} nights</p>
      <p>Price: {object.price}</p>
      <p>Rating: {object.rate.length > 0 ? object.rate.length : 'No rating'}</p>
    </div>
  );
};

export async function getStaticPaths() {
  const objects = programs[0].nav;

  const paths = objects.map((object) => ({
    params: { id: object.id.toString() },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const objects = programs[0].nav;

  const object = objects.find((object) => object.id.toString() === params.id);

  // Convert the rate array to a string
  const rateString = object.rate.map((rate) => rate.toString());

  // Update the object with the rate string
  const updatedObject = { ...object, rate: rateString };

  return { props: { object: updatedObject } };
}

export default SinglePage;
