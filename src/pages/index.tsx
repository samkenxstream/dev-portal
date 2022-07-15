import { GetStaticProps } from 'next'
import HomePageView from 'views/homepage'
import { generateStaticProps } from 'views/homepage/server'

export const getStaticProps: GetStaticProps = async () => {
	const contentJsonFile = 'src/content/home-page.json'
	return generateStaticProps(contentJsonFile)
}

export default HomePageView
