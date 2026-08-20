from flask import Flask, render_template

app = Flask(__name__)


@app.route("/")
def index():
    return render_template("index.html")


@app.route("/historia")
def historia():
    return render_template("historia.html")


@app.route("/memorias")
def memorias():
    return render_template("memorias.html")


@app.route("/cartas")
def cartas():
    return render_template("cartas.html")


if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000, debug=True)
