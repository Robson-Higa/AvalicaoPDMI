# Notas de aula

Curso: Tecnologia em Sistemas para Internet

Disciplina: Programação para Dispositivos Móveis I (2024-1)

Professor: Vinícius Maeda

---

# Aplicativo de Navegação de Abas

Este é um aplicativo React Native que utiliza a navegação de abas para permitir a navegação entre diferentes telas. O aplicativo tem quatro abas principais: Home, Área, Combustível e Editor.

## Funcionalidades

- **Home**: Tela inicial com botões para acessar as outras abas.
- **Área**: Calculadora de área.
- **Combustível**: Calculadora de melhor combustível.
- **Editor**: Editor de texto.

## Tecnologias Utilizadas

- React Native
- React Navigation
- Expo
- @react-navigation/native
- @react-navigation/bottom-tabs
- @expo/vector-icons

## Pré-requisitos

Certifique-se de ter o seguinte instalado em seu sistema:

- Node.js (recomendado: versão LTS)
- Expo CLI (`npm install -g expo-cli`)

## Instalação

1. **Clone o repositório**:

    ```bash
    git clone https://github.com/Robson-Higa/AvalicaoPDMI.git
    ```

2. **Navegue até o diretório do projeto**:

    ```bash
    cd AvaliacaoPDMI
    ```

3. **Instale as dependências**:

    ```bash
    npm install
    ```

4. **Inicie o projeto**:

    ```bash
    npm start
    ```

    Ou, se você estiver usando Yarn:

    ```bash
    yarn start
    ```

    Isso abrirá uma aba no navegador com o Expo Dev Tools, onde você pode visualizar o QR code para abrir o aplicativo no seu dispositivo móvel usando o aplicativo Expo Go, ou você pode rodar o projeto no emulador.

## Estrutura do Projeto

- `App.js`: Configuração da navegação de abas e configuração inicial.
- `src/pages/HomeScreen.js`: Tela inicial com botões para navegação.
- `src/pages/AreaScreen.js`: Tela para cálculo de área.
- `src/pages/CombustivelScreen.js`: Tela para cálculo de melhor combustível.
- `src/pages/EditorScreen.js`: Tela para editor de texto.
- `src/style.js`: Arquivo de estilos utilizados nas telas.

## Uso

- **Tela Home**: Toque nos botões para navegar para a tela correspondente.
- **Tela Área**: Calcule a área de formas geométricas.
- **Tela Combustível**: Calcule o melhor combustível para utilizar.
- **Tela Editor**: Edite e visualize textos.

## Contribuição

Se você quiser contribuir para o projeto, siga estas etapas:

1. Faça um fork do repositório.
2. Crie uma branch com a sua feature (`git checkout -b minha-feature`).
3. Faça commit das suas alterações (`git commit -am 'Adiciona nova feature'`).
4. Faça push para a branch (`git push origin minha-feature`).
5. Crie um Pull Request.




#### Iniciar o projeto
```
npx expo start 
```

#### Iniciar o projeto no Android
```
npx expo start --android
```

