-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1
-- Généré le : dim. 22 jan. 2023 à 20:36
-- Version du serveur : 10.4.25-MariaDB
-- Version de PHP : 8.1.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `baskel_nouv`
--

-- --------------------------------------------------------

--
-- Structure de la table `admin_agence`
--

CREATE TABLE `admin_agence` (
  `id_agence` varchar(8) NOT NULL,
  `cin` varchar(8) NOT NULL,
  `nom` varchar(20) NOT NULL,
  `prenom` varchar(20) NOT NULL,
  `email` varchar(100) NOT NULL,
  `tel` varchar(25) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Structure de la table `agence`
--

CREATE TABLE `agence` (
  `id` int(11) NOT NULL,
  `nom` varchar(20) NOT NULL,
  `adresse` varchar(100) NOT NULL,
  `description` varchar(150) NOT NULL,
  `photo` varchar(100) NOT NULL,
  `email` varchar(50) NOT NULL,
  `website` varchar(100) NOT NULL,
  `telephone` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `agence`
--

INSERT INTO `agence` (`id`, `nom`, `adresse`, `description`, `photo`, `email`, `website`, `telephone`) VALUES
(1, 'agnece', 'tunis', 'parfait', '', 'mmmm@hgf', 'kjhb.com', '2154879'),
(2, 'bike 12', 'falaize', 'bien', '', 'bike@gmail', 'bike_rent.com', '21548796'),
(4, 'bike_rades', 'rades', 'mieux que monastir', '', 'bike22@gmail', 'bike_rent.com', '54879632'),
(5, 'bike_radesssss', 'livbya', 'bien', '', 'asma@gmail', 'bike_rent.com', '21548796'),
(3, 'burger', 'kfc', 'bniina', '', 'kfc@gmaikl', 'bike_rent.com', '2254879');

-- --------------------------------------------------------

--
-- Structure de la table `authentification`
--

CREATE TABLE `authentification` (
  `login` varchar(8) NOT NULL,
  `password` varchar(300) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Structure de la table `client`
--

CREATE TABLE `client` (
  `id` int(11) NOT NULL,
  `cin` varchar(8) NOT NULL,
  `email` varchar(200) NOT NULL,
  `nom` varchar(50) NOT NULL,
  `prenom` varchar(50) NOT NULL,
  `image` varchar(100) NOT NULL,
  `tel` varchar(10) NOT NULL,
  `adresse` varchar(150) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `client`
--

INSERT INTO `client` (`id`, `cin`, `email`, `nom`, `prenom`, `image`, `tel`, `adresse`) VALUES
(3, '0123654', 'asma@gmail', 'asma', 'guiza', '', '25147896', 'gabes'),
(1, '11152975', 'khaled@gmail.com', 'khaled', 'frej', '', '26547896', 'el falez monastir\r\n'),
(2, '22254', 'mrym@gmail.com', 'mm', 'mkd', '', '215488', 'monastir');

-- --------------------------------------------------------

--
-- Structure de la table `evenement`
--

CREATE TABLE `evenement` (
  `id` varchar(8) NOT NULL,
  `id_organization` varchar(8) NOT NULL,
  `id_piste` varchar(8) NOT NULL,
  `date` date NOT NULL,
  `heure` varchar(6) NOT NULL,
  `adresse` varchar(100) NOT NULL,
  `description` varchar(150) NOT NULL,
  `image` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `evenement`
--

INSERT INTO `evenement` (`id`, `id_organization`, `id_piste`, `date`, `heure`, `adresse`, `description`, `image`) VALUES
('10', '9', '8', '0000-00-00', '12:30', 'tunis', 'longue', 'png1'),
('14', '1', '2', '2020-02-12', '11:40', 'falaize', 'bien', ''),
('20', '11', '10', '0000-00-00', '12:30', 'tunis', 'longue', 'png1');

-- --------------------------------------------------------

--
-- Structure de la table `forum`
--

CREATE TABLE `forum` (
  `id` varchar(8) NOT NULL,
  `nom` varchar(8) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Structure de la table `location`
--

CREATE TABLE `location` (
  `cin` varchar(8) NOT NULL,
  `id_vehicule` varchar(8) NOT NULL,
  `id_agence` varchar(8) NOT NULL,
  `date` date NOT NULL,
  `periode` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Structure de la table `message`
--

CREATE TABLE `message` (
  `id` int(8) NOT NULL,
  `id_forum` varchar(8) NOT NULL,
  `id_client` varchar(8) NOT NULL,
  `date` date NOT NULL,
  `heure` varchar(6) NOT NULL,
  `content` varchar(300) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Structure de la table `organization`
--

CREATE TABLE `organization` (
  `id` varchar(8) NOT NULL,
  `nom` varchar(20) NOT NULL,
  `description` varchar(150) NOT NULL,
  `adresse` varchar(100) NOT NULL,
  `photo` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `organization`
--

INSERT INTO `organization` (`id`, `nom`, `description`, `adresse`, `photo`) VALUES
('1', 'lkjh', 'lkjhg', 'lkjn', 'lkj'),
('11', 'org1', 'parfait', 'tunis', 'ppng2'),
('9', 'lkjhg', 'loiuyhg', 'lkjh', 'mlkjhg');

-- --------------------------------------------------------

--
-- Structure de la table `piste_cyclable`
--

CREATE TABLE `piste_cyclable` (
  `id` varchar(8) NOT NULL,
  `nom` varchar(20) NOT NULL,
  `ville` varchar(20) NOT NULL,
  `description` varchar(150) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `piste_cyclable`
--

INSERT INTO `piste_cyclable` (`id`, `nom`, `ville`, `description`) VALUES
('10', 'falaiaise', 'monastir', 'bien'),
('2', 'lkjhbg', 'kj', ';lk'),
('8', 'lkjhg', 'lkjhgf', 'mlkjh');

-- --------------------------------------------------------

--
-- Structure de la table `vehicule`
--

CREATE TABLE `vehicule` (
  `id_agence` int(11) NOT NULL,
  `id` varchar(8) NOT NULL,
  `type` enum('bike','scooter') NOT NULL,
  `marque` varchar(20) NOT NULL,
  `nom` varchar(20) NOT NULL,
  `image` varchar(100) NOT NULL,
  `description` varchar(200) NOT NULL,
  `prix` double(5,3) NOT NULL,
  `couleur` varchar(20) NOT NULL,
  `rate` double(5,3) NOT NULL,
  `speed` double(5,3) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `vehicule`
--

INSERT INTO `vehicule` (`id_agence`, `id`, `type`, `marque`, `nom`, `image`, `description`, `prix`, `couleur`, `rate`, `speed`) VALUES
(5, '10', '', 'pg', 'bike_touta', 'png', 'speed', 50.000, 'noir', 10.000, 11.000),
(0, '2221', '', '', '', '', '', 0.000, '', 0.000, 0.000);

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `admin_agence`
--
ALTER TABLE `admin_agence`
  ADD PRIMARY KEY (`id_agence`,`cin`);

--
-- Index pour la table `agence`
--
ALTER TABLE `agence`
  ADD PRIMARY KEY (`nom`),
  ADD KEY `id` (`id`);

--
-- Index pour la table `authentification`
--
ALTER TABLE `authentification`
  ADD PRIMARY KEY (`login`);

--
-- Index pour la table `client`
--
ALTER TABLE `client`
  ADD PRIMARY KEY (`email`),
  ADD KEY `id` (`id`);

--
-- Index pour la table `evenement`
--
ALTER TABLE `evenement`
  ADD PRIMARY KEY (`id`,`id_organization`,`id_piste`,`date`),
  ADD KEY `id_piste` (`id_piste`),
  ADD KEY `id_organization` (`id_organization`);

--
-- Index pour la table `forum`
--
ALTER TABLE `forum`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `location`
--
ALTER TABLE `location`
  ADD PRIMARY KEY (`cin`,`id_vehicule`,`id_agence`,`date`),
  ADD KEY `id_agence` (`id_agence`),
  ADD KEY `id_vehicule` (`id_vehicule`);

--
-- Index pour la table `message`
--
ALTER TABLE `message`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_client` (`id_client`),
  ADD KEY `id_forum` (`id_forum`);

--
-- Index pour la table `organization`
--
ALTER TABLE `organization`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `piste_cyclable`
--
ALTER TABLE `piste_cyclable`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `vehicule`
--
ALTER TABLE `vehicule`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `agence`
--
ALTER TABLE `agence`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT pour la table `client`
--
ALTER TABLE `client`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT pour la table `message`
--
ALTER TABLE `message`
  MODIFY `id` int(8) NOT NULL AUTO_INCREMENT;

--
-- Contraintes pour les tables déchargées
--

--
-- Contraintes pour la table `admin_agence`
--
ALTER TABLE `admin_agence`
  ADD CONSTRAINT `admin_agence_ibfk_1` FOREIGN KEY (`id_agence`) REFERENCES `agence` (`id_agence`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Contraintes pour la table `authentification`
--
ALTER TABLE `authentification`
  ADD CONSTRAINT `authentification_ibfk_1` FOREIGN KEY (`login`) REFERENCES `client` (`cin`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Contraintes pour la table `evenement`
--
ALTER TABLE `evenement`
  ADD CONSTRAINT `evenement_ibfk_1` FOREIGN KEY (`id_piste`) REFERENCES `piste_cyclable` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `evenement_ibfk_2` FOREIGN KEY (`id_organization`) REFERENCES `organization` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Contraintes pour la table `location`
--
ALTER TABLE `location`
  ADD CONSTRAINT `location_ibfk_2` FOREIGN KEY (`id_agence`) REFERENCES `agence` (`id_agence`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `location_ibfk_3` FOREIGN KEY (`id_vehicule`) REFERENCES `vehicule` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `location_ibfk_4` FOREIGN KEY (`cin`) REFERENCES `client` (`cin`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Contraintes pour la table `message`
--
ALTER TABLE `message`
  ADD CONSTRAINT `message_ibfk_1` FOREIGN KEY (`id_client`) REFERENCES `client` (`cin`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `message_ibfk_2` FOREIGN KEY (`id_forum`) REFERENCES `forum` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
