create schema Udemy;

/* unsigned e para aceitar apenas numeros positivos, bloqueando incersao de numeros negativos
unique key e para os dados em uma coluna serem unicos, mesmo nao sendo uma primary key */

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

/* Comando insert into para inserir informacao dentro de uma tabela
podendo entre () o nome das colunas que vai ser inserido, deixando inserir menos argumentos e em outra ordem
ou omitir e ter que informar todos os campo e na ordem certa
Values logo em seguida para informar os valores que serao inseridos  */

insert into estados (nome, sigla, regiao, populacao)
values ('acre', 'AC', 'norte', 1.83);

insert into estados 
	(nome, sigla, regiao, populacao)
values ('Alagoas', 'AL', 'nordeste', 3.86),
		('Campo Grande', 'MG', 'centro-oeste', 5),
        ('Porto Seguro', 'BH', 'sul', 1.56),
		('Cuiabá', 'MT', 'centro-oeste', 3.54);

/* select * from nomeDaTabela para exibir toda a tabela 
pode exibir apenas algumas colunas ao trocar o * pelo nome das colunas que quer exibir 
pode usar o as para mudar o nome da coluna que vai exibir */

select * from estados;
select nome, sigla from estados;
select Sigla, nome as 'Nome do Estado' from estados;

/* Filtrar os dados com where*/

select Sigla, nome as 'Nome do Estado' from estados
where regiao = 'centro-oeste';

select Sigla, nome as 'Nome do Estado', populacao as 'População em milhões' from estados
where populacao >= 3;


/* Ordenar os resultados 
order by para ordem crescente
order by + desc no final para ordem decrescente*/

select Sigla, nome as 'Nome do Estado', populacao as 'População em milhões' from estados
where populacao >= 3
order by populacao;   

select Sigla, nome as 'Nome do Estado', populacao as 'População em milhões' from estados
where populacao >= 3
order by populacao desc;