import { Roboto } from "next/font/google";
import "@/public/css/main.css";
import { DropdownProvider } from "@/context/DropdownMenuContext";
import { MoreActionsProvider } from "@/context/MoreActionsContext";
import { FileProvider } from "@/context/FileContext";
import { ViewModeProvider } from "@/context/ViewModeContext";
import { SidebarProvider } from "@/context/SidebarContext";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "700"],
});

export const metadata = {
  title: "My Drive - Google Drive",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <FileProvider>
          <SidebarProvider>
            <ViewModeProvider>
              <MoreActionsProvider>
                <DropdownProvider>{children}</DropdownProvider>
              </MoreActionsProvider>
            </ViewModeProvider>
          </SidebarProvider>
        </FileProvider>
      </body>
    </html>
  );
}
