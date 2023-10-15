import AuthProvider from './components/authProvider/authProvider'
import QueryProvider from './components/queryProvider/queryProvider'
import './globals.css'



export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body >
        <AuthProvider>
          <QueryProvider>
        {children}
        </QueryProvider>
        </AuthProvider>
      </body>
    </html>
  ) 
}
