import "./App.css";

export default function App() {
    return (
        <>
            <a className="skip-link" href="#main-content">
                Skip to main content
            </a>
            <main className="app__main" id="main-content" tabIndex={-1}>
                <h1>Employee Directory</h1>
            </main>
            <footer className="app__footer">
                <p>
                    <small>
                        &copy; {new Date().getFullYear()} Touseef Ahmed. All employees, departments and salaries are
                        sample data.
                    </small>
                </p>
            </footer>
        </>
    );
}
