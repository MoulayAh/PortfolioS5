---
title: "SAÉ Dev Web — Gestion de Buvette Associative"
date: 2024-06-01
period: "BUT2 — S4"
tech: [PHP, MVC, SQL, PDO]
competences: [gerer-donnees, conduire-projet, collaborer-equipe]
summary: >-
  Application web de gestion pour une buvette associative, en architecture
  MVC complète avec authentification sécurisée.
link: ""
---

## Contexte

Développement en équipe (avec Anton, Sorana, Djeneba) d'une application web
de gestion pour une buvette associative, structurée selon une architecture
MVC complète.

## Réalisations

- **Architecture MVC** : séparation stricte Modèles / Vues / Contrôleurs pour
  chaque module (client, administration, barman, gestionnaire, sélection
  d'association).
- **Backend PHP** orienté objet : gestion des sessions, routage, traitement
  des données.
- **Base de données SQL** intégrée via PDO (script `Utilisateur.sql`,
  fichier `connexion.php`).
- **Sécurité** : hachage des mots de passe (`password_hash`), tests dédiés.
- Utilisation d'un IDE JetBrains (PhpStorm / IntelliJ) et d'un outil
  d'assistance au code.

## Compétences mobilisées

Ce projet est le plus complet des trois compétences à ce stade du parcours :
**gestion de données** (SQL, PDO, sécurité), **conduite de projet**
(architecture MVC choisie et respectée sur tout le projet) et **collaboration
d'équipe** à quatre personnes sur un dépôt partagé.

## Posture réflexive

Le respect strict du MVC sur un projet à 4 a évité l'essentiel des conflits
de fusion Git — les responsabilités de chacun (un module = une personne)
étaient claires dès le départ grâce à l'architecture. C'est ce projet qui
m'a convaincu qu'une architecture bien choisie *facilite* le travail
d'équipe plus qu'elle ne le contraint.
