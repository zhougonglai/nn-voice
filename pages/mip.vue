<template lang="pug">
#mip
	TopSection
	IntroSection
</template>
<script>
import TopSection from '@/components/mip/TopSection';
import IntroSection from '@/components/mip/IntroSection';

export default {
	layout: 'mip',
	name: 'activeContainer',
	components: {
		TopSection,
		IntroSection,
	},
};
</script>
