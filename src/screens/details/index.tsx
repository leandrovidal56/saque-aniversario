import React from 'react';
import { Container, Content, Image } from './styles';
import { Text } from '@components/text';
import { Button } from '@components/button';
import { useNavigation } from '@react-navigation/native';
import { useSimulation } from '@hooks/useSimulation';
import Logo from '../../assets/details.png';

export function Details() {
  const navigation = useNavigation();
  const { simulation } = useSimulation();

  return (
    <Container>
      <Image source={Logo} />
      <Content>
        <Text
          fontWeight={700}
          color="black"
          size="bg"
          message={` Olá ${simulation?.nome}!`}
        />
        <Text color="lightGray" size="md" message="Você pode receber até" />
        <Text
          color="blue"
          fontWeight={900}
          size="bg"
          message={`${simulation?.saqueFormatted}`}
        />
        <Text
          color="lightGray"
          size="sm"
          fontWeight={300}
          message="*Esta simulação traz valores aproximados. Para calcular o valor extato, entre em contato com o Smile Co. ou consulte seu saldo no app do FGTS. "
        />
        <Button onPress={() => navigation.goBack()} title="Voltar" />
      </Content>
    </Container>
  );
}
