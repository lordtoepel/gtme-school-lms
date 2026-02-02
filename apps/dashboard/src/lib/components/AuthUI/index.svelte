<script lang="ts">
  import { page } from '$app/stores';
  import Avatar from '$lib/components/Avatar/index.svelte';
  import { VARIANTS } from '$lib/components/PrimaryButton/constants';
  import PrimaryButton from '$lib/components/PrimaryButton/index.svelte';
  import { t } from '$lib/utils/functions/translations';
  import { currentOrg } from '$lib/utils/store/org';
  import type { SupabaseClient } from '@supabase/supabase-js';
  import GoogleIconColored from '../Icons/GoogleIconColored.svelte';

  export let supabase: SupabaseClient;
  export let handleSubmit = () => {};
  export let isLogin = true;
  export let showOnlyContent = false;
  export let isLoading = false;
  export let showLogo = false;
  export let formRef;
  export let hideGoogleAuth = false;
  export let redirectPathname = '';

  async function signInWithGoogle() {
    if (isLoading) {
      return;
    }

    const params = new URLSearchParams(window.location.search);
    console.log({ params });
    // const redirectTo = `https://app.classroomio.com?forwardTo=${
    //   window.location.origin + params.get('redirect')
    // }`;
    const pathname = redirectPathname || params.get('redirect');
    const redirectTo = `${window.location.origin + pathname}`;

    console.log({ redirectTo });

    try {
      console.log('signInWithGoogle');
      const { error, data } = await supabase.auth.signInWithOAuth({
        provider: 'google',
        options: {
          redirectTo
        }
      });

      console.log('data', data);
      console.log('error', error);
    } catch (error) {
      console.log('catch error', error);
    }
  }
</script>

<div class="flex min-h-screen w-full items-center justify-center" style="background: linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 100%);">
  <div class="container border border-gray-800 bg-black rounded-xl">
    <div class="flex flex-col items-center p-2 lg:px-8 lg:py-3">
      {#if !showOnlyContent || showLogo}
        <div class="flex w-full flex-col items-center justify-center pt-2">
          <Avatar
            src={$currentOrg.avatar_url ? $currentOrg.avatar_url : '/logo-192.png'}
            name={$currentOrg.name ? $currentOrg.name : 'GTME School'}
            shape="rounded-md"
            width="w-10"
            height="max-h-10"
            className="mr-2"
          />
          <a href="/">
            <h4 class="mt-0 text-xl dark:text-white">
              {#if $currentOrg.name}
                {$currentOrg.name}
              {:else}
                <span style="color: #39ff14;">GTME</span> School
              {/if}
            </h4>
          </a>
        </div>
      {/if}
      <form
        bind:this={formRef}
        on:submit|preventDefault={handleSubmit}
        class="flex w-10/12 flex-col items-center"
      >
        <slot />
      </form>
      {#if !showOnlyContent && !hideGoogleAuth}
        <div class="mb-3 w-10/12">
          <p class="mb-5 text-sm text-white">{$t('login.signup_with')}:</p>
          <PrimaryButton
            variant={VARIANTS.OUTLINED}
            onClick={signInWithGoogle}
            isDisabled={isLoading}
            className="py-3 sm:w-full w-full"
          >
            <GoogleIconColored />
            <span class="ml-2">
              {isLogin ? $t('login.login_with_google') : $t('login.signup_with_google')}
            </span>
          </PrimaryButton>
        </div>
      {/if}
    </div>
    {#if !showOnlyContent}
      <div class="w-full border-t border-gray-800 p-6 text-center text-gray-400">
        {#if isLogin}
          {$t('login.not_registered_yet')}
          <a class="text-[#39ff14] hover:underline" href="/signup{$page.url.search}"
            >{$t('login.signup')}</a
          >
        {:else}
          {$t('login.already_have_account')}
          <a class="text-[#39ff14] hover:underline" href="/login{$page.url.search}"
            >{$t('login.login')}</a
          >
        {/if}
      </div>
    {/if}
  </div>
</div>

<style>
  .container {
    width: 450px;
  }
</style>
