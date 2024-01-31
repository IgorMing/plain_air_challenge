import React, {useMemo} from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {PRIMARY_COLOR, SPACING} from '../../constants';

type ButtonProps = {
  variant?: 'primary' | 'secondary';
  text: string;
};

const Button = ({variant = 'primary', text}: ButtonProps) => {
  const isPrimary = useMemo(() => variant === 'primary', [variant]);

  return (
    <TouchableOpacity style={isPrimary ? styles.container : {}}>
      <Text style={isPrimary ? styles.primaryText : styles.secondaryText}>
        {text}
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
