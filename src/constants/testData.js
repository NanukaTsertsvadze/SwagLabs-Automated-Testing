const testData = {
    emptyUsernamePassword: { username: 'nano', password: 'test', errorMessage: 'Epic sadface: Username is required' },
    emptyPassword: { username: 'standard_user', password: 'nano', errorMessage: 'Epic sadface: Password is required' },
    validCredentials: { username: 'standard_user', password: 'secret_sauce', title: 'Swag Labs' }
};

module.exports = testData;
