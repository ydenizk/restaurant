
import Footer from "@/app/components/footer/footer";
import NavMnenu from "@/app/components/NavMenu/navmenu";

export default function MenuLayout({ children }) {
  return (
    <html lang="en">
      <body>
<NavMnenu />
        {children}
      <Footer />
      </body>
    </html>
  );
}
