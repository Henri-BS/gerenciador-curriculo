INSERT INTO tb_cv (name, image, phone, email, location) VALUES ('Nicolas Jones', 'https://cdn4.iconfinder.com/data/icons/diversity-v2-0-volume-05/64/fitness-trainer-asian-male-512.png', '(91)91634-5358', 'nicolas@gmail.com', 'Acará - PA');
INSERT INTO tb_cv (name, image, phone, email, location) VALUES ('Robert Wood', 'https://cdn4.iconfinder.com/data/icons/diversity-v2-0-volume-05/64/eye-glasses-asian-male-512.png', '(66)94098-9244', 'robert@gmail.com', 'Brasnorte - MT');
INSERT INTO tb_cv (name, image, phone, email, location) VALUES ('Kenya Cervantes', 'https://cdn4.iconfinder.com/data/icons/diversity-v2-0-volume-02/64/black-woman-hair-style-2-512.png', '(11)95729-3432', 'kenya@gmail.com', 'Diadema - SP');
INSERT INTO tb_cv (name, image, phone, email, location) VALUES ('Fernando Damasceno', 'https://cdn4.iconfinder.com/data/icons/diversity-v2-0-volume-02/64/black-dreadlock-male-tee-shirt-512.png', '(92)93119-0539', 'fernando@gmail.com', 'Anori - AM');
INSERT INTO tb_cv (name, image, phone, email, location) VALUES ('Lucas Alvarez', 'https://cdn0.iconfinder.com/data/icons/diversity-v2-0-volume-08/64/hipsters-white-male-512.png', '(71)93274-7429', 'lucas@gmail.com', 'Floresta Azul - BA');
INSERT INTO tb_cv (name, image, phone, email, location) VALUES ('Mariana Carvalho', 'https://cdn4.iconfinder.com/data/icons/diversity-v2-0-volume-06/64/tank-toop-white-female-512.png', '(84)90033-8732', 'mariana@gmail.com', 'Acari - RN');
INSERT INTO tb_cv (name, image, phone, email, location) VALUES ('Rosângela Alves', 'https://cdn0.iconfinder.com/data/icons/diversity-v2-0-volume-08/64/woman-round-glasses-hair-bun-black-512.png', '(11)91462-9348', 'rosangela@gmail.com', 'Guarulhos - SP');
INSERT INTO tb_cv (name, image, phone, email, location) VALUES ('Amanda Reiter', 'https://cdn4.iconfinder.com/data/icons/diversity-v2-0-volume-03/64/blacksmith-white-female-512.png', '(53)91467-9325', 'amanda@gmail.com', 'Porto Alegre - RS');
INSERT INTO tb_cv (name, image, phone, email, location) VALUES ('Vanessa Winter', 'https://cdn4.iconfinder.com/data/icons/diversity-v2-0-volume-03/64/business-casual-white-female-512.png', '(85)91754-5742', 'vanessa@gmail.com', 'Tarrafas - CE');
INSERT INTO tb_cv (name, image, phone, email, location) VALUES ('Ramón Castro', 'https://cdn4.iconfinder.com/data/icons/diversity-v2-0-volume-03/64/blacksmith-asian-male-512.png', '(98)97310-7324', 'ramon@gmail.com', 'Campos Lindos - TO');
INSERT INTO tb_cv (name, image, phone, email, location) VALUES ('Diana Diamond', 'https://cdn4.iconfinder.com/data/icons/diversity-v2-0-volume-05/64/wavy-hair-woman-african-512.png', '(99)91429-4012', 'diana@gmail.com', 'São Luís - MA');
INSERT INTO tb_cv (name, image, phone, email, location) VALUES ('Olivia Olsen', 'https://cdn4.iconfinder.com/data/icons/diversity-v2-0-volume-05/64/flower-girl-6-512.png', '(11)98734-3269', 'olivia@gmail.com', 'Hortolândia - SP');
INSERT INTO tb_cv (name, image, phone, email, location) VALUES ('Isla Ramos', 'https://cdn4.iconfinder.com/data/icons/diversity-v2-0-volume-05/64/flower-girl-6-512.png', '(99)96228-5355', 'isla@gmail.com', 'Açailândia - MA');
INSERT INTO tb_cv (name, image, phone, email, location) VALUES ('Benjamin Barbosa', 'https://cdn0.iconfinder.com/data/icons/diversity-v2-0-volume-08/64/sweater-man-black-512.png', '(83)91645-9348', 'beijamim@gmail.com', 'Campina Grande - PB');
INSERT INTO tb_cv (name, phone, email, location) VALUES ('Ethan Alves', '(11)98711-7663', 'ethan@gmail.com', 'Campinas - SP');
INSERT INTO tb_cv (name, phone, email, location) VALUES ('Valentin Fernandes', '(53)91656-4684', 'valentin@gmail.com', ' Linha Nova - RS');
INSERT INTO tb_cv (name, phone, email, location) VALUES ('Arthur Borges', '(91)91234-5678', 'arthur@gmail.com', 'Viseu - PA ');
INSERT INTO tb_cv (name, phone, email, location) VALUES ('Thomas Ribeiro', '(66)98329-9452', 'thomas@gmail.com', 'Porto Estrela - MT');
INSERT INTO tb_cv (name, phone, email, location) VALUES ('Alessio Ferreira', '(85)90822-7426', 'alessio@gmail.com', 'Madalena - CE');
INSERT INTO tb_cv (name, phone, email, location) VALUES ('Beatrice Scott', '(98)90873-8358', 'beatrice@gmail.com', 'Nova Olinda - TO');
INSERT INTO tb_cv (name, phone, email, location) VALUES ('Eleonora Montanari', '(85)91873-5743', 'eleonora@gmail.com', 'Elisiário - CE');
INSERT INTO tb_cv (name, phone, email, location) VALUES ('Isabel Silvestri', '(53)91432-3563', 'isabel@gmail.com', 'Gramado - RS');

INSERT INTO tb_education (cv_id, course, institution, status, academic_degree, start_date, end_date) VALUES (1, 'Análise e Desenvolvimento de Sistemas', 'Universidade de Ciências e Tecnologias', 'Concluído', 'Graduação', '2017-01-01', '2020-12-31');
INSERT INTO tb_education (cv_id, course, institution, status, academic_degree, start_date, end_date) VALUES (1, 'Engenharia de Software', 'Centro de Estudos Superiores', 'Concluído', 'Especialização', '2021-07-01', '2022-07-31');
INSERT INTO tb_education (cv_id, course, institution, status, academic_degree, start_date, end_date) VALUES (1, 'Desenvolvimento Web', 'Faculdade de Tecnologia', 'Cursando', 'Especialização', '2023-07-01', '2024-03-31');


INSERT INTO tb_experience (cv_id, job_title, company, working_day, start_date) VALUES (1, 'Desenvolvedor Java Jr', 'Ampli', 'Integral', '2024-01-01');
INSERT INTO tb_section (cv_id, title) VALUES (1, 'Habilidades');
INSERT INTO tb_item (section_id, name, description, start_date) VALUES (1, 'Linguagem Java', 'Conhecimento em Java voltado ao desenvolvimento web para back-end', '2021-06-01');