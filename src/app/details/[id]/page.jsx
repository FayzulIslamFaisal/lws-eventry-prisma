import EventDetails from "@/app/components/EventDetails";
import EventVenue from "@/app/components/EventVenue";
import HeroSection from "@/app/components/HeroSection";

const page = () => {
  return (
    <>
      <HeroSection />
      <section className="container mx-auto">
        <div className="grid grid-cols-5 gap-12 my-12">
          <EventDetails />
          <EventVenue />
        </div>
      </section>
    </>
  );
};

export default page;
