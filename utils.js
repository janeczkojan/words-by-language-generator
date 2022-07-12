const fs = require('fs');


const UTF8 = 'utf8';
const WORDS_FOLDER = './words/';
const WORDS_NOT_FOUND = 'Words not found';
const LANGUAGES_NOT_FOUND = 'Languages not found';


const response = (success = false, data = null, error = '') => ({ success, data, error });
const errorResponse = (error = '', data = null) => response(false, data, error);
const successResponse = (data = null) => response(true, data, '');


const getLanguages = () => new Promise((resolve, reject) => {
	fs.readdir(WORDS_FOLDER, (err, files) => {
		if (err || !files) {
			reject(LANGUAGES_NOT_FOUND);
		} else {
			resolve(files.map((fileName) => fileName.replace('.txt', '')));
		}
	});
});


const getWordsByLanguage = (lang) => new Promise((resolve, reject) => {
	fs.readFile(`${WORDS_FOLDER}/${lang}.txt`, UTF8, (err, data) => {
		if (err || !data) {
			reject(WORDS_NOT_FOUND);
		} else {
			const words = data.split('\n');

			resolve(words);
		}
	});
});


module.exports = {
	response,
	errorResponse,
	successResponse,
	getLanguages,
	getWordsByLanguage
};
