-- roles
insert into roles (name) values ('ESTUDIANTE'); -- 1
insert into roles (name) values ('ASESOR'); -- 2
insert into roles (name) values ('ADMIN'); -- 3

-- permissions
-- URL and Menu 1
insert into permissions (url, resource) values ('Bienvenido', 'Bienvenido'); --1
insert into permissions (url, resource) values ('Casos', 'Casos'); --2
insert into permissions (url, resource) values ('Casos_Recepcionados', 'Casos Recepcionados'); --3
insert into permissions (url, resource) values ('Casos_Asignados', 'Casos Asignados'); --4 -- Estudiante
insert into permissions (url, resource) values ('Casos_Asignados_Asesor', 'Casos Asignados'); --5
insert into permissions (url, resource) values ('Estudiantes_Asesor', 'Estudiantes'); --6
insert into permissions (url, resource) values ('Estudiantes', 'Estudiantes'); --7
insert into permissions (url, resource) values ('Asesores', 'Asesores'); --8
insert into permissions (url, resource) values ('Personas', 'Personas'); --9
insert into permissions (url, resource) values ('Configuracion', 'Configuración'); --10
insert into permissions (url) values ('Ver_caso'); --11
insert into permissions (url) values ('Ver_caso_ase_estu'); --12

-- Resource - Action
-- attention-places
insert into permissions (resource, action) values ('attention-places', 'create'); --13
insert into permissions (resource, action) values ('attention-places', 'update'); --14
insert into permissions (resource, action) values ('attention-places', 'delete'); --15
insert into permissions (resource, action) values ('attention-places', 'getById'); --16
insert into permissions (resource, action) values ('attention-places', 'getAll'); --17

-- areas
insert into permissions (resource, action) values ('areas', 'create'); --18
insert into permissions (resource, action) values ('areas', 'update'); --19
insert into permissions (resource, action) values ('areas', 'delete'); --20
insert into permissions (resource, action) values ('areas', 'getById'); --21
insert into permissions (resource, action) values ('areas', 'getAll'); --22

--subject-matters
insert into permissions (resource, action) values ('subject-matters', 'create'); --23
insert into permissions (resource, action) values ('subject-matters', 'update'); --24
insert into permissions (resource, action) values ('subject-matters', 'delete'); --25
insert into permissions (resource, action) values ('subject-matters', 'getById'); --26
insert into permissions (resource, action) values ('subject-matters', 'getAll'); --27

--origins
insert into permissions (resource, action) values ('origins', 'create'); --28
insert into permissions (resource, action) values ('origins', 'update'); --29
insert into permissions (resource, action) values ('origins', 'delete'); --30
insert into permissions (resource, action) values ('origins', 'getById'); --31
insert into permissions (resource, action) values ('origins', 'getAll'); --32

--capacities
insert into permissions (resource, action) values ('capacities', 'create'); --33
insert into permissions (resource, action) values ('capacities', 'update'); --34
insert into permissions (resource, action) values ('capacities', 'delete'); --35
insert into permissions (resource, action) values ('capacities', 'getById'); --36
insert into permissions (resource, action) values ('capacities', 'getAll'); --37

--legal-officer-options
insert into permissions (resource, action) values ('legal-officer-options', 'create'); --38
insert into permissions (resource, action) values ('legal-officer-options', 'update'); --39
insert into permissions (resource, action) values ('legal-officer-options', 'delete'); --40
insert into permissions (resource, action) values ('legal-officer-options', 'getById'); --41
insert into permissions (resource, action) values ('legal-officer-options', 'getAll'); --42

--attention-results
insert into permissions (resource, action) values ('attention-results', 'create'); --43
insert into permissions (resource, action) values ('attention-results', 'update'); --44
insert into permissions (resource, action) values ('attention-results', 'delete'); --45
insert into permissions (resource, action) values ('attention-results', 'getById'); --46
insert into permissions (resource, action) values ('attention-results', 'getAll'); --47

