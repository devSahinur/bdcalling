import Navbar from "@/components/Navbar";

function page({ params }) {
  return (
    <>
      <h1>hello:{params.id}</h1>
      <Navbar />
    </>
  );
}

export default page;
