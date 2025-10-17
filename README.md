# 📱 FGTS Saque-Aniversário - React Native

Um aplicativo React Native para simulação de saque-aniversário do FGTS, desenvolvido com TypeScript, React Hook Form, Styled Components e integração com API de validação de telefone.

## 🏗️ Arquitetura Atual

### 📁 Estrutura de Pastas

```
src/
├── assets/           # Imagens e recursos estáticos
├── components/       # Componentes reutilizáveis
│   ├── button/
│   ├── inputControlled/
│   └── text/
├── config/           # Configurações de API e serviços
├── constants/        # Constantes e mensagens centralizadas
├── context/          # Context API para estado global
├── hooks/            # Custom hooks
│   ├── typePhoneValidation.ts
│   ├── useFgtsCalculator.ts
│   ├── useSimulation.ts
│   └── usePhoneValidation.ts
├── routes/           # Configuração de navegação
├── screens/          # Telas da aplicação
├── services/         # Serviços externos
│   └── validatePhone.ts
├── storage/          # Persistência de dados (vazia)
├── theme/            # Tema e estilos globais
├── types/            # Definições de tipos TypeScript
│   ├── navigation.d.ts
│   ├── png.d.ts
│   └── env.d.ts
└── utils/            # Funções utilitárias (vazia)
```

```bash
# .env.example
PHONE_VALIDATION_API_KEY=your_api_key_here
PHONE_VALIDATION_API_URL=https://phoneintelligence.abstractapi.com/v1
COUNTRY_PHONE="BR"
APP_NAME=FGTS Saque Aniversário
APP_VERSION=1.0.0
```

**Configuração:**

- ✅ Arquivo `.env.example` para referência
- ✅ Suporte a variáveis de ambiente com `react-native-dotenv`
- ✅ Tipos TypeScript para variáveis de ambiente
- ✅ Configuração centralizada em `src/config/api.ts`

## 🚀 Como Executar o Projeto

### Pré-requisitos

- Node.js (versão 16 ou superior)
- npm ou yarn
- Expo CLI (`npm install -g @expo/cli`)
- Conta gratuita na [Abstract API](https://www.abstractapi.com/api/phone-validation-api) para validação de telefone

### 1. Instalação

```bash
# Clone o repositório
git clone <url-do-repositorio>
cd fgts-saque-aniversario

# Instale as dependências
npm install
# ou
yarn install
```

### 2. Configuração das Variáveis de Ambiente

```bash
# Copie o arquivo de exemplo
cp .env.example .env

# Edite o arquivo .env com suas configurações
# Obtenha sua chave gratuita em: https://www.abstractapi.com/api/phone-validation-api
PHONE_VALIDATION_API_KEY=sua_chave_aqui
```

### 3. Executar o Projeto

```bash
# Iniciar o servidor de desenvolvimento
npm start
# ou
yarn start

# Executar no Android
npm run android
# ou
yarn android

# Executar no iOS
npm run ios
# ou
yarn ios
```

## 🔧 Scripts de Desenvolvimento

```json
{
  "scripts": {
    "start": "expo start",
    "android": "expo start --android",
    "ios": "expo start --ios",
    "web": "expo start --web",
    "test": "jest",
    "test:watch": "jest --watch",
    "test:coverage": "jest --coverage",
    "lint": "eslint src/ --ext .ts,.tsx",
    "lint:fix": "eslint src/ --ext .ts,.tsx --fix",
    "type-check": "tsc --noEmit"
  }
}
```

## 🎯 Próximos Passos

### Fase 1: AsyncStorage

- [ ] Implementar AsyncStorage
- [ ] Salvar dados offline
- [ ] Sincronizar dados

### Fase 2: Teste

- [ ] Implementar Testes unitários
- [ ] Implementar Testes de integração

### Fase 3: Qualidade

- [ ] Implementar splash screen
- [ ] Transição animada entre telas

## 📋 Checklist de Melhorias

### ✅ Implementado

- [x] Context API implementado
- [x] Validação com React Hook Form + Yup
- [x] Componentes reutilizáveis
- [x] Integração com API

### 🔄 Em Andamento

- [ ] Implementar AsyncStorage
- [ ] Salvar dados offline
- [ ] Sincronizar dados
- [ ] Implementar Testes unitários
- [ ] Implementar Testes de integração
- [ ] Implementar splash screen
- [ ] Transição animada entre telas

### ⏳ Planejado

- [ ] Implementar AsyncStorage
- [ ] Salvar dados offline
- [ ] Sincronizar dados
- [ ] Implementar Testes unitários
- [ ] Implementar Testes de integração
- [ ] Implementar splash screen
- [ ] Transição animada entre telas

## 🤝 Contribuição

1. Fork o projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo `LICENSE` para mais detalhes.

---

**Desenvolvido por Leandro Vidal com ❤️ usando React Native + TypeScript**
