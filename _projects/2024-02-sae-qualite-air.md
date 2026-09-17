---
title: "SAÉ S4.C.01 — Qualité de l'Air Mondial"
date: 2024-04-01
period: "BUT2 — S4"
tech: [Python, PostgreSQL, Modélisation OLAP]
competences: [gerer-donnees, collaborer-equipe]
summary: >-
  Croisement de données mondiales sur la pollution de l'air (OpenAQ), la
  démographie (World Cities) et les indicateurs socio-économiques (World Bank).
link: ""
---

## Contexte

Projet en groupe de quatre étudiants : analyser et croiser trois sources de
données hétérogènes (pollution de l'air, démographie, indicateurs
socio-économiques) pour construire un système décisionnel.

## Réalisations

- Scripts Python pour extraire, nettoyer, dédupliquer et fusionner plusieurs
  sources CSV.
- Base de données relationnelle normalisée (3NF) : 6 tables (Pays, Ville,
  Station, Polluant, Mesure, Indicateur_pays).
- Schéma en constellation avec deux tables de faits pour gérer des
  granularités différentes (mesures horaires vs indicateurs annuels).
- Gain de performance moyen de **x15** sur les requêtes analytiques par
  rapport au modèle relationnel initial.

## Compétences mobilisées

Le cœur du projet relève de la **gestion de données** à un niveau plus
avancé qu'en BUT1 : modélisation multidimensionnelle, ingénierie de données
en Python, optimisation mesurée des performances. Le travail à quatre a
aussi demandé une vraie **collaboration d'équipe** sur la répartition des
sources de données.

## Posture réflexive

Le gain de performance x15 n'était pas acquis dès le départ : notre première
version du schéma en constellation ne séparait pas correctement les
granularités horaire et annuelle, ce qui explosait le volume de la table de
faits. La correction de ce point a été la clé du gain de performance final —
une leçon sur l'importance de valider un modèle avec des données réelles
avant de l'considérer figé.
