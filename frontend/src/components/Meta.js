import React from 'react'
import { Helmet } from 'react-helmet'

const Meta = ({ title, description, keywords }) => {
	return (
		<Helmet>
			<title>{title}</title>
			<meta name='description' content={description} />
			<meta name='keywords' content={keywords} />
		</Helmet>
	)
}

Meta.defaultProps = {
	title       : "Welcome to Logan's",
	description : 'We sell cold beer, wine and spirits',
	keywords    : 'beer, beer store, cold beer, cold beer and wine, wine store, spirits store'
}

export default Meta
