
import NavMnenu from "@/app/components/NavMenu/navmenu";

export default function ProductLayout({ children }) {
  return (
    <html lang="en">
      <body>
<NavMnenu />
        {children}

      </body>
    </html>
  );
}
