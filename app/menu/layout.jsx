import NavMnenu from "../components/NavMenu/navmenu";


export default function MenuLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <NavMnenu />
        {children}
      
      </body>
    </html>
  );
}
