import EventList from "./components/EventList";
import Header from "./components/Header";

export default function Home() {
  return (
    <section className="container mx-auto px-1">
      <Header />
      <EventList />
    </section>
  );
}
