import { useRouter } from "next/router";
import { useEffect } from "react";

const Notfound = () => {
  const router = useRouter();

  const goback = () => {
    router.back();
  };

  const backhome = () => {
    router.push("/");
  };

  useEffect(() => {
    setTimeout(() => {
      router.push("/");
    }, 3000);
  }, []);

  return (
    <>
      <h1>Not Found</h1>
      <p>You will be back to home after 3sec</p>
      <button onClick={goback}>Go Back</button>
      <button onClick={backhome}>Back Home</button>
    </>
  );
};

export default Notfound;
