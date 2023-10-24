import Footer from "@/components/Footer";

export default function Layout({ children }) {
  return (
    <section>
      {children}
      <Footer />
    </section>
  );
}
