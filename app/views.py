from flask import render_template
from app import app
from bs4 import BeautifulSoup
import requests

@app.route("/")
def index():
    try: 
        url = "https://www.tutorialspoint.com/python/index.htm"
        response = requests.get(url)
        soup = BeautifulSoup(response.content, "html.parser")

        ul_tag = soup.find("ul", class_="toc chapters")
        li_tags = ul_tag.find_all("li")
        a_tags = []
        for li_tag in li_tags:
            a_tag = li_tag.find("a")
            if a_tag is not None:
                a_tag_url = f"https://www.tutorialspoint.com{a_tag.get('href')}"
                a_tag_tittle = li_tag.get_text()
                a_tag = {"title": a_tag_tittle, "url": a_tag_url}
                a_tags.append(a_tag)
            else:
                continue

        return render_template("index.html", a_tags = a_tags)
    except:
        return "The page failed to load."