--efficacy-options
insert into permissions (resource, action) values ('efficacy-options', 'create'); --48
insert into permissions (resource, action) values ('efficacy-options', 'update'); --49
insert into permissions (resource, action) values ('efficacy-options', 'delete'); --50
insert into permissions (resource, action) values ('efficacy-options', 'getById'); --51
insert into permissions (resource, action) values ('efficacy-options', 'getAll'); --52

--case-statuses
insert into permissions (resource, action) values ('case-statuses', 'create'); --53
insert into permissions (resource, action) values ('case-statuses', 'update'); --54
insert into permissions (resource, action) values ('case-statuses', 'delete'); --55
insert into permissions (resource, action) values ('case-statuses', 'getById'); --56
insert into permissions (resource, action) values ('case-statuses', 'getAll'); --57

--audience-results
insert into permissions (resource, action) values ('audience-results', 'create'); --58
insert into permissions (resource, action) values ('audience-results', 'update'); --59
insert into permissions (resource, action) values ('audience-results', 'delete'); --60
insert into permissions (resource, action) values ('audience-results', 'getById'); --61
insert into permissions (resource, action) values ('audience-results', 'getAll'); --62

--graphic-support-options
insert into permissions (resource, action) values ('graphic-support-options', 'create'); --63
insert into permissions (resource, action) values ('graphic-support-options', 'update'); --64
insert into permissions (resource, action) values ('graphic-support-options', 'delete'); --65
insert into permissions (resource, action) values ('graphic-support-options', 'getById'); --66
insert into permissions (resource, action) values ('graphic-support-options', 'getAll'); --67

--id-types
insert into permissions (resource, action) values ('id-types', 'create'); --68
insert into permissions (resource, action) values ('id-types', 'update'); --69
insert into permissions (resource, action) values ('id-types', 'delete'); --70
insert into permissions (resource, action) values ('id-types', 'getById'); --71
insert into permissions (resource, action) values ('id-types', 'getAll'); --72

--file-types
insert into permissions (resource, action) values ('file-types', 'create'); --73
insert into permissions (resource, action) values ('file-types', 'update'); --74
insert into permissions (resource, action) values ('file-types', 'delete'); --75
insert into permissions (resource, action) values ('file-types', 'getById'); --76
insert into permissions (resource, action) values ('file-types', 'getAll'); --77

--people
insert into permissions (resource, action) values ('people', 'create'); --78
insert into permissions (resource, action) values ('people', 'update'); --79
insert into permissions (resource, action) values ('people', 'delete'); --80
insert into permissions (resource, action) values ('people', 'getById'); --81
insert into permissions (resource, action) values ('people', 'getAll'); --82

--files
insert into permissions (resource, action) values ('files', 'create'); --83
insert into permissions (resource, action) values ('files', 'update'); --84
insert into permissions (resource, action) values ('files', 'delete'); --85
insert into permissions (resource, action) values ('files', 'getById'); --86
insert into permissions (resource, action) values ('files', 'getAll'); --87
insert into permissions (resource, action) values ('files', 'createDB'); --88

--cases
insert into permissions (resource, action) values ('cases', 'create'); --89
insert into permissions (resource, action) values ('cases', 'update'); --90
insert into permissions (resource, action) values ('cases', 'delete'); --91
insert into permissions (resource, action) values ('cases', 'getById'); --92
insert into permissions (resource, action) values ('cases', 'getAll'); --93

-- received-cases
insert into permissions (resource, action) values ('received-cases', 'getAll'); --94

-- advisor-assigned-cases
insert into permissions (resource, action) values ('advisor-assigned-cases', 'getAll'); --95

-- student-assigned-cases
insert into permissions (resource, action) values ('student-assigned-cases', 'getAll'); --96

-- student-people
insert into permissions (resource, action) values ('student-people', 'getAll'); --97

-- advisor-student-people
insert into permissions (resource, action) values ('advisor-student-people', 'getAll'); --98

