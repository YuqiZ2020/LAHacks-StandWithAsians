import json
from newsplease import NewsPlease

def article_to_dict(article):
    d = article.__dict__
    d["date_publish"] = str(article.date_publish)
    d["date_download"] = str(article.date_download)
    return d

def write_article_json(article):
    d = article_to_dict(article)
    with open(base_path + d['title'] + '.json', 'w') as outfile:
        json.dump(d, outfile, sort_keys=True, indent=4)


article_url = 'https://www.nbcnews.com/news/us-news/people-across-u-s-protest-anti-asian-hate-following-deadly-n1261677'
article = NewsPlease.from_url(article_url, timeout=5)
print(article.title)

base_path = "D:/LA-Hacks-2021/"
write_article_json(article)