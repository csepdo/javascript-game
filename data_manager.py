import random


def get_words_from_file(filename):
    with open(filename, encoding='utf-8') as words:
        lines = words.readlines()
        all_words = [word.strip() for word in lines]
    return all_words


def get_words_for_game(filename):
    with open(filename, encoding='utf-8') as words:
        lines = words.readlines()
        words_for_game = [word.strip() for word in lines]
    return words_for_game


def get_random_words(number):
    words_for_game = get_words_for_game("all_words.txt")
    selected_words = random.sample(words_for_game, number)
    return selected_words
