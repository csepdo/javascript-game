from flask import Flask, render_template, request
import data_manager
import json

app = Flask(__name__)


@app.route('/')
def hello_world():
    return render_template('index.html')


@app.route('/jatek', methods=["GET"])
def play_game():
    word_number = int(request.args.get('word-number', 10))
    selected_words = data_manager.get_random_words(word_number)
    words_ly = json.dumps(data_manager.get_words_from_file('LY.txt'))
    words_j = json.dumps(data_manager.get_words_from_file('J.txt'))
    return render_template('game.html', words=selected_words, words_ly=words_ly, words_j=words_j)


@app.route('/szavak')
def show_words():
    words = {'words_ly': data_manager.get_words_for_game_json("LY.txt"),
             'words_j': data_manager.get_words_for_game_json("J.txt")}
    return render_template('words.html', words_ly=words['words_ly'], words_j=words['words_j'])


if __name__ == '__main__':
    app.run()
