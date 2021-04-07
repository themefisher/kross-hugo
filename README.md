# Easy Setup (Hugo + Netlify + Forestry)
Build your website with kross hugo theme by following this easy steps (No Coding Required)

<a href="http://bit.ly/meghna-hugo-installation" target="_blank" title="meghna hugo installation" rel="nofollow"><img width="100%" src="https://user-images.githubusercontent.com/37659754/70844354-4028be00-1e6a-11ea-8d84-02e9a25e7db8.png"></a>

In this tutorial we will show you to make your website live without buying any hosting and touching a single line of code. We made this tutorial based on [meghna hugo](https://github.com/themefisher/meghna-hugo) but you can setup everything like this.

### What you need !!

1. Git account (Ex: Github, Gitlab etc ) . In our case we use github.
2. [Netlify](https://bit.ly/netlify-account) account to host files and add custom domain .
3. [Forestry](https://bit.ly/forestry-account) account to maintain whole project without code.


### Step 1 : Fork or Clone repository

First we will fork this [kross hugo](https://github.com/themefisher/kross-hugo) template.

### Step 2 : Add your repository in Forestry

Go to your [forestry](https://bit.ly/forestry-account)  account and click on `import your site now`. declare your config.toml file [`exampleSite`] and fill up basic settings .

**Or just click this button for one click installation** [![import to forestry](https://assets.forestry.io/import-to-forestryK.svg)](https://app.forestry.io/quick-start?repo=themefisher/kross-hugo&engine=hugo&version=0.60.1&config=exampleSite)

Now mark everything as done, then go to configuration to change the base url . You can put any url but this have to similar as netlify . So for now put a name which you are going to put in netlify as netlify subdomain.

### Step 3 : Setup and host website with Netlify

Here comes the last step . Go to your [netlify](https://bit.ly/netlify-account) account and click add new site . Choose your git repository to import your website in netlify .  And now you can see the forked `kross hugo` theme. select it and follow the steps. Then go to `site settings` for change the site name and put your subdomain name here what you put on forestry as base url. save it and go to `deploy` from top menu, Wait a while and click on `site preview` or just simply go to the subdomain you put as base url. **BOOM! Your site is live.** Now you can go to forestry and add, remove or customize every setting and content.

> If you face any issue regarding the installation feel free to onen [open a new issue](https://github.com/themefisher/kross-hugo/issues)


## Table of Contents

- [Demo](#demo)
- [Quick Start](#quick-start)
- [Installation](#installation)
- [Reporting Issues](#reporting-issues)
- [Technical Support or Questions](#technical-support-or-questions-(paid))
- [Licensing](#licensing)
- [More Hugo Themes](https://themefisher.com/hugo-themes/)

## Demo

| Homepage  | About  | Blog  | Portfolio  | Contact  |
|---|---|---|---|---|
| ![Homepage](https://user-images.githubusercontent.com/37659754/58154295-1a9c5300-7c93-11e9-992c-ad8d2ff8d99f.png) | ![About](https://user-images.githubusercontent.com/37659754/58154317-28ea6f00-7c93-11e9-914b-b7e5f1cdab0e.png) | ![Blog](https://user-images.githubusercontent.com/37659754/58154339-369ff480-7c93-11e9-9568-53b7ebdc6b2d.png) | ![portfolio](https://user-images.githubusercontent.com/37659754/58154368-491a2e00-7c93-11e9-8900-f5a6abe0a61d.png) | ![contact](https://user-images.githubusercontent.com/37659754/58154403-57684a00-7c93-11e9-9cea-ea28253a6f6a.png) |

**The images are only for demonstration purpose, Please don't use those images.**

[Live Preview](http://demo.themefisher.com/kross-hugo/).

## Quick Start
Quick start options:

- Clone the repo: `git clone https://github.com/themefisher/kross-hugo.git`.
- [Download from Github](https://github.com/themefisher/kross-hugo/archive/master.zip).
- [Download from themefisher website](https://themefisher.com/products/kross-creative-portfolio-template).

## Installation
At the top we have shown an easy hugo installation. but still if you think you want to go with the traditional way then use the following commands:

```
$ git clone git@github.com:themefisher/kross-hugo.git
$ cd kross-hugo/exampleSite/
$ hugo server --themesDir ../..
```
Or Check out [Full Documentation](https://docs.gethugothemes.com/kross/?ref=github).


## Reporting Issues

We use GitHub Issues as the official bug tracker for the **Kross Theme**. Please Search [existing issues](https://github.com/themefisher/kross-hugo/issues). It’s possible someone has already reported the same problem.
If your problem or idea is not addressed yet, [open a new issue](https://github.com/themefisher/kross-hugo/issues/new)

## Technical Support or Questions (Paid)

If you have questions or need help integrating the product please [contact us](mailto:mehedi@themefisher.com) instead of opening an issue.

## Licensing

Copyright &copy; 2020 Designed by [Themefisher](https://themefisher.com) & Developed by [Gethugothemes](https://gethugothemes.com)

**Code License:** Released under the [MIT](https://github.com/themefisher/kross-hugo/blob/master/LICENSE) license.

**Image license:** The images are only for demonstration purposes. They have their own licence, we don't have permission to share those image.



## Premium Themes

| [![Mega-Bundle-HUGO](https://gethugothemes.com/wp-content/uploads/edd/2019/09/Mega-Bundle-HUGO.png)](https://themefisher.com/products/hugo-mega-bundle/) | [![Phantop](https://gethugothemes.com/wp-content/uploads/edd/2019/06/Phantom.jpg)](https://gethugothemes.com/products/phantom-hugo-theme/) | [![redlab](https://gethugothemes.com/wp-content/uploads/edd/2019/09/redlab-hugo-thumbnail.jpg)](https://gethugothemes.com/products/redlab-hugo/) |
|:---:|:---:|:---:|
| **Hugo Mega Bundle**  | **Phantom**  | **Red Lab**  |
