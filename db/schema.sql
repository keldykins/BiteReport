DROP DATABASE IF EXISTS rest_reviewsdb;
CREATE DATABASE rest_reviewsdb;
USE rest_reviewsdb;
CREATE TABLE reviews (
review_id INTEGER(50),

restaurant_name VARCHAR(50),

review VARCHAR(300),

time_stamp NOW()

);

INSERT INTO reviews (review_id, restaurant_name, review)
VALUES ("1", "Maggianos", "We ordered the chicken parm and alfredo - It was really good");

INSERT INTO reviews (review_id, restaurant_name, review)
VALUES ("2", "Los Dos Portrillos", "Ordered #15 (large combo), chile rellenos were great");

INSERT INTO reviews (review_id, restaurant_name, review)
VALUES ("3", "Shake Shack", "Great burgers, ");

INSERT INTO reviews (review_id, restaurant_name, review)
VALUES ("4", "Ocean Prime", "Had the filet and lettuce wedge...it was phenomenal!");

INSERT INTO reviews (review_id, restaurant_name, review)
VALUES ("5", "Smokin' Fins", "Service wasn't the best but the food is awesome.  Really good calamari and sushi");