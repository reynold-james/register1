use c9;

DROP TABLE IF EXISTS Users;
CREATE TABLE Users(
    id  int(11) NOT NULL auto_increment,
    firstname char(30),
    lastname char(30),
    username char(30),
    email varchar(30),
    certnum char(30),
    admin varchar(10),
    failed_attempts int(11),
    last_login  datetime,
    salt varchar(64),
    password_digest varchar (64),
    PRIMARY KEY (id)

);