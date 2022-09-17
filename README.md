# GUDEV Website

Welcome! First of all thank you for helping make GUDEV a better place by working on this website. Weirdly enough you could call our website one of GUDEVs greatest successes since it actually seems to show up in search results fairly well (we've had one or two people even emailing and thanking us for having a resources list). 

Anyways, I've tried to keep everything as minimalist and clean as possible ( at least what I've seen and written ;) ) and I'd ask you to do the same. This website is built upon [jekyll](https://jekyllrb.com/) which is a static site generator - meaning that there is no logic done like with amazon purchases but instead we have jekyll take our data and html templates and pages to build a set of complete html pages that make a website. Whenever a user visits our site they get exactly the *build* html (you can see this in the `_site` folder btw). We host this project on github pages which actually does some of the work of building and storing the html pages for us. Finally we have a domain https://gudevsoc.com which we point github pages to and this allows us to have a nice url for people to visit.

The rest of this document is mostly just laying out where files for certain tasks live but this can of course change overtime for more simple solutions to making this website.

## Folder Layout and their Functions

Folders with _ are generally folders which contain content that will be put into pages but aren't the pages themselves:
- **_data** :: contains yaml data files which you can reference in the html/md pages
- **_events** :: contains html/md files of events that are upcoming or have been held (used for the events page)
- **_gamedev** :: contains dev logs from year long game dev projects the society has undertaken
- **_includes** :: contains html components that you can insert and use in pages
- **_layouts** :: contains html components that can be filled with content
- **_site** :: the build of the site (no need to touch it but you might want to inspect it to see the end product built by jekyll)

All other folders:
- **pages** :: contains all pages as html that will make up the site (one html page for each of its respective urls)
- **static** :: contains all static content like css/js/images/fonts etc.

## building locally on debian/ubuntu  

```
sudo apt install ruby ruby-dev gem
sudo gem install jekyll bundler
git clone https://github.com/GUDevSoc/Site.git
cd Site
bundle install
bundle exec jekyll serve
```

Then open a browser and goto: localhost:4000

## Help make this readme better!

If you believe that other information should be here or that you didn't quite understand some part of the code then feel free to include it or suggest that it should be included in this document. :)
