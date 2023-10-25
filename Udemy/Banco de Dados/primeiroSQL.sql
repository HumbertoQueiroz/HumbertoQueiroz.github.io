--Criando tabela
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