from flask import render_template, Flask

app = Flask("app")

@app.route("/")
def home():
    return render_template("index.html")

@app.route("/level1")
def level1():
    return render_template("index.html")

@app.route("/level2")
def level2():
    return render_template("level2.html")

@app.route("/level3")
def level3():
    return render_template("level3.html")

@app.route("/level4")
def level4():
    return render_template("level4.html")

@app.route("/level5")
def level5():
    return render_template("level5.html")

app.run(host="0.0.0.0", port=8080)