# Instruction to migrate excel file

## Run DB scripts

- Go to **DB** folder
- Open **startup.sql** file
- Copy the 1st line that should look like pretty similar to this `source <PATH_TO_DB_FOLDER>/DB/startup.sql`
- Execute `source <PATH_TO_DB_FOLDER>/DB/startup.sql` command on a MariaDB server terminal.
    - This command will create the schema, the tables and the needed seed data for further processes

## Run NodeJS excel script

*Prerequisite:* you need to have node installed. Preferably version v16.13.2

- Go to **ExcelFileMigration** folder
- Open a terminal from that directory
    - You can also open a terminal without going to **ExcelFileMigration** and navigate directly into that folder (make sure you are there using `pwd` command)
- Execute node migrationFile.js
    - Have in mind you need to have in the same folder the xlsx file. In this case it should be like this: **./LIBRO RADICADOR CONSULTORIO JURIDICO (1).xlsx**
    - Also some of the cells might not have a well formatted data, so the script will tell you what's the row you need to fix. The most of the times it's because of date formats
- Once everything has run without problems you can go to the database and check **cases** table. It should have the xslx file info 

## Run DML to update audience date time

- Go to **DB** folder
- Open **DML_UPDATE_AUDIENCE_DATE_TIME.sql** file
- Copy the 2nd line that should look like pretty similar to this `source <PATH_TO_DB_FOLDER>/DB/DML_UPDATE_AUDIENCE_DATE_TIME.sql`
- Execute `source <PATH_TO_DB_FOLDER>/DB/DML_UPDATE_AUDIENCE_DATE_TIME.sql` command on a MariaDB server terminal.

## Important Note!

- This guide created for current **./LIBRO RADICADOR CONSULTORIO JURIDICO (1).xlsx** file. If another file is needed. Info needs to be checked and updated through web app.
- Also, DB config in  **ExcelFileMigration** folder should be changed for the one used at that point in time. It's local by default.