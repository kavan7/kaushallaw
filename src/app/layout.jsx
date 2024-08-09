import RootLayout from "@/components/RootLayout";
import "./globals.css";
import { AuroraBackground } from "@/components/ui/aurora";

export const metadata = {
  title: {
    template: "Best Law Firm in Surrey, BC",
    default: "Kaushal Law Corporation",
  },
};

export default function Layout({ children }) {
  return (
   
    <html
      lang="en"
      className="h-full bg-neutral-950 text-base antialiased text-neutral-100"
    > <AuroraBackground>
           <body className="flex min-h-full flex-col">
          <RootLayout>{children}</RootLayout> 
      </body>
     
      </AuroraBackground>
    </html>
    
  );
}
