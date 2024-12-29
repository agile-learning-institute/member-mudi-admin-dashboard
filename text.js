const textData = [
    {
        "heading4": "Super Cool Project",
        "sentence": "<p>Por outro lado, governos têm papel crucial na promoção de políticas públicas que incentivem ações sustentáveis.</p>",
        "threeIcons": "<div>\n <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"1em\" height=\"1em\" viewBox=\"0 0 24 24\">\n <path fill=\"currentColor\" d=\"m5.8 21l1.6-7L2 9.2l7.2-.6L12 2l2.8 6.6l7.2.6l-3.2 2.8H18c-.7 0-1.4.1-2.1.4l2.2-1.9l-4.4-.4l-1.7-4l-1.7 4l-4.4.4l3.3 2.9l-1 4.3l3.8-2.3l.5.3c-.2.5-.4 1.1-.4 1.6zM17 14v3h-3v2h3v3h2v-3h3v-2h-3v-3z\"/>\n </svg>\n <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"1em\" height=\"1em\" viewBox=\"0 0 24 24\">\n <g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\">\n <path d=\"M10 12a2 2 0 1 0 4 0a2 2 0 0 0-4 0\"/>\n <path d=\"M13.048 17.942A9 9 0 0 1 12 18q-5.4 0-9-6q3.6-6 9-6t9 6a18 18 0 0 1-1.362 1.975M22 22l-5-5m0 5l5-5\"/>\n </g>\n </svg>\n <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"1em\" height=\"1em\" viewBox=\"0 0 24 24\"><title>source-fork</title><path d=\"M6,2A3,3 0 0,1 9,5C9,6.28 8.19,7.38 7.06,7.81C7.15,8.27 7.39,8.83 8,9.63C9,10.92 11,12.83 12,14.17C13,12.83 15,10.92 16,9.63C16.61,8.83 16.85,8.27 16.94,7.81C15.81,7.38 15,6.28 15,5A3,3 0 0,1 18,2A3,3 0 0,1 21,5C21,6.32 20.14,7.45 18.95,7.85C18.87,8.37 18.64,9 18,9.83C17,11.17 15,13.08 14,14.38C13.39,15.17 13.15,15.73 13.06,16.19C14.19,16.62 15,17.72 15,19A3,3 0 0,1 12,22A3,3 0 0,1 9,19C9,17.72 9.81,16.62 10.94,16.19C10.85,15.73 10.61,15.17 10,14.38C9,13.08 7,11.17 6,9.83C5.36,9 5.13,8.37 5.05,7.85C3.86,7.45 3,6.32 3,5A3,3 0 0,1 6,2M6,4A1,1 0 0,0 5,5A1,1 0 0,0 6,6A1,1 0 0,0 7,5A1,1 0 0,0 6,4M18,4A1,1 0 0,0 17,5A1,1 0 0,0 18,6A1,1 0 0,0 19,5A1,1 0 0,0 18,4M12,18A1,1 0 0,0 11,19A1,1 0 0,0 12,20A1,1 0 0,0 13,19A1,1 0 0,0 12,18Z\" /></svg></div>"
    },
    {
        "heading4": "Less Cool Project",
        "sentence": "<p>Públicas que incentivem ações sustentáveis. Investimentos em transporte público, reflorestamento e educação ambiental são.</p>",
        "threeIcons": "<div>\n <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"1em\" height=\"1em\" viewBox=\"0 0 24 24\">\n <path fill=\"currentColor\" d=\"m5.8 21l1.6-7L2 9.2l7.2-.6L12 2l2.8 6.6l7.2.6l-3.2 2.8H18c-.7 0-1.4.1-2.1.4l2.2-1.9l-4.4-.4l-1.7-4l-1.7 4l-4.4.4l3.3 2.9l-1 4.3l3.8-2.3l.5.3c-.2.5-.4 1.1-.4 1.6zM17 14v3h-3v2h3v3h2v-3h3v-2h-3v-3z\"/>\n </svg>\n <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"1em\" height=\"1em\" viewBox=\"0 0 24 24\">\n <g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\">\n <path d=\"M10 12a2 2 0 1 0 4 0a2 2 0 0 0-4 0\"/>\n <path d=\"M13.048 17.942A9 9 0 0 1 12 18q-5.4 0-9-6q3.6-6 9-6t9 6a18 18 0 0 1-1.362 1.975M22 22l-5-5m0 5l5-5\"/>\n </g>\n </svg>\n <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"1em\" height=\"1em\" viewBox=\"0 0 24 24\"><title>source-fork</title><path d=\"M6,2A3,3 0 0,1 9,5C9,6.28 8.19,7.38 7.06,7.81C7.15,8.27 7.39,8.83 8,9.63C9,10.92 11,12.83 12,14.17C13,12.83 15,10.92 16,9.63C16.61,8.83 16.85,8.27 16.94,7.81C15.81,7.38 15,6.28 15,5A3,3 0 0,1 18,2A3,3 0 0,1 21,5C21,6.32 20.14,7.45 18.95,7.85C18.87,8.37 18.64,9 18,9.83C17,11.17 15,13.08 14,14.38C13.39,15.17 13.15,15.73 13.06,16.19C14.19,16.62 15,17.72 15,19A3,3 0 0,1 12,22A3,3 0 0,1 9,19C9,17.72 9.81,16.62 10.94,16.19C10.85,15.73 10.61,15.17 10,14.38C9,13.08 7,11.17 6,9.83C5.36,9 5.13,8.37 5.05,7.85C3.86,7.45 3,6.32 3,5A3,3 0 0,1 6,2M6,4A1,1 0 0,0 5,5A1,1 0 0,0 6,6A1,1 0 0,0 7,5A1,1 0 0,0 6,4M18,4A1,1 0 0,0 17,5A1,1 0 0,0 18,6A1,1 0 0,0 19,5A1,1 0 0,0 18,4M12,18A1,1 0 0,0 11,19A1,1 0 0,0 12,20A1,1 0 0,0 13,19A1,1 0 0,0 12,18Z\" /></svg></div>"
    },
    {
        "heading4": "Impossible App",
        "sentence": "<p>Promover a sustentabilidade não é apenas uma necessidade, mas uma responsabilidade coletiva. Ao agir hoje, asseguramos um planeta habitável para as próximas gerações</p>",
        "threeIcons": "<div>\n <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"1em\" height=\"1em\" viewBox=\"0 0 24 24\">\n <path fill=\"currentColor\" d=\"m5.8 21l1.6-7L2 9.2l7.2-.6L12 2l2.8 6.6l7.2.6l-3.2 2.8H18c-.7 0-1.4.1-2.1.4l2.2-1.9l-4.4-.4l-1.7-4l-1.7 4l-4.4.4l3.3 2.9l-1 4.3l3.8-2.3l.5.3c-.2.5-.4 1.1-.4 1.6zM17 14v3h-3v2h3v3h2v-3h3v-2h-3v-3z\"/>\n </svg>\n <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"1em\" height=\"1em\" viewBox=\"0 0 24 24\">\n <g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\">\n <path d=\"M10 12a2 2 0 1 0 4 0a2 2 0 0 0-4 0\"/>\n <path d=\"M13.048 17.942A9 9 0 0 1 12 18q-5.4 0-9-6q3.6-6 9-6t9 6a18 18 0 0 1-1.362 1.975M22 22l-5-5m0 5l5-5\"/>\n </g>\n </svg>\n <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"1em\" height=\"1em\" viewBox=\"0 0 24 24\"><title>source-fork</title><path d=\"M6,2A3,3 0 0,1 9,5C9,6.28 8.19,7.38 7.06,7.81C7.15,8.27 7.39,8.83 8,9.63C9,10.92 11,12.83 12,14.17C13,12.83 15,10.92 16,9.63C16.61,8.83 16.85,8.27 16.94,7.81C15.81,7.38 15,6.28 15,5A3,3 0 0,1 18,2A3,3 0 0,1 21,5C21,6.32 20.14,7.45 18.95,7.85C18.87,8.37 18.64,9 18,9.83C17,11.17 15,13.08 14,14.38C13.39,15.17 13.15,15.73 13.06,16.19C14.19,16.62 15,17.72 15,19A3,3 0 0,1 12,22A3,3 0 0,1 9,19C9,17.72 9.81,16.62 10.94,16.19C10.85,15.73 10.61,15.17 10,14.38C9,13.08 7,11.17 6,9.83C5.36,9 5.13,8.37 5.05,7.85C3.86,7.45 3,6.32 3,5A3,3 0 0,1 6,2M6,4A1,1 0 0,0 5,5A1,1 0 0,0 6,6A1,1 0 0,0 7,5A1,1 0 0,0 6,4M18,4A1,1 0 0,0 17,5A1,1 0 0,0 18,6A1,1 0 0,0 19,5A1,1 0 0,0 18,4M12,18A1,1 0 0,0 11,19A1,1 0 0,0 12,20A1,1 0 0,0 13,19A1,1 0 0,0 12,18Z\" /></svg></div>"
    },
    {
        "heading4": "Easy Peasy App",
        "sentence": "<p>A mudança, no entanto, começa com pequenas ações individuais. Cada pessoa pode contribuir, seja economizando água, reduzindo.</p>",
        "threeIcons": "<div>\n <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"1em\" height=\"1em\" viewBox=\"0 0 24 24\">\n <path fill=\"currentColor\" d=\"m5.8 21l1.6-7L2 9.2l7.2-.6L12 2l2.8 6.6l7.2.6l-3.2 2.8H18c-.7 0-1.4.1-2.1.4l2.2-1.9l-4.4-.4l-1.7-4l-1.7 4l-4.4.4l3.3 2.9l-1 4.3l3.8-2.3l.5.3c-.2.5-.4 1.1-.4 1.6zM17 14v3h-3v2h3v3h2v-3h3v-2h-3v-3z\"/>\n </svg>\n <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"1em\" height=\"1em\" viewBox=\"0 0 24 24\">\n <g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\">\n <path d=\"M10 12a2 2 0 1 0 4 0a2 2 0 0 0-4 0\"/>\n <path d=\"M13.048 17.942A9 9 0 0 1 12 18q-5.4 0-9-6q3.6-6 9-6t9 6a18 18 0 0 1-1.362 1.975M22 22l-5-5m0 5l5-5\"/>\n </g>\n </svg>\n <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"1em\" height=\"1em\" viewBox=\"0 0 24 24\"><title>source-fork</title><path d=\"M6,2A3,3 0 0,1 9,5C9,6.28 8.19,7.38 7.06,7.81C7.15,8.27 7.39,8.83 8,9.63C9,10.92 11,12.83 12,14.17C13,12.83 15,10.92 16,9.63C16.61,8.83 16.85,8.27 16.94,7.81C15.81,7.38 15,6.28 15,5A3,3 0 0,1 18,2A3,3 0 0,1 21,5C21,6.32 20.14,7.45 18.95,7.85C18.87,8.37 18.64,9 18,9.83C17,11.17 15,13.08 14,14.38C13.39,15.17 13.15,15.73 13.06,16.19C14.19,16.62 15,17.72 15,19A3,3 0 0,1 12,22A3,3 0 0,1 9,19C9,17.72 9.81,16.62 10.94,16.19C10.85,15.73 10.61,15.17 10,14.38C9,13.08 7,11.17 6,9.83C5.36,9 5.13,8.37 5.05,7.85C3.86,7.45 3,6.32 3,5A3,3 0 0,1 6,2M6,4A1,1 0 0,0 5,5A1,1 0 0,0 6,6A1,1 0 0,0 7,5A1,1 0 0,0 6,4M18,4A1,1 0 0,0 17,5A1,1 0 0,0 18,6A1,1 0 0,0 19,5A1,1 0 0,0 18,4M12,18A1,1 0 0,0 11,19A1,1 0 0,0 12,20A1,1 0 0,0 13,19A1,1 0 0,0 12,18Z\" /></svg></div>"
    },
    {
        "heading4": "Ad Blocker",
        "sentence": "<p>Investir em educação é investir no futuro. Um país com uma população educada é um país mais desenvolvido e próspero. A educação nos permite.</p>",
        "threeIcons": "<div>\n <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"1em\" height=\"1em\" viewBox=\"0 0 24 24\">\n <path fill=\"currentColor\" d=\"m5.8 21l1.6-7L2 9.2l7.2-.6L12 2l2.8 6.6l7.2.6l-3.2 2.8H18c-.7 0-1.4.1-2.1.4l2.2-1.9l-4.4-.4l-1.7-4l-1.7 4l-4.4.4l3.3 2.9l-1 4.3l3.8-2.3l.5.3c-.2.5-.4 1.1-.4 1.6zM17 14v3h-3v2h3v3h2v-3h3v-2h-3v-3z\"/>\n </svg>\n <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"1em\" height=\"1em\" viewBox=\"0 0 24 24\">\n <g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\">\n <path d=\"M10 12a2 2 0 1 0 4 0a2 2 0 0 0-4 0\"/>\n <path d=\"M13.048 17.942A9 9 0 0 1 12 18q-5.4 0-9-6q3.6-6 9-6t9 6a18 18 0 0 1-1.362 1.975M22 22l-5-5m0 5l5-5\"/>\n </g>\n </svg>\n <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"1em\" height=\"1em\" viewBox=\"0 0 24 24\"><title>source-fork</title><path d=\"M6,2A3,3 0 0,1 9,5C9,6.28 8.19,7.38 7.06,7.81C7.15,8.27 7.39,8.83 8,9.63C9,10.92 11,12.83 12,14.17C13,12.83 15,10.92 16,9.63C16.61,8.83 16.85,8.27 16.94,7.81C15.81,7.38 15,6.28 15,5A3,3 0 0,1 18,2A3,3 0 0,1 21,5C21,6.32 20.14,7.45 18.95,7.85C18.87,8.37 18.64,9 18,9.83C17,11.17 15,13.08 14,14.38C13.39,15.17 13.15,15.73 13.06,16.19C14.19,16.62 15,17.72 15,19A3,3 0 0,1 12,22A3,3 0 0,1 9,19C9,17.72 9.81,16.62 10.94,16.19C10.85,15.73 10.61,15.17 10,14.38C9,13.08 7,11.17 6,9.83C5.36,9 5.13,8.37 5.05,7.85C3.86,7.45 3,6.32 3,5A3,3 0 0,1 6,2M6,4A1,1 0 0,0 5,5A1,1 0 0,0 6,6A1,1 0 0,0 7,5A1,1 0 0,0 6,4M18,4A1,1 0 0,0 17,5A1,1 0 0,0 18,6A1,1 0 0,0 19,5A1,1 0 0,0 18,4M12,18A1,1 0 0,0 11,19A1,1 0 0,0 12,20A1,1 0 0,0 13,19A1,1 0 0,0 12,18Z\" /></svg></div>"
    },
    {
        "heading4": "Money Maker",
        "sentence": "<p>A educação é a chave para um futuro melhor. Ela nos capacita a pensar criticamente, a resolver problemas e a tomar decisões informadas.</p>",
        "threeIcons": "<div>\n <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"1em\" height=\"1em\" viewBox=\"0 0 24 24\">\n <path fill=\"currentColor\" d=\"m5.8 21l1.6-7L2 9.2l7.2-.6L12 2l2.8 6.6l7.2.6l-3.2 2.8H18c-.7 0-1.4.1-2.1.4l2.2-1.9l-4.4-.4l-1.7-4l-1.7 4l-4.4.4l3.3 2.9l-1 4.3l3.8-2.3l.5.3c-.2.5-.4 1.1-.4 1.6zM17 14v3h-3v2h3v3h2v-3h3v-2h-3v-3z\"/>\n </svg>\n <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"1em\" height=\"1em\" viewBox=\"0 0 24 24\">\n <g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\">\n <path d=\"M10 12a2 2 0 1 0 4 0a2 2 0 0 0-4 0\"/>\n <path d=\"M13.048 17.942A9 9 0 0 1 12 18q-5.4 0-9-6q3.6-6 9-6t9 6a18 18 0 0 1-1.362 1.975M22 22l-5-5m0 5l5-5\"/>\n </g>\n </svg>\n <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"1em\" height=\"1em\" viewBox=\"0 0 24 24\"><title>source-fork</title><path d=\"M6,2A3,3 0 0,1 9,5C9,6.28 8.19,7.38 7.06,7.81C7.15,8.27 7.39,8.83 8,9.63C9,10.92 11,12.83 12,14.17C13,12.83 15,10.92 16,9.63C16.61,8.83 16.85,8.27 16.94,7.81C15.81,7.38 15,6.28 15,5A3,3 0 0,1 18,2A3,3 0 0,1 21,5C21,6.32 20.14,7.45 18.95,7.85C18.87,8.37 18.64,9 18,9.83C17,11.17 15,13.08 14,14.38C13.39,15.17 13.15,15.73 13.06,16.19C14.19,16.62 15,17.72 15,19A3,3 0 0,1 12,22A3,3 0 0,1 9,19C9,17.72 9.81,16.62 10.94,16.19C10.85,15.73 10.61,15.17 10,14.38C9,13.08 7,11.17 6,9.83C5.36,9 5.13,8.37 5.05,7.85C3.86,7.45 3,6.32 3,5A3,3 0 0,1 6,2M6,4A1,1 0 0,0 5,5A1,1 0 0,0 6,6A1,1 0 0,0 7,5A1,1 0 0,0 6,4M18,4A1,1 0 0,0 17,5A1,1 0 0,0 18,6A1,1 0 0,0 19,5A1,1 0 0,0 18,4M12,18A1,1 0 0,0 11,19A1,1 0 0,0 12,20A1,1 0 0,0 13,19A1,1 0 0,0 12,18Z\" /></svg></div>"
    }
];
