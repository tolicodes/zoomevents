CREATE TABLE events (
  id int PRIMARY KEY AUTO_INCREMENT NOT NULL,
  name varchar(1000) NULL,
  price FLOAT NULL,
  header_image varchar(1000) NULL,
  date_start DATETIME NULL,
  date_end DATETIME NULL,
  creator varchar(1000) NULL,
  rsvp_link varchar(1000) NULL,
  slug varchar(1000) NULL,
  tags varchar(1000) NULL,
  zoom_link varchar(1000) NULL
);

