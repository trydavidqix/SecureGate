# SecureGate - Autenticação com React Native e Supabase

## Sobre o Projeto

SecureGate é uma aplicação de autenticação desenvolvida com React Native e Expo, que utiliza o Supabase como backend para gerenciamento de usuários. O aplicativo implementa um sistema completo de autenticação, permitindo aos usuários criar conta, fazer login e gerenciar seu perfil.

## Principais Características

- 🔐 **Autenticação Completa**: Sistema de login e cadastro de usuários
- 📱 **Navegação Intuitiva**: Navegação entre telas utilizando Expo Router
- 🎨 **UI Moderna**: Interface de usuário elegante e responsiva
- 🔄 **Gerenciamento de Estado**: Usando Context API para gerenciar o estado de autenticação
- 🛡️ **Segurança**: Integração com Supabase para autenticação segura

## Tecnologias Utilizadas

- [React Native](https://reactnative.dev/) - Framework para desenvolvimento mobile
- [Expo](https://expo.dev/) - Plataforma para desenvolvimento React Native
- [Supabase](https://supabase.io/) - Backend-as-a-Service para autenticação
- [Expo Router](https://docs.expo.dev/routing/introduction/) - Sistema de roteamento para Expo
- [AsyncStorage](https://react-native-async-storage.github.io/async-storage/) - Armazenamento persistente
- [React Native Elements](https://reactnativeelements.com/) - Biblioteca de componentes UI

## Pré-requisitos

- Node.js (v14 ou superior)
- npm ou yarn
- Expo CLI
- Conta no Supabase

## Instalação

1. Clone o repositório:
```bash
git clone https://github.com/trydavidqix/securegate.git
cd securegate
```

2. Instale as dependências:
```bash
npm install
# ou
yarn install
```

3. Configure as variáveis de ambiente:
   - Crie um projeto no Supabase
   - Atualize o arquivo `constants/supabase.ts` com suas credenciais

4. Inicie o projeto:
```bash
npm start
# ou
yarn start
```

## Estrutura do Projeto

```
autenticator/
├── assets/                  # Recursos estáticos (imagens, fontes)
├── components/              # Componentes reutilizáveis
├── constants/               # Constantes (cores, configurações)
├── src/
│   ├── app/                 # Rotas e páginas da aplicação
│   │   ├── _layout.tsx      # Layout principal da aplicação
│   │   ├── index.tsx        # Página inicial
│   │   ├── (auth)/          # Rotas de autenticação
│   │   │   ├── signin/      # Tela de login
│   │   │   └── signup/      # Tela de cadastro
│   │   └── (panel)/         # Rotas autenticadas
│   │       └── profile/     # Tela de perfil
│   ├── context/             # Contextos da aplicação
│   │   └── AuthContext.tsx  # Contexto de autenticação
│   └── lib/                 # Bibliotecas e utilitários
│       └── supabase.ts      # Configuração do Supabase
├── app.json                 # Configuração do Expo
├── babel.config.js          # Configuração do Babel
├── package.json             # Dependências do projeto
└── tsconfig.json            # Configuração do TypeScript
```

## Fluxo de Autenticação

1. **Cadastro**: Usuários podem criar uma conta fornecendo nome, email e senha
2. **Login**: Usuários podem fazer login com email e senha
3. **Autenticação**: O token de autenticação é armazenado usando AsyncStorage
4. **Perfil**: Usuários autenticados podem acessar seu perfil e realizar logout

## Contribuição

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/amazing-feature`)
3. Faça commit das suas alterações (`git commit -m 'Add some amazing feature'`)
4. Push para a branch (`git push origin feature/amazing-feature`)
5. Abra um Pull Request

## Licença

Este projeto está licenciado sob a licença MIT. Veja o arquivo `LICENSE` para mais detalhes.


## Author

| [<img src="https://avatars.githubusercontent.com/u/193255351?s=400&u=fc9352baf3193df4491c0a07d9b8a40ea0a82e9f&v=4" width="100" style="border-radius: 50%;"><br><sub>David Macêdo</sub>](https://github.com/trydavidqix) |
| :---------------------------------------------------------------------------------------------------------------------------------------: |
| [LinkedIn](https://www.linkedin.com/in/trydavidqix/) |


---

Sinta-se à vontade para contribuir, abrir issues ou sugerir melhorias!
