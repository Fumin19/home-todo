
CREATE TABLE toDos (
  id int(11) NOT NULL AUTO_INCREMENT,
  text varchar(50),
  isFinished tinyint(1),
  PRIMARY KEY (id)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8mb4 AUTO_INCREMENT=5 ;