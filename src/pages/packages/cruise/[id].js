import { worldHotel } from '@/constants/constants';
import { useRouter } from 'next/router';
const navarray = worldHotel[0].nav
const SinglePage = ({ object }) => {
  
  return (
    <div>
      <h1>{object.title}</h1>
      <p>Description: {object.desc}</p>
      <img src={object.image} alt={object.title} />
    </div>
  );
};

export async function getStaticPaths() {
  const paths = navarray.map((object) => ({
    params: { id: object.id.toString() },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const object = navarray.find((object) => object.id.toString() === params.id);

  return { props: { object } };
}

export default SinglePage;
