import { useRouter } from "next/router";
import React from "react";

const blog = () => {
  const router = useRouter();
  const { slug } = router.query;

  return (
    <div>
      <h1>This Is My Blog : {slug}</h1>
    </div>
  );
};

export default blog;