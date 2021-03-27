# LAHacks21
_LA Hacks 2021 Project Repo - Stop Asian Hate_

We are building a community that fosters care and understandings. We offer a chance for asians to share our culture and story. We provide resources such as news, events, petitions and helps for asians. 

### Key Features

#### News

We offer related news, tweets and petitions regarding stopping asian hate. 

#### Gallery

Users can upload images representing their culture. Admin will review the images and the approved images will be displayed on the webpage. 

#### Forum

#### Resources

### Technical Details

#### Webpage Implementation with ReactJS

#### Extract Related News
The news are extracted from https://newsapi.org/, which we displayed related news to Stop Asian Hate movements. For tweets, we take advantage of the Twitter api and Twit package. 

#### Data Storage with Google Firebase

The image gallery and discussion forum both utilize firebase to implement data storage. We used storage to store files such as images, which generates a download url for the gallery to access the image file. The url is stored in firestore for access. The text-based information in the forum are also stored in firestore. 
