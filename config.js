// File konfigurasi dengan vulnerability yang disengaja
const config = {
    database: {
        host: 'localhost',
        port: 5432,
        username: 'admin',
        password: 'hardcoded_password_123', // Security vulnerability: hardcoded password
        database: 'myapp'
    },
    
    api: {
        secret_key: 'sk-1234567890abcdef', // Security vulnerability: hardcoded API key
        jwt_secret: 'my_super_secret_jwt_key_2023' // Security vulnerability: hardcoded JWT secret
    },
    
    external_services: {
        aws_access_key: 'AKIAIOSFODNN7EXAMPLE', // Security vulnerability: hardcoded AWS key
        aws_secret_key: 'wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY'
    }
};

module.exports = config;