-- users
insert into permissions (resource, action) values ('users', 'create'); --99
insert into permissions (resource, action) values ('users', 'update'); --100
insert into permissions (resource, action) values ('users', 'delete'); --101
insert into permissions (resource, action) values ('users', 'getById'); --102
insert into permissions (resource, action) values ('users', 'getAll'); --103


-- URL and Menu 2
insert into permissions (url, resource) values ('users', 'users'); --104

-- Resource - Action 2
insert into permissions (resource, action) values ('advisor-people', 'getAll'); --105
insert into permissions (resource, action) values ('menu-options', 'getAll'); --106
insert into permissions (resource, action) values ('people-to-students', 'getAll'); --107

-- URL and Menu 3
insert into permissions (url) values ('auth/login'); --108
insert into permissions (url) values ('Casos_en_progreso'); --109 -- estudiante
insert into permissions (url) values ('Casos_asesoramiento'); --110 -- asesor


-- permission_roles
-- Permisos ESTUDIANTE
-- URL and Menu
insert into permission_roles (role_id, permission_id) values (1, 1);
insert into permission_roles (role_id, permission_id) values (1, 3);
insert into permission_roles (role_id, permission_id) values (1, 4);
insert into permission_roles (role_id, permission_id) values (1, 12);
insert into permission_roles (role_id, permission_id) values (1, 108);
insert into permission_roles (role_id, permission_id) values (1, 9);
insert into permission_roles (role_id, permission_id) values (1, 109);

-- Resource-Action
insert into permission_roles (role_id, permission_id) values (1, 89);
insert into permission_roles (role_id, permission_id) values (1, 90);
insert into permission_roles (role_id, permission_id) values (1, 92);
insert into permission_roles (role_id, permission_id) values (1, 94);
insert into permission_roles (role_id, permission_id) values (1, 96);
insert into permission_roles (role_id, permission_id) values (1, 17);
insert into permission_roles (role_id, permission_id) values (1, 22);
insert into permission_roles (role_id, permission_id) values (1, 27);
insert into permission_roles (role_id, permission_id) values (1, 32);
insert into permission_roles (role_id, permission_id) values (1, 37);
insert into permission_roles (role_id, permission_id) values (1, 42);
insert into permission_roles (role_id, permission_id) values (1, 47);
insert into permission_roles (role_id, permission_id) values (1, 52);
insert into permission_roles (role_id, permission_id) values (1, 57);
insert into permission_roles (role_id, permission_id) values (1, 62);
insert into permission_roles (role_id, permission_id) values (1, 67);
insert into permission_roles (role_id, permission_id) values (1, 72);
insert into permission_roles (role_id, permission_id) values (1, 77);
insert into permission_roles (role_id, permission_id) values (1, 82);
insert into permission_roles (role_id, permission_id) values (1, 83);
insert into permission_roles (role_id, permission_id) values (1, 85);
insert into permission_roles (role_id, permission_id) values (1, 106);
insert into permission_roles (role_id, permission_id) values (1, 107);
insert into permission_roles (role_id, permission_id) values (1, 78);
insert into permission_roles (role_id, permission_id) values (1, 79);
insert into permission_roles (role_id, permission_id) values (1, 80);
insert into permission_roles (role_id, permission_id) values (1, 81);
insert into permission_roles (role_id, permission_id) values (1, 91);
insert into permission_roles (role_id, permission_id) values (1, 88);


-- Permisos ASESOR
-- URL and Menu
insert into permission_roles (role_id, permission_id) values (2, 1);
insert into permission_roles (role_id, permission_id) values (2, 5);
insert into permission_roles (role_id, permission_id) values (2, 6); -- Students that have an assigned case with this advisor
insert into permission_roles (role_id, permission_id) values (2, 12);
insert into permission_roles (role_id, permission_id) values (2, 108);
insert into permission_roles (role_id, permission_id) values (2, 110);

