import './globals.css'
import MenuBar from "@/components/menu/menu";
import {ThemeProvider} from "@mui/material/styles";
import {myTheme} from "@/utils/theme";
import {RWD} from "@/utils/rwd";

export const metadata = {
    title: 'Label Management',
    description: 'Application for label management for product',
}

export default function RootLayout({children}) {
    return (
        <html lang="pl">
        <ThemeProvider theme={myTheme}>
            <body>
            <MenuBar/>
            <RWD>
                {children}
            </RWD>
            </body>
        </ThemeProvider>
        </html>
    )
}
