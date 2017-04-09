# InstaPanorama
Split wide or panoramic image for Instagram.

It's nodesjs app

Installation
=======================================
`brew install imagemagick`

`brew install graphicsmagick`

`npm install`

More information: https://www.npmjs.com/package/gm

Usage 1
=======================================
Change in the index.js two params:

`imgFile = "image.jpg";`

`parts = 4;`


Usage 2
=======================================
Use two start params <path_to_image_file> <number_of_parts> :

`npm start image.png 3`



As result you will get 4 files in same folder. Use images for post in Instagram with multiple images in post. 



Release notes
=======================================
**2.1.0**
* Add two start params: <path_to_image_file> <number_of_parts>


**1.0.0**
* Split image
* Performance: 6Mb / 4 part: 2.6 sec 



![InstaPanorama](https://github.com/ichuyko/instapanorama/blob/master/about.png "InstaPanorama")
