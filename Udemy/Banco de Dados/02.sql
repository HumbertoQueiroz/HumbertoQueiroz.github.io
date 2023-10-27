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

select 
	Sigla, 
    nome as 'Nome do Estado', 
    populacao as 'População em milhões' 
from estados
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


/* Update altera o dado, primeiro informa o campo e novo valor (pode ser mais de um)0,
 depois informa o where para setar qual o dado vai ser alterado 
 
        ----  CUIDADO!   ----
 
Não fazer updade sem where pois isso altera todas as linhas */

update estados
set nome='Maranhão'
where sigla='MG';

update estados set sigla='MA', regiao = 'Nordeste'
where sigla='MA';

select * from estados;

/*  ---- Apelido para tabelas ----
 Para isso primeiro na frente do nome da tabela escreva o apelido, depois use o apelido.nomeDaColuna*/

select 
	est.nome, 
	est.sigla, 
    est.populacao 
from estados est 
where sigla='mt';

/* Pode informar manualmente o id mesmo sendo auto_increment,
mas isso gera salto nos ids, o proximo sera o valor mais alto +1, como abaixo*/

insert into estados (id, sigla, nome, regiao, populacao)
values (100, 'NV', 'Teste1', 'sul', 15);
insert into estados ( sigla, nome, regiao, populacao)
values ('MM', 'Teste3', 'sul', 3);
select *  from estados;



/*  ---- Delete ---- 

	----  CUIDADO!   ----
 
Não fazer delete sem where pois isso altera todas as linhas 
*/

delete from estados
where sigla = 'NV';

delete from estados where populacao <=3;


/* Consulta com agregação */

/* sum() para soma e avg para media*/

/*Todos os dados da tabela*/
select sum(populacao) as Total from estados;

select avg(populacao) as Total
from estados;

/*Com uma caracteristica de agrupamento, por região neste caso */

select regiao as 'Região', 
	sum(populacao) as Total
from estados
group by regiao;

select regiao as 'Região', 
	avg(populacao) as Total
from estados
group by regiao;

