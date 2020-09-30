DROP DATABASE IF EXISTS rest_reviewsdb;
CREATE DATABASE rest_reviewsdb;
USE rest_reviewsdb;
CREATE TABLE reviews (
review_id INTEGER(50),

restaurant_name VARCHAR(50),

review VARCHAR(300)

);

INSERT INTO reviews (review_id, restaurant_name, review)
VALUES ("1", "Maggianos", "The chicken parmesean was delicious.  Great atmosphere for a family outing");

INSERT INTO reviews (review_id, restaurant_name, review)
VALUES ("2", "Los Dos Portrillos", "Food was awesome and affordable.  Go check it out on Taco Tuesday!");

INSERT INTO reviews (review_id, restaurant_name, review)
VALUES ("3", "Shake Shack", "Insane burgers and even better shakes.  A little expensive though but worth it");

INSERT INTO reviews (review_id, restaurant_name, review)
VALUES ("4", "Ocean Prime", "Had the filet and lettuce wedge...it was phenomenal!");

INSERT INTO reviews (review_id, restaurant_name, review)
VALUES ("5", "Smokin' Fins", "Service wasn't the best but the food is awesome.  Really good calamari and sushi");