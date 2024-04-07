import { Sora } from "next/font/google";
import "./globals.css";

const sora = Sora({ subsets: ["latin"] });
export const metadata = {
  title: 'POC | SENSEDIA | CECOBAN',
  description: 'Producto creado por Sensedia',
}

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={sora.className}>{children}</body>
    </html>
  )
}
