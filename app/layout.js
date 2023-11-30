import Nav from "./(components)/Nav";
import "./globals.css";
import AuthProvider from "./(components)/AuthProvider";

export const metadata = {
  title: "Next Auth role based Security",
  description: "Next Auth",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-100">
        <AuthProvider>
          <Nav />
          <div className="m-2">{children}</div>
        </AuthProvider>
      </body>
    </html>
  );
}
