# GraffitiMaps

## Intro
GraffitiMaps is a free and opensource multiplatform project intended to provide a wiki-like platform where to track all the Graffitis in the world with a crowd based approach.

It's free and opensource, respecting the real Streetart and Graffiti ecosystem.

It allows anonymous accounts, to let the artists (or everyone else) share their creations and founds.

It allows any type of content, until it's pertinent to the Streetart's world.
Inappropriate content will be removed from the community itself, once it's active. Until then some volunteer staff will lend their hand for this tasks.

As Graffitis are temporary, they can be deleted, covered or whatever, GraffitiMaps allows to geolocalize every content, so to track the evolution of a place regarding its Graffitis' presence turnover.

As Graffitis can be on the edge, and this technology not used by the authors themselves, 
Artworks attribution to artists is done through a percentile system, which enforce the crowd-based approach of the entire platform.
Anyone can suggest the author of any artwork, and all the authors proposed are displayed with their percentage accordingly. 

Artists and other users share the same privileges and functionalities.
Any user will need to gain respect-points (kudos) within the platform to be able to perform specific actions, like moderating and editing.
But anyone can spot and add an Artwork to the system and suggest additional authors or information for any entry.

### First batch of planned features
- display on map with clusters and info-windows (in progress)
- click on markers opens a filtered gallery with nearby arts (done)
- stream with latest uploads (todo)
- add new arts
- add authors info to arts
- add existing/new tags to arts
- display art details with actions
- add to favourite
- follow artist
- follow user
- personal collection of uploads, favourites and follows

### Second batch of planned features
- display per city/place (todo)
- display per authors
- display per tag
- show activities on each art
- create a personal tour

### General approach
GraffitiMaps has a crowd based approach for

- locating and spotting new artworks
- attributing artworks to authors
- adding information and media to artworks

like an open interactive streetart's enciclopedia.

Just as the streetart is free and open to collaborations, this project aims to inspire and attract
passionate people to collaborate to this project.

DEVELOPERS
Collaborate with us to the creation and future developments of this project.

TRAVELERS
Collaborate with us taking photos, videos of graffitis you find in your journeys and share them with this growing community.

ARTISTS
Collaborate with us uploading your photos, videos, make-of of your arts.

ALL
Correct or add new information, attributions, media to every artworks.

## Architecture
- Meteor 
- Angular4 
- Ionic3 
- Redux Store 
- RxJS
- Angular2-Meteor
- Angular2-Maps
- Angular2-RxJS
- Meteor-RxJS

## Docs reference

- [https://medium.com/@benorama/hybrid-mobile-apps-sharing-logic-between-angular2-and-ionic2-apps-7c32145b90d5]
- [https://angular-meteor.com/tutorials/whatsapp2/ionic/setup]
- [https://github.com/Urigo/meteor-client-bundler]
- [http://xgrommx.github.io/rx-book/index.html]

## Features details

- Map
    - geolocalize user
    - display artworks clusters markers on map
    - zoom in-out from clusters to artworks
    - display artworks markers on map
    - display artwork marker infowindow
    - navigate to artwork page
    - search bar
        - search location on map to display filtered artworks by that location
        - search authors or artworks on map to display filtered artworks
    - add new artwork button
        - add new marker
        - drag marker to desired position
        - confirm position
        - open new artwork modal 
            - upload images
            - add author(s)
            - add information
        - save new artwork
- Gallery
    - display a pills navigation to different galleries
        - display masonry-like stream by last published
            - search bar
                - search for authors or artworks to display a filtered stream
        - display list of cities of interest / display a Add new city page
            - display filtered masonry-like stream filtered by that city location
                - search bar
                    - search for authors or artworks to display a filtered stream within that location
        - display grid of follows / display a Add someone to follow page
            - display filtered masonry-like stream filtered by that profile collection
                - search bar
                    - search for authors or artworks to display a filtered stream within that profile collection

    - add new artwork button
- Artwork Page
    - display artwork media gallery
    - display artwork authors with probability percentage based on users' attributions
    - display artwork tags
    - display artwork information
    - display related artworks gallery
    - suggest an author button
    - suggest more information button
- Profile Page

- Add city of interest Page
- Add someone to follow Page
- Suggest an author Page
- Suggest information Page