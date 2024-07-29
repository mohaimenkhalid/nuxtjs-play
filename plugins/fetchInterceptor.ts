// plugins/fetchInterceptor.js
export default defineNuxtPlugin((nuxtApp) => {
    const tokenRef = useCookie('token');
        const originalFetch = $fetch;

        nuxtApp.provide('fetch', async (request, options = {}) => {
            const token = tokenRef.value;
            // Add token to headers
            if (token) {
                options.headers = {
                    ...options.headers,
                    'Authorization': `Bearer ${token}`,
                };
            }

            try {
                const response = await originalFetch(request, options);
                return response;
            } catch (error) {
                console.log("Erroring.......->")
                // Check if the error is due to an expired token
                if (error.response.status === 401) {
                    try {
                        const newTokenRef = useCookie('token'); //fetch new token here..
//TODO: Fetch new token here
                        options.headers['Authorization'] = `Bearer ${newTokenRef.value}`;
                        const retryResponse = await originalFetch(request, options);
                        return retryResponse;
                    } catch (refreshError) {
                        // Handle refresh token errors
                        console.error('Token refresh error:', refreshError);
                        throw refreshError;
                    }
                } else {
                    // Handle other errors
                    console.error('Fetch error:', error);
                    throw error;
                }
            }
        });
});
