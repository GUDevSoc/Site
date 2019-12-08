---
layout: base
permalink: /devlog/november2019/index.html

alien_concept_images:
- path: /devlog/november2019/img/alien_concepts.png
  caption: Friends by Frettini - Nicolae
- path: /devlog/november2019/img/alien_concept.png
  caption: The concept art of the alien by Oaster | Owen
- path: /devlog/november2019/img/the_thing_concept.jpg
  caption: octofriend by sworddance
- path: /devlog/november2019/img/alien_crawl.gif
  caption: lil crawl by sworddance

other_concept_images:
- path: /devlog/november2019/img/fov_concept.png
  caption: FOV concept by Patsonical | Patryk Kaczmarczyk
- path: /devlog/november2019/img/corridor_concept.png
  caption: Corridor concept by amadeuszbx
- path: /devlog/november2019/img/room_concept.png
  caption: 3D top down view concept by amadeuszbx
- path: /devlog/november2019/img/space_guy_concept.png
  caption: Security officer concepts by Frettini - Nicolae

fov_images:
- path: /devlog/november2019/img/fov_whiteboard.jpg
  caption: Turns out you actually need math for gamedev sometimes
- path: /devlog/november2019/img/fov_ingame.jpg
  caption: The initial version of FOV in-game. Notice how the vision is blocked by solid objects

eel_images:
- path: /devlog/november2019/img/eel_work.jpg
  caption: One of our artists hard at work on a more detailed concept art for the alien
- path: /devlog/november2019/img/eel_blueprint.png
  caption: The blueprint which will be turned into a 3D model soon
- path: /devlog/november2019/img/eel_model.jpg
  caption: Eel model in the process of creation. You can also see the initial sketch of our security officers
- path: /devlog/november2019/img/eeeeel.png
  caption: Another use for our eel blueprint by KinRyuu - Tom

robot_images:
- path: /devlog/november2019/img/robot_sketch.jpg
  caption: The initial sketch of our mechanical security officers
- path: /devlog/november2019/img/robot_blueprint.jpg
  caption: The sketch being made into a blueprint in Inkscape

npc_images:
- path: /devlog/november2019/img/npc_concepts.jpg
  caption: Initial concepts of NPCs by Frettini - Nicolae
- path: /devlog/november2019/img/npc_blueprint.jpg
  caption: NPC base blueprint
- path: /devlog/november2019/img/npc_model.png
  caption: The provisional NPC model, T-posing menacingly by Oaster | Owen

---
# GUDEV DevLog - November 2019
_At the beginning, there was an idea._

The thought of creating a game that all members of our society would work on for the whole of academic year has been around for quite some time. This year, we finally decided to give it a proper try.

And so, welcome to our long and perilous journey of discovery!

Of course, to develop a game, we have need an idea first.

