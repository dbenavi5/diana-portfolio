import Footer from "@/sections/footer";
import Header from "@/sections/header";

export default function ProjectsSectionLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Header />
      <main role="main">{children}</main>
      <Footer />
    </>
  );
}
