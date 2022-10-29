-- attention_places
alter table attention_places add constraint pk_attention_places primary key (id);
alter table attention_places modify id bigint auto_increment;
alter table attention_places add constraint uk_name_attention_places unique (name);

-- areas
alter table areas add constraint pk_areas primary key (id);
alter table areas modify id bigint auto_increment;
alter table areas add constraint uk_name_areas unique (name);

-- subject_matters
alter table subject_matters add constraint pk_subject_matters primary key (id);
alter table subject_matters modify id bigint auto_increment;
alter table subject_matters add constraint uk_name_subject_matters unique (name);

-- origins
alter table origins add constraint pk_origins primary key (id);
alter table origins modify id bigint auto_increment;
alter table origins add constraint uk_name_origins unique (name);

-- capacities
alter table capacities add constraint pk_capacities primary key (id);
alter table capacities modify id bigint auto_increment;
alter table capacities add constraint uk_name_capacities unique (name);

-- legal_officer_options
alter table legal_officer_options add constraint pk_legal_officer_options primary key (id);
alter table legal_officer_options modify id bigint auto_increment;
alter table legal_officer_options add constraint uk_name_legal_officer_options unique (name);

-- attention_results
alter table attention_results add constraint pk_attention_results primary key (id);
alter table attention_results modify id bigint auto_increment;
alter table attention_results add constraint uk_name_attention_results unique (name);

-- efficacy_options
alter table efficacy_options add constraint pk_efficacy_options primary key (id);
alter table efficacy_options modify id bigint auto_increment;
alter table efficacy_options add constraint uk_name_efficacy_options unique (name);

-- audience_results
alter table audience_results add constraint pk_audience_results primary key (id);
alter table audience_results modify id bigint auto_increment;
alter table audience_results add constraint uk_name_audience_results unique (name);

-- id_types
alter table id_types add constraint pk_id_types primary key (id);
alter table id_types modify id bigint auto_increment;
alter table id_types add constraint uk_name_id_types unique (name);

-- people
alter table people add constraint pk_people primary key (id);
alter table people modify id bigint auto_increment;
alter table people add constraint uk_email_people unique (email);
alter table people add constraint fk_type_id_people_id_types foreign key (type_id) references id_types (id);
alter table people add constraint fk_student_to_show_id_people_id foreign key (student_id_to_show) references people (id);

-- roles
alter table roles add constraint pk_roles primary key (id);
alter table roles modify id bigint auto_increment;
alter table roles add constraint uk_name_roles unique (name);

-- users
alter table users add constraint pk_users primary key (id);
alter table users modify id bigint auto_increment;
alter table users add constraint uk_username_users unique (username);
alter table users add constraint uk_person_id_users unique (person_id);
alter table users add constraint fk_person_id_users_people foreign key (person_id) references people (id);
alter table users add constraint fk_role_id_users_roles foreign key (role_id) references roles (id);

-- permissions
alter table permissions add constraint pk_permissions primary key (id);
alter table permissions modify id bigint auto_increment;
alter table permissions add constraint uk_url_permissions unique (url);

-- permission_roles
alter table permission_roles add constraint pk_permission_roles primary key (role_id, permission_id);
alter table permission_roles add constraint fk_role_id_permission_roles_roles foreign key (role_id) references roles (id);
alter table permission_roles add constraint fk_permission_id_permission_roles_permissions foreign key (permission_id) references permissions (id);

-- case_statuses
alter table case_statuses add constraint pk_case_statuses primary key (id);
alter table case_statuses modify id bigint auto_increment;
alter table case_statuses add constraint uk_name_case_statuses unique (name);

-- graphic_support_options
alter table graphic_support_options add constraint pk_graphic_support_options primary key (id);
alter table graphic_support_options modify id bigint auto_increment;
alter table graphic_support_options add constraint uk_name_graphic_support_options unique (name);

-- cases
alter table cases add constraint pk_cases primary key (id);
alter table cases modify id bigint auto_increment;
alter table cases add constraint fk_plaintiff_id_cases_people foreign key (plaintiff_id) references people (id);
alter table cases add constraint fk_defendant_id_cases_people foreign key (defendant_id) references people (id);
alter table cases add constraint fk_area_id_cases_areas foreign key (area_id) references areas (id);
alter table cases add constraint fk_matter_id_cases_subject_matters foreign key (matter_id) references subject_matters (id);
alter table cases add constraint fk_origin_id_cases_origins foreign key (origin_id) references origins (id);
alter table cases add constraint fk_student_recepcionist_id_cases_people foreign key (student_recepcionist_id) references people (id);
alter table cases add constraint fk_student_recepcionist_capacity_id_cases_capacities foreign key (student_recepcionist_capacity_id) references capacities (id);
alter table cases add constraint fk_attention_place_id_cases_attention_places foreign key (attention_place_id) references attention_places (id);
alter table cases add constraint fk_student_assignee_id_cases_people foreign key (student_assignee_id) references people (id);
alter table cases add constraint fk_student_assignee_capacity_id_cases_capacities foreign key (student_assignee_capacity_id) references capacities (id);
alter table cases add constraint fk_individual_participation_id_cases_legal_officer_options foreign key (individual_participation_id) references legal_officer_options (id);
alter table cases add constraint fk_advisor_id_cases_people foreign key (advisor_id) references people (id);
alter table cases add constraint fk_third_party_representation_id_cases_attention_results foreign key (third_party_representation_id) references attention_results (id);
alter table cases add constraint fk_audience_result_id_cases_audience_results foreign key (audience_result_id) references audience_results (id);
alter table cases add constraint fk_case_status_id_cases_case_statuses foreign key (case_status_id) references case_statuses (id);
alter table cases add constraint fk_receiver_student_id_cases_people foreign key (receiver_student_id) references people (id);
alter table cases add constraint fk_graphic_support_id_cases_graphic_support_options foreign key (graphic_support_id) references graphic_support_options (id);

-- file_types
alter table file_types add constraint pk_file_types primary key (id);
alter table file_types modify id bigint auto_increment;
alter table file_types add constraint uk_name_file_types unique (name);

-- files
alter table files add constraint pk_files primary key (id);
alter table files modify id bigint auto_increment;
alter table files add constraint uk_url_files unique (url);
alter table files add constraint fk_file_type_id_files_file_types foreign key (file_type_id) references file_types (id);
alter table files add constraint fk_case_id_files_cases foreign key (case_id) references cases (id);
