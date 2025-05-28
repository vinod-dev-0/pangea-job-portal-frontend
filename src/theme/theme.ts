import { createTheme } from '@mui/material/styles';

// Define custom colors based on the dashboard design
const colors = {
  primary: {
    main: '#10b981', // Green accent color
    light: '#34d399',
    dark: '#059669',
    contrastText: '#ffffff',
  },
  secondary: {
    main: '#6366f1', // Purple/indigo accent
    light: '#818cf8',
    dark: '#4f46e5',
    contrastText: '#ffffff',
  },
  error: {
    main: '#ef4444', // Red for errors/closed status
    light: '#f87171',
    dark: '#dc2626',
    contrastText: '#ffffff',
  },
  warning: {
    main: '#f59e0b',
    light: '#fbbf24',
    dark: '#d97706',
    contrastText: '#ffffff',
  },
  info: {
    main: '#3b82f6',
    light: '#60a5fa',
    dark: '#2563eb',
    contrastText: '#ffffff',
  },
  success: {
    main: '#10b981',
    light: '#34d399',
    dark: '#059669',
    contrastText: '#ffffff',
  },
  // Custom background colors for dark theme
  background: {
    default: '#0d0f29', // Main background 
    paper: '#0D1D32',   // Card backgrounds
  },
  // Custom text colors
  text: {
    primary: '#ffffff',    // Primary text (white)
    secondary: '#cbd5e1',  // Secondary text (slate-300)
    disabled: '#64748b',   // Disabled text (slate-500)
  },
  // Custom divider color
  divider: '#334155', // slate-700
};

// Define custom typography
const typography = {
  fontFamily: [
    '-apple-system',
    'BlinkMacSystemFont',
    '"Segoe UI"',
    'Roboto',
    '"Helvetica Neue"',
    'Arial',
    'sans-serif',
  ].join(','),
  h1: {
    fontSize: '3rem',
    fontWeight: 700,
    color: '#ffffff',
  },
  h2: {
    fontSize: '2.5rem',
    fontWeight: 700,
    color: '#ffffff',
  },
  h3: {
    fontSize: '2rem',
    fontWeight: 700,
    color: '#ffffff',
  },
  h4: {
    fontSize: '1.75rem',
    fontWeight: 600,
    color: '#ffffff',
  },
  h5: {
    fontSize: '1.5rem',
    fontWeight: 600,
    color: '#ffffff',
  },
  h6: {
    fontSize: '1.25rem',
    fontWeight: 600,
    color: '#ffffff',
  },
  body1: {
    fontSize: '1rem',
    color: '#cbd5e1',
    lineHeight: 1.6,
  },
  body2: {
    fontSize: '0.875rem',
    color: '#94a3b8',
    lineHeight: 1.5,
  },
  caption: {
    fontSize: '0.75rem',
    color: '#64748b',
  },
  button: {
    textTransform: 'none' as const,
    fontWeight: 500,
  },
};

// Create and export theme
const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: colors.primary,
    secondary: colors.secondary,
    error: colors.error,
    warning: colors.warning,
    info: colors.info,
    success: colors.success,
    background: colors.background,
    text: colors.text,
    divider: colors.divider,
  },
  typography,
  shape: {
    borderRadius: 8,
  },
  spacing: 8, // Base spacing unit
  components: {
    // Card component customization
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundColor: '#1e293b',
          border: '1px solid #334155',
          borderRadius: 12,
          boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
        },
      },
    },
    // AppBar component customization
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: '#1e293b',
          borderBottom: '1px solid #334155',
          boxShadow: 'none',
        },
      },
    },
    // Button component customization
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          borderRadius: 8,
          fontWeight: 500,
          paddingTop: 10,
          paddingBottom: 10,
          paddingLeft: 20,
          paddingRight: 20,
        },
        contained: {
          boxShadow: 'none',
          '&:hover': {
            boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
          },
        },
        outlined: {
          borderColor: '#475569',
          color: '#cbd5e1',
          '&:hover': {
            borderColor: '#64748b',
            backgroundColor: 'rgba(71, 85, 105, 0.1)',
          },
        },
      },
    },
    // Chip component customization
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: 6,
          fontWeight: 500,
          fontSize: '0.75rem',
        },
      },
    },
    // List item customization for sidebar
    MuiListItem: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          marginBottom: 4,
          '&.Mui-selected': {
            backgroundColor: '#10b981',
            color: '#ffffff',
            '&:hover': {
              backgroundColor: '#059669',
            },
            '& .MuiListItemIcon-root': {
              color: '#ffffff',
            },
          },
          '&:hover': {
            backgroundColor: '#334155',
          },
        },
      },
    },
    // Typography customization
    MuiTypography: {
      styleOverrides: {
        root: {
          '&.MuiTypography-body1': {
            color: '#cbd5e1',
          },
          '&.MuiTypography-body2': {
            color: '#94a3b8',
          },
        },
      },
    },
    // Paper customization
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundColor: '#1e293b',
          backgroundImage: 'none',
        },
      },
    },
    // Divider customization
    MuiDivider: {
      styleOverrides: {
        root: {
          borderColor: '#334155',
        },
      },
    },
  },
});

export default theme;