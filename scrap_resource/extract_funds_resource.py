import requests
from bs4 import BeautifulSoup
import json
import re

query_url = "https://www.change.org/search?q=stop+asian+hate"
resp = requests.get(query_url)
soup = BeautifulSoup(resp.content, features="lxml")
items = soup.find_all("div", {"class": "search-result"})
details = soup.find_all("div", {"class": "type-ellipsis type-weak mbxxs xs-mtxs xs-mbn"})
all_titles = soup.find_all("h3", {"class": "mtn mbn prxs xs-mbs"})
all_imgs = soup.find_all("div", {"class": "flex-embed-ratio flex-embed-16x9"})
all_petitions = {}
i = 0
for item in items:
    peti = {}
    peti["url"] = "https://www.change.org" + item.contents[0].attrs["href"]
    peti["petition_to"] = details[i].contents[0].contents[0]
    title = all_titles[i].contents
    full_title = ""
    for words in title:
        full_title = full_title + str(words)
    peti["title"] = re.sub(r"<?/*mark>", "", full_title)
    img_url = all_imgs[0].contents[0].attrs["style"]
    peti["img_url"] = "https:" + img_url[img_url.find("('")+2:-2]
    all_petitions["petitions_no"+str(i)] = peti
    i = i + 1

base_path = "../frontend/src/Components/fetchPetitions/"
with open(base_path + "all_petitions.json", 'w') as outfile:
    json.dump(all_petitions, outfile, sort_keys=True, indent=4)