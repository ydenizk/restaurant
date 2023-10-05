import NavMnenu from "../components/NavMenu/navmenu";
import Footer from "../components/footer/footer";



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
