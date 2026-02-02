<script>
  import { onMount } from 'svelte';
  import { goto } from '$app/navigation';
  import FlowStreamReferenceIcon from 'carbon-icons-svelte/lib/FlowStreamReference.svelte';
  import ChartClusterBarIcon from 'carbon-icons-svelte/lib/ChartClusterBar.svelte';
  import MachineLearningModelIcon from 'carbon-icons-svelte/lib/MachineLearningModel.svelte';
  import PrimaryButton from '$lib/components/PrimaryButton/index.svelte';

  const animate = 'transition delay-75 duration-300 ease-in-out';
  const areas = [
    {
      title: 'Workflow Blueprints',
      description:
        'Production-ready automation recipes you can deploy today. No fluff, just workflows that work.'
    },
    {
      title: 'AI Agent Playbooks',
      description:
        'Build sales agents that qualify, nurture, and close. The prompts and architectures that actually convert.'
    },
    {
      title: 'Enrichment Stacks',
      description:
        'Data enrichment that doesn\'t suck. Waterfall strategies, provider comparisons, and cost optimization.'
    }
  ];

  onMount(() => {
    console.log('Welcome to GTME School');
  });
</script>

<svelte:head>
  <title>GTME School - Master GTM Engineering</title>
</svelte:head>

<div class="min-h-screen w-screen flex items-center justify-center flex-col p-6 font-sans" style="background: linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 100%);">
  <div class="text-center mb-8">
    <h1 class="text-5xl md:text-6xl font-bold mb-4">
      <span style="color: #39ff14;">GTME</span> <span class="text-white">School</span>
    </h1>
    <p class="text-gray-400 text-xl max-w-xl mx-auto">
      The elite training ground for GTM engineers 🚀
    </p>
  </div>

  <div class="flex gap-4 mb-12">
    <a href="/login" class="px-8 py-3 font-semibold rounded-lg text-black" style="background: #39ff14;">
      Login
    </a>
    <a href="/signup" class="px-8 py-3 font-semibold rounded-lg text-white border border-gray-600 hover:border-gray-400 transition-colors">
      Sign Up
    </a>
  </div>

  <div class="flex flex-col md:flex-row gap-6 max-w-5xl">
    {#each areas as area, index}
      <div
        class="max-w-[350px] p-6 rounded-xl border border-gray-800 hover:border-green-500/50 {animate}"
        style="background: rgba(255,255,255,0.02);"
      >
        <div class="mb-3" style="color: #39ff14;">
          {#if index === 0}
            <FlowStreamReferenceIcon size={32} />
          {:else if index === 1}
            <ChartClusterBarIcon size={32} />
          {:else if index === 2}
            <MachineLearningModelIcon size={32} />
          {/if}
        </div>
        <h3 class="text-white text-xl font-semibold mb-2">
          {area.title}
        </h3>
        <p class="text-gray-400">{area.description}</p>
      </div>
    {/each}
  </div>

  <p class="mt-12 text-gray-500 text-sm">
    Powered by <a href="https://leanscale.team" class="hover:text-white transition-colors" style="color: #39ff14;">LeanScale</a>
  </p>
</div>
