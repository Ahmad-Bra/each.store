export default defineNuxtRouteMiddleware(async () => {
  const user = useSupabaseUser();
  watch(() => {
    if (!user.value) {
      return navigateTo("/login");
    }
  });
});