-- Resource-Action
insert into permission_roles (role_id, permission_id) values (2, 17);
insert into permission_roles (role_id, permission_id) values (2, 22);
insert into permission_roles (role_id, permission_id) values (2, 27);
insert into permission_roles (role_id, permission_id) values (2, 32);
insert into permission_roles (role_id, permission_id) values (2, 37);
insert into permission_roles (role_id, permission_id) values (2, 42);
insert into permission_roles (role_id, permission_id) values (2, 47);
insert into permission_roles (role_id, permission_id) values (2, 52);
insert into permission_roles (role_id, permission_id) values (2, 57);
insert into permission_roles (role_id, permission_id) values (2, 62);
insert into permission_roles (role_id, permission_id) values (2, 67);
insert into permission_roles (role_id, permission_id) values (2, 72);
insert into permission_roles (role_id, permission_id) values (2, 77);
insert into permission_roles (role_id, permission_id) values (2, 81);
insert into permission_roles (role_id, permission_id) values (2, 82);
insert into permission_roles (role_id, permission_id) values (2, 83);
insert into permission_roles (role_id, permission_id) values (2, 85);
insert into permission_roles (role_id, permission_id) values (2, 90);
insert into permission_roles (role_id, permission_id) values (2, 92);
insert into permission_roles (role_id, permission_id) values (2, 95);
insert into permission_roles (role_id, permission_id) values (2, 98);
insert into permission_roles (role_id, permission_id) values (2, 106);
insert into permission_roles (role_id, permission_id) values (2, 88);

-- Permisos ADMIN
-- URL and Menu
insert into permission_roles (role_id, permission_id) values (3, 1);
insert into permission_roles (role_id, permission_id) values (3, 2);
insert into permission_roles (role_id, permission_id) values (3, 7);
insert into permission_roles (role_id, permission_id) values (3, 8);
insert into permission_roles (role_id, permission_id) values (3, 9);
insert into permission_roles (role_id, permission_id) values (3, 10);
insert into permission_roles (role_id, permission_id) values (3, 11);
insert into permission_roles (role_id, permission_id) values (3, 108);