## Ideation - the Easy Part
We dedicated our first two sessions to brainstorming game ideas and then further refining them. To get our creative juices flowing, we played a version of [**Consequences**](https://en.wikipedia.org/wiki/Consequences_(game)) where we tried to produce interesting game proposals by having people write down words / phrases and then pass the paper to person next to them. Each idea consisted of parts like:

* Theme
* Genre
* Mechanic
* Limitation
* Twist
* ...

{% include image.html url="/devlog/november2019/img/consequences.png" caption="OC GUDEV 2019, donut steel" %}

The result? A bunch of weird game ideas such as:

>The Earth has been destroyed. The last surviving human tribes living on the Moon engage in wars over resources (cats) they can gather (by petting them).

>A dating sim where you play as a literal lady killer who can guess the "right answers" by using their telephatic abilities... which diminish over time!

This fun exercise got us primed and ready to come up with several serious proposals and pitch them to see which would be the most popular one. It was very close, but eventually we settled on the core idea for our year-long game:

>**"It's kind of like Alien meets Hitman meets Star Trek meets Faster than Light"**

Not much to go initially, but it was a start. 

Our second session was all about refining this basic idea. We came up with a number of possibilities and mechanics, trying to reach some sort of consensus. Turns out getting people to express their ideas and then merge them together in a way that everyone is (kinda) happy with is hard!

{% include image.html url="/devlog/november2019/img/game_concept.jpg" caption="Thinking up ideas is admittedly the easier part of game development" %}

After a long couple of hours, we established a few key features of the game and put together a very basic design document. Since it's still very much a work in progress, let me give you the general outline for now:

>In deep space, a spaceship plots its course through the stars. But, unknown to the crew, an Alien presence stowed away on board is about to wake up. Hitman meets The Thing in this game of cat and mouse, where anyone could be secretly controlled by an alien.   
As the alien, the player will use their abilities to pass themselves off as human, all while plotting the destruction of the crew.   
As a security officer, the player must track down and eliminate the alien threat before it’s too late. Maybe by quarantining suspicious crew members, or perhaps crawling through the air ducts to find the alien at its weakest. All while trying to keep the spaceship on course and running.

## Planning and Concept Art

An academic year is not a whole lot of time to develop a full-fledged game, especially when accounting for holidays and coursework deadlines. We soon realised that having a plan in place would help us track our progress and see how much time we have left. And so we came up with a very rough timeline:

{% include image.html url="/devlog/november2019/img/game-timeline.jpg" caption="Something tells me that three months from now we're gonna look back at this and laugh" %}

We were ready to get started!

As you might expect, everyone was hyped for our first development session. During the preceeding week, several of our talented members came up with a a lot of concept art. For example, some really liked our initial alien idea:

{% include improved_gallery.html images=page.alien_concept_images colspan="3" %}

Others came up with concepts for the environment, players and mechanics:

{% include improved_gallery.html images=page.other_concept_images colspan="3" %}

## Development Kickoff
We started our development proper around the middle of November. During our first meeting, we split up into three squads:
* 👨🏽‍🚀 **Character squad** (scripting PCs, NPCs and everything they interact with)
* ✨ **Art squad** (making the game not painful to look at)
* 🚀 **Level design squad** (the one man army)

And off we went!

{% include image.html url="/devlog/november2019/img/dev_session.jpg" caption="Our first dev session" %}

### Character Squad Progress
Our coding team did quite a lot of work during the few November dev sessions! By now we have basic character controls in place as well as a _nearly-top-down-but-not-quite_ camera following the player. 

{% include video.html url="https://i.imgur.com/i6xD8Qm.mp4" caption="Basic player movement and camera" %}

The team then took a stab at creating one of the core mechanics in our game - the field of view. The idea is that players will have their sight limited to a cone. This is to make sure that security officers cannot see the whole room at once, giving the alien a chance to move around undetected.

{% include improved_gallery.html images=page.fov_images colspan="6" %}

All in all, a great job by our programmers who are now working on win / lose conditions, interaction with the ship's environment and rudimentary AI for NPCs.

### Level Squad Progress
Have you noticed that beatiful room in the video above? That's the work of our level squad! Using Unity Snaps asset pack, they created a basic room with several objects that can be used to test a lot of mechanics we have in mind.

{% include video.html url="https://i.imgur.com/q3sTrdW.mp4" caption="Our first room of many" %}

Going forward, this squad will be tasked with building the rest of the ship in a way that makes it small enough to be manageable by the security officers and large enough to provide enough hiding places for the alien.

### Art Squad Progress
Last but definitely not least, the art squad has the difficult task of manifesting our wild ideas in 2D/3D form. In coming up with the visual theme of the game, they decided to put together an inspiration board first.

{% include image.html url="/devlog/november2019/img/vision_board.jpg" caption="Good artists copy, great artists steal" %}

It was interesting to see how our initial ideas changed and evolved over time. Take the alien, for example. We started out thinking it should be some kind of octopus. But that body type would be difficult to rig and animate. And so we changed our mind and decided to go with the "eel-friend" concept. It still looks positively alien and will be much easier to work with.

{% include improved_gallery.html images=page.eel_images colspan="3" %}

At some point, we also agreed to make the security officers robots. It makes sense because the way the alien will take control of the NPCs is by posessing them, reverse [chestburster style](https://steamuserimages-a.akamaihd.net/ugc/296482365538987515/7296FA1567A5EEF3FD856941483FDA9925CA1514/). Our mechanical peacekeepers are therefore safe from the vicious lifeform.

{% include improved_gallery.html images=page.robot_images colspan="6" %}

The NPCs also deserved some of our art love, mostly because of the terrible fate that awaits them in-game.

{% include improved_gallery.html images=page.npc_images colspan="4" %}

As you can see, there is still plenty of work to be done by our art team. Fortunately, they can take all the time they need as we won't need finished models until a fair bit later in the development.

## Moving on
We are nearing the deadline for our first Minimum Viable Product with many boxes yet unchecked. However, given we only meet up for ~3 hours per week, the progress we have made is pretty impressive. 

The starting exam period coupled with the holidays will put a damper on our progress during December. That being said, some of us are eager to work on the game during our free time, making up for some of that.

We hope you enjoyed reading our first devlog! If you would like to track our progress in more detail, feel free to join our [**Discord**](https://discord.gg/DhT3XgU)
 or our [**Facebook**](https://www.facebook.com/gudevsoc/)
 group!

