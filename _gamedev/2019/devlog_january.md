---
layout: base

title: Developer Log - January 2020
description: Check out post-Christmas progress!

fov_images:
- path: /static/images/devlog_jan2020/pov0.jpg
  caption: Hard at work trying to figure out how the mechanic should work in a variety of cases
- path: /static/images/devlog_jan2020/pov2.jpg
  caption: Debugging the initial version
- path: /static/images/devlog_jan2020/pov3.png
  caption: The current, much more polished version!

robot_images:
- path: /static/images/devlog_jan2020/robot_in_progress_blueprint.jpg
  caption: The robot / player blueprint -> model conversion
- path: /static/images/devlog_jan2020/robot_in_progress.jpg
  caption: Fortunately it's made out of simple shapes, so modelling was quite easy!
- path: /static/images/devlog_jan2020/robot_model_finished.png
  caption: The finished product!

alien_images:
- path: /static/images/devlog_jan2020/alien_in_progress.jpg
  caption: Working title - 'baguette'
- path: /static/images/devlog_jan2020/alien_render.png
  caption: Another cool rendered sketch by Frettini - Nicolae

npc_images:
- path: /static/images/devlog_jan2020/npc_in_progress_blueprint.jpg
  caption: The base NPC model undergoing the same modelling process
- path: /static/images/devlog_jan2020/npc-scn.png
  caption: The nearly complete model!
- path: /static/images/devlog_jan2020/npc_movement.gif
  caption: Thinking about how NPCs will move (should they have knees or not?)

spaceship_images:
- path: /static/images/devlog_jan2020/shipconcept1.jpg
  caption: Spaceship indoors concepts by amadeuszbx
- path: /static/images/devlog_jan2020/shipconcept2.jpg
  caption: Spaceship indoors concepts by amadeuszbx

misc_images:
- path: /static/images/devlog_jan2020/session_intro.jpg
  caption: Nico bringing us all up to speed during our first dev session after Christmas
- path: /static/images/devlog_jan2020/the_gang.jpg
  caption: The gang of regulars!

---
# {{ page.title }}

It's been a while! Let's get right to it!

Due to exams and Christmas, we didn't make a whole lot of progress during December. So this log will update you on the progress we made during January (with some December tidbits mixed in).

### See the World Through My Eyes
The character squad was busy implementing and perfecting one of the core mechanics - **field of vision**. This turned out to be quite the complicated task due to the amount of maths and shaders involved.

{% include improved_gallery.html images=page.fov_images colspan="4" %}

But our coders managed to prevail! We now have a mostly-functional FOV system that hides other players / NPCs when they are outside the player's view.

{% include video.html url="https://i.imgur.com/0j4oi2X.mp4" caption="The current FOV status. The yellow cube is an NPC!" %}

More than that, our coders also managed to implement a rudimentary **possession system**! The idea is that the alien can possess any NPC and move around in their flesh until it outlives its usefulness or the alien decides to dispose of it.

{% include video.html url="https://i.imgur.com/sE0FxxM.mp4" caption="The alien possesses and NPC and then switches back to its original form" %}

Going forward, the character squad will focus on polishing this system and also putting some actual NPCs into the game.

### It's Not Ugly It's Low-poly
The art squad, meanwhile, worked hard on converting their initial blueprints into full-fledged 3D models that can be later rigged, animated and textured.

First, our player model, the lovable security officer robot:

{% include improved_gallery.html images=page.robot_images colspan="4" %}

In case you want to see the model in detail, check out this Sketchfab embed!

<div style="display: flex; justify-content:center;">
  <div class="sketchfab-embed-wrapper">
      <iframe title="A 3D model" width="640" height="480" src="https://sketchfab.com/models/82d1c77b06934854b54f810fd468b5a9/embed?autospin=0.2" frameborder="0" allow="autoplay; fullscreen; vr" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>
  </div>
</div>

Then we have our alien model, which is somewhat more complex. We decided to simplify it down a bit in order to make modelling and other tasks easier. Also included is a complimentary alien sketch render.

{% include improved_gallery.html images=page.alien_images colspan="6" %}

Last but not least, the base NPC model. Very striking and stylish, though deceptively difficult to model! There are also some other considerations such as "how should our NPCs actually move given their weird legs?"

{% include improved_gallery.html images=page.npc_images colspan="4" %}

### The Next Steps

We're hopefully on track towards our first actual prototype. What that means is eventually putting the individual pieces together so that we have something so present to the general public. 

{% include improved_gallery.html images=page.spaceship_images colspan="6" %}

Speaking of which, we actually have some people from the industry ([Blazing Griffin](https://www.blazinggriffin.com/)) coming in to have a look at our game and give us some valuable feedback! 

{% include improved_gallery.html images=page.misc_images colspan="6" %}

There's quite a few people involved in the development now and although circumstances (such as uni) often pull some of us away, we still manage to get things done. And so, hopefully, we will actually manage to finish our game one day!