CREATE DATABASE  IF NOT EXISTS `houserenting` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `houserenting`;
-- MySQL dump 10.13  Distrib 8.0.26, for Win64 (x86_64)
--
-- Host: localhost    Database: houserenting
-- ------------------------------------------------------
-- Server version	8.0.26

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `admin`
--

DROP TABLE IF EXISTS `admin`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `admin` (
  `adminid` int NOT NULL AUTO_INCREMENT,
  `adminname` varchar(45) DEFAULT NULL,
  `adminphone` varchar(11) NOT NULL,
  `adminsex` char(1) DEFAULT NULL,
  `adminnickname` varchar(45) DEFAULT NULL,
  `adminpassword` varchar(16) DEFAULT NULL,
  `adminnumber` varchar(18) DEFAULT NULL,
  PRIMARY KEY (`adminid`,`adminphone`),
  UNIQUE KEY `adminid_UNIQUE` (`adminid`),
  UNIQUE KEY `adminphone_UNIQUE` (`adminphone`),
  UNIQUE KEY `adminnumber_UNIQUE` (`adminnumber`)
) ENGINE=InnoDB AUTO_INCREMENT=20 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci COMMENT='管理员信息表';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `admin`
--

LOCK TABLES `admin` WRITE;
/*!40000 ALTER TABLE `admin` DISABLE KEYS */;
INSERT INTO `admin` VALUES (10,'广州郭泫雅','123456789','W','迷人的郭老师','yasimola','1105603392'),(14,'ugkdsaf','45588589989','M','adsfd','68465','74865465'),(18,'asdfaf','15546468686','W','adfssaf','adsfasdf','516465'),(19,'吴卓逊','14466968832','M','啦啦啦','123456789','56526515626');
/*!40000 ALTER TABLE `admin` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `buyinfo`
--

DROP TABLE IF EXISTS `buyinfo`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `buyinfo` (
  `userid` int NOT NULL AUTO_INCREMENT,
  `username` varchar(45) DEFAULT NULL,
  `userphone` varchar(11) NOT NULL,
  `usersex` char(1) DEFAULT NULL,
  `houseid` int NOT NULL,
  `buystate` tinyint(1) DEFAULT NULL,
  PRIMARY KEY (`userid`,`houseid`,`userphone`),
  UNIQUE KEY `userid_UNIQUE` (`userid`),
  UNIQUE KEY `houseid_UNIQUE` (`houseid`),
  UNIQUE KEY `userphone_UNIQUE` (`userphone`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci COMMENT='买房信息表';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `buyinfo`
--

LOCK TABLES `buyinfo` WRITE;
/*!40000 ALTER TABLE `buyinfo` DISABLE KEYS */;
INSERT INTO `buyinfo` VALUES (8,'孙八','14332232343','男',3,1);
/*!40000 ALTER TABLE `buyinfo` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `houseinfo`
--

DROP TABLE IF EXISTS `houseinfo`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `houseinfo` (
  `houseid` int NOT NULL AUTO_INCREMENT,
  `username` varchar(45) DEFAULT NULL,
  `userphone` varchar(11) NOT NULL,
  `houseaddress` varchar(55) DEFAULT NULL,
  `rentnotice` varchar(100) DEFAULT NULL,
  `houseelevator` tinyint(1) DEFAULT NULL,
  `rentstate` tinyint(1) DEFAULT NULL,
  `sellstate` tinyint(1) DEFAULT NULL,
  `housepicture` varchar(100) DEFAULT NULL,
  `houserent` double DEFAULT NULL,
  `houseprice` double DEFAULT NULL,
  `housetype` varchar(45) DEFAULT NULL,
  `houseorientation` varchar(45) DEFAULT NULL,
  `houseage` int DEFAULT NULL,
  `housearea` double DEFAULT NULL,
  `housechecked` tinyint(1) DEFAULT NULL COMMENT '房屋信息表',
  `housejoinrent` tinyint(1) DEFAULT NULL,
  `houseproperty` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`houseid`,`userphone`),
  UNIQUE KEY `houseid_UNIQUE` (`houseid`),
  UNIQUE KEY `userphone_UNIQUE` (`userphone`)
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci COMMENT='房屋信息表';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `houseinfo`
--

LOCK TABLES `houseinfo` WRITE;
/*!40000 ALTER TABLE `houseinfo` DISABLE KEYS */;
INSERT INTO `houseinfo` VALUES (1,'风小逸','14332232334','翻斗花园隔壁1号','租用者不能养狗',1,0,0,'https://img0.baidu.com/it/u=3446432623,4071162930&fm=26&fmt=auto&gp=0.jpg',488,10000,'一室两厅两卫','坐北朝南',2,66,1,1,'私有'),(3,'央幂','14332232335','翻斗花园隔壁3号','租用者不能养老鼠',1,0,1,'https://img0.baidu.com/it/u=3075337751,3607951310&fm=26&fmt=auto&gp=0.jpg',688,15000,'两室三厅两卫','坐南朝北',3,100,1,1,'私有'),(5,'','','1','',0,0,0,'http://tmp/3gdMpwve6Xj1a15b5b3cdca2fee7563f9e9610e4db73.jpg',1,0,'1','',0,0,1,0,NULL),(6,'ll','12312312312','22','22',0,0,0,'http://tmp/7NxlSeQko1owa21f6e6a6ce48a254e05a88d9e23f645.jpg',55,0,'22','55',55,55,1,0,NULL),(7,'ss','ss','ss','ss',1,0,0,'http://tmp/AHr5Kg8284zWa15b5b3cdca2fee7563f9e9610e4db73.jpg',55,0,'sssss','ss',55,55,0,0,NULL),(10,'浏览记','12312333333','解决',NULL,1,0,0,'http://tmp/nvBG9oc6RBRTa15b5b3cdca2fee7563f9e9610e4db73.jpg',0,88,'解决','，，',5,8,1,0,NULL),(12,'aa','12345678956','地址','男生',1,0,0,'http://tmp/Uh9bQrNTUwtra21f6e6a6ce48a254e05a88d9e23f645.jpg',600,0,'户型','南',5,55,0,0,NULL),(13,'88','12345678965','55','55',1,0,0,'http://tmp/sNKG8TtnYxYfa21f6e6a6ce48a254e05a88d9e23f645.jpg',5,0,'55','55',5,5,0,0,NULL);
/*!40000 ALTER TABLE `houseinfo` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `post`
--

DROP TABLE IF EXISTS `post`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `post` (
  `textid` int NOT NULL AUTO_INCREMENT,
  `usernickname` varchar(45) DEFAULT NULL,
  `userphone` varchar(45) NOT NULL,
  `text` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`textid`,`userphone`),
  UNIQUE KEY `userid_UNIQUE` (`textid`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `post`
--

LOCK TABLES `post` WRITE;
/*!40000 ALTER TABLE `post` DISABLE KEYS */;
INSERT INTO `post` VALUES (1,'浩优优','14332232333','风晒干了寂寞'),(3,'浩优优','14332232333','5464'),(4,'浩优优','14332232333','求租'),(5,'浩优优','14332232333','求租'),(6,'浩优优','14332232333','1111'),(7,'浩优优','14332232333','8888');
/*!40000 ALTER TABLE `post` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `rentinfo`
--

DROP TABLE IF EXISTS `rentinfo`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `rentinfo` (
  `userid` int NOT NULL AUTO_INCREMENT,
  `username` varchar(45) DEFAULT NULL,
  `userphone` varchar(11) NOT NULL,
  `usersex` char(1) DEFAULT NULL,
  `houseid` int NOT NULL,
  `joinrent` tinyint(1) DEFAULT NULL,
  `rentstate` tinyint(1) DEFAULT NULL,
  PRIMARY KEY (`userid`,`houseid`,`userphone`),
  UNIQUE KEY `userid_UNIQUE` (`userid`),
  UNIQUE KEY `houseid_UNIQUE` (`houseid`),
  UNIQUE KEY `userphone_UNIQUE` (`userphone`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci COMMENT='租房信息表';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `rentinfo`
--

LOCK TABLES `rentinfo` WRITE;
/*!40000 ALTER TABLE `rentinfo` DISABLE KEYS */;
INSERT INTO `rentinfo` VALUES (7,'赵六','14332232339','男',1,0,0);
/*!40000 ALTER TABLE `rentinfo` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user` (
  `userid` int NOT NULL AUTO_INCREMENT,
  `username` varchar(45) DEFAULT NULL,
  `userphone` varchar(11) NOT NULL,
  `usersex` char(1) DEFAULT NULL,
  `usernickname` varchar(45) DEFAULT NULL,
  `useraddress` varchar(100) DEFAULT NULL,
  `userpassword` varchar(16) DEFAULT NULL,
  `usernumber` varchar(18) DEFAULT NULL,
  PRIMARY KEY (`userid`,`userphone`),
  UNIQUE KEY `userid_UNIQUE` (`userid`),
  UNIQUE KEY `userphone_UNIQUE` (`userphone`),
  UNIQUE KEY `usernumber_UNIQUE` (`usernumber`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci COMMENT='用户信息表';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (1,'田一名','14332232333','男','浩优优','翻斗花园1号','fengganlejimo','1234567891112'),(2,'风小逸','14332232334','男','吃颗桃桃','翻斗花园6号','haoliangliang','1234567891113'),(3,'央幂','14332232335','女','三梦奇缘','翻斗花园7号','shiyujiangnan','1234567891114'),(6,'王五','14332232338','女','五妹','不知名地42号','wangwuwu','1234567891117'),(7,'赵六','14332232339','男','六爷','不知名地66号','liuliuliu','1234567891118'),(8,'孙八','14332232343','男','老八','未知地带88号','mizhhanbao','1234567898888');
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-09-12 14:17:33
