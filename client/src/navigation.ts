interface Navigation {
    index: string

    login: string
    onboarding: string

    profile: string
    
    message: string
    messages: string

    all: string
}

export const navigation: Navigation = {
    index: '/',

    login: '/login',
    onboarding: '/onboarding',

    profile: '/profile',
    message: '/messages',
    messages: '/messages/:userId',

    all: '/*'
};
