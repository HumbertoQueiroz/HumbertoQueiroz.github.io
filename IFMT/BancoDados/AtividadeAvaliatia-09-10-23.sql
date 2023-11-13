create schema Hospital;

create table enfermeira(
    CRE int not null primary key,
    nome varchar(245) not null,
    CRE_Chefe int,
	foreign key (CRE_Chefe) references enfermeira(CRE)
);

create table Ala_Hospital(
	id int auto_increment not null primary key,
	CRE_Responsavel_Ala int not null,
    foreign key (CRE_Responsavel_Ala) references enfermeira(CRE)
);

create table hospital(
	id int auto_increment not null primary key,
    nome varchar(245)
);

create table Plano_saude(
	NomePlano varchar(245) not null primary key,
    fone int
);

create table H_Credencia_Plano(
	ID_Hospital int not null,
    NomePlano varchar(245) not null,
    foreign key (ID_Hospital) references hospital(id),
    foreign key (NomePlano) references plano_saude(NomePlano),
    primary key (ID_Hospital, NomePlano)
);

create table paciente(
	CPF int(11) not null primary key,
    nome varchar(245),
    Plano_saude varchar(245),
    foreign key (Plano_saude) references plano_saude(NomePlano)
);