from flask import Flask, render_template
import data_manager

app = Flask(__name__)


@app.route('/')
def hello_world():
    return render_template('index.html')


@app.route('/jatek')
def play_game():
    selected_words = data_manager.get_random_words(20)
    return render_template('game.html', words=selected_words)


@app.route('/szavak')
def show_words():
    words_ly = data_manager.get_words_from_file("LY.txt")
    words_j = data_manager.get_words_from_file("J.txt")
    return render_template('words.html', words_ly=words_ly, words_j=words_j)


if __name__ == '__main__':
    app.run()
