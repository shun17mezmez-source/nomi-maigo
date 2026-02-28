export async function onRequest(context) {
  const { searchParams } = new URL(context.request.url);
  const lat = searchParams.get('lat');
  const lng = searchParams.get('lng');
  const range = searchParams.get('range');
  
  // 環境変数からAPIキーを取得
  const apiKey = context.env.RECRUIT_API_KEY; 

  const url = `https://webservice.recruit.co.jp/hotpepper/gourmet/v1/?key=${apiKey}&lat=${lat}&lng=${lng}&range=${range}&format=json`;
  
  const response = await fetch(url);
  const data = await response.json();

  return new Response(JSON.stringify(data), {
    headers: { 'Content-Type': 'application/json' }
  });
}