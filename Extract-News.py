import json
from newsplease import NewsPlease
import requests
from bs4 import BeautifulSoup

search_keyword = "asian"
url = "https://news.google.com/rss/search?pz=1&cf=all&hl=en-US&q=" + search_keyword + "&cf=all&gl=US&ceid=US:en"
resp = requests.get(url)
soup = BeautifulSoup(resp.content, features="xml")
items = soup.find_all("link")
news_urls = []
num_article = 5
for i in range(1, num_article + 1):
    news_urls.append(items[i].contents[0])
print(news_urls)


def article_to_dict(article):
    d = article.__dict__
    d["date_publish"] = str(article.date_publish)
    d["date_download"] = str(article.date_download)
    return d

def write_article_json(article):
    d = article_to_dict(article)
    with open(base_path + d['title'] + '.json', 'w') as outfile:
        json.dump(d, outfile, sort_keys=True, indent=4)


base_path = "./"
for i in range(1, num_article + 1):
    article = NewsPlease.from_url(news_urls[i], timeout=5)
    print(article.title)
    # write_article_json(article)


