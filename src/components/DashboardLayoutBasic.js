import React, { useState, useMemo } from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import BarChartIcon from '@mui/icons-material/BarChart';
import DescriptionIcon from '@mui/icons-material/Description';
import LayersIcon from '@mui/icons-material/Layers';
import { AppProvider } from '@toolpad/core/AppProvider';
import { DashboardLayout } from '@toolpad/core/DashboardLayout';
import RecipeCarousel from './RecipeCarousel';
import BootstrapCarousel from './BootstrapCarousal';
import RecipeList from './RecipeList'; // Ensure this import is present

import Favorites from './Favorites';
import Chatbot from './Chatbot';
import ShoppingList from './ShoppingList';

// Define the navigation structure
const NAVIGATION = [
  {
    kind: 'header',
    title: 'Main items',
  },
  {
    segment: 'dashboard',
    title: 'Recipes',
    icon: <DashboardIcon />,
  },
  {
    segment: 'favorites',
    title: 'Favorites',
    icon: <BarChartIcon />,
  },
  {
    segment: 'shopping',
    title: 'Shopping List',
    icon: <ShoppingCartIcon />,
  },
  {
    segment: 'chatbot',
    title: 'Chatbot',
    icon: <LayersIcon />,
  },
];

// Define your theme with the pastel green and olive green color scheme
const demoTheme = createTheme({
  palette: {
    primary: {
      main: '#B2D8B2', // Pastel Green
    },
    secondary: {
      main: '#556B2F', // Olive Green
    },
  },
  cssVariables: {
    colorSchemeSelector: 'data-toolpad-color-scheme',
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
});

function DemoPageContent({ pathname }) {
    return (
      <Box
        sx={{
          py: 4,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
        }}
      >
        {/* Render the carousel on the dashboard */}
        {pathname === '/dashboard' && (
          <>
            <RecipeCarousel /> {/* Add the carousel here */}
            <RecipeList />
          </>
        )}
        {pathname === '/favorites' && <Favorites />}
        {pathname === '/shopping' && <ShoppingList />}
        {pathname === '/chatbot' && <Chatbot />}
      </Box>
    );
  }

DemoPageContent.propTypes = {
  pathname: PropTypes.string.isRequired,
};

function DashboardLayoutBasic(props) {
  const { window } = props;

  // State to manage current page
  const [pathname, setPathname] = useState('/dashboard');

  // Simulate a router for path management
  const router = useMemo(() => {
    return {
      pathname,
      searchParams: new URLSearchParams(),
      navigate: (path) => setPathname(String(path)),
    };
  }, [pathname]);

  const demoWindow = window !== undefined ? window() : undefined;

  return (
    <ThemeProvider theme={demoTheme}>
      <AppProvider
        navigation={NAVIGATION}
        router={router}
        theme={demoTheme}
        window={demoWindow}
      >
        <DashboardLayout>
          {/* Render content dynamically based on the current path */}
          <DemoPageContent pathname={pathname} />
        </DashboardLayout>
      </AppProvider>
    </ThemeProvider>
  );
}

DashboardLayoutBasic.propTypes = {
  window: PropTypes.func,
};

export default DashboardLayoutBasic;
