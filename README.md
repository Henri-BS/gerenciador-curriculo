# Gerenciador de Currículo

> Programação Web para Back-end

##  Sumário

- [Introdução](#introducao)
- [Ferramentas e Bibliotecas](#ferramentas-e-bibliotecas)
- [Criação e Configuração do Projeto](#criacao-e-configuracao-do-projeto)
  * [Spring Initializr](#spring-initializr)
  * [IntelliJ](#intellij)
  * [Estrutura do Backend](#estrutura-do-backend)
  * [ReactJs](#reactjs)
  * [Estrutura do Frontend](#estrutura-do-frontend)
- [Programação Backend](#programacao-backend)
  * [Classes e Interfaces](#classes-e-interfaces)
    - [SecurityConfig](#security-config)
    - [Entity](#entity)
    - [DTO](#dto)
    - [Repository](#repository)
    - [Sevice e ServiceImpl](#service-e-serviceimpl)
    - [Controller](#controller)
  * [Frunções e Procedimentos](#funcoes-e-procedimentos)
    - [FindAll](#findall)
    - [FindById](#findbyid)
    - [Save](#save)
    - [Update](#update)
    - [Delete](#delete)
    
## Introdução

Este projeto representa uma atividade complementar para a disciplina Programação Web para Backend do cusro de
pós-graduação em Desenvolvimento Web para Back-End. A atividade consiste na elaboração de um projeto web para o
geranciamento de currículos utilizando Java com a Spring Framework para a construção do Back-End, além disso também será
feita a integração com TypeScript e ReactJs para a criação do Front-End, o projeto também deverá incluir outros
conceitos, práticas e tecnologias que foram estudadas ao longo da disciplina. Ao final do desenvolvimento a aplicação
deverá ser capaz de receber dados de um banco de dados em memória para   
criar, alterar, deletar, listar e buscar por currículos e suas respectivas seções de informação.

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

Com o Java JDK já intalado e configurado nas variáveis de ambiente e com o intelliJ instalado, o arquivo backend poderá
ser aberto na IDE através do menu File > Open. Ao abrir o projeto será necessário indicar a versão do JDK que foi
instalada e que também foi adicionada nas propriedades, isso pode ser feito selecionando Run > Edit Configurations
conforme mostrado na figura.

![IntelliJ Run](https://github.com/Henri-BS/gerenciador-curriculo/blob/main/images/intellij-run.png)

### Estrutura do Backend
Alguns arquivos basicos serão necessários para o funcionamento do backend, o primeiro deles é o _aplication.properties_
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
seguintes camadas serão estabelecidas: entities, repositories, dto, controllers e services que contém 2 sub-camadas
chamadas interf e impl. Além disso será criada uma camada chamada config que conterá as configurações do Spring
Security. A figura abaixo apresenta o resultado final da estrutura de pastas do Back-end.

![Back-end Folders](https://github.com/Henri-BS/gerenciador-curriculo/blob/main/images/backend-folders.png)

### ReactJs

Para que a aplicação TypeScript seja executada no Front-end será preciso realizar o download
do [Node](https://nodejs.org/en), após o download é possível ver em um terminal a versão baixada através do comando
```node -v```, com isso já é possível fazer comandos em um terminal no diretório do projeto em uma pasta nomeada '
frontend' que será a aplicação React, o terminal usado será o [Git Bash](https://git-scm.com/download/win). A tabela a
seguir apresenta a sequência de comandos para criar o projeto React e para instalar as biblitecas do Front-end.

| Ação                                               | Comando                                              |
|----------------------------------------------------|------------------------------------------------------|
| Instalação do yarn                                 | npm install --global yarn                            |
| Cria projeto ReactJs com TypeScript                | yarn create react-app frontend --template typescript |
| Acessa a pasta frontend                              | cd frontend                                          |
| Adiciona react router para roteamento de página    | yarn add react-router-dom                            |
| Adiciona axios como biblioteca de requisições HTTP | yarn add axios                                       |
| Adiciona bootstrap como biblioteca de estilização  | yarn add bootstrap                                   |
| Adiciona moment como biblioteca de datas           | yarn add moment                                      |

### Estrutura do Frontend

Assim como foi feita a organização na pasta _backend_, o mesmo processo será feito na pasta _frontend_, na pasta
tsconfig.json será adicionada a propriedade ``"baseUrl": "./src"`` para definir a base da url para os _imports_, algumas
pastas serão inclusas como: assests, components, pages, utils, types, routes e entre outras; bem como alguns arquivos
serão adicionados, alterados ou deletados. A estrutura final da pasta _frontend_ pode ser vista na figura abaixo.

![Front-end Folders](https://github.com/Henri-BS/gerenciador-curriculo/blob/main/images/frontend-folders.png)


## Programação Backend

### Classes e Interfaces

O conjunto de classes e intefaces abordadas no projeto forma baseadas com padrão MVC em conjunto com o padrões
Repository e DTO resultando nos seguintes camadas: _Entity_, _Dto_, _Repository_, _Service_, _ServiceImpl_ e 
_Controller_ e também a classe de configurações de sergurança do Spring a _SecurityConfig_. Alguns exemplos destas classes e interfaces poderão ser vistos a seguir, o link para a repectiva pasta de cada camada estará no título do tópico.

- #### [SecurityConfig](https://github.com/Henri-BS/gerenciador-curriculo/tree/main/backend/src/main/java/com/altercode/gerenciadorcurriculo/config/SecurityConfig.java)

A implementação das propriedades do Spring Secutity será feita na classe SecurityConfig, está classe irá possuir dois
métodos importantes o `configure` para a proteção dos _endpoints_ com HTTP básico, bem como irá configurar o perfil
_test_ do H2 e também o método `corsConfigurationSource` para configurar o CORS padrão do Spring.

- #### [Entity](https://github.com/Henri-BS/gerenciador-curriculo/tree/main/backend/src/main/java/com/altercode/gerenciadorcurriculo/entities)

A classe do tipo Entidade(Entity) irá representar os dados que serão persistidos no bancdo de dados H2, a classe será
definida como entidade através da anotação `@Entity` e irá se correlacionar com uma tabela através da anotação `@Table`
onde será adicionado o atributo _name_ para indicar o nome da tabela. Além disso, os atributos da classe irão
representar as colunas da tabela e poderão conter a anotação `@Column` para personalizar as características do atributo,
támbem deverá haver um atributo específico chamado _id_ que será equivalente a chave primária no database e deverá
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
    
    //contructors
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

Os métodos diponibilizados no Spring Data JPA poderão ser facilmente utilizado através da interface _Repository_, essa
interface poderá ser definida como Repository ao receber a anotação `@Repository`, támbem será acrescentador a interface
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
métodos relacionados a lógica de négocios sejam declarados.

```
// Exemplo de declaração de uma interface ServiceImpl
public interface CvService {
}
```

<br/>
Já nas classes do tipo _ServiceImpl_ serão implementados os métodos das suas respectivas interfaces, também será
adicionado a anotação `@Service` para definir a classe como _Service_ e a será acresentado também a anotação `@Transacitional` para declarar a semântica de transação.

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

Por fim as classes `Controllers` irão reprentar o controlador da aplicação, possuindo as nuances de persistência e o
mapeamento de solicitações da Web, para isso será acrescentado a anotação `@RestContoller` para definir a classe como
controlador e a a notação `@RequestMapping` para mapear as solicitações. A classe também irá conter um atributo do tipo
interface `Service` com a anotação `@Autowired` esse atributo posibilitará a chamada dos métodos definidos na interface
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

A interface Repository poderá oferecer médotos para listagem com busca inclusa através da Jpa, neste projeto as os
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
irá chamar o médoto _findAll_ da interface _Repository_.

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
como argumento, um `ResponseEntity<>` poderá ser adiconado ao tipo do método para retornar o status como _OK_.

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
irá chamar o médoto _findById_ da interface Repository.

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
um `ResponseEntity<>` poderá ser adiconado ao tipo do método para retornar o status como _OK_.

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
poderá ser adiconado para indicar o _body_ e retornar o status como _CREATE_.

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
poderá ser adiconado para indicar o _body_ e retornar o status como _OK_.

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

Oprocedimento _delete_ em uma classe _ServiceImpl será implementado de sua interface _Service_ através da
anotação `@Override` e terá como argumento o método _deleteById_ da interface _Repository_.

```
// Exemplo do procedimento delete na classe ServiceImpl
    @Override
    public void deleteCv(Long id) {
        this.cvRepository.deleteById(id);
    }
```

A função _delete_ em uma classe _Controller_ deverá conter a anotação `@DeleteMapping` com o atributo _name_ para mapear
a solicitação como _DELETE_ e támbem a anotação `@ResponseStatus` que irá mostrar o status da requisição, no
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

