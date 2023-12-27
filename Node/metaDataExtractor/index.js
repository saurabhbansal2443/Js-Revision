import { extractMetadata } from 'link-meta-extractor';

async function extractMeta() {
  const url = 'https://stackblogger.com';
  const metaInformation = await extractMetadata(url);
  console.log(metaInformation);
}

extractMeta();
