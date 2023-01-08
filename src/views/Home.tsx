import { FunctionComponent } from "react";
import { Link } from "react-router-dom";

type HomeProps = {};

export const Home: FunctionComponent<HomeProps> = () => {
  return (
    <>
      <div>
        To start the QUIZ
        <div className="flex justify-center">
          <Link to="/question"> Start </Link>
        </div>
      </div>
    </>
  );
};

export default Home;
