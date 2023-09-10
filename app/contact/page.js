import ContactForm from "@/components/Contact/ContactForm";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

function page() {
  return (
    <>
      <Navbar />
      <div className="custom-gradient">
        <div className="container py-[150px]">
          <div className="bg-white grid grid-cols-12 rounded-xl p-5">
            <div className="col-span-12 md:col-span-6 md:order-first">
              <ContactForm />
            </div>
            <div className="col-span-12 md:col-span-6 order-first md:order-last">
              <img
                src="https://i.postimg.cc/GhSr9c0q/team-members.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default page;
