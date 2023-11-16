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
    fone varchar(245)
);

create table H_Credencia_Plano(
	ID_Hospital int not null,
    NomePlano varchar(245) not null,
    foreign key (ID_Hospital) references hospital(id),
    foreign key (NomePlano) references plano_saude(NomePlano),
    primary key (ID_Hospital, NomePlano)
);

create table paciente(
	CPF varchar(245) not null primary key,
    nome varchar(245),
    Plano_saude varchar(245),
    foreign key (Plano_saude) references plano_saude(NomePlano)
);

create table medico(
	CRM int not null primary key,
    nome varchar(245) not null,
    Especialidade varchar(245) not null
);

create table MedicoAtendePaciente(
	CRM int not null,
    Cpf_paciente varchar(245) not null,
    data_atendimento date,
    horo_atendimento time,
    primary key(CRM, Cpf_paciente),
    foreign key (CRM) references medico(CRM),
    foreign key (Cpf_paciente) references paciente(cpf)
);

insert into enfermeira (cre, nome) value (1, 'Enfermeira01');
insert into enfermeira value (2, 'Enfermeira02', 1);

insert into ala_hospital values (1,1),(2,2);

insert into hospital values (1,"hospitalteste");
insert into hospital values (2,"hospitalPublico");

insert into plano_saude values ("Plano de saúde 01", "66 3419-0000"), ("plano 2", "65 9.9999-9999");

insert into h_credencia_plano values (1,"Plano de saúde 01"), (2,"plano 2");

insert into paciente values ("00000000000", "Paciente01", "Plano de saúde 01"),("11111111111", "paciente 02", "plano 2"); 

insert into medico values (001, "Medico01", "Clinico geral"),(002, "Medico02", "Ortopedista");

insert into MedicoAtendePaciente values (1, "00000000000", "2023-11-13", "00:000:01"), (2, "11111111111", "2023-12-24", "00:000:02");




alter table paciente modify column cpf varchar(245);
alter table MedicoAtendePaciente modify column Cpf_paciente varchar(245);
select * from MedicoAtendePaciente;
drop table paciente;
