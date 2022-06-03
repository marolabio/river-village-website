import Head from 'next/head';

const Meta = ({ title, keywords, description }) => {
  return (
    <Head>
      <meta name='viewport' content='width=device-width, initial-scale=1' />
      <meta name='keywords' content={keywords} />
      <meta name='description' content={description} />
      <meta charSet='utf-8' />
      <link rel='icon' href='/favicon.svg' />
      <title>{title}</title>
    </Head>
  );
};

const keywords = [
  'bolinao pangasinan beach resort',
  'patar beach',
  'resort in bolinao pangasinan',
  'seafood restaurant',
  'bolinao',
  'bolinao beach',
  'bolinao resort',
  'patar bolinao resort',
  'bolinao pangasinan',
  'river village resort',
  'river village resort bolinao',
  'bolinao pangasinan tourist spot',
  'bolinao restaurant',
  'best resort in bolinao',
  'best restaurant in bolinao',
];

Meta.defaultProps = {
  title:
    'River Village Resort And Restaurant: Best Seafood Restaurant in Bolinao | Relaxing Resort Experience',
  keywords: keywords.toString(),
  description:
    'River Village Resort and Restaurant is the perfect place to Eat delicious food, Relax, and Experience village life. Our restaurant serves the best seafood in Bolinao which can be enjoy with family or friends. Come visit us today!',
};

export default Meta;
