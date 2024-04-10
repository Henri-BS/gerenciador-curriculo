# Gerenciador de Currículo

> Programação Web para Backend

##  Sumário

- [Introdução](#introdução)
- [Ferramentas e Bibliotecas](#FerramentasEBibliotecas)
- [Criação e Configuração do Projeto](#criação-e-configuração-do-projeto)
  - [Spring Initializr](#spring-initializr)
  - [IntelliJ](#intellij)
  - [Estrutura do Backend](#estrutura-do-backend)
  - [ReactJs](#reactjs)
  - [CSS](#css)
  - [Estrutura do Frontend](#estrutura-do-frontend)
- [Programação Backend](#programação-backend)
  - [Classes e Interfaces](#classes-e-interfaces)
    - [SecurityConfig](#securityconfig)
    - [Entity](#entity)
    - [DTO](#dto)
    - [Repository](#repository)
    - [Sevice e ServiceImpl](#service-e-serviceimpl)
    - [Controller](#controller)
  - [Funções e Procedimentos](#funções-e-procedimentos)
    - [FindAll](#findall)
    - [FindById](#findbyid)
    - [Save](#save)
    - [Update](#update)
    - [Delete](#delete)
 - [H2 Database e Postman](#h2-database-e-postman)
    - [Manipulação de Dados](#manipulação-de-dados)
    - [Teste de Requisições](#teste-de-requisições)
- [Programação Frontend](#programação-frontend)
  - [Requests](#requests)
  - [Types](#types)
  - [Componentes](#componentes)
    - [Card](#card)
    - [Form](#form)
    - [Pagination](#pagination)
  - [Páginas e Rotas](#páginas-e-rotas)
    - [List](#list)
    - [Profile](#profile)
    - [Routes](#routes)
- [Resultados](#resultados)    

## Introdução

Este projeto representa uma atividade complementar para a disciplina Programação Web para Backend do curso de
pós-graduação em Desenvolvimento Web para Backend. A atividade consiste na elaboração de um projeto web para o
gerenciamento de currículos utilizando Java com a Spring Framework para a construção do Backend, além disso também será
feita a integração com TypeScript e ReactJs para a criação do Frontend, o projeto também deverá incluir outros
conceitos, práticas e tecnologias que foram estudadas ao longo da disciplina. Ao final do desenvolvimento a aplicação
deverá ser capaz de receber dados de um banco de dados em memória e transmitir estes dados ao Frontend através de reqisições possibilitando a   
criação, alteração, deleção, listagem e busca por currículos e suas respectivas seções de conteúdo.

## Ferramentas e Bibliotecas

| Backend                                                                               | Frontend                                                            | Api                                 |
|---------------------------------------------------------------------------------------|---------------------------------------------------------------------|-------------------------------------|
| Linguagem: [Java](https://docs.oracle.com/en/java/javase/17/)                                    | Linguagem: [TypeScript](https://www.typescriptlang.org/)                       | Plataforma API: [Postman](https://www.postman.com/) |
| IDE: [IntelliJ Idea](https://www.jetbrains.com/idea/)                                      | IDE: [VS Code](https://code.visualstudio.com/)                           |                                     |
| Build: [Maven](https://maven.apache.org/)                                                    | Build: [Yarn](https://yarnpkg.com/)                                        |                                     |
| Framework: [Spring Boot](https://spring.io/projects/spring-boot)                                 | Framework: [ReactJs](https://pt-br.legacy.reactjs.org/)                        |                                     |
| Persistência: [Spring Data Jpa](https://spring.io/projects/spring-data-jpa)                         | Estilização: [Bootstrap](https://getbootstrap.com/)                              |                                     |
| Ferramentas Web: [Spring Web](https://docs.spring.io/spring-boot/docs/current/reference/html/web.html) | Datas: [MomentJs](https://momentjs.com/)                                   |                                     |
| Segurança: [Spring Security](https://spring.io/projects/spring-security)                         | Requisições: [Axios](https://axios-http.com/docs/intro)                          |                                     |
| Banco de Dados: [H2 Database](https://h2database.com/html/main.html)                                  | Roteamento: [React Router](https://create-react-app.dev/docs/adding-a-router/)  |                                     |


## Criação e Configuração do Projeto

### Spring Initializr

Para poder utilizar o Spring Framework deverá ser feita a criação de um arquivo zip através do
site [Spring Initializr](https://start.spring.io/;), o arquivo irá conter as configurações e dependências necessárias
para o projeto Spring, este arquivo deverá ser descompactado e renomeado para 'backend'. As configurações do arquivo podem ser vista na
figura abaixo.

![Spring Initializr](https://github.com/Henri-BS/gerenciador-curriculo/blob/main/images/spring-init.png)

### IntelliJ

Com o Java JDK já instalado e configurado nas variáveis de ambiente e com o intelliJ instalado, o arquivo backend poderá
ser aberto na IDE através do menu File > Open. Ao abrir o projeto será necessário indicar a versão do JDK que foi
instalada e que também foi adicionada nas propriedades, isso pode ser feito selecionando Run > Edit Configurations
conforme mostrado na figura.

![IntelliJ Run](https://github.com/Henri-BS/gerenciador-curriculo/blob/main/images/intellij-run.png)

### [Estrutura do Backend](https://github.com/Henri-BS/gerenciador-curriculo/tree/main/backend)
Alguns arquivos básicos serão necessários para o funcionamento do backend, o primeiro deles é o _aplication.properties_
que ficará responsável por gerenciar os tipos de perfis para o acesso de dados, o código do arquivo pode ser visto
abaixo indicando que o perfil de 'test' está ativo.

```
spring.profiles.active=test
spring.jpa.open-in-view=false
```

Outro arquivo importante ser o _application-test.properties_, que irá conter as informações do banco em memória H2 e
esse arquivo representará o perfil de _test_ mostrado anteriormente, nele haverá dados de usuário e senha do banco
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
seguintes camadas serão estabelecidas: _entities, repositories, dto, controllers e services_ que contém 2 sub-camadas
chamadas _interf e impl_. Além disso será criada uma camada chamada config que conterá as configurações do Spring
Security. A figura abaixo apresenta o resultado final da estrutura de pastas do Backend.

![Backend Folders](https://github.com/Henri-BS/gerenciador-curriculo/blob/main/images/backend-folders.png)

### ReactJs

Para que a aplicação TypeScript seja executada no Frontend será preciso realizar o download
do [Node](https://nodejs.org/en), após o download é possível ver em um terminal a versão baixada através do comando
```node -v```, com isso já é possível fazer comandos em um terminal no diretório do projeto em uma pasta nomeada '
frontend' que será a aplicação React, o terminal usado será o [Git Bash](https://git-scm.com/download/win). A tabela a
seguir apresenta a sequência de comandos para criar o projeto React e para instalar as bibliotecas do Frontend.

| Ação                                               | Comando                                              |
|----------------------------------------------------|------------------------------------------------------|
| Instalação do yarn                                 | npm install --global yarn                            |
| Cria projeto ReactJs com TypeScript                | yarn create react-app frontend --template typescript |
| Acessa a pasta frontend                              | cd frontend                                          |
| Adiciona react router para roteamento de página    | yarn add react-router-dom                            |
| Adiciona axios como biblioteca de requisições HTTP | yarn add axios                                       |
| Adiciona bootstrap como biblioteca de estilização  | yarn add bootstrap                                   |
| Adiciona moment como biblioteca de datas           | yarn add moment                                      |

### [CSS](https://github.com/Henri-BS/gerenciador-curriculo/tree/main/frontend/src/assets/css)
Os arquivos CSS do projeto ficarão na pasta _css_ localizados em src > assets > css; e todos os arquivos deverão ter um _import_ no arquivo _index.tsx_, este mesmo arquivo também deverá conter os seguintes _imports_ do Bootstrap:
```
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/js/src/modal';
```    

### [Estrutura do Frontend](https://github.com/Henri-BS/gerenciador-curriculo/tree/main/frontend)

Assim como foi feita a organização na pasta _backend_, o mesmo processo será feito na pasta _frontend_, na pasta
tsconfig.json será adicionada a propriedade ``"baseUrl": "./src"`` para definir a base da url para os _imports_, algumas
pastas serão inclusas como: assests, components, pages, utils, types, routes e entre outras; bem como alguns arquivos
serão adicionados, alterados ou deletados. A estrutura final da pasta _frontend_ pode ser vista na figura abaixo.

![Frontend Folders](https://github.com/Henri-BS/gerenciador-curriculo/blob/main/images/frontend-folders.png)


## Programação Backend

### Classes e Interfaces

O conjunto de classes e interfaces abordadas no projeto forma baseadas com padrão MVC em conjunto com o padrões
Repository e DTO resultando nas seguintes camadas: _Entity_, _Dto_, _Repository_, _Service_, _ServiceImpl_ e
_Controller_ e também a classe de configurações de segurança do Spring a _SecurityConfig_. Alguns exemplos destas classes e interfaces poderão ser vistos a seguir, o link para a respectiva pasta de cada camada estará no título do tópico.

- #### [SecurityConfig](https://github.com/Henri-BS/gerenciador-curriculo/tree/main/backend/src/main/java/com/altercode/gerenciadorcurriculo/config/SecurityConfig.java)

A implementação das propriedades do Spring Security será feita na classe SecurityConfig, está classe irá possuir dois
métodos importantes o `configure` para a proteção dos _endpoints_ com HTTP básico, bem como irá configurar o perfil
_test_ do H2 e também o método `corsConfigurationSource` para configurar o CORS padrão do Spring.

- #### [Entity](https://github.com/Henri-BS/gerenciador-curriculo/tree/main/backend/src/main/java/com/altercode/gerenciadorcurriculo/entities)

A classe do tipo Entidade(Entity) irá representar os dados que serão persistidos no banco de dados H2, a classe será
definida como entidade através da anotação `@Entity` e irá se correlacionar com uma tabela através da anotação `@Table`
onde será adicionado o atributo _name_ para indicar o nome da tabela. Além disso, os atributos da classe irão
representar as colunas da tabela e poderão conter a anotação `@Column` para personalizar as características do atributo,
também deverá haver um atributo específico chamado _id_ que será equivalente a chave primária no database e deverá
conter as anotações `@Id` e `@GeneratedValue`. Neste projeto todas as classes de entidade seguiram este padrão conforme
mostrado abaixo.

```
// Exemplo de declaração de uma classe Entity
@Entity
@Table(name = "tb_cv")
public class Cv {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "cv_id")
    private Long id;
    @Column(name= "name", nullable = false)
    private String name;
    @Column(name= "job_title")
    private String jobTitle;
    
    @OneToMany(mappedBy = "cv", cascade = CascadeType.ALL)
    private final List<Education> educationList = new ArrayList<>();
    @OneToMany(mappedBy = "cv", cascade = CascadeType.ALL)
    private final List<Experience> experiences = new ArrayList<>();
    @OneToMany(mappedBy = "cv", cascade = CascadeType.ALL)
    private final List<Section> sections = new ArrayList<>();
    
    //constructors
    //getters and setters
}
```

- #### [DTO](https://github.com/Henri-BS/gerenciador-curriculo/tree/main/backend/src/main/java/com/altercode/gerenciadorcurriculo/dto)

O padrão _DTO_ será utilizado como forma de transferir os dados entre os processos reduzindo o número de transações, as
classes do tipo DTO irão implementar a interface _Serializable_ para realizar a serialização de dados, também será
adicionada o atibuto _serialVersionUID_ para definir a versão e a anotação `@Serial` será inclusa no atributo. A
anotação `@JsonIncluse` adicionada na classe irá ocultar dados nulos na requisição Json e também será criado um
construtor em que os atibutos da classe _DTO_ irão receber os métodos _get_ da classe Entity correspondente.

```
// Exemplo de declaração de uma classe DTO
@JsonInclude(JsonInclude.Include.NON_NULL)
public class CvDto implements Serializable {
@Serial
private static final long serialVersionUID = 1L;

    private Long id;
    private String name;
    private String jobTitle;

    public CvDto(Cv entity) {
        id = entity.getId();
        name = entity.getName();
        jobTitle = entity.getJobTitle();
    }
    
    // getters
```

- #### [Repository](https://github.com/Henri-BS/gerenciador-curriculo/tree/main/backend/src/main/java/com/altercode/gerenciadorcurriculo/repositories)

Os métodos disponibilizados no Spring Data JPA poderão ser facilmente utilizado através da interface _Repository_, essa
interface poderá ser definida como Repository ao receber a anotação `@Repository`, também será acrescentador a interface
um `extends JpaRepository<Entity, Long>` que permitirá que a classe _Entity_ especificada receba os métodos da JPA.

```
// Exemplo de declaração de uma interface Repository
@Repository
public interface CvRepository extends JpaRepository<Cv, Long>{
}
```

<br/>

- #### [Service](https://github.com/Henri-BS/gerenciador-curriculo/tree/main/backend/src/main/java/com/altercode/gerenciadorcurriculo/service/interf) e [ServiceImpl](https://github.com/Henri-BS/gerenciador-curriculo/tree/main/backend/src/main/java/com/altercode/gerenciadorcurriculo/services/impl)

A camada Service será reapresentada tanto por classes quanto por interfaces, a interface Service permitirá que os
métodos relacionados a lógica de negócios sejam declarados.

```
// Exemplo de declaração de uma interface ServiceImpl
public interface CvService {
}
```

<br/>
Já nas classes do tipo _ServiceImpl_ serão implementados os métodos das suas respectivas interfaces, também será
adicionado a anotação `@Service` para definir a classe como _Service_ e a será acrescentado também a anotação `@Transacitional` para declarar a semântica de transação.

```
// Exemplo de uma classe declaração de ServiceImpl
@Service
@Transactional
public class CvServiceImpl implements CvService {
    @Autowired
    private CvRepository cvRepository;
}
```

<br/>

- #### [Controller](https://github.com/Henri-BS/gerenciador-curriculo/tree/main/backend/src/main/java/com/altercode/gerenciadorcurriculo/controllers)

Por fim as classes `Controllers` irão representar o controlador da aplicação, possuindo as nuances de persistência e o
mapeamento de solicitações da Web, para isso será acrescentado a anotação `@RestContoller` para definir a classe como
controlador e a a notação `@RequestMapping` para mapear as solicitações. A classe também irá conter um atributo do tipo
interface `Service` com a anotação `@Autowired` esse atributo possibilitará a chamada dos métodos definidos na interface
`Service`.

```
// Exemplo de declaração de uma classe controller
@RestController
@RequestMapping(value = "/cv")
public class CvController {
    @Autowired
    private CvServiceImpl cvServiceImpl;
}
```

<br/>

### Funções e Procedimentos

As funções e procedimentos serão definidas em 4 camadas diferentes: _Repository_, _Service_, _ServiceImpl_ e _Controller_. O processo de construção das principais funções CRUD utilizadas no projeto será abordado com alguns
exemplos.

- #### FindAll

A interface Repository poderá oferecer métodos para listagem com busca inclusa através da Jpa, neste projeto as os
métodos personalizados para listagem serão declarados nas interfaces Repository, poderão ser do tipo `List<Entity>`
ou `Page<Entity>` o tipo Page também recebe o parâmetro `Pageable pageable`, o método também irá conter a
anotação `@Query` para criar instruções SQL definindo o tipo de _case_, a ordem e o parâmetro de busca.

```
// Exemplo de método de listagem na interface Repository 
    @Query("SELECT obj FROM Cv obj WHERE UPPER(obj.name) " +
            "LIKE UPPER(CONCAT('%', ?1, '%')) " +
            "ORDER BY (obj.name) ASC")
    Page<Cv> findAllCvs(String name, Pageable pageable);
```

As interfaces do tipo Service terão métodos de listagem declarados com o tipo `List<Dto>` ou `Page<Dto>`.

```
// Exemplo de método de listagem declarado na interface Service 
    Page<CvDto> findAllCvs(String name, Pageable pageable);
```

A função _findAll_ em uma classe _ServiceImpl_ será implementada de sua interface _Service_ através da
anotação `@Override` e a anotação `@Transactional(readOnly = true)` para definir a transação apenas como leitura, também
irá chamar o método _findAll_ da interface _Repository_.

```
// Exemplo de função de listagem na classe ServiceImpl
    @Override
    @Transactional(readOnly = true)
    public Page<CvDto> findAllCvs(String name, Pageable pageable) {
        Page<Cv> find = cvRepository.findAllCvs(name, pageable);
        return find.map(CvDto::new);
    }
```

A função _findAll_ em uma classe de _Controller_ deverão conter a anotação `@GetMapping` com o atributo _name_ para
mapear a solicitação como _GET_, caso tenha um parâmetro de busca deve ser adicionado a anotação `@RequestParam` no
atributo para definir um parâmetro na solicitação, a função também irá chamar o método da interface _Service_ para usar
como argumento, um `ResponseEntity<>` poderá ser adicionado ao tipo do método para retornar o status como _OK_.

```
// Exemplo de função de listagem na classe Controller
    @GetMapping("/page")
    public ResponseEntity<Page<CvDto>> findAllCvs(@RequestParam(defaultValue = "") String name, Pageable pageable) {
        Page<CvDto> page = cvServiceImpl.findAllCvs(name, pageable);
        return ResponseEntity.ok(page);
    }
```

<br/>

- #### FindById

A função _findById_ em uma interface _Service_ terá como tipo uma classe _Dto_ e terá um parâmetro de busca que será
um `Long id`.

```
// Exemplo da função findById interface Service 
    CvDto findById(Long id);
```

A função _findById_ em uma classe _ServiceImpl_ será implementada de sua interface _Service_ através da
anotação `@Override` e a anotação `@Transactional(readOnly = true)` para definir a transação apenas como leitura, também
irá chamar o método _findById_ da interface Repository.

```
// Exemplo da função findById na classe ServiceImpl
    @Override
    @Transactional(readOnly = true)
    public CvDto findById(Long id) {
        Cv find = cvRepository.findById(id).orElseThrow();
        return new CvDto(find);
    }
```

A função _findById_ em uma classe _Controller_ deverá conter a anotação `@GetMapping` com o atributo _name_ para mapear
a solicitação como _GET_, no parâmetro `Long id` deve ser adicionado a anotação `@PathVariable` para incluir o _id_
diretamente na solicitação, a função também irá chamar o método da interface _Service_ para usar como argumento,
um `ResponseEntity<>` poderá ser adicionado ao tipo do método para retornar o status como _OK_.

```
// Exemplo da função findById na classe Controller
    @GetMapping("/{id}")
    public ResponseEntity<CvDto> findById(@PathVariable Long id) {
        CvDto find = cvServiceImpl.findById(id);
        return ResponseEntity.ok(find);
    }
```

<br/>

- #### Save

A função _save_ em uma interface _Service_ terá como tipo e como parâmetro uma classe _Dto_.

```
// Exemplo da função save na interface Service 
        CvDto saveCv(CvDto dto);
```

A função _save_ em uma classe do tipo _ServiceImpl_ será implementada de sua interface _Service_ através da
anotação `@Override`, e criará uma nova instância com os métodos _setters_ de uma respectiva classe _Entity_ junto com
os métodos _getters_ de uma classe _Dto_ correspondente como argumento.

```
// Exemplo da função save na classe ServiceImpl 
    @Override
    public CvDto saveCv(CvDto dto) {
        Cv add = new Cv();
        add.setId(dto.getId());
        add.setName(dto.getName());
        add.setJobTitle(dto.getJobTitle());
        add.setImage(dto.getImage());
        add.setPhone(dto.getPhone());
        add.setEmail(dto.getEmail());
        add.setLocation(dto.getLocation());
        add.setDescription(dto.getDescription());

        return new CvDto(cvRepository.saveAndFlush(add));
    }
```

A função _save_ em uma classe _Controller_ deverá conter a anotação `@PostMapping` com o atributo _name_ para mapear a
solicitação como _POST_, no parâmetro `Dto dto` deve ser adicionado a anotação `@RequestBody` para indicar o corpo da
requisição, a função também irá chamar o método da interface _Service_ para usar como argumento e um `ResponseEntity<>`
poderá ser adicionado para indicar o _body_ e retornar o status como _CREATE_.

```
// Exemplo da função save na classe Controller
    @PostMapping("/save")
    public ResponseEntity<CvDto> saveCv(@RequestBody CvDto dto) {
        CvDto add = cvServiceImpl.saveCv(dto);
        return new ResponseEntity<>(add, HttpStatus.CREATED);
    }
```

<br/>

- ##### Update

A função _update_ em uma interface _Service_ terá como tipo e como parâmetro uma classe _Dto_.

```
// Exemplo da função save na interface Service 
    CvDto updateCv(CvDto dto);
```

A função _update_ em uma classe _ServiceImpl_ será implementada de sua interface _Service_ correspondente através da
anotação `@Override`, e receberá os métodos _setters_ de uma respectiva classe _Entity_ com os métodos _
getters_ de uma classe _Dto_ correspondente como argumento.

```
// Exemplo da função update na classe ServiceImpl 
    @Override
    public CvDto updateCv(CvDto dto) {
        Cv edit = cvRepository.findById(dto.getId()).orElseThrow();
        edit.setId(edit.getId());
        edit.setName(dto.getName());
        edit.setJobTitle(dto.getJobTitle());
        edit.setImage(dto.getImage());
        edit.setPhone(dto.getPhone());
        edit.setEmail(dto.getEmail());
        edit.setLocation(dto.getLocation());

        return new CvDto(cvRepository.save(edit));
    }
```

A função _update_ em uma classe _Controller_ deverá conter a anotação `@PutMapping` com o atributo _name_ para mapear a
solicitação como _PUT_, no parâmetro `Dto dto` deve ser adicionado a anotação `@RequestBody` para indicar o corpo da
requisição, a função também irá chamar o método da interface _Service_ para usar como argumento e um `ResponseEntity<>`
poderá ser adicionado para indicar o _body_ e retornar o status como _OK_.

```
// Exemplo da função save na classe Controller
    @PutMapping("/update")
    public ResponseEntity<CvDto> updateCv(@RequestBody CvDto dto) {
        CvDto edit = cvServiceImpl.updateCv(dto);
        return new ResponseEntity<>(edit, HttpStatus.OK);
    }
```

- ##### Delete

O procedimento _delete_ em uma interface _Service_ será do tipo _void_ e terá um parâmetro de busca que será
um `Long id`.

```
// Exemplo do procedimento delete interface Service 
    void deleteCv(Long id);
```

O procedimento _delete_ em uma classe _ServiceImpl será implementado de sua interface _Service_ através da
anotação `@Override` e terá como argumento o método _deleteById_ da interface _Repository_.

```
// Exemplo do procedimento delete na classe ServiceImpl
    @Override
    public void deleteCv(Long id) {
        this.cvRepository.deleteById(id);
    }
```

A função _delete_ em uma classe _Controller_ deverá conter a anotação `@DeleteMapping` com o atributo _name_ para mapear
a solicitação como _DELETE_ e também a anotação `@ResponseStatus` que irá mostrar o status da requisição, no
parâmetro `Long id` deve ser adicionado a anotação `@PathVariable` para incluir o _id_
diretamente na solicitação, a função também irá chamar o método da interface _Service_ para usar como argumento.

```
// Exemplo do procedimento delete na classe Controller
    @DeleteMapping("/delete/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void deleteCv(@PathVariable Long id) {
        this.cvServiceImpl.deleteCv(id);
    }
```

<br/>

### H2 Database e Postman

- #### Manipulação de dados

Através do banco de dados H2 incorporado no projeto, será possível visualizar e manipular dados presentes nos _scripts_
do arquivo `application-test.properties`, assim como também será possível utilizar a interface gráfica do banco. Para
ter acesso ao H2 será preciso executar a aplicação através do botão _Run_ e logo em seguida acessar no navegador a
url: `http://localhost:8080/h2-console` referente a página de login e nesta página serão solicitado os dados de login definidos no arquivo do H2 como pode ser visto na figura abaixo.

![H2 Login](https://github.com/Henri-BS/gerenciador-curriculo/blob/main/images/h2_login.png)

Com a conexão estabelecida, a página será redirecionada para a interface principal do H2 que é constituída pelas
informações de esquema do banco de dados que ficam no lado esquerdo, a caixa de texto para as instruções ao centro e
logo abaixo a área dos resultados. Com isso banco H2 poderá ser utilizado para receber instruções SQL e apresentar os
resultados, para fazer uma instrução do tipo `SELECT` e visualizar os registros de uma tabela como mostrado na próxima figura, pode-se
escrever a instrução `SELECT * FROM tb_name;` na caixa de texto ou simplesmente clicar numa tabela específica na aba de
esquemas.

![H2 Select](https://github.com/Henri-BS/gerenciador-curriculo/blob/main/images/h2_select.png)

O h2 também permite a criação de um novo registro, que poderá ser feita através do comando `INSERT INTO`, ao inserir um
novo registro o banco de dados informará sobre a condição da inserção com uma mensagem.

![H2 Insert](https://github.com/Henri-BS/gerenciador-curriculo/blob/main/images/h2_insert.png)

- #### Teste de Requisições

A plaraforma de API Postman poderá ser usada para de testar as requisições da aplicação, na plataforma poderá ser feita
a criação de _collectitons_ que irão agregar as requisições que poderão ser organizadas em pastas.

![Postman Folder](https://github.com/Henri-BS/gerenciador-curriculo/blob/main/images/postman-folder.png)

Para testar uma requisição será necessário selecionar o tipo e adicionar a URL, numa requisição do tipo _GET_ deve-se
adicionar a URL que corresponde a operação criada no Backend e mapeada através da camada de _Controller_, ou seja,
deverá ser adicionado o valor atributo _name_ contida na anotação do tipo _Mapping_ da função, caso necessário também
pode-se incluir parâmetros de busca na url. Feito isso, o postman retornará o resultado em formato JSON, uma requisição
do tipo _DELETE_ segue o mesmo processo, mas retornar apenas o _status_. Abaixo um exemplo de uma requisição para buscar todos currículos.

![Postman FindAll Function](https://github.com/Henri-BS/gerenciador-curriculo/blob/main/images/postman-all.png)

Em requisições do tipo _POST_ ou _PUT_ o processo será semelhante ao que foi visto anteriormente, porem será preciso
selecionar a opção _Body_ no menu opções e logo em seguida selecionar o tipo de texto _raw_ de depois o formato de envio
que no caso será JSON. Com isso será possível escrever a requisição na caixa de texto abaixo do menu de opções e ao
enviar a requisição irá retornar uma resposta em JSON, em requisições do tipo _PUT_ será preciso incluir o id entre os
atributos. Abaixo um exemplo de uma requisição para salvar um novo currículo.

![Postman Save Function](https://github.com/Henri-BS/gerenciador-curriculo/blob/main/images/postman-save.png)

## Programação Frontend

### [Requests](https://github.com/Henri-BS/gerenciador-curriculo/blob/main/frontend/src/utils/requests.tsx)

Para que a camada de Frontend possa encontrar a camada de Backend é necessário criar um arquivo que será nomeado de 
_requests.ts_, neste arquivo irá conter o caminho para o Backend que se chamará `BASE_URL` que poderá ser apenas a url do
localhost ou um operador de coalescência nula para indicar outra localidade de acesso ao Backend como visto no código
abaixo.  
`export const BASE_URL = process.env.REACT_APP_BACKEND_URL ?? "http://localhost:8080";`

### [Types](https://github.com/Henri-BS/gerenciador-curriculo/blob/main/frontend/src/types)

Com a `BASE_URL` já criada, as _types_ poderão ser implementadas no TypeScript para definir os tipos de dados contidos
nas requisições, as _types_ poderão representar objetos, coleções ou parêmtros e irão conter os atributos
correspondentes aos do Backend como pode ser visto no exemplo abaixo das _types_ relacionadas ao currículo.

```
export type Cv = {
    id: number;
    name: string;
    jobTitle: string;
    description: string;
    image: string;
    phone: string;
    location: string;
    email: string;
}
```

<br/>

### Componentes

- #### [Card](https://github.com/Henri-BS/gerenciador-curriculo/blob/main/frontend/src/components/cards)

O componente _card_ será usado como um "cartão" que irá conter informações sobre determinado conteúdo, neste projeto
será usado o modelo de _card_ do Bootstrap, assim como alguns cards também serão personalizados através do arquivo
_card.css_. Os componentes de _cards_ também poderão ter _types_ para receber os dados necessários como pode ser visto
no exemplo abaixo.

```
export function CvCard({ cv }: CvProps) {

    return (
        <>
            <Link to={`/cv/${cv.id}`} className="text-decoration-none">
                <div className="card-md-container shadow-purple">
                    <nav className="card-md-title">
                        <h3>{cv.name}</h3>
                        <img src={cv.image} alt="cv-image" />
                    </nav>                    
                    <p className="card-md-content">{cv.jobTitle}</p>
                    <ul className="card-md-list">
                        <li className="card-md-item "><i className="fa fa-phone" />
                            <p className="card-md-content">{cv.phone}</p>
                        </li>
                        <li className="card-md-item "><i className="fa fa-envelope" />
                            <p className="card-md-content">{cv.email}</p>
                        </li>
                        <li className="card-md-item"><i className="fa fa-map-marker" />
                            <p className="card-md-content">{cv.location}</p>
                        </li>
                    </ul>
                </div>
            </Link>
        </>
    );
}
```

<br/>

- #### [Form](https://github.com/Henri-BS/gerenciador-curriculo/blob/main/frontend/src/components/forms)

Para a implementação dos formulários, deverá ser acrescentada as configurações da biblioteca Axios no componente _form_,
na função do componente será preciso cria uma _Arrow Function_ chamada `handleSubmit` que será responsável por criar um
evento de submissão no formulário, dentro desta função deverá ser incluso constantes referente a cada atributo contido
na _type_ que será referenciada no formulário, além disso, também deve haver uma _const_ do tipo AxiosRequestConfig que
irá conter as propriedades necessárias para uma requisição sendo elas: **baseUrl** que terá a url configurada no
arquivo _requests.ts_, **method** que definirá o método HTTP usado, **url** que será o caminho da função mapeada na
camada _Controller_ e **data** que irá corresponder aos dados presentes na _request_. E por fim um será feita uma
chamada do método _axios_ para receber as configurações definidas anteriormente, dentro deste método é possível inserir
uma constante para navegação de páginas da biblioteca React Routes como pode ser visto neste exemplo de um formulário
para a adição de um novo currículo.

```
 export function CvAddForm() {
    const navigate = useNavigate();
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        const name = (event.target as any).name.value;
        const jobTitle = (event.target as any).jobTitle.value;

        const config: AxiosRequestConfig = {
            baseURL: BASE_URL,
            method: "POST",
            url: "/cv/save",
            data: {
                name: name,
                jobTitle: jobTitle
            }
        };
        axios(config).then(response => {
            navigate("/");
        })
    }
     return (
        <form className=" form-container m-0 row" onSubmit={handleSubmit}>

            <div className="form-group col-6">
                <label htmlFor="name">Nome Completo: </label>
                <input type="text" className="form-control" id="name" />
            </div>

            <div className="form-group col-6">
                    <label htmlFor="jobTitle">Cargo: </label>
                    <input type="text" className="form-control" id="jobTitle"/>
                </div>

            <div className="modal-footer">
                <button type="button" className="text-close" data-bs-dismiss="modal">cancelar</button>
                <button type="submit" className="btn btn-success">Adicionar</button>
            </div>
        </form>
    );
 }
```
<br/>

- #### [Pagination](https://github.com/Henri-BS/gerenciador-curriculo/blob/main/frontend/src/components/shared/Pagination.tsx)

O componente de paginação será criado na pasta de componentes _shared_ com o nome de _pagination.tsx_ e este componente
será responsável pela criação das propriedades de paginação utilizando o Bootstrap. A função terá de receber uma _type_
um tipo que contenha no seu atributo _content_ as listas que serão paginadas e também terá um atributo de mudança entre
páginas, o _pagination_ será composto por um botão para a página anterior, um botão para a próxima e também irá mostrar
o número da atual como pode ser visto no código abaixo.

```
type PageProps = {
    page: Page;
    onPageChange: Function;
}
function Pagination({ page, onPageChange }: PageProps) {

    return (
        <nav>
            <ul className="pagination">
                <li className={`page-item ${page.first ? `disable` : ''}`}>
                    <button className="page-link" onClick={() => onPageChange(page.number - 1)} aria-label="Previous">
                        <span aria-hidden="true">&laquo;</span>
                    </button>
                </li>

                <li className={"page-item"}>
                    <span className="page-link no-hover">{page.number + 1} de {page.totalPages} </span>
                    </li>

                <li className={`page-item ${page.last ? `disabled` : ''}`}>
                    <button className="page-link" onClick={() => onPageChange(page.number + 1)} aria-label="Next">
                        <span aria-hidden="true">&raquo;</span>
                    </button>
                </li>
            </ul>
        </nav>
    );
}
export default Pagination;
```

<br/>

### Páginas e Rotas

- #### [List](https://github.com/Henri-BS/gerenciador-curriculo/blob/main/frontend/src/pages)

Para a criação de uma lista paginada com um mecanismo de busca deverá ser feita a inclusão três constantes com o `useState`, a primeira irá representar o número das páginas e a segunda constante representará o texto do parâmetro de busca e a terceira será dedicada a _type_ da lista. Também deverá ser criado um `useEffect` para permitir que o componente execute os efeitos necessários para a lista e para isso será necessário incluir um método `axios.get().then()` que receberá a `BASE_URL` sucedida da url correspondente a função estabelecida na camada de _Controller_, também deverão ser adicionados os parâmetros `pageNumber` e `value`, também será criada uma _const_ chamada `handlePageChange` para definir as mudanças da página. No `return()` da função haverá a inclusão do botão para
adicionar um novo elemento na lista, o componente com os botões de paginação, o mecanismo de busca, a lista paginada e o _modal_ do Bootstrap referente a adição de um novo conteúdo.

```
function CvList() {
    const [value, setValue] = useState("");
    const [pageNumber, setPageNumber] = useState(0);
    const handlePageChange = (newPageNumber: number) => {
        setPageNumber(newPageNumber);
    }

    const [cvPage, setCvPage] = useState<CvPage>({
        content: [],
        number: 0
    });
    useEffect(() => {
        axios.get(`${BASE_URL}/cv/page?page=${pageNumber}&name=${value}&size=12`)
            .then((response) => {
                setCvPage(response.data);
            });
    }, [pageNumber, value]);

    return (
        <> 
        <div className="container">
                <nav className="navbar row m-0">
                    <div className="col-12 col-md-4 col-xl-4 mb-2" >
                        <button data-bs-target="#addCvModal" data-bs-toggle="modal" className="option-link"><i className="fa fa-plus" /> Novo Currículo</button>
                    </div>
                    <div className="col-12 col-md-4 col-xl-3 mt-2" >
                        <Pagination page={cvPage} onPageChange={handlePageChange} />
                    </div>
                    <div className="col-12 col-md-4 col-xl-3 mb-2" >
                        <div className="form-group">
                            <input
                                type="text"
                                id="value"
                                value={value}
                                onChange={(e) => setValue(e.target.value)}
                                className="form-control"
                                placeholder="buscar currículos..."
                            />
                        </div>
                    </div>
                </nav >
        
                <div className="row">
                    {cvPage.content?.filter((x) =>
                        x.name.toUpperCase().includes(value.toLocaleUpperCase()))
                        .map(x => (
                            <div key={x.id} className="col-12 col-md-6 col-xl-4 mb-3">
                                <CvCard cv={x} />
                            </div>
                        ))}
                </div>
            </div >
            
            <div className="modal fade" id="addCvModal" role={"dialog"}>
                <div className="modal-dialog" role={"document"}>
                    <div className="modal-content">
                        <div className="modal-header">
                            <label className="modal-title">Adicionar um novo currículo</label>
                            <button className="close" data-bs-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true"><i className="fa fa-times" /></span>
                            </button>
                        </div>
                        <div className="modal-body"><CvAddForm /></div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default CvList;
```

<br/>

- #### [Profile](https://github.com/Henri-BS/gerenciador-curriculo/blob/main/frontend/src/pages/CvProfile.tsx)

O componente Profile irá agregar outros componentes para criar um perfil específico, os componentes também irão possuir um parâmetro de uma constante com o `useParams` do React Routes para indicar o _id_ referente ao objeto do componente como visto a seguir no código do perfil de um currículo.

```
export function CvProfile() {
    const params = useParams();

    return (
        <>
            <div className="container">
                <CvProfileCard id={`${params.cvId}`} />
                <EducationListByCv id={`${params.cvId}`} />
                <ExperienceListByCv id={`${params.cvId}`} />
                <SectionListByCv id={`${params.cvId}`} />
            </div>
        </>
    );
}
```

<br/>

- #### [Routes](https://github.com/Henri-BS/gerenciador-curriculo/blob/main/frontend/src/routes/PageRoutes.tsx)

A interação entre as páginas poderá ser feita através das configurações com o React Routes presentes no arquivo _
PageRoutes.tsx_, as _tags_ `<BrowserRoutes>` e `<Routes>` irão agregar as rotas e cada uma estará contida na 
_tag_ `<Route>` do React Routes. As _tags_ possuem o atributo `path` para adicionar a url e o atributo `element` que
conterá o componente. Também é possível ter uma sub-rota interna com um _path_ relacionado a um _id_.

```
function PageRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<CvList />} />
                <Route path="/cv" >
                    <Route path=":cvId" element={<CvProfile />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}
export default PageRoutes;
```

<br/>

## Resultados
Os resultados das funcionalidades do projeto poderão ser vistos logo abaixo

**Página inicial**

![Home](https://github.com/Henri-BS/gerenciador-curriculo/blob/main/images/home.jpeg)

**Adição de um novo currículo**

![Home](https://github.com/Henri-BS/gerenciador-curriculo/blob/main/images/add-cv.png)


**Perfil de um novo currículo**

![Profile Void](https://github.com/Henri-BS/gerenciador-curriculo/blob/main/images/profile-void.jpeg)


**Adição de uma nova experiência de trabalho e de uma nova formação acadêmica em um currículo**

![Add Experience](https://github.com/Henri-BS/gerenciador-curriculo/blob/main/images/add-experience.png)
![Add Education](https://github.com/Henri-BS/gerenciador-curriculo/blob/main/images/add-education.png)

**Adição de uma nova seção em um currículo**

![Add Section](https://github.com/Henri-BS/gerenciador-curriculo/blob/main/images/add-section.png)
![New Section](https://github.com/Henri-BS/gerenciador-curriculo/blob/main/images/new-section.png)

**Adição de um novo item em uma seção**
![Add Item](https://github.com/Henri-BS/gerenciador-curriculo/blob/main/images/add-item.png)

**Página do perfil currículo contendo items em todas as seções**

![Profile Full](https://github.com/Henri-BS/gerenciador-curriculo/blob/main/images/profile-full.jpeg)

