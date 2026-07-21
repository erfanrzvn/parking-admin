import { Amplify } from 'aws-amplify';

// Inline Amplify configuration - loaded synchronously
const amplifyConfig = {
  Auth: {
    Cognito: {
      userPoolId: 'ca-central-1_UecP7kd1N',
      userPoolClientId: '7ckai37tgmnlqeeq5i4ujvkm6n',
      identityPoolId: 'ca-central-1:a47d9621-3bf4-48ff-8560-f350e18bbb99',
      loginWith: {
        email: true,
      },
      signUpVerificationMethod: 'code',
      userAttributes: {
        email: {
          required: true,
        },
      },
      allowGuestAccess: true,
      passwordFormat: {
        minLength: 8,
        requireLowercase: true,
        requireUppercase: true,
        requireNumbers: true,
        requireSpecialCharacters: true,
      },
    },
  },
  API: {
    GraphQL: {
      endpoint: 'https://dp457mgtrvdkfod6o6mmhpoy74.appsync-api.ca-central-1.amazonaws.com/graphql',
      region: 'ca-central-1',
      defaultAuthMode: 'userPool' as const,
      apiKey: 'da2-jjcraxop5bgjvdtm2k4iupt64e',
    },
  },
};

Amplify.configure(amplifyConfig);

console.log('✅ Amplify configured successfully (synchronous)');

export default amplifyConfig;
