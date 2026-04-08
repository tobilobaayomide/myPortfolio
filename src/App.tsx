import { useLayoutEffect, useState } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage';
import ProjectDetailsPage from './pages/ProjectDetailsPage';
import WritingPage from './pages/WritingPage';
import { getInitialTheme, THEME_STORAGE_KEY, type Theme } from './theme';

function App() {
  const [theme, setTheme] = useState<Theme>(() => getInitialTheme());

  useLayoutEffect(() => {
    document.documentElement.dataset.theme = theme;
    document.documentElement.style.colorScheme = theme;
    window.localStorage.setItem(THEME_STORAGE_KEY, theme);
  }, [theme]);

  return (
    <div className="app-shell">
      <Routes>
        <Route
          path="/"
          element={(
            <HomePage
              theme={theme}
              onToggleTheme={() => setTheme((current) => (current === 'dark' ? 'light' : 'dark'))}
            />
          )}
        />
        <Route path="/projects" element={<Navigate to="/#projects" replace />} />
        <Route
          path="/writing"
          element={(
            <WritingPage
              theme={theme}
              onToggleTheme={() => setTheme((current) => (current === 'dark' ? 'light' : 'dark'))}
            />
          )}
        />
        <Route
          path="/projects/:id"
          element={(
            <ProjectDetailsPage
              theme={theme}
              onToggleTheme={() => setTheme((current) => (current === 'dark' ? 'light' : 'dark'))}
            />
          )}
        />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </div>
  );
}

export default App;
