const env = import.meta.env;

const config = {
    appWrite: {
        url: String(env.VITE_APPWRITE_URL),
        projectId: String(env.VITE_APPWRITE_PROJECT_ID),
        bucketId: String(env.VITE_APPWRITE_BUCKET_ID),
        database: {
            id: String(env.VITE_APPWRITE_DATABASE_ID),
            tables: {
                articles: String(env.VITE_COLLECTIONS_ARTICLES),
            }
        }
    }
};

export default config;