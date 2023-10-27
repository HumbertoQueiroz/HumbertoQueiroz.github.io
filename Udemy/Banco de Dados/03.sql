/* if not exists é usado para indicar que deve criar caso não exista, 
se existir simplismente não cria e não retorna erro.*/

create table if not exists cidades(
	id int	unsigned not null auto_increment,
	nome varchar(255) not null,
	estado_id int unsigned not null,
    area decimal(10,2),
    primary key(id),
    foreign key (estado_id) references estados (id)
);

/* criando tabela com primary id na mesma linha*/

create table if not exists teste(
	id int	unsigned not null auto_increment primary key,
    nome varchar(45) not null
);


/* apagar tabela se existir, também evita dar erro se a tabela não existir*/

-- vai dar erro se executar duas vezes
drop table teste;

-- não vai dar erro se executar duas vezes
drop table if exists teste;
