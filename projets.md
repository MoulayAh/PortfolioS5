---
layout: page
title: "Projets"
subtitle: "Lecture par projets — de la 1ère année à l'alternance"
---

<div class="grid grid-2">
{% assign projects = site.projects | sort: "date" | reverse %}
{% for p in projects %}
  {% include project-card.html project=p %}
{% endfor %}
</div>
