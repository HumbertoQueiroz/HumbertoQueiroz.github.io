select * from estados;
select * from cidades;

-- Inserir dados
insert into cidades (nome, estado_id, area) values ('Campinas', 3, 795);
insert into cidades (nome, estado_id, area)
values ('Mato Grosso', 3, 795);

-- Inserindo com Chave estrangeira dinamica, neste caso id da tabela estados
insert into cidades 
(nome, area, estado_id)
values (
	'Campo Verde', 
    5465, 
	(select id from estados where sigla ='MT')
);

update cidades set nome = 'Mato Grosso', estado_id=(select id from estados where sigla='MT')
where nome = 'Mato Grosso';

insert into cidades
	(nome, area, estado_id)
values (
	'Juazeiro do Norte',
    54.4,
    (select id from estados where sigla ='Ac')
);

/* Consulta em mais de uma tablea
Usar apelido para tabela, usar o apelida para associar as chaves relacionais
neste caso o id (primary key) da tabela estado e o estado_id (foreign Key) da tabela cidades */

select *from estados est, cidades cid 
where est.id=cid.estado_id;

-- Consulta mais formatada com resultado da consulta com duas tabelas relacionadas
select est.sigla, est.nome as 'Nome Capital', cid.nome as 'Nome Cidade', est.regiao from estados est, cidades cid 
where est.id=cid.estado_id;

-- Consultando duas tabelas com inner join
select 
	est.sigla,
    est.nome as 'Nome Capital',
    cid.nome as 'Nome Cidade',
    est.regiao as Regiao
from estados est
inner join cidades cid on est.id = cid.estado_id;

-- consulta com partes do texto, usa like e _ (para qualquer caracter), o caracter que quero e % para definir que o tamanho pode ser maior que os digitados.

select * from cidades where nome like'__t%';