
export type HowToStep = {
    title: string;
    description: string;
};

export type HowToContent = {
    id: string;
    title: string;
    description: string;
    keywords: string[];
    steps: HowToStep[];
};

export const howToArticles: HowToContent[] = [
    {
        id: 'iphone',
        title: 'How to Install and Use IPTV on iPhone',
        description: 'A complete guide to setting up our IPTV service on your iPhone. Start streaming your favorite channels on the go with our simple step-by-step instructions.',
        keywords: ['IPTV on iPhone', 'iOS IPTV', 'iPhone IPTV setup', 'streaming on iPhone'],
        steps: [
            {
                title: 'Step 1: Get an IPTV Subscription',
                description: "First, you need an active IPTV subscription from us. If you don't have one, visit our subscription page and choose a plan that suits you. You will receive your M3U playlist link via email."
            },
            {
                title: 'Step 2: Download an IPTV Player from the App Store',
                description: 'Open the App Store on your iPhone and search for an IPTV player. We recommend apps like "GSE Smart IPTV" or "IPTV Smarters Pro". Download and install your preferred app.'
            },
            {
                title: 'Step 3: Open the IPTV App and Add Playlist',
                description: 'Launch the IPTV player app. Look for an option to "Add Playlist" or a "+" icon. You will generally be given the option to add a playlist from a URL.'
            },
            {
                title: 'Step 4: Enter Your M3U Playlist URL',
                description: 'Select the option to add a playlist from a URL. Give your playlist a name (e.g., "My IPTV") and paste the M3U link that you received from us in your email into the URL field. '
            },
            {
                title: 'Step 5: Load and Watch Channels',
                description: 'Save the playlist. The app will begin to load all the channels, movies, and series included in your subscription. Once loaded, you can browse through the categories and tap on any channel to start watching.'
            }
        ]
    }
];
