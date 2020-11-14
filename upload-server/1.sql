set names utf8;
drop database if exists demo;
create database demo charset = utf8;
	use demo;

create table user(
	uid int,
	uname char(12),
	upwd char(6)
);

insert into user values
	('1','eric','123'),
	('2','hammer','123'),
	('3','josh','123'),
	('4','john','123');
