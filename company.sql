-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Nov 21, 2021 at 06:13 PM
-- Server version: 10.4.21-MariaDB
-- PHP Version: 8.0.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `company`
--

-- --------------------------------------------------------

--
-- Table structure for table `belong_to_cart`
--

CREATE TABLE `belong_to_cart` (
  `id` int(11) NOT NULL,
  `Product_id` int(11) NOT NULL,
  `Cart_id` int(11) NOT NULL,
  `Quantity` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `client`
--

CREATE TABLE `client` (
  `username` varchar(30) NOT NULL,
  `password` varchar(30) DEFAULT NULL,
  `fullname` varchar(50) DEFAULT NULL,
  `phone` int(11) DEFAULT NULL,
  `email` varchar(100) DEFAULT NULL,
  `b_day` date DEFAULT NULL,
  `image` varchar(1000) DEFAULT NULL,
  `role` varchar(30) DEFAULT NULL
) ;

-- --------------------------------------------------------

--
-- Table structure for table `comment`
--

CREATE TABLE `comment` (
  `id` int(11) NOT NULL,
  `id_product` int(11) NOT NULL,
  `usename` varchar(30) NOT NULL,
  `rating` int(11) DEFAULT NULL,
  `content` varchar(1000) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `employment`
--

CREATE TABLE `employment` (
  `id` int(11) NOT NULL,
  `area` text DEFAULT NULL,
  `deadline` text DEFAULT NULL,
  `address` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `Information`
--

CREATE TABLE `Information` (
  `Phone` int(11) NOT NULL,
  `Email` varchar(50) NOT NULL,
  `Address` varchar(300) NOT NULL,
  `Service` varchar(300) NOT NULL,
  `Support` varchar(300) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `Introduction`
--

CREATE TABLE `Introduction` (
  `Id` int(11) NOT NULL,
  `Image` varchar(500) NOT NULL,
  `Intro` varchar(100) NOT NULL,
  `Develop` text NOT NULL,
  `Mission` text NOT NULL,
  `Aim` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `News`
--

CREATE TABLE `News` (
  `Id` int(11) NOT NULL,
  `Tilte` varchar(100) NOT NULL,
  `Image` varchar(100) NOT NULL,
  `Content` varchar(500) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `order_product`
--

CREATE TABLE `order_product` (
  `id` int(11) NOT NULL,
  `usename` varchar(30) NOT NULL,
  `shipment` int(11) DEFAULT NULL,
  `pay_method` varchar(30) DEFAULT 'COD'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `product`
--

CREATE TABLE `product` (
  `id` int(11) NOT NULL,
  `product_name` varchar(100) NOT NULL,
  `price` float NOT NULL,
  `images` text NOT NULL,
  `tyle` varchar(100) NOT NULL,
  `brand` varchar(100) NOT NULL,
  `capacity` int(11) NOT NULL,
  `color` varchar(100) NOT NULL,
  `promotion` varchar(500) NOT NULL,
  `same_product` varchar(1000) NOT NULL,
  `screen` varchar(100) DEFAULT NULL,
  `Rom` int(11) DEFAULT NULL,
  `Ram` int(11) DEFAULT NULL,
  `battery` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `belong_to_cart`
--
ALTER TABLE `belong_to_cart`
  ADD PRIMARY KEY (`id`,`Cart_id`),
  ADD KEY `Product_id` (`Product_id`),
  ADD KEY `Cart_id` (`Cart_id`);

--
-- Indexes for table `client`
--
ALTER TABLE `client`
  ADD PRIMARY KEY (`username`);

--
-- Indexes for table `comment`
--
ALTER TABLE `comment`
  ADD PRIMARY KEY (`id`,`id_product`,`usename`),
  ADD KEY `usename` (`usename`),
  ADD KEY `id_product` (`id_product`);

--
-- Indexes for table `employment`
--
ALTER TABLE `employment`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `Information`
--
ALTER TABLE `Information`
  ADD PRIMARY KEY (`Phone`);

--
-- Indexes for table `Introduction`
--
ALTER TABLE `Introduction`
  ADD PRIMARY KEY (`Id`);

--
-- Indexes for table `News`
--
ALTER TABLE `News`
  ADD PRIMARY KEY (`Id`);

--
-- Indexes for table `order_product`
--
ALTER TABLE `order_product`
  ADD PRIMARY KEY (`id`,`usename`),
  ADD KEY `usename` (`usename`);

--
-- Indexes for table `product`
--
ALTER TABLE `product`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `News`
--
ALTER TABLE `News`
  MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `order_product`
--
ALTER TABLE `order_product`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `product`
--
ALTER TABLE `product`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `belong_to_cart`
--
ALTER TABLE `belong_to_cart`
  ADD CONSTRAINT `belong_to_cart_ibfk_1` FOREIGN KEY (`Product_id`) REFERENCES `product` (`id`),
  ADD CONSTRAINT `belong_to_cart_ibfk_2` FOREIGN KEY (`Cart_id`) REFERENCES `order_product` (`id`);

--
-- Constraints for table `comment`
--
ALTER TABLE `comment`
  ADD CONSTRAINT `comment_ibfk_1` FOREIGN KEY (`usename`) REFERENCES `client` (`username`),
  ADD CONSTRAINT `comment_ibfk_2` FOREIGN KEY (`id_product`) REFERENCES `product` (`id`);

--
-- Constraints for table `order_product`
--
ALTER TABLE `order_product`
  ADD CONSTRAINT `order_product_ibfk_1` FOREIGN KEY (`usename`) REFERENCES `client` (`username`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
