import React from "react";
import Link from "next/link";

const Home = props => {
  return (
    <p>
      It works!{" "}
      <Link href="/sell">
        <a>Go to Sell.</a>
      </Link>
    </p>
  );
};

export default Home;
