import React, { useState } from 'react';
import { useForm, SubmitHandler, Controller } from 'react-hook-form';
import { useNavigation } from '@react-navigation/native';
import { Dropdown } from 'react-native-element-dropdown';

import { InputControlled } from '@components/inputControlled';
import { Button } from '@components/button';
import { Text } from '@components/text';
import { useSimulation } from '@hooks/useSimulation';
import { usePhoneValidation } from '@hooks/usePhoneValidation';

import { yupResolver } from '@hookform/resolvers/yup';

import {
  Container,
  Header,
  HeaderTitle,
  HeaderSubtitle,
  Content,
  FormWrapper,
  DropdownWrapper,
} from './styles';
import { FormData, optionsSelect } from './type';
import { simulationSchema } from './schemaValidation';

export function Home() {
  const navigation = useNavigation();
  const { saveSimulation } = useSimulation();
  const {
    validatePhoneNumber,
    isValidating,
    validationResult,
    resetValidation,
  } = usePhoneValidation();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const { control, handleSubmit, formState, setError, reset, watch } =
    useForm<FormData>({
      defaultValues: {
        nome: '',
        telefone: '',
        saldoFgts: 0,
        mesAniversario: '',
      },
      resolver: yupResolver(simulationSchema),
      mode: 'onChange',
    });

  const phoneValue = watch('telefone');

  const handlePhoneValidation = async (phone: string) => {
    if (!phone || phone.length < 10) return;

    await validatePhoneNumber(phone);
  };

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    if (!data.mesAniversario) {
      alert('Por favor, selecione o mês de aniversário.');
      return;
    }

    setIsSubmitting(true);

    await new Promise((resolve) => setTimeout(resolve, 2000));

    saveSimulation({
      nome: data.nome,
      telefone: data.telefone,
      saldoFgts: data.saldoFgts,
      mesAniversario: data.mesAniversario,
    });
    reset();
    resetValidation();
    navigation.navigate('Details');
    setIsSubmitting(false);
  };

  return (
    <Container>
      <Header>
        <HeaderTitle>Antecipe seu{'\n'}Saque-Aniversário</HeaderTitle>
        <HeaderSubtitle>
          Use uma grana que já é sua e saia do aperto
        </HeaderSubtitle>
      </Header>

      <Content />

      <FormWrapper>
        <InputControlled
          title="Qual seu nome?"
          name="nome"
          control={control}
          placeholder="Guilherme Neves"
        />

        <InputControlled
          title="Qual seu telefone?"
          name="telefone"
          control={control}
          keyboardType="phone-pad"
          maskType="phone"
          placeholder="(31) 9 9809-7654"
          onBlur={() => handlePhoneValidation(phoneValue)}
          loading={isValidating}
        />
        {phoneValue?.length >= 10 && !isValidating && validationResult && (
          <>
            {validationResult.isValid ? (
              <Text size="sm" color="green" message="✓ Telefone verificado" />
            ) : (
              <Text
                size="sm"
                color="redDark"
                message="Telefone não verificado"
              />
            )}
          </>
        )}

        <InputControlled
          title="Qual seu saldo FGTS?"
          name="saldoFgts"
          control={control}
          keyboardType="numeric"
          maskType="money"
          placeholder="R$ 5.000,00"
        />

        <Text
          color="lightGray"
          size="sm"
          message="Qual o seu mês de aniversário?"
        />

        <Controller
          control={control}
          name="mesAniversario"
          render={({ field: { onChange, value }, fieldState: { error } }) => (
            <>
              <DropdownWrapper>
                <Dropdown
                  style={{ flex: 1 }}
                  placeholderStyle={{ fontSize: 16 }}
                  selectedTextStyle={{ fontSize: 16 }}
                  inputSearchStyle={{ height: 40, fontSize: 16 }}
                  data={optionsSelect}
                  search
                  maxHeight={300}
                  labelField="label"
                  valueField="value"
                  placeholder="Selecione o mês"
                  searchPlaceholder="Buscar..."
                  value={value}
                  onChange={(item) => {
                    onChange(item.value);
                  }}
                />
              </DropdownWrapper>

              {error?.message && (
                <Text size="sm" color="redDark" message={error.message} />
              )}
            </>
          )}
        />

        <Button
          disabled={
            !formState.isValid ||
            validationResult?.isValid === false ||
            isValidating
          }
          loading={isSubmitting}
          style={{ marginTop: 20 }}
          title="Ver Proposta"
          onPress={handleSubmit(onSubmit)}
        />
      </FormWrapper>
    </Container>
  );
}
