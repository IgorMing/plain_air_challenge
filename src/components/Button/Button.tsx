import React, {useMemo} from 'react';
import {ButtonProps, StyleSheet, Text, TouchableOpacity} from 'react-native';
import {PRIMARY_COLOR, SPACING} from '../../constants';

interface CustomButtonProps extends ButtonProps {
  variant?: 'primary' | 'secondary';
}

const Button = ({variant = 'primary', title, ...rest}: CustomButtonProps) => {
  const isPrimary = useMemo(() => variant === 'primary', [variant]);

  return (
    <TouchableOpacity
      style={isPrimary ? styles.container : styles.secondaryContainer}
      {...rest}>
      <Text style={isPrimary ? styles.primaryText : styles.secondaryText}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: PRIMARY_COLOR,
    alignItems: 'center',
    paddingVertical: SPACING / 2,
    borderRadius: SPACING,
  },
  secondaryContainer: {
    paddingVertical: SPACING / 4,
  },
  primaryText: {
    color: 'white',
    lineHeight: 20,
    fontSize: 16,
  },
  secondaryText: {
    color: PRIMARY_COLOR,
    lineHeight: 20,
    fontSize: 16,
    textDecorationLine: 'underline',
    textDecorationColor: PRIMARY_COLOR,
  },
});

export default Button;
