import { useParams, Link } from "react-router-dom";
import Design1 from "./business/Design1";
import Design2 from "./business/Design2";
import Design3 from "./business/Design3";

const BusinessCard = () => {
  const { id } = useParams();

  switch (id) {
    case "1":
      return <Design1 />;
    case "2":
      return <Design2 />;
    case "3":
      return <Design3 />;
    default:
      return (
        <div className="min-h-dvh flex flex-col items-center justify-center bg-background text-text gap-4">
          <p className="text-xl">Design not found</p>
          <Link
            to="/business"
            className="text-sm underline"
            style={{ color: "#11D0BD" }}
          >
            ← Back to designs
          </Link>
        </div>
      );
  }
};

export default BusinessCard;
