const primaryButtonTextColor = '#fff';
const primaryButtonBackground = '#6b58c4';
const primaryButtonHoverBackground = '#614dc0';
const primaryButtonClickBackground = '#513dae';
const defaultColor = '#3f3f44';

export const button = {
  root: {
    '&$disabled': { color: primaryButtonTextColor, opacity: 0.3 },
    'min-width': '48px',
    'font-size': '12px',
    'line-height': '20px',
    'text-transform': 'none',
    margin: '0 4px',
    color: defaultColor,
  },
  sizeLarge: {
    'min-width': '54px',
    'font-size': '14px',
    'line-height': '24px',
    padding: '5px 12px',
  },
  text: { padding: '5px 12px' },
  textPrimary: {
    color: primaryButtonTextColor,
    'background-color': primaryButtonBackground,
    '&:hover': {
      'background-color': primaryButtonHoverBackground,
    },
    '&:active': { 'background-color': primaryButtonClickBackground },
  }
};
