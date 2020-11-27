---
layout: base
permalink: /gamedev/
---

# First Contact - GUDEV's Year-long Game

## (No longer in development)

## What?
Our society has decided to create a complete game from scratch! The title comes from the fact that our members will be working on the game for the entire academic year. Think of it as an extremely long GameJam without the sleep deprivation.

## How?
We have weekly meetings where we work on the game for about 3 hours. It is a completely voluntary activity although some members have comitted to working on the project during their free time as well.

## Can I Join?
Absolutely! The easiest way is to come to one of our sessions - check our [**Discord**](https://discord.gg/DhT3XgU) or [**Facebook**](https://www.facebook.com/gudevsoc/) to see our upcoming development sessions.

***
# Updates

<div class="container">
{% for post in site.gamedev %}
  <h1><a href="{{ post.url }}">{{ post.title }}</a></h1>
  {{ post.description }}
{% endfor %}
</div>