INSERT INTO tb_cv (name, phone, email, location) VALUES ('Nicolas', '(99)91234-5678', 'nicolas@gmail.com', 'Campinas - SP');
INSERT INTO tb_education (cv_id, course, institution, status, academic_degree, start_date, end_date) VALUES (1, 'ADS', 'Universidade X', 'cursando', 'graduação', '2023-01-01', '2026-12-31');
INSERT INTO tb_experience (cv_id, job_title, company, working_day, start_date) VALUES (1, 'Desenvolvedor Java Jr', 'Ampli', 'Integral', '2024-01-01');
INSERT INTO tb_section (cv_id, title) VALUES (1, 'Skills');
INSERT INTO tb_item (section_id, name, description, start_date) VALUES (1, 'Linguagem Java', 'Conhecimento em Java voltado ao desenvolvimento web para back-end', '2021-06-01');