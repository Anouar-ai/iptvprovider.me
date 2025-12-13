import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    const { urls } = await req.json();

    if (!urls || !Array.isArray(urls)) {
      return NextResponse.json(
        { error: 'Invalid request. "urls" must be an array of strings.' },
        { status: 400 }
      );
    }

    const host = 'www.iptvprovider.me';
    const key = process.env.INDEXNOW_KEY || '48bc54b9d0744723920c74900a89405d';
    const keyLocation = `https://${host}/${key}.txt`;

    const response = await fetch('https://api.indexnow.org/indexnow', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        host,
        key,
        keyLocation,
        urlList: urls,
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      return NextResponse.json(
        { error: `IndexNow API error: ${response.status} ${errorText}` },
        { status: response.status }
      );
    }

    return NextResponse.json({ message: 'URLs submitted to IndexNow successfully.' });
  } catch (error) {
    console.error('IndexNow submission error:', error);
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    );
  }
}
