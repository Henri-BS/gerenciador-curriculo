# Gerenciador de Currículo

> Programação Web para Back-end

##  Sumário

- [Introdução](#introducao)
- [Ferramentas e Bibliotecas](#ferramentas-e-bibliotecas)
- [Criação e Configuração do Projeto](#criacao-e-configuracao-do-projeto)
  * [Spring](#spring)
  * [IntelliJ](#intellij)
  * [Estrutura de Pastas do Back-end](#estrutura-de-pastas-do-backend)

<a id="introducao" name="introducao"></a> 
## Introdução

Este projeto representa uma atividade complementar para a disciplina Programação Web para Backend do cusro de
pós-graduação em Desenvolvimento Web para Back-End. A atividade consiste na elaboração de um projeto web para o
geranciamento de currículos utilizando Java com a Spring Framework para a construção do Back-End, além disso também será
feita a integração com TypeScript e ReactJs para a criação do Front-End, o projeto também deverá incluir outros
conceitos, práticas e tecnologias que foram estudadas ao longo da disciplina. Ao final do desenvolvimento a aplicação
deverá ser capaz de receber dados de um banco de dados em memória para   
criar, alterar, deletar, listar e buscar por currículos e suas respectivas seções de informação.

<a id="ferramentas-e-bibliotecas" name="ferramentas-e-bibliotecas"></a> 
## Ferramentas e Bibliotecas

| Backend                                                                               | Frontend                                                            | Api                                 |
|---------------------------------------------------------------------------------------|---------------------------------------------------------------------|-------------------------------------|
| [Java](https://docs.oracle.com/en/java/javase/17/)                                    | [TypeScript](https://www.typescriptlang.org/)                       | [Postman](https://www.postman.com/) |
| [IntelliJ Idea](https://www.jetbrains.com/idea/)                                      | [VS Code](https://code.visualstudio.com/)                           |                                     |
| [Maven](https://maven.apache.org/)                                                    | [Yarn](https://yarnpkg.com/)                                        |                                     |
| [Spring Boot](https://spring.io/projects/spring-boot)                                 | [ReactJs](https://pt-br.legacy.reactjs.org/)                        |                                     |
| [Spring Data Jpa](https://spring.io/projects/spring-data-jpa)                         | [Bootstrap](https://getbootstrap.com/)                              |                                     |
| [Spring Web](https://docs.spring.io/spring-boot/docs/current/reference/html/web.html) | [MomentJs](https://momentjs.com/)                                   |                                     |
| [Spring Security](https://spring.io/projects/spring-security)                         | [Axios](https://axios-http.com/docs/intro)                          |                                     |
| [H2 Database](https://h2database.com/html/main.html)                                  | [React Router](https://create-react-app.dev/docs/adding-a-router/)  |                                     |


<a id="criacao-e-configuracao-do-projeto" name="criacao-e-configuracao-do-projeto"></a>
## Criação e Configuração do Projeto

<a id="spring" name="spring"></a>
#### Spring

Para poder utilizar o Spring Framework foi feita a criação de um arquivo zip atráves do
site [Spring Initializr](https://start.spring.io/;), o arquivo irá conter as configurações e dependências necessárias
para o projeto Spring, este arquivo foi descompactado e renomeado para 'backend'. As configurações podem ser vista na
figura abaixo.

![Spring Initializr](https://github.com/Henri-BS/gerenciador-curriculo/blob/main/images/spring-init.png)

<a id="intellij" name="intellij"></a>
#### IntelliJ

Com o Java JDK já intalado e configurado nas variáveis de ambiente e com o intelliJ instalado, o arquivo backend poderá
ser aberto na IDE através do menu File > Open. Ao abrir o projeto será necessário indicar a versão do JDK que foi
instalada e que também foi adicionada nas propriedades, isso pode ser feito selecionando Run > Edit Configurations
conforme mostrado na figura.

![IntelliJ Run](https://github.com/Henri-BS/gerenciador-curriculo/blob/main/images/intellij-run.png)

<a id="estrutura-de-pastas-do-backend"> </a>
#### Estrutura de Pastas do Back-end 
Alguns arquivos basicos serão necessários para o funcionamento do backend, o primeiro deles é o _aplication.properties_
que ficará respondável por gerenciar os tipos de perfis para o acesso de dados, o código do arquivo pode ser visto
abaixo indicando que o perfil de 'test' está ativo.

```
spring.profiles.active=test
spring.jpa.open-in-view=false
```

Outro arquivo importante ser o _application-test.properties_, que irá conter as informações do banco em memória H2 e
esse arquivo íra representar o perfil de _test_ mostrado anteriormente, nele haverá dados de usuário e senha do banco
como pode ser visto no código abaixo.

```
spring.datasource.url=jdbc:h2:mem:testdb
spring.datasource.username=sa
spring.datasource.password=

spring.h2.console.enabled=true
spring.h2.console.path=/h2-console

spring.jpa.show-sql=true
spring.jpa.properties.hibernate.format_sql=true
```

Além disso, também haverá um arquivo nomeado _import.sql_ que irá conter os _scripts_ que serão usados no banco.

Por fim a organização das pastas será baseada no padrão MVC juntamente com os padrões Repository e DTO, com isso as
seguintes camadas serão estabelecidas: entities, repositories, dto, controllers e services que contém 2 sub-camadas
chamadas interf e impl. Além disso será criada uma camada chamada config que conterá as configurações do Spring
Security. A figura abaixo apresenta o resultado final da estrutura de pastas do Back-end.

![Back-end Folders](https://github.com/Henri-BS/gerenciador-curriculo/blob/main/images/backend-folders.png)
