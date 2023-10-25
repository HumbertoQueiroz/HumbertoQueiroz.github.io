create schema Udemy;
create table estados (
    id int unsigned not null auto_increment,
    nome varchar(45) not null,
    sigla varchar(2) not null,
    regiao enum('norte','nordeste', 'centro-oeste', 'sudeste', 'sul') not null,
    populacao decimal(5,2),
    primary key (id),
    unique key(nome),
    unique key(sigla)
);


insert into estados (nome, sigla, regiao, populacao)
values ('acre', 'AC', 'norte', 1.83);

insert into estados 
	(nome, sigla, regiao, populacao)
values ('Alagoas', 'AL', 'nordeste', 3.86),
		('Campo Grande', 'MG', 'centro-oeste', 5),
        ('Porto Seguro', 'BH', 'sul', 1.56),
		('Cuiabá', 'MT', 'centro-oeste', 3.54),
        ('teste', 'ES', 'centro-oeste');


select * from estados;

select nome, sigla from estados;