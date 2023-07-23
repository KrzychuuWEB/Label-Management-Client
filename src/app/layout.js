import './globals.css'
import MenuBar from "@/components/menu/menu";
import {ThemeProvider} from "@mui/material/styles";
import {myTheme} from "@/utils/theme";
import {RWD} from "@/utils/rwd";

export const metadata = {
    title: 'Label Management',
    description: 'Application for label management for product',
    favicon: "",
}

export default function RootLayout({children}) {
    return (
        <html lang="pl">
        <head>
            <link rel="shortcut icon" href="/favicon.png"/>
            <link
                rel="stylesheet"
                href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
            />
        </head>
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
