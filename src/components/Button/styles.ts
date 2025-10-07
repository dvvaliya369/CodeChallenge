import { StyleSheet, ViewStyle, TextStyle } from 'react-native';
import { ButtonVariant, ButtonSize } from './types';

interface Styles {
  container: ViewStyle;
  containerFullWidth: ViewStyle;
  containerSmall: ViewStyle;
  containerMedium: ViewStyle;
  containerLarge: ViewStyle;
  containerPrimary: ViewStyle;
  containerSecondary: ViewStyle;
  containerOutline: ViewStyle;
  containerGhost: ViewStyle;
  containerDanger: ViewStyle;
  containerDisabled: ViewStyle;
  textWrapper: ViewStyle;
  text: TextStyle;
  textSmall: TextStyle;
  textMedium: TextStyle;
  textLarge: TextStyle;
  textPrimary: TextStyle;
  textSecondary: TextStyle;
  textOutline: TextStyle;
  textGhost: TextStyle;
  textDanger: TextStyle;
  textDisabled: TextStyle;
  iconContainer: ViewStyle;
  loadingContainer: ViewStyle;
}

const colors = {
  primary: '#007AFF',
  secondary: '#5856D6',
  outline: '#007AFF',
  ghost: '#007AFF',
  danger: '#FF3B30',
  white: '#FFFFFF',
  black: '#000000',
  gray: '#8E8E93',
  lightGray: '#F2F2F7',
  darkGray: '#48484A',
  disabled: '#C7C7CC',
};

export const styles = StyleSheet.create<Styles>({
  container: {
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingVertical: 12,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    minHeight: 44,
  },
  
  containerFullWidth: {
    alignSelf: 'stretch',
  },
  
  // Size variants
  containerSmall: {
    paddingHorizontal: 12,
    paddingVertical: 8,
    minHeight: 32,
    borderRadius: 6,
  },
  
  containerMedium: {
    paddingHorizontal: 16,
    paddingVertical: 12,
    minHeight: 44,
    borderRadius: 8,
  },
  
  containerLarge: {
    paddingHorizontal: 20,
    paddingVertical: 16,
    minHeight: 52,
    borderRadius: 10,
  },
  
  // Button variants
  containerPrimary: {
    backgroundColor: colors.primary,
    borderWidth: 0,
  },
  
  containerSecondary: {
    backgroundColor: colors.secondary,
    borderWidth: 0,
  },
  
  containerOutline: {
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: colors.outline,
  },
  
  containerGhost: {
    backgroundColor: 'transparent',
    borderWidth: 0,
  },
  
  containerDanger: {
    backgroundColor: colors.danger,
    borderWidth: 0,
  },
  
  containerDisabled: {
    backgroundColor: colors.disabled,
    borderColor: colors.disabled,
  },
  
  textWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  
  text: {
    fontWeight: '600',
    textAlign: 'center',
  },
  
  // Text sizes
  textSmall: {
    fontSize: 14,
    lineHeight: 18,
  },
  
  textMedium: {
    fontSize: 16,
    lineHeight: 20,
  },
  
  textLarge: {
    fontSize: 18,
    lineHeight: 22,
  },
  
  // Text colors for variants
  textPrimary: {
    color: colors.white,
  },
  
  textSecondary: {
    color: colors.white,
  },
  
  textOutline: {
    color: colors.outline,
  },
  
  textGhost: {
    color: colors.ghost,
  },
  
  textDanger: {
    color: colors.white,
  },
  
  textDisabled: {
    color: colors.white,
  },
  
  iconContainer: {
    marginHorizontal: 4,
  },
  
  loadingContainer: {
    marginHorizontal: 4,
  },
});

export const getContainerStyles = (
  variant: ButtonVariant = 'primary',
  size: ButtonSize = 'medium',
  disabled: boolean = false,
  fullWidth: boolean = false,
  customStyle?: any
) => {
  const baseStyles = [styles.container];
  
  // Size styles
  if (size === 'small') baseStyles.push(styles.containerSmall);
  if (size === 'medium') baseStyles.push(styles.containerMedium);
  if (size === 'large') baseStyles.push(styles.containerLarge);
  
  // Variant styles
  if (!disabled) {
    if (variant === 'primary') baseStyles.push(styles.containerPrimary);
    if (variant === 'secondary') baseStyles.push(styles.containerSecondary);
    if (variant === 'outline') baseStyles.push(styles.containerOutline);
    if (variant === 'ghost') baseStyles.push(styles.containerGhost);
    if (variant === 'danger') baseStyles.push(styles.containerDanger);
  } else {
    baseStyles.push(styles.containerDisabled);
  }
  
  // Full width
  if (fullWidth) baseStyles.push(styles.containerFullWidth);
  
  // Custom styles
  if (customStyle) baseStyles.push(customStyle);
  
  return baseStyles;
};

export const getTextStyles = (
  variant: ButtonVariant = 'primary',
  size: ButtonSize = 'medium',
  disabled: boolean = false,
  customStyle?: any
) => {
  const baseStyles = [styles.text];
  
  // Size styles
  if (size === 'small') baseStyles.push(styles.textSmall);
  if (size === 'medium') baseStyles.push(styles.textMedium);
  if (size === 'large') baseStyles.push(styles.textLarge);
  
  // Variant styles
  if (!disabled) {
    if (variant === 'primary') baseStyles.push(styles.textPrimary);
    if (variant === 'secondary') baseStyles.push(styles.textSecondary);
    if (variant === 'outline') baseStyles.push(styles.textOutline);
    if (variant === 'ghost') baseStyles.push(styles.textGhost);
    if (variant === 'danger') baseStyles.push(styles.textDanger);
  } else {
    baseStyles.push(styles.textDisabled);
  }
  
  // Custom styles
  if (customStyle) baseStyles.push(customStyle);
  
  return baseStyles;
};

export { colors };
