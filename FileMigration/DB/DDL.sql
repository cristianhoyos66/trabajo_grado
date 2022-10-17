create table if not exists attention_places(
    id bigint,
    name varchar(255) not null,
    description varchar(255),
    created_at timestamp default current_timestamp,
    updated_at timestamp default current_timestamp
);

create table if not exists areas(
    id bigint,
    name varchar(255) not null,
    description varchar(255),
    created_at timestamp default current_timestamp,
    updated_at timestamp default current_timestamp
);

create table if not exists subject_matters(
    id bigint,
    name varchar(255) not null,
    description varchar(255),
    created_at timestamp default current_timestamp,
    updated_at timestamp default current_timestamp
);


create table if not exists origins(
    id bigint,
    name varchar(255) not null,
    description varchar(255),
    created_at timestamp default current_timestamp,
    updated_at timestamp default current_timestamp
);

create table if not exists capacities(
    id bigint,
    name varchar(255) not null,
    description varchar(255),
    created_at timestamp default current_timestamp,
    updated_at timestamp default current_timestamp
);

create table if not exists legal_officer_options(
    id bigint,
    name varchar(255) not null,
    description varchar(255),
    created_at timestamp default current_timestamp,
    updated_at timestamp default current_timestamp
);

create table if not exists attention_results(
    id bigint,
    name varchar(255) not null,
    description varchar(255),
    created_at timestamp default current_timestamp,
    updated_at timestamp default current_timestamp
);


create table if not exists efficacy_options(
    id bigint,
    name varchar(255) not null,
    description varchar(255),
    created_at timestamp default current_timestamp,
    updated_at timestamp default current_timestamp
);

create table if not exists audience_results(
    id bigint,
    name varchar(255) not null,
    description varchar(255),
    created_at timestamp default current_timestamp,
    updated_at timestamp default current_timestamp
);

create table if not exists id_types(
    id bigint,
    name varchar(255) not null,
    description varchar(255),
    created_at timestamp default current_timestamp,
    updated_at timestamp default current_timestamp
);

create table if not exists people(
    id bigint,
    number_id varchar(255),
    type_id bigint,
    name varchar(255) not null,
    lastname1 varchar(255),
    lastname2 varchar(255),
    tel varchar(255),
    email varchar(255),
    birthdate date,
    student_id_to_show bigint,
    created_at timestamp default current_timestamp,
    updated_at timestamp default current_timestamp
);

create table if not exists roles(
    id bigint,
    name varchar(255) not null,
    description varchar(255),
    created_at timestamp default current_timestamp,
    updated_at timestamp default current_timestamp
);

create table if not exists users(
    id bigint,
    username varchar(255) not null,
    pwd varchar(255) not null,
    person_id bigint not null,
    role_id bigint not null,
    created_at timestamp default current_timestamp,
    updated_at timestamp default current_timestamp
);

create table if not exists permissions(
    id bigint,
    url varchar(255),
    resource varchar(255),
    action varchar(255),
    created_at timestamp default current_timestamp,
    updated_at timestamp default current_timestamp
);

create table if not exists permission_roles(
    role_id bigint,
    permission_id bigint,
    created_at timestamp default current_timestamp,
    updated_at timestamp default current_timestamp
);

create table if not exists case_statuses(
    id bigint,
    name varchar(255) not null,
    description varchar(255),
    created_at timestamp default current_timestamp,
    updated_at timestamp default current_timestamp
);

create table if not exists graphic_support_options(
    id bigint,
    name varchar(255),
    description varchar(255),
    created_at timestamp default current_timestamp,
    updated_at timestamp default current_timestamp
);

create table if not exists cases(
    id bigint,
    socioeconomic_level varchar(1),
    year varchar(255),
    internal_number varchar(255),
    attention_consultant_date date,
    reception_date date ,
    plaintiff_id bigint,
    defendant_id bigint,
    area_id bigint,
    matter_id bigint,
    origin_id bigint,
    received_case boolean,
    student_recepcionist_id bigint,
    student_recepcionist_capacity_id bigint,
    attention_place_id bigint,
    student_assignee_id bigint,
    student_assignee_capacity_id bigint,
    appointment_date_by_user boolean,
    individual_participation_id bigint,
    advisor_id bigint,
    third_party_representation_id bigint,
    audience_date_time datetime,
    audience_result_id bigint,
    case_status_id bigint,
    receiver_student_id bigint,
    student_peaceful_certificate boolean,
    graphic_support_id bigint,
    created_at timestamp default current_timestamp,
    updated_at timestamp default current_timestamp
);

create table if not exists file_types(
    id bigint,
    name varchar(255),
    description varchar(255),
    created_at timestamp default current_timestamp,
    updated_at timestamp default current_timestamp
);

create table if not exists files(
    id bigint,
    url varchar(255) not null,
    file_type_id bigint,
    case_id bigint not null,
    created_at timestamp default current_timestamp,
    updated_at timestamp default current_timestamp
);