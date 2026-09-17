---
layout: page
title: "Compétences"
subtitle: "Lecture par compétences — le référentiel national traduit en compétences pratiques"
---

Les compétences du référentiel national BUT Informatique sont volontairement
théoriques, pour couvrir des parcours très différents. Je les ai reformulées
en version pratique (outils, méthodes concrets) tout en gardant un niveau
d'abstraction suffisant pour qu'elles restent valables sur les 3 années.

<div class="grid grid-3">
{% assign comps = site.competences | sort: "order" %}
{% for c in comps %}
<a class="card competence-card" href="{{ c.url | relative_url }}">
  <span class="badge">Compétence {{ c.order }}</span>
  <h3>{{ c.title }}</h3>
  <p>{{ c.practical }}</p>
  {% assign n = site.projects | where_exp: "p", "p.competences contains c.slug" | size %}
  <span class="count">{{ n }} projet{% if n > 1 %}s{% endif %} associé{% if n > 1 %}s{% endif %}</span>
</a>
{% endfor %}
</div>
