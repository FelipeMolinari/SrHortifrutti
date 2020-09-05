import { CSSProperties } from 'react';
export const dangerStyle = {
  backgroundColor: '#E74C5E',
  padding: 16,
  borderRadius: 3,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  textDecoration: 'none',
  color: '#fff',
  fontFamily: 'Poppins'
} as CSSProperties;
export const successStyle = {
  ...dangerStyle,
  backgroundColor: '#3EAD8C'
} as CSSProperties;
export const confirmStyle = {
  ...dangerStyle,
  backgroundColor: '#4090CB'
} as CSSProperties;
