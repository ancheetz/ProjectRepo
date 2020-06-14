from flask import Flask, request, url_for, render_template, redirect

app = Flask(__name__)

@app.route("/")
@app.route("/<name>")
def hello(name=None):
    return render_template("index.html", name=name)

@app.errorhandler(404)
def error404(error):
    return render_template("error.html"), 404   

if __name__== "__main__":
    app.run(host='0.0.0.0', debug= True)