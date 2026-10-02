import { Helmet } from 'react-helmet-async'
export default function Seo({ title, description }) {
  return (
    <Helmet>
      <title>{title} | Antixor Building</title>
      <meta name="description" content={description} />
    </Helmet>
  )
}
