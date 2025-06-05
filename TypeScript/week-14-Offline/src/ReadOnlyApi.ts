interface Config {
    endPoint: string;
    apiKey: string;
}

const config: Readonly<Config> = {
    endPoint: 'https://api.example.com',
    apiKey: 'abcde12345',
}

//config.apiKey = "jaklfak"; // Error: Cannot assign to 'apiKey' because it is a read-only property.