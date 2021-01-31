-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: Jan 31, 2021 at 10:42 PM
-- Server version: 5.7.31
-- PHP Version: 7.3.21

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `users`
--

-- --------------------------------------------------------

--
-- Table structure for table `movies`
--

DROP TABLE IF EXISTS `movies`;
CREATE TABLE IF NOT EXISTS `movies` (
  `ID` int(10) NOT NULL AUTO_INCREMENT,
  `naslov` varchar(40) NOT NULL,
  `opis` varchar(255) NOT NULL,
  `zanr` varchar(50) NOT NULL,
  `scenarista` varchar(50) NOT NULL,
  `reziser` varchar(50) NOT NULL,
  `kuca` varchar(50) NOT NULL,
  `glumci` varchar(50) NOT NULL,
  `godina` varchar(20) NOT NULL,
  `slika` varchar(255) NOT NULL,
  `trajanje` varchar(10) NOT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=MyISAM AUTO_INCREMENT=12 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `movies`
--

INSERT INTO `movies` (`ID`, `naslov`, `opis`, `zanr`, `scenarista`, `reziser`, `kuca`, `glumci`, `godina`, `slika`, `trajanje`) VALUES
(2, 'Titanic', 'A seventeen-year-old aristocrat falls in love with a kind but poor artist aboard the luxurious, ill-fated R.M.S. Titanic.', 'Horror', 'James Cameron', 'James Cameron', ' Twentieth Century Fox', 'Leonardo DiCaprio, Kate Winslet, Billy Zane', '1997 ', 'img/titanic.png', '194 min'),
(3, 'Batman', 'After training with his mentor, Batman begins his fight to free crime-ridden Gotham City from corruption.', 'Action', 'Christopher Nolan', 'Christopher Nolan', 'Warner Bros.', 'Christian Bale, Michael Caine, Ken Watanabe', '2005', 'img/batman.png', '187 min'),
(5, 'Avengers', 'After the devastating events of Avengers: Infinity War (2018), the universe is in ruins. With the help of remaining allies, the Avengers assemble once more in order to reverse Thanos\' actions and restore balance to the universe.', 'Adventure', 'Anthony Russo, Joe Russo', 'Joe Russo', 'Marvel Studio', 'Robert Downey Jr., Chris Evans, Mark Ruffalo', '2019', 'img/avengers.png', '193 min'),
(8, 'Joker', 'In Gotham City, mentally troubled comedian Arthur Fleck is disregarded and mistreated by society. He then embarks on a downward spiral of revolution and bloody crime. This path brings him face-to-face with his alter-ego: the Joker.', 'Mystery', ' Todd Phillips', ' Todd Phillips', 'Warner Bros.', 'Joaquin Phoenix, Robert De Niro, Zazie Beetz', '2019', 'img/joker.png', '167 min'),
(9, 'Oblivion', 'A veteran assigned to extract Earth\'s remaining resources begins to question what he knows about his mission and himself.', 'Romance', 'Joseph Kosinski', 'Joseph Kosinski', 'Universal Pictures', 'Tom Cruise, Morgan Freeman, Andrea Riseborough', '2019', 'img/oblivion.png', '178 min'),
(10, 'Spiderman', 'Following the events of Avengers: Endgame (2019), Spider-Man must step up to take on new threats in a world that has changed forever.', 'Action', 'Jon Watts', 'Jon Watts', 'Marvel Studio', 'Tom Holland, Samuel L. Jackson, Jake Gyllenhaal', '2019', 'img/spiderman.png', '182 min');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
CREATE TABLE IF NOT EXISTS `users` (
  `ID` int(2) NOT NULL AUTO_INCREMENT,
  `Name_Surname` varchar(35) NOT NULL,
  `Username` varchar(30) NOT NULL,
  `e-mail` varchar(40) NOT NULL,
  `password` varchar(20) NOT NULL,
  `admin/user ID` int(1) NOT NULL DEFAULT '2',
  PRIMARY KEY (`ID`)
) ENGINE=MyISAM AUTO_INCREMENT=8 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`ID`, `Name_Surname`, `Username`, `e-mail`, `password`, `admin/user ID`) VALUES
(1, 'Nemanja Stefanovic', 'nemanjaaas99', 'nemanjaaas99@gmail.com', 'nemanjaaas99', 1),
(6, 'Mirko Petrovic', 'mirkic', 'mirko@gmail.com', 'mirko123', 2),
(7, 'Srecko Sreckovic', 'Srecko123', 'srecko@gmail.com', 'srecko123', 2);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
