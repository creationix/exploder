import { type VercelConfig, routes } from '@vercel/config/v1';

const config: VercelConfig = {
    headers: [
        routes.header('/(.*)', [
            { key: 'x-awesome', value: 'true' },
        ])
    ],
}