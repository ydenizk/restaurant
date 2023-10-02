
import Footer from "@/app/components/footer/footer";
import NavMnenu from "@/app/components/NavMenu/navmenu";

import Open from "../components/open/open";

export default function AboutLayout({ children }) {
  return (
    <html lang="en">
      <body>
<NavMnenu />
        {children}
        <Open />
      <Footer />
      </body>
    </html>
  );
}
