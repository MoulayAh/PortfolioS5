# Portfolio BUT Informatique — 3ème année (Parcours C)

Site Jekyll inspiré d'[Hydejack](https://github.com/hydecorp/hydejack)
(sidebar sombre, thème clair/sombre, mise en page type CV), reconstruit ici en
Jekyll "pur" (sans dépendre du thème/gem Hydejack lui-même, qui est un thème
payant) pour rester simple à builder et à faire évoluer.

## Ce que répond ce site aux consignes du portfolio

- **Double lecture** demandée par le référentiel (voir `portfolioC.pdf`,
  slide 10) :
  - `/competences/` → lecture par compétences (chaque compétence liste les
    projets qui la mobilisent)
  - `/projets/` → lecture par projets (chaque projet liste les compétences
    mobilisées)
- **Tableau croisé** (slide 11, étape 3) : `/tableau-croise/`, généré
  automatiquement en Liquid à partir des mêmes données (`_projects/` et
  `_competences/`) — aucune double saisie possible.
- **Compétences « pratiques »** (slide 8) : chaque fiche dans `_competences/`
  contient la compétence officielle (`official`) ET sa reformulation pratique
  (`practical` + `tools`), comme demandé.
- **Posture réflexive** (slide 1 et 9 : « Prouver », pas seulement
  « Montrer ») : chaque projet dans `_projects/` a une section « Posture
  réflexive » qui prend du recul critique, pas juste une description.

## Structure

```
_config.yml           configuration du site
_projects/             un fichier .md par projet (BUT1 → alternance CGI)
_competences/          un fichier .md par compétence (3 au total)
_layouts/               gabarits (default, home, page, project, competence)
_includes/              sidebar, head, footer, carte de projet réutilisable
assets/css/main.scss   feuille de style (thème dark/light façon Hydejack)
assets/js/main.js      toggle dark/light
index.md, about.md,
competences.md,
projets.md,
tableau-croise.md      pages de premier niveau
cv/cv.pdf              à remplacer par ton vrai CV
```

## Lancer le site en local

Prérequis : Ruby installé.

```bash
bundle install
bundle exec jekyll serve
```

Le site est ensuite visible sur http://localhost:4000/MonPortfolio/

## Déployer sur GitHub Pages

1. Pousse ce dossier sur la branche `main` de ton repo `MonPortfolio`.
2. Dans les paramètres du repo GitHub → **Pages** → Source : **Deploy from a
   branch**, branche `main`, dossier `/ (root)`.
3. GitHub build automatiquement le site avec le gem `github-pages` (pas
   besoin de GitHub Actions).
4. Vérifie dans `_config.yml` que `url` et `baseurl` correspondent bien à ton
   URL finale (`https://<ton-user>.github.io` + `/MonPortfolio` si le repo ne
   s'appelle pas `<ton-user>.github.io`).

## Pour ajouter un nouveau projet ou une future SAÉ de BUT3

Crée un fichier dans `_projects/`, par exemple `_projects/2026-01-nouvelle-sae.md` :

```yaml
---
title: "Nom du projet"
date: 2026-01-15
period: "BUT3 — S6"
tech: [Techno1, Techno2]
competences: [gerer-donnees, conduire-projet]   # slugs des compétences mobilisées
summary: "Résumé en une phrase."
link: "https://github.com/..."                   # optionnel
---

## Contexte
...

## Réalisations
...

## Compétences mobilisées
...

## Posture réflexive
...
```

Il apparaîtra automatiquement dans `/projets/`, dans les pages des
compétences concernées, et dans le tableau croisé — sans rien modifier
ailleurs.
