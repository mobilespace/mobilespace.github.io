# MobileSpace - v1 website 

MobileSpace is a weekly meetup in San Francisco to enable developers to build their own mobile apps with an excellent in-person community to teach and help accelerate their projects to completion.

This was `v1` for the MobileSpace website. You can check it out live [here](http://mobilespace.github.io). Also I blogged about my experience starting MobileSpace and you can ready it [here](https://medium.freecodecamp.org/mobilespace-a-passion-story-9dbc8afd5221).

Since then, as part of MobileSpace Season 2 a new rewamped website was designed and built by Monte Thakkar. You can check it out live [here](http://mobilespace.xyz).

Below are the screen captures of **MobileSpace.xyz v1**:

![MobileSpace v1- Home Page](https://i.imgur.com/YuSBnAa.jpg)
![](https://i.imgur.com/lZOmcbi.png)
![](https://i.imgur.com/2C9YQ3f.png)
![](https://i.imgur.com/GPsBHcI.png)

### Links: 
- [Github](https://github.com/mobilespace?tab=repositories)
- [Youtube](https://www.youtube.com/channel/UC7XL46a5L85tcFR6Zf7ktBg)

# Local Development

## Setup

This is a [Jekyll site](https://jekyllrb.com/) powered by [Github Pages](https://pages.github.com/).

First things first, make sure you are added as a contributor to this repo. Reach out to [Monte Thakkar](https://github.com/monte9/) if you need access.

Try `ssh-add ~/.ssh/id_rsa` to authenticate the added SSH key on your local machine.

Also make sure you have added the ssh key to your local keychain. This will allow you to push changes to the repo directly from your terminal. To setup multiple SSH keys, follow [this guide](https://gist.github.com/jexchan/2351996). Also [this](https://help.github.com/articles/adding-a-new-ssh-key-to-your-github-account/) and [this](https://help.github.com/articles/reviewing-your-ssh-keys/) are useful Github guides to setting up SSH on your computer.

## Running it

- `bundle exec jekyll serve` to start the local dev server
- http://127.0.0.1:4444/ to access the website

## Deploy

Since this website is hosted using Github Pages, the changes get deployed automatically when you commit and push to Github. Also check the last commit status to see if there was any error or if it deployed successfully.

# Credits

Website theme is [StellarEnhanced](https://github.com/auv-iitk/auv-iitk.github.io) a Jekyll blog based on [Stellar](https://html5up.net/stellar).

# License

Copyright [2017] [MobileSpace]

Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at

http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.
