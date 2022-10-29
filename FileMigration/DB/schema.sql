-- there are two users: admin for root access and legal_office_db_admin only for legal db accesses
-- that means, db needs to be manually installed first with admin user to be able to create below schema
-- drop database if exists legal_office_db;
-- create database legal_office_db;
-- create user if not exists legal_office_db_admin@localhost identified by 'legal_office_db';
-- grant all privileges on legal_office_db.* to legal_office_db_admin@localhost;
-- use legal_office_db;
-- select user from mysql.user;
SET @@auto_increment_increment=1;
use heroku_ab15f5dd16de3fd;