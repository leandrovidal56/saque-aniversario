import React from 'react';
import { Controller, Control } from 'react-hook-form';
import MaskInput, { Mask } from 'react-native-mask-input';
import { TextInput, TextInputProps, ActivityIndicator } from 'react-native';
import { Text } from '@components/text';
import { Container } from './styles';
import { moneyMask, phoneMask } from './types';

interface InputControlledProps extends Omit<TextInputProps, 'onChangeText'> {
  name: string;
  control: Control<any>;
  title?: string;
  maskType?: 'money' | 'phone' | 'custom';
  customMask?: Mask;
  keyboardType?: TextInputProps['keyboardType'];
  small?: boolean;
  inputRef?: React.RefObject<TextInput>;
  onChangeText?: (masked: string, unmasked: string) => void;
  loading?: boolean;
}

const selectMask = (maskType?: string, customMask?: Mask): Mask | undefined => {
  switch (maskType) {
    case 'money':
      return moneyMask;
    case 'phone':
      return phoneMask;
    default:
      return customMask;
  }
};

export function InputControlled({
  name,
  control,
  title,
  maskType,
  customMask,
  keyboardType = 'default',
  onChangeText,
  small,
  inputRef,
  loading = false,
  ...rest
}: InputControlledProps) {
  const mask = selectMask(maskType, customMask);

  return (
    <Controller
      control={control}
      name={name}
      render={({
        field: { onChange, onBlur, value },
        fieldState: { error },
      }) => (
        <>
          {title && <Text color="lightGray" size="sm" message={title} />}
          <Container small={small}>
            <MaskInput
              ref={inputRef}
              value={
                maskType === 'money' && typeof value === 'number'
                  ? (value * 100).toFixed(0)
                  : value
              }
              mask={mask}
              keyboardType={maskType === 'money' ? 'numeric' : keyboardType}
              onChangeText={(masked, unmasked) => {
                if (maskType === 'money') {
                  const reais = Number(unmasked) / 100;
                  onChange(reais);
                  onChangeText?.(masked, unmasked);
                } else {
                  onChange(unmasked);
                  onChangeText?.(masked, unmasked);
                }
              }}
              onBlur={onBlur}
              editable={!loading}
              {...rest}
            />
            {loading && (
              <ActivityIndicator
                size="small"
                color="#007AFF"
                style={{ position: 'absolute', right: 12, top: 12 }}
              />
            )}
          </Container>

          {error?.message && (
            <Text size="sm" color="redDark" message={error.message} />
          )}
        </>
      )}
    />
  );
}
