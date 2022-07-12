const { getLanguages, getWordsByLanguage, successResponse, errorResponse } = require('./utils');


module.exports = [
	{
		url: '/languages',
		action: async (req, res) => {
			try {
				const langs = await getLanguages();

				res.json(successResponse(langs));
			} catch (err) {
				res.json(errorResponse(err));
			}
		}
	},
	{
		url: '/words/:lang',
		action: async (req, res) => {
			const { lang } = req.params;
		
			try {
				const words = await getWordsByLanguage(lang);
				
				res.json(successResponse(words));
			} catch (err) {
				res.json(errorResponse(err));
			}
		}
	}
];

