const keystone = require('keystone');

exports = module.exports = (req, res) => {

	const view = new keystone.View(req, res)
	let locals = res.locals

	// locals.section is used to set the currently selected
	// item in the header navigation.
	locals.section = 'home'

	// Render the view
	view.render('index')
}
