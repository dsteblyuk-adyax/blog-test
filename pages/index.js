import fsPromises from 'fs/promises';
import path from 'path'
import Home from '../src/modules/Home/Home';
const HomePage = (props) => <Home {...props} />;

export async function getStaticProps() {
  const filePath = path.join(process.cwd(), 'json/blog.json');
  const json = await fsPromises.readFile(filePath);
  const objectData = JSON.parse(json);

  return {
    props: objectData
  }
}

export default HomePage;