-- Resource-Action
insert into permission_roles (role_id, permission_id) values (3, 13);
insert into permission_roles (role_id, permission_id) values (3, 14);
insert into permission_roles (role_id, permission_id) values (3, 15);
insert into permission_roles (role_id, permission_id) values (3, 16);
insert into permission_roles (role_id, permission_id) values (3, 17);
insert into permission_roles (role_id, permission_id) values (3, 18);
insert into permission_roles (role_id, permission_id) values (3, 19);
insert into permission_roles (role_id, permission_id) values (3, 20);
insert into permission_roles (role_id, permission_id) values (3, 21);
insert into permission_roles (role_id, permission_id) values (3, 22);
insert into permission_roles (role_id, permission_id) values (3, 23);
insert into permission_roles (role_id, permission_id) values (3, 24);
insert into permission_roles (role_id, permission_id) values (3, 25);
insert into permission_roles (role_id, permission_id) values (3, 26);
insert into permission_roles (role_id, permission_id) values (3, 27);
insert into permission_roles (role_id, permission_id) values (3, 28);
insert into permission_roles (role_id, permission_id) values (3, 29);
insert into permission_roles (role_id, permission_id) values (3, 30);
insert into permission_roles (role_id, permission_id) values (3, 31);
insert into permission_roles (role_id, permission_id) values (3, 32);
insert into permission_roles (role_id, permission_id) values (3, 33);
insert into permission_roles (role_id, permission_id) values (3, 34);
insert into permission_roles (role_id, permission_id) values (3, 35);
insert into permission_roles (role_id, permission_id) values (3, 36);
insert into permission_roles (role_id, permission_id) values (3, 37);
insert into permission_roles (role_id, permission_id) values (3, 38);
insert into permission_roles (role_id, permission_id) values (3, 39);
insert into permission_roles (role_id, permission_id) values (3, 40);
insert into permission_roles (role_id, permission_id) values (3, 41);
insert into permission_roles (role_id, permission_id) values (3, 42);
insert into permission_roles (role_id, permission_id) values (3, 43);
insert into permission_roles (role_id, permission_id) values (3, 44);
insert into permission_roles (role_id, permission_id) values (3, 45);
insert into permission_roles (role_id, permission_id) values (3, 46);
insert into permission_roles (role_id, permission_id) values (3, 47);
insert into permission_roles (role_id, permission_id) values (3, 48);
insert into permission_roles (role_id, permission_id) values (3, 49);
insert into permission_roles (role_id, permission_id) values (3, 50);
insert into permission_roles (role_id, permission_id) values (3, 51);
insert into permission_roles (role_id, permission_id) values (3, 52);
insert into permission_roles (role_id, permission_id) values (3, 53);
insert into permission_roles (role_id, permission_id) values (3, 54);
insert into permission_roles (role_id, permission_id) values (3, 55);
insert into permission_roles (role_id, permission_id) values (3, 56);
insert into permission_roles (role_id, permission_id) values (3, 57);
insert into permission_roles (role_id, permission_id) values (3, 58);
insert into permission_roles (role_id, permission_id) values (3, 59);
insert into permission_roles (role_id, permission_id) values (3, 60);
insert into permission_roles (role_id, permission_id) values (3, 61);
insert into permission_roles (role_id, permission_id) values (3, 62);
insert into permission_roles (role_id, permission_id) values (3, 63);
insert into permission_roles (role_id, permission_id) values (3, 64);
insert into permission_roles (role_id, permission_id) values (3, 65);
insert into permission_roles (role_id, permission_id) values (3, 66);
insert into permission_roles (role_id, permission_id) values (3, 67);
insert into permission_roles (role_id, permission_id) values (3, 68);
insert into permission_roles (role_id, permission_id) values (3, 69);
insert into permission_roles (role_id, permission_id) values (3, 70);
insert into permission_roles (role_id, permission_id) values (3, 71);
insert into permission_roles (role_id, permission_id) values (3, 72);
insert into permission_roles (role_id, permission_id) values (3, 73);
insert into permission_roles (role_id, permission_id) values (3, 74);
insert into permission_roles (role_id, permission_id) values (3, 75);
insert into permission_roles (role_id, permission_id) values (3, 76);
insert into permission_roles (role_id, permission_id) values (3, 77);
insert into permission_roles (role_id, permission_id) values (3, 78);
insert into permission_roles (role_id, permission_id) values (3, 79);
insert into permission_roles (role_id, permission_id) values (3, 80);
insert into permission_roles (role_id, permission_id) values (3, 81);
insert into permission_roles (role_id, permission_id) values (3, 82);
insert into permission_roles (role_id, permission_id) values (3, 83);
insert into permission_roles (role_id, permission_id) values (3, 84);
insert into permission_roles (role_id, permission_id) values (3, 85);
insert into permission_roles (role_id, permission_id) values (3, 86);
insert into permission_roles (role_id, permission_id) values (3, 87);
insert into permission_roles (role_id, permission_id) values (3, 88);
insert into permission_roles (role_id, permission_id) values (3, 89);
insert into permission_roles (role_id, permission_id) values (3, 90);
insert into permission_roles (role_id, permission_id) values (3, 91);
insert into permission_roles (role_id, permission_id) values (3, 92);
insert into permission_roles (role_id, permission_id) values (3, 93);
insert into permission_roles (role_id, permission_id) values (3, 97);
insert into permission_roles (role_id, permission_id) values (3, 99);
insert into permission_roles (role_id, permission_id) values (3, 100);
insert into permission_roles (role_id, permission_id) values (3, 101);
insert into permission_roles (role_id, permission_id) values (3, 102);
insert into permission_roles (role_id, permission_id) values (3, 103);
insert into permission_roles (role_id, permission_id) values (3, 104);
insert into permission_roles (role_id, permission_id) values (3, 105);
insert into permission_roles (role_id, permission_id) values (3, 106);
