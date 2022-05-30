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
  'bolinao resort',
  'bolinao resort pangasinan',
  'patar beach bolinao resort',
  'patar bolinao resort',
  'bolinao resort cheap',
  'natures camp bolinao',
  'bolinao pangasinan beach resort',
  'bolinao pangasinan',
  'river village',
  'river village resort',
  'river village resort bolinao',
  'resort in bolinao pangasinan',
  'bolinao pangasinan tourist spot',
  'patar white beach bolinao pangasinan',
  'fishing bolinao pangasinan',
];

Meta.defaultProps = {
  title: 'River Village Resort',
  keywords: keywords.toString(),
  description: 'Eat, Enjoy and Relax with Located at Bolinao, Pangasinan',
};

export default Meta;
