import "./App.css";
import { Onboarding } from "./components/Onboarding/Onboarding";
import { PinfluencerMUITheme } from "./theme";
import { ThemeProvider } from "@mui/material/styles";

function App() {
  return (
    <ThemeProvider theme={PinfluencerMUITheme}>
      <div className="HolyGrail">
        <header>
          <div className="HolyGrailHeader" role="banner">
            <div className="HolyGrailHeaderLogo">LOGO</div>
            <div className="HolyGrailHeaderActions">Header Actions</div>
          </div>
        </header>
        <main className="HolyGrailBody">
          <article className="HolyGrailContent">
            <Onboarding />
          </article>
          <nav className="HolyGrailNav">
            <span>Navigation</span>
          </nav>
          <aside className="HolyGrailSidebar">
            <span>Sidebar</span>
          </aside>
        </main>
        <footer className="HolyGrailFooter">
          <p>Footer items</p>
          <p>&copy; 2022 Pinfluencer</p>
          <p>Social links</p>
        </footer>
      </div>
    </ThemeProvider>
  );
}

export default App;
