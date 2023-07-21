-- MySQL dump 10.13  Distrib 8.0.19, for Win64 (x86_64)
--
-- Host: localhost    Database: emma-pierre
-- ------------------------------------------------------
-- Server version	5.5.5-10.4.25-MariaDB

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `adresse`
--

DROP TABLE IF EXISTS `adresse`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `adresse` (
  `id` int(11) NOT NULL,
  `rue` varchar(255) DEFAULT NULL,
  `ville` varchar(50) DEFAULT NULL,
  `pays` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `adresse`
--

LOCK TABLES `adresse` WRITE;
/*!40000 ALTER TABLE `adresse` DISABLE KEYS */;
INSERT INTO `adresse` VALUES (1,'Ap #332-2069 Tempor Street','Shaanxi',NULL),(2,'Ap #690-563 Blandit Road','Chongqing',NULL),(3,'4280 Et Ave','Vienna',NULL),(4,'7123 Sit Rd.','Fahler',NULL),(5,'Ap #420-8775 Ipsum Street','Gojal Upper Hunza',NULL),(6,'982-587 Iaculis Ave','Jayapura',NULL),(7,'903-6203 Convallis Rd.','Itanagar',NULL),(8,'Ap #256-8252 Ante. St.','Osogbo',NULL),(9,'Ap #124-6174 Enim. Rd.','Söderhamn',NULL),(10,'683-9644 Quisque St.','Novosibirsk',NULL),(11,'479-5663 Laoreet Rd.','Liberia',NULL),(12,'4963 Quisque Rd.','Jørpeland',NULL),(13,'P.O. Box 911, 7717 Curabitur Rd.','Metairie',NULL),(14,'Ap #734-7400 Ut Road','Nikopol',NULL),(15,'P.O. Box 417, 1832 Sit Ave','Suwałki',NULL),(16,'7908 Ut Road','Kasur',NULL),(17,'P.O. Box 903, 9624 At, Street','Pakpatan',NULL),(18,'Ap #578-9653 Nec Av.','Yurimaguas',NULL),(19,'7710 Facilisis Avenue','Legazpi',NULL),(20,'536-9157 Nonummy Street','Port Harcourt',NULL);
/*!40000 ALTER TABLE `adresse` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `commande`
--

DROP TABLE IF EXISTS `commande`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `commande` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `date` datetime DEFAULT NULL,
  `statut` enum('confirmée','annulée','en attente') DEFAULT NULL,
  `id_user` int(11) DEFAULT NULL,
  `id_product` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `id_user` (`id_user`),
  KEY `id_product` (`id_product`),
  CONSTRAINT `commande_ibfk_1` FOREIGN KEY (`id_user`) REFERENCES `user` (`id`),
  CONSTRAINT `commande_ibfk_2` FOREIGN KEY (`id_product`) REFERENCES `product` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `commande`
--

LOCK TABLES `commande` WRITE;
/*!40000 ALTER TABLE `commande` DISABLE KEYS */;
INSERT INTO `commande` VALUES (1,'2023-07-17 00:00:00','confirmée',4,NULL),(2,'2023-05-14 00:00:00','confirmée',12,NULL),(3,'2022-11-04 00:00:00','confirmée',14,NULL);
/*!40000 ALTER TABLE `commande` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `couleur`
--

DROP TABLE IF EXISTS `couleur`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `couleur` (
  `id` int(11) NOT NULL,
  `nom` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `couleur`
--

LOCK TABLES `couleur` WRITE;
/*!40000 ALTER TABLE `couleur` DISABLE KEYS */;
INSERT INTO `couleur` VALUES (1,'black'),(2,'kaki'),(3,'or'),(4,'green'),(5,'grey'),(6,'darkblue'),(7,'blue'),(8,'indigo'),(9,'turquoise'),(10,'white'),(11,'red'),(12,'argent'),(13,'bordeaux'),(14,'violet'),(15,'purple'),(16,'lightblue'),(17,'pink'),(18,'beige'),(19,'brown'),(20,'multicolor');
/*!40000 ALTER TABLE `couleur` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `facture`
--

DROP TABLE IF EXISTS `facture`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `facture` (
  `id` int(11) NOT NULL,
  `date` datetime DEFAULT NULL,
  `tva` float DEFAULT NULL,
  `frais_livraison` float DEFAULT NULL,
  `reduction` float DEFAULT NULL,
  `total` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `facture`
--

LOCK TABLES `facture` WRITE;
/*!40000 ALTER TABLE `facture` DISABLE KEYS */;
INSERT INTO `facture` VALUES (1,'2024-02-01 00:02:37',7.4,4.5,16.99,NULL),(2,'2023-11-25 17:31:28',8.4,3.5,8.99,NULL),(3,'2024-02-15 10:23:19',6.4,5.5,8.99,NULL),(4,'2022-08-05 10:47:45',5.4,5.5,19.99,NULL),(5,'2023-01-07 23:24:31',7.4,4.5,3.99,NULL),(6,'2023-09-05 10:16:15',6.4,5.5,19.99,NULL),(7,'2023-06-22 10:10:32',12.4,4.5,17.99,NULL),(8,'2024-04-13 05:07:14',9.4,4.5,6.99,NULL),(9,'2023-11-04 13:36:44',2.4,4.5,10.99,NULL),(10,'2023-05-24 23:55:17',6.4,5.5,15.99,NULL),(11,'2023-09-18 05:47:10',9.4,4.5,9.99,NULL),(12,'2023-10-13 07:54:10',12.4,5.5,13.99,NULL),(13,'2023-08-10 23:33:25',6.4,3.5,13.99,NULL),(14,'2022-10-30 14:40:52',11.4,4.5,7.99,NULL),(15,'2023-09-22 22:15:32',3.4,4.5,15.99,NULL),(16,'2022-07-25 23:18:07',10.4,3.5,9.99,NULL),(17,'2023-05-21 09:27:51',6.4,4.5,10.99,NULL),(18,'2022-09-11 12:37:24',3.4,3.5,10.99,NULL),(19,'2023-05-01 16:15:08',3.4,4.5,4.99,NULL),(20,'2023-02-04 23:33:04',3.4,5.5,6.99,NULL);
/*!40000 ALTER TABLE `facture` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `product`
--

DROP TABLE IF EXISTS `product`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `product` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nom` varchar(50) DEFAULT NULL,
  `taille` enum('XS','S','M','L','XL') DEFAULT NULL,
  `image` varchar(255) DEFAULT NULL,
  `prix` float DEFAULT NULL,
  `categorie` enum('family','trilogy','rana','pearl','impertinentes','par couleur','uniques') DEFAULT NULL,
  `id_type` int(11) DEFAULT NULL,
  `id_couleur` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `id_type` (`id_type`),
  KEY `id_couleur` (`id_couleur`),
  CONSTRAINT `product_ibfk_1` FOREIGN KEY (`id_type`) REFERENCES `type` (`id`),
  CONSTRAINT `product_ibfk_2` FOREIGN KEY (`id_couleur`) REFERENCES `couleur` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=31 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `product`
--

LOCK TABLES `product` WRITE;
/*!40000 ALTER TABLE `product` DISABLE KEYS */;
INSERT INTO `product` VALUES (1,'kyat','M','/assets/images/25170.jpg',27,'impertinentes',3,14),(2,'kwacha','S','/assets/images/22222.jpeg',20,'family',1,3),(3,'kuna','XL','/assets/images/21111.jpeg',20,'trilogy',2,16),(4,'euro','S','/assets/images/25149.jpg',23,'pearl',2,5),(5,'yuan','XS','/assets/images/25150.jpg',135,'rana',3,6),(6,'colon','XS','/assets/images/25151.jpg',40,'par couleur',3,20),(7,'escudo','L','/assets/images/25152.jpg',262,'par couleur',3,5),(8,'krona','XS','/assets/images/25146.jpg',185,'uniques',2,17),(9,'zloty','L','/assets/images/25147.jpg',233,'impertinentes',2,17),(10,'won','S','/assets/images/25171.jpg',29,'par couleur',3,12),(11,'tugrik','XS','/assets/images/25165.jpg',125,'impertinentes',2,19),(12,'rial','XS','/assets/images/25163.jpg',20,'par couleur',3,18),(13,'shekel','XL','/assets/images/25172.jpg',21,'uniques',2,16),(14,'euro','S','/assets/images/25174.jpg',21,'impertinentes',1,6),(15,'lempira','XS','/assets/images/25166.jpg',15,'pearl',2,11),(16,'rupiah','XL','/assets/images/26666.jpeg',160,'trilogy',2,15),(17,'somoni','M','/assets/images/25162.jpg',25,'impertinentes',2,4),(18,'kuna','M','/assets/images/25161.jpg',27,'uniques',3,10),(19,'dirham','S','/assets/images/25156.jpg',118,'uniques',1,4),(20,'bolivar','XS','/assets/images/25155.jpg',113,'impertinentes',3,14),(21,"boucle d'or",'S','/assets/images/27777.jpeg',30,'family',3,3),(22,'boucle shiny','M','/assets/images/start.jpeg',75,'family',3,3),(23,'air marin','L','/assets/images/25169.jpg',42,'family',3,7),(24,'brise printanière','XS','/assets/images/23333.jpeg',75,'family',2,10),(25,'lollipop','XL','/assets/images/25170.jpg',44,'pearl',3,11),(26,"terre d'ailleurs",'M','/assets/images/25163.jpg',22,'pearl',3,6),(27,'souvenirs','S','/assets/images/26666.jpeg',120,'pearl',2,11),(28,"perle d'océan",'L','/assets/images/23333.jpeg',84,'rana',2,10),(29,'marinade','XL','/assets/images/25154.jpg',56,'rana',3,20),(30,'blue sense','S','/assets/images/25555.jpeg',62,'family',1,16);
/*!40000 ALTER TABLE `product` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `quantite`
--

DROP TABLE IF EXISTS `quantite`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `quantite` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `quantite` int(11) DEFAULT NULL,
  `produit_prix` float DEFAULT NULL,
  `id_commande` int(11) DEFAULT NULL,
  `id_facture` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `id_commande` (`id_commande`),
  KEY `id_facture` (`id_facture`),
  CONSTRAINT `quantite_ibfk_1` FOREIGN KEY (`id_commande`) REFERENCES `commande` (`id`),
  CONSTRAINT `quantite_ibfk_2` FOREIGN KEY (`id_facture`) REFERENCES `facture` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `quantite`
--

LOCK TABLES `quantite` WRITE;
/*!40000 ALTER TABLE `quantite` DISABLE KEYS */;
INSERT INTO `quantite` VALUES (1,4,20,2,3),(2,2,27,1,12),(3,1,20.99,3,8);
/*!40000 ALTER TABLE `quantite` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `role`
--

DROP TABLE IF EXISTS `role`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `role` (
  `id` int(11) NOT NULL,
  `nom` enum('admin','user') DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `role`
--

LOCK TABLES `role` WRITE;
/*!40000 ALTER TABLE `role` DISABLE KEYS */;
INSERT INTO `role` VALUES (1,'user'),(2,'admin');
/*!40000 ALTER TABLE `role` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `session`
--

DROP TABLE IF EXISTS `session`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `session` (
  `id` int(11) NOT NULL,
  `user_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `session`
--

LOCK TABLES `session` WRITE;
/*!40000 ALTER TABLE `session` DISABLE KEYS */;
INSERT INTO `session` VALUES (42,42),(240959454,41),(327528441,25),(350320971,41),(371800719,24),(900150059,41);
/*!40000 ALTER TABLE `session` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `type`
--

DROP TABLE IF EXISTS `type`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `type` (
  `id` int(11) NOT NULL,
  `nom` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `type`
--

LOCK TABLES `type` WRITE;
/*!40000 ALTER TABLE `type` DISABLE KEYS */;
INSERT INTO `type` VALUES (1,'bracelet'),(2,'collier'),(3,'boucles');
/*!40000 ALTER TABLE `type` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `login` varchar(20) NOT NULL,
  `password` varchar(255) NOT NULL,
  `nom` varchar(20) DEFAULT NULL,
  `prenom` varchar(20) DEFAULT NULL,
  `id_adresse` int(11) DEFAULT NULL,
  `id_role` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `id_role` (`id_role`),
  KEY `id_adresse` (`id_adresse`),
  CONSTRAINT `user_ibfk_1` FOREIGN KEY (`id_role`) REFERENCES `role` (`id`),
  CONSTRAINT `user_ibfk_2` FOREIGN KEY (`id_adresse`) REFERENCES `adresse` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=26 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (1,'odio','XUQ11MWM8MH','Conner','Quintessa',4,1),(2,'consequat','IGE22ORC9GR','Stafford','Micah',3,2),(3,'lectus','LKX31CMF4PB','Potts','Rose',7,2),(4,'Curabitur','VXB75UVY1CZ','Mcdaniel','Kamal',19,1),(5,'Cras','VLB86PTN2JR','Ware','Brett',9,2),(6,'risus','MKP89LSW1FK','Daniels','Phoebe',11,1),(7,'fermentum','DCH56DKW3TI','Pittman','Alfreda',3,1),(8,'Curabitur','QCR85KQG3SH','Reese','Quamar',15,1),(9,'a','MRW32SID8BT','Burris','Hiram',4,1),(10,'quis,','XEL33GRH2VV','Shields','Patricia',10,2),(11,'euismod','URB46QCH8YV','Ramsey','Chaim',17,1),(12,'mauris.','YKG17ZTO9XO','Manning','Hayes',1,1),(13,'In','LMF55HQD5QO','Cline','Giacomo',8,2),(14,'luctus,','NYY98QMH5DX','Cooke','Hedy',19,1),(15,'ligula.','GUS33PFE2RB','Cohen','Ursa',6,1),(16,'purus,','CGB55BTG3UH','Barlow','Elijah',4,1),(17,'at,','DOV37JID5KE','Murray','Brennan',5,2),(18,'quis','MSB34PAV4FY','Fletcher','Angelica',14,1),(19,'Nam','XQC63XOX8LA','Guthrie','Quyn',3,1),(20,'nisi','XIA67TEP7TA','Mcfarland','Forrest',15,1),(21,'test@test.fr','$2y$10$FYlf2MGLSlSfA','schuler','kenza',NULL,1),(22,'lolo@zozo.fr','$2y$10$ESm4KXBs028tr','zozo','lolo',NULL,2),(23,'azerty@azerty.fr','$2y$10$4lgEQcdhlzIcf','azerty','azerty',NULL,2),(24,'azer','$2y$10$5MoJunVinnEntz9ba1UrFuro0nZuzMEyITqQ815OBguVdzIVq1BHm','azer','azer',NULL,2),(25,'root','$2y$10$DmDoHsq7qKMYf0LCj61/auCwsQGkbPru1b7b7LG5sNFFD93v3nuty','root','root',NULL,1);
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping routines for database 'emma-pierre'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-07-21 13:32:37
