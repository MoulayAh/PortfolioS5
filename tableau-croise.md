---
layout: page
title: "Tableau croisé"
subtitle: "Projets × Compétences — vue d'ensemble de la démarche portfolio"
---

Ce tableau croise l'ensemble des projets réalisés durant le BUT avec les
trois compétences du référentiel national. Il est généré automatiquement à
partir des mêmes données que les pages « Compétences » et « Projets » : pas
de double saisie, donc pas de risque d'incohérence entre les vues.

<div class="table-wrapper">
<table class="crossed-table">
  <thead>
    <tr>
      <th>Projet</th>
      <th>Période</th>
      {% assign comps = site.competences | sort: "order" %}
      {% for c in comps %}<th>{{ c.title }}</th>{% endfor %}
    </tr>
  </thead>
  <tbody>
    {% assign projects = site.projects | sort: "date" %}
    {% for p in projects %}
    <tr{% if p.featured %} class="featured-row"{% endif %}>
      <td><a href="{{ p.url | relative_url }}">{{ p.title }}</a></td>
      <td>{{ p.period }}</td>
      {% for c in comps %}
        <td class="cell">
          {% if p.competences contains c.slug %}<span class="dot dot-on" title="{{ c.title }}">●</span>
          {% else %}<span class="dot dot-off">—</span>{% endif %}
        </td>
      {% endfor %}
    </tr>
    {% endfor %}
  </tbody>
</table>
</div>

<p class="legend">La ligne surlignée correspond au projet phare de 3ème année (alternance CGI), pièce centrale de ce portfolio tant que d'autres SAÉ de BUT3 ne sont pas venues l'enrichir.</p>
