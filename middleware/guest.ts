// middleware/auth.ts
export default defineNuxtRouteMiddleware((to, from) => {
    const token = useCookie('token');
    if (token.value) {
        return navigateTo('/dashboard')
    }
    // Redirect to the login page if the user is not authenticated
    // if (!$auth || !$auth.user) {
    //     return navigateTo('/login');
    // }
    //
    // // Optionally check user roles or permissions
    // if (to.meta.requiredRole && (!$auth.user || !$auth.user.roles.includes(to.meta.requiredRole))) {
    //     return navigateTo('/unauthorized');
    // }
});